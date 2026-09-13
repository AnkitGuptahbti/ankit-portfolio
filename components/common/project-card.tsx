'use client'
import { Github, Globe } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import A from '../ui/A'
import { Card, CardBody, CardFooter, CardHeader } from '../ui/Card'

interface TechStackItem {
  name: string
  icon: React.ReactNode
  link: string
}

const ProjectCard = ({
  title,
  description,
  image,
  placeholder,
  techStack,
  link,
  github,
  idx,
}: {
  title: string
  description: string
  image?: string
  placeholder?: { flow: string[] }
  techStack: TechStackItem[]
  link?: string
  github?: string
  idx: number
}) => {
  return (
    <Card className='group'>
      <CardHeader idx={idx} className='w-full'>
        {image ? (
          <Image src={image} alt={title} width={1000} height={1000} className='w-full h-auto rounded-[4px] before ' />
        ) : (
          <div className='w-full min-h-40 rounded-[4px] bg-neutral-100 dark:bg-neutral-900 border border-dashed border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center gap-3 px-4 py-8'>
            <p className='text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider'>{title}</p>
            {placeholder?.flow && (
              <div className='flex flex-wrap items-center justify-center gap-1.5'>
                {placeholder.flow.map((step, i) => (
                  <span key={step} className='flex items-center gap-1.5'>
                    <span className='text-[11px] px-2 py-1 rounded-md bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'>
                      {step}
                    </span>
                    {i < placeholder.flow.length - 1 && (
                      <span className='text-neutral-400 text-xs'>→</span>
                    )}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </CardHeader>
      <CardBody className='mt-4 flex flex-col items-start justify-start gap-1'>
        <motion.h3 initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.1 * idx }}
          viewport={{ once: true }}
          className='text-lg font-bold'>{title}</motion.h3>
        <motion.p initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.1 * idx }}
          viewport={{ once: true }}
          className='text-sm text-neutral-500 dark:text-neutral-400'>{description}</motion.p>
      </CardBody>
      <CardFooter className='mt-4 flex items-center w-full justify-between gap-2'>
        <div className='flex flex-wrap gap-2'>
          {techStack.map((tech) => (
            <TechBadge key={tech.name} {...tech as TechStackItem} />
          ))}
        </div>
        <div className='flex items-center gap-2'>
          {link && (
            <A href={link} target="_blank" rel="noopener noreferrer" idx={0} tooltip='Website' aria-label='website'>
              <Globe className='size-4 text-neutral-500 dark:text-neutral-400' />
            </A>
          )}
          {github && (
            <A href={github} target="_blank" rel="noopener noreferrer" idx={1} tooltip='GitHub' aria-label='github'>
              <Github className='size-4 text-neutral-500 dark:text-neutral-400' />
            </A>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard



const TechBadge = ({ name, icon, link }: { name: string, icon: React.ReactNode, link: string }) => {
  const measureRef = useRef<HTMLSpanElement>(null)
  const [width, setWidth] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (measureRef.current) {
      const measuredWidth = measureRef.current.offsetWidth
      setWidth(measuredWidth)
    }
  }, [name])

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ zIndex: 10 }}
      className="flex items-center justify-start rounded-full border border-neutral-200 bg-neutral-50 p-1 text-xs text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 -mr-3 relative cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
    >
      <motion.span
        style={{ paddingRight: isHovered ? '4px' : '0px' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='p-px'
      >
        {icon}
      </motion.span>
      <span ref={measureRef} className="absolute opacity-0 pointer-events-none whitespace-nowrap text-xs">
        {name}
      </span>
      <motion.span
        animate={{ width: isHovered ? width : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden whitespace-nowrap text-neutral-500 dark:text-neutral-200"
      >
        {name}
      </motion.span>
    </motion.a>
  )
}
