'use client'
import Container from '@/components/ui/Container'
import { motion } from 'motion/react'

const ContactHero = () => {
    return (
        <Container className='flex flex-col py-12 pt-16 border-x border-outline relative items-start justify-start'>
            <motion.h1
                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.1 }}
                viewport={{ once: true }}
                className='text-2xl md:text-4xl font-bold'>
                Let&apos;s Connect
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.3 }}
                viewport={{ once: true }}
                className='text-sm md:text-lg text-neutral-500 dark:text-neutral-400 mt-2'>
                Building reliable systems. Open to interesting backend engineering opportunities.
            </motion.p>
        </Container>
    )
}

export default ContactHero
