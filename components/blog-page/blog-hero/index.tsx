'use client'
import Container from '@/components/ui/Container'
import Heading from '@/components/ui/Heading'
import { motion } from 'motion/react'
import React from 'react'

const BlogHero = () => {
  return (
    <Container className='flex flex-col py-12 pt-16 border-x border-outline relative items-start justify-start'>
          <motion.h1
              initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.1 }}
              viewport={{ once: true }}
              className='text-2xl md:text-4xl font-bold '>
              I Share My Learnings Here With You
          </motion.h1>
          <motion.p
              initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.3 }}
              viewport={{ once: true }}
              className='text-sm md:text-lg text-neutral-500 dark:text-neutral-400 mt-2'>
              Insights, Tutorials, and In-Depth Guides on Backend, DevOps, and Modern Programming for Developers
          </motion.p>
    </Container>
  )
}

export default BlogHero
