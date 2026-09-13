'use client'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import React from 'react'

const SkillButton = ({ children, className, href, target, idx, ...props }: { children: React.ReactNode, className?: string, href: string, target?: string, idx: number } & React.ComponentProps<'a'>) => {
  return (
    <motion.a initial={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      viewport={{ once: true }}
      href={href} target={target} className={cn("inline-flex items-center text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white", className)}>
      {children}
      
    </motion.a>
  )
}

export default SkillButton


