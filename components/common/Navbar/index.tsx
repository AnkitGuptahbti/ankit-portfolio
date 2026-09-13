'use client'
import { cn } from '@/lib/utils'
import { FileIcon } from 'lucide-react'
import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
    useSpring
} from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Button from '../../ui/Button'
import ModeToggle from '../../ui/ModeToggle'

const SCROLL_THRESHOLD = 12
const SCROLL_RANGE = 80

const Navbar = () => {

    const links = [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
    ]

    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    const { scrollY } = useScroll()
    const [hasScrolled, setHasScrolled] = useState(false)

    // blur trigger
    useMotionValueEvent(scrollY, 'change', (latest) => {
        setHasScrolled(latest > SCROLL_THRESHOLD)
    })

    // 🔥 SPRING (main upgrade)
    const smoothScroll = useSpring(scrollY, {
        stiffness: 140,
        damping: 20,
        mass: 0.3,
    })

    // 🔥 smooth transforms
    const width = useTransform(smoothScroll, [10, SCROLL_RANGE], ['100%', '100%'])
    const top = useTransform(smoothScroll, [0, SCROLL_RANGE], ['0px', '10px'])
    const borderRadius = useTransform(smoothScroll, [0, SCROLL_RANGE], ['0px', '14px'])

    const boxShadow = useTransform(
        smoothScroll,
        [0, SCROLL_RANGE],
        [
            '0 0 0 0 rgba(0,0,0,0)',
            '0 8px 30px -6px rgba(0,0,0,0.18)'
        ]
    )

    // 🔥 premium depth effect
    const scale = useTransform(smoothScroll, [0, SCROLL_RANGE], [0.995, 0.927])

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768
            setIsMobile(mobile)
            if (!mobile) setIsMobileMenuOpen(false)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false)
    }

    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className='w-full fixed top-0 z-50 flex flex-col items-center justify-center'>
            <motion.header
                style={isMobile ? {
                    width: '100%',
                    borderRadius: '0px',
                    boxShadow: 'none',
                    backdropFilter: 'blur(12px)',
                } : {
                    width,
                    marginTop: top,
                    borderRadius,
                    boxShadow,
                    scale,
                    backdropFilter: hasScrolled ? 'blur(12px)' : 'blur(0px)',
                }}
                className={cn(
                    'bg-background/70 z-50 py-3 px-3 md:px-4 max-w-2xl flex items-center sm:border-0 border-x border-outline justify-between ',
                    !isMobile && 'transition-[backdrop-filter] duration-150 ease-out '
                )}>

                <Link href='/'>
                    <motion.div
                        initial={{ y: 8, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                        viewport={{ once: true, margin: '-50px' }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className='relative flex items-center rounded-full overflow-hidden w-10 h-10 bg-[#FFD60A] shrink-0 transition-all duration-300'>
                        <Image src='/images/profile/newimage.png' alt='Ankit Gupta' width={80} height={80} className='w-10 h-10 object-cover object-[50%_6%] scale-[2.3] origin-center' />
                        <motion.span
                            key={isHovered ? '1' : '2'}
                            initial={{ left: '-20%' }}
                            animate={{ left: isHovered ? '120%' : '-20%' }}
                            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                            className='absolute h-full w-2 left-0 top-0 bg-neutral-900 dark:bg-neutral-100 rotate-12 blur-sm z-10' />
                    </motion.div>
                </Link>

                <div className='hidden md:flex items-center gap-4'>
                    <ul className='flex items-center '>
                        {links.map((link, idx) => (
                            <motion.li
                                initial={{ y: 8, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1], delay: idx * 0.06 }}
                                viewport={{ once: true, margin: '-50px' }}
                                onMouseEnter={() => setHoveredIdx(idx)}
                                onMouseLeave={() => setHoveredIdx(null)}
                                key={link.href}
                                className='relative px-2.5 py-1 text-sm font-medium text-neutral-800 dark:text-neutral-50'>
                                <Link href={link.href} className='z-10 relative'>{link.label}</Link>
                                {hoveredIdx === idx && (
                                    <motion.span
                                        layoutId='Navbar-underline'
                                        transition={{ type: 'tween', duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
                                        className='absolute rounded-md inset-x-0 bottom-0 w-full h-full bg-neutral-200 dark:bg-neutral-700 z-0'
                                    />
                                )}
                            </motion.li>
                        ))}
                    </ul>

                    <ModeToggle />

                    <Button
                        onClick={() => {
                            const link = document.createElement('a')
                            link.href = '/files/Ankit_Gupta_Resume.pdf'
                            link.download = 'Ankit_Gupta_Resume.pdf'
                            document.body.appendChild(link)
                            link.click()
                            document.body.removeChild(link)
                        }}
                        variant='primary'
                        size='sm'
                        className='flex items-center gap-2 rounded-lg group relative'>
                        <FileIcon className='size-4 transition-all duration-300' />
                        Download CV
                        <span className="absolute -bottom-px left-3 h-px w-[calc(100%-1.5rem)] bg-linear-to-r from-neutral-400/0 via-amber-400/90 to-neutral-400/0 transition-opacity duration-500 group-hover:opacity-60"></span>
                    </Button>
                </div>

                <div className='flex md:hidden items-center gap-2'>
                    <ModeToggle />
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className='flex flex-col justify-center items-center w-8 h-8 gap-1.5 p-2 rounded-md text-neutral-900 dark:text-neutral-50 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors'
                        aria-label='Toggle menu'>
                        <motion.span
                            animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 6 : 0 }}
                            transition={{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
                            className='w-5 h-0.5 bg-current rounded-full origin-center'
                        />
                        <motion.span
                            animate={{ opacity: isMobileMenuOpen ? 0 : 1, x: isMobileMenuOpen ? -8 : 0 }}
                            transition={{ duration: 0.18, ease: [0.32, 0.72, 0, 1] }}
                            className='w-5 h-0.5 bg-current rounded-full'
                        />
                        <motion.span
                            animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -6 : 0 }}
                            transition={{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
                            className='w-5 h-0.5 bg-current rounded-full origin-center'
                        />
                    </button>
                </div>
            </motion.header>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, maxHeight: 0 }}
                        animate={{ opacity: 1, maxHeight: 220 }}
                        exit={{ opacity: 0, maxHeight: 0 }}
                        transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
                        className='absolute top-full left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-b border-neutral-300 dark:border-neutral-700 shadow-lg overflow-hidden'>
                        <div className='px-4 py-4'>
                            <ul className='flex flex-col gap-1'>
                                {links.map((link, idx) => (
                                    <motion.li
                                        key={link.href}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.2, delay: idx * 0.05 }}>
                                        <Link
                                            href={link.href}
                                            onClick={handleLinkClick}
                                            className='block px-3 py-2.5 text-sm font-medium text-neutral-900 dark:text-neutral-50 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800'>
                                            {link.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Navbar