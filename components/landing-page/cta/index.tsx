'use client'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { motion } from 'motion/react'
import React from 'react'

const CTA = () => {
    return (
        <Container className='flex flex-col items-center justify-center py-12 gap-10 border-x border-outline relative '>
            <div className='flex items-center justify-center gap-4 flex-col border border-outline rounded-lg p-4 w-fit'>
                <motion.p
                    initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.3 }}
                    viewport={{ once: true }}
                    className='text-center text-sm md:text-base text-neutral-500 dark:text-neutral-400'>&quot;Building reliable systems. Open to interesting backend engineering opportunities.&quot;</motion.p>
                <Button tag='link' href='/contact' variant='primary' size='sm' className='rounded-md font-medium relative z-10'>
                    Get in touch
                    <span className="absolute -bottom-px left-3  h-px w-[calc(100%-1.5rem)] bg-linear-to-r from-neutral-400/0 via-amber-400/90 to-neutral-400/0 transition-opacity duration-500 group-hover:opacity-60"></span>
                </Button>

            </div>
        </Container>
    )
}

export default CTA
