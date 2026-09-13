import { cn } from '@/lib/utils'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import A from '../../ui/A'
import SkillButton from '../../ui/SkillButton'
import { ExperienceData } from './experience-data'

const ExperienceCard = ({ Logo, company, position, startDate, endDate, location, socialLinks, points, techStack }: ExperienceData) => {
  const isCurrent = endDate === 'Present'
  const [isOpen, setIsOpen] = useState(isCurrent)
  return (
    <motion.div
      layout
      className='w-full  '>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 w-full'>
        <div className='flex items-center justify-start gap-2'>
          <motion.div
            initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className='flex items-center justify-center border border-border border-dashed rounded-sm p-px  overflow-hidden relative'>
            {Logo}

          </motion.div>
          <div>
            <div className='flex flex-row items-center justify-start gap-3'>
              <motion.h3

                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                viewport={{ once: true }}
                className='text-base font-semibold text-left whitespace-nowrap'>{company}</motion.h3>
              <div className='flex items-center justify-start gap-1.5'>

                {socialLinks.map((social, idx) => (
                  <A key={idx} href={social.link} target='_blank' rel='noopener noreferrer' idx={idx} tooltip={social.name} aria-label={social.name}>
                    {social.icon}
                  </A>
                ))}
              </div>
              {
                !isCurrent ? (
                  <motion.button
                    title={isOpen ? 'Collapse experience' : 'Expand experience'}
                    aria-label={isOpen ? 'Collapse experience' : 'Expand experience'}
                    initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    viewport={{ once: true }}
                    className='flex items-center gap-2 rounded-sm group relative bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800  p-1' onClick={() => setIsOpen(!isOpen)}>
                    <ChevronRight className={cn('size-4 transition-all duration-300', isOpen ? 'rotate-90' : '')} />
                  </motion.button>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    viewport={{ once: true }}
                    className='text-sm relative bg-green-400/10 p-1 rounded-md gap-1 flex items-center justify-start overflow-hidden'>
                    <span className='w-1.5 h-1.5  rounded-full bg-green-500 inline-block shrink-0' />
                    <span className='text-xs text-green-500'>Working</span>
                    <motion.span
                      initial={{ left: '-20%' }}
                      animate={{ left: '120%' }}
                      transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', repeatDelay: 5 }}
                      className='absolute  h-full w-1 left-0 top-0 bg-neutral-900 dark:bg-neutral-100 rotate-12 blur-sm  ' />
                  </motion.div>
                )
              }


            </div>
            <motion.p
              initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              viewport={{ once: true }}
              className='text-xs text-neutral-500 dark:text-neutral-400'>{position}</motion.p>
          </div>
        </div>
        <div className='flex flex-col md:items-end md:justify-start '>
          <motion.p
            initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className='text-sm text-neutral-500 dark:text-neutral-400'>{startDate} - {endDate}</motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className='text-xs text-neutral-500 dark:text-neutral-400'>{location}</motion.p>
        </div>
      </div>
      <AnimatePresence initial={false} >

        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1]
            }}
            className='w-full overflow-hidden  '>
            <div className='w-full overflow-hidden pt-4'>


              {/* <motion.h4
                  layout
                  initial={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.1 }}
                  viewport={{ once: true }}
                  className='text-sm font-medium'>Technologies & Tools
                  </motion.h4> */}
              <motion.div
                layout
                className='flex flex-wrap gap-2 mt-2'>
                {techStack.map((tech, idx) => (
                  <SkillButton key={idx} href={tech.link} target='_blank' className='gap-2  text-xs' idx={idx} aria-label={tech.name}>
                    {tech.icon}
                    {tech.name}
                  </SkillButton>
                ))}
              </motion.div>
              <motion.ul layout
                className='mt-4 flex flex-col gap-y-2 list-outside list-disc   text-sm text-neutral-700 dark:text-neutral-400'>
                {points.map((point, idx) => (
                  <motion.li key={idx}
                    className='  tracking-wide text-sm list-inside text-neutral-800 dark:text-neutral-300'
                    initial={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    // exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                    transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.3 * idx }}
                    viewport={{ once: true }}
                  >{point}</motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default ExperienceCard
