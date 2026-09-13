import React from 'react'
import Container from '../../ui/Container'
import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react'
import A from '@/components/ui/A'

const Footer = () => { 
    const socialLinks = [
        {
            href: 'https://github.com/AnkitGuptahbti',
            tooltip: 'GitHub',
            icon: <GithubIcon className='size-5 ' />
        },
        {
            href: 'https://www.linkedin.com/in/ankitcodex/',
            tooltip: 'LinkedIn',
            icon: <LinkedinIcon className='size-5 ' />
     
        },
        {
            href: 'mailto:ankitgupta92368892@gmail.com',
            tooltip: 'Mail',
            icon: <Mail className='size-5 ' />
        },
    ]
    return (
        <footer className='w-full border-t border-outline'>
            <Container className='flex items-center justify-between border-x border-outline py-4'>
                <p className='text-sm text-neutral-500 dark:text-neutral-400'>
                    &copy; {new Date().getFullYear()} Ankit Gupta. All rights reserved.
                </p>
                <div className='flex items-center gap-x-4 *:text-neutral-700 dark:*:text-neutral-400'>
                    {socialLinks.map((link, idx) => (
                        <A key={idx} href={link.href} tooltip={link.tooltip} idx={idx} aria-label={link.tooltip}>
                            {link.icon}
                        </A>
                    ))}
                </div>
            </Container>
        </footer>
    )
}

export default Footer
