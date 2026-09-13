'use client'
import React from 'react'
import Heading from '../ui/Heading'
import { motion } from 'motion/react'

const BlogHeading = () => {
    return (
        <Heading tag='h2' className='relative' >

            {`What I Learn Sharing`.split(' ').map((word, idx, arr) => (
                <motion.span key={idx}
                    className='relative inline-block '
                    initial={{ y: 10, opacity: 0, filter: 'blur(10px)' }}
                    whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.3, ease: 'easeInOut', delay: idx * 0.1 }}
                    viewport={{ once: true }}
                >
                    {word}{idx < arr.length - 1 ? '\u00A0' : ''}
                </motion.span>
            ))}

        </Heading>
    )
}

export default BlogHeading
