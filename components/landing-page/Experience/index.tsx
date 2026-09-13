'use client'
import { motion } from 'motion/react'
import Container from '../../ui/Container'
import Heading from '../../ui/Heading'
import ExperienceCard from './experience-card'
import { experienceData } from './experience-data'

const Experience = () => {
    return (
        <Container className='flex flex-col py-12 gap-10 border-x border-outline relative'>

            <div className='absolute rounded-full -top-1 -left-1 w-2 h-2 z-10 bg-amber-400 [box-shadow:0_0_16px_1px_var(--color-amber-400)]' />
            <div className='absolute rounded-full -bottom-1 -left-1 w-2 h-2 z-10 bg-amber-400 [box-shadow:0_0_16px_1px_var(--color-amber-400)]' />
            <div className='absolute rounded-full -top-1 -right-1 w-2 h-2 z-10 bg-amber-400 [box-shadow:0_0_16px_1px_var(--color-amber-400)]' />
            <div className='absolute rounded-full -bottom-1 -right-1 w-2 h-2 z-10 bg-amber-400 [box-shadow:0_0_16px_1px_var(--color-amber-400)]' />

            <Heading tag='h2' className='relative' >

                {`Where I've Worked`.split(' ').map((word, idx, arr) => (
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

            <div className='flex flex-col gap-y-8 items-start justify-start '>
                {experienceData.map((experience, idx) => (
                    <ExperienceCard key={idx} {...experience} />
                ))}
            </div>
        </Container>
    )
}

export default Experience
