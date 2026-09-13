'use client'
import { FileIcon, GithubIcon, LinkedinIcon, Mail, Code2, Braces } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'
import A from '../../ui/A'
import Button from '../../ui/Button'
import Container from '../../ui/Container'

const Intro = () => {

    const socialLinks = [
        {
            href: 'https://github.com/AnkitGuptahbti',
            tooltip: 'GitHub',
            icon: <GithubIcon className='size-5  transition-all duration-300' />
        },
        {
            href: 'https://www.linkedin.com/in/ankitcodex/',
            tooltip: 'LinkedIn',
            icon: <LinkedinIcon className='size-5  transition-all duration-300' />
        },
        {
            href: 'https://leetcode.com/u/ankitcodex/',
            tooltip: 'LeetCode',
            icon: <Code2 className='size-5 transition-all duration-300' />
        },
        {
            href: 'https://www.geeksforgeeks.org/user/ankitcodex/',
            tooltip: 'GeeksforGeeks',
            icon: <Braces className='size-5 transition-all duration-300' />
        },
        {
            href: 'mailto:ankitgupta92368892@gmail.com',
            tooltip: 'Mail',
            icon: <Mail className='size-5 transition-all duration-300' />
        },
    ]

    const [animationKey, setAnimationKey] = useState(0)

    return (
        <Container className='flex flex-col pb-10 pt-26 h-full border-x border-outline relative '>
            <motion.div
                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='w-fit relative flex items-center justify-center'>
                <div className='w-28 h-28 rounded-full overflow-hidden relative bg-[#FFD60A]' onMouseEnter={() => setAnimationKey(prev => prev + 1)}>

                    <Image
                        src='/images/profile/newimage.png'
                        alt='Ankit Gupta'
                        width={224}
                        height={224}
                        className='w-28 h-28 rounded-full object-cover object-[50%_8%] scale-[2.15] origin-center transition-all duration-300'
                    />
                    <motion.span
                        key={animationKey}
                        initial={{ left: '-20%' }}
                        animate={{ left: '120%' }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className='absolute  h-full w-2 left-0 top-0 bg-neutral-900 dark:bg-neutral-100 rotate-12 blur-sm  ' />
                </div>
                <div className='group relative bottom-1.5 right-1.5  self-end   '>
                    <div className=' p-1 cursor-pointer  rounded-full border group border-neutral-200 dark:border-neutral-700 z-10 flex items-center justify-center '>
                        <div className='w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-neutral-50'></div>
                    </div>
                    <div className="absolute -top-3 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 md:left-full md:ml-3 sm:-left-64 sm:ml-0">
                        <div className="bg-neutral-200 dark:bg-neutral-800 border border-border  rounded-lg shadow-lg p-3 min-w-[200px] max-w-[80vw] md:max-w-none">
                            <div className="flex flex-col items-start gap-2">
                                <div className="text-xs font-medium text-neutral-900 dark:text-neutral-50 truncate flex items-center gap-1">
                                    <div className="w-2 h-2 bg-neutral-900 dark:bg-neutral-50 rounded-full" />
                                    Gurugram, India</div>
                                <p className='text-xs'>Backend • Distributed Systems • FinTech</p>
                            </div>
                        </div>
                        <div className="absolute top-4 -left-1 w-2 h-2 bg-neutral-200 dark:bg-neutral-800 border-l border-b border-border rotate-45 md:-left-1 sm:left-[248px]"></div>
                    </div>
                </div>
            </motion.div>
            <motion.h1
                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.1 }}
                viewport={{ once: true }}
                className='text-2xl md:text-4xl font-bold mt-10'>
                Hi, I&apos;m Ankit  - <span className="moving-gradient-text">
                    Software Engineer
                </span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.3 }}
                viewport={{ once: true }}
                className='text-sm md:text-lg text-neutral-700 dark:text-neutral-300 mt-2'>
                I&apos;m a full stack engineer who builds reliable backends, clean UIs, and scalable FinTech workflows.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.4 }}
                viewport={{ once: true }}
                className='flex items-center gap-4 mt-6'>
                <Button href='/contact' tag='link' variant='primary' size='sm' className='flex items-center gap-2 rounded-lg group relative'>
                    Get in touch
                </Button>
                <Button
                    onClick={() => {
                        const link = document.createElement('a')
                        link.href = '/files/Ankit_Gupta_Resume.pdf'
                        link.download = 'Ankit_Gupta_Resume.pdf'
                        document.body.appendChild(link)
                        link.click()
                        document.body.removeChild(link)
                    }}
                    variant='primary' size='sm' className='flex  items-center gap-2 rounded-lg group relative'>
                    <FileIcon className='size-4  transition-all duration-300' />
                    Download CV
                    <span className="absolute -bottom-px left-3  h-px w-[calc(100%-1.5rem)] bg-linear-to-r from-neutral-400/0 via-amber-400/90 to-neutral-400/0 transition-opacity duration-500 group-hover:opacity-60"></span>
                </Button>
            </motion.div>
            <div aria-label='Social Links' className='relative mt-10 flex items-center gap-x-4 *:text-neutral-700 dark:*:text-neutral-400 pl-2 '>
                {socialLinks.map((link, idx) => (
                    <A key={idx} idx={idx} href={link.href} target='_blank' tooltip={link.tooltip} aria-label={link.tooltip}>
                        {link.icon}
                    </A>
                ))}
            </div>
        </Container>
    )
}

export default Intro
