'use client'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Button from './Button'
import { motion } from 'motion/react'

const ModeToggle = () => {
    const { theme, setTheme, resolvedTheme } = useTheme()
    const [systemTheme, setSystemTheme] = useState<"light" | "dark">('light')

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleChange = (event: MediaQueryListEvent) => {
            setSystemTheme(event.matches ? 'dark' : 'light')
        }
        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    const SWITCH = () => {
        switch (theme) {
            case 'dark': {
                setTheme('light')
                return;
            }
            case 'light': {
                setTheme('dark')
                return;
            }
            case 'system': {
                setTheme(systemTheme === 'dark' ? 'dark' : 'light')
                return;
            }
            default: {
                return;
            }
        }
    }
    return (
        <motion.button
            initial={{ y: 10, opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            viewport={{ once: true }}
            aria-label='Toggle mode'
            onClick={SWITCH} className='p-4 rounded-lg bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 cursor-pointer relative group'>
            <motion.span
                initial={false}
                animate={{
                    scale: resolvedTheme === 'dark' ? 0 : 1,
                    rotate: resolvedTheme === 'dark' ? 45 : 0,
                    opacity: resolvedTheme === 'dark' ? 0 : 1
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute inset-0 m-auto size-4 text-neutral-800"
            >
                <SunIcon className='size-4' />
            </motion.span>

            {/* Moon icon - visible in dark mode */}
            <motion.span
                initial={false}
                animate={{
                    scale: resolvedTheme === 'dark' ? 1 : 0,
                    rotate: resolvedTheme === 'dark' ? 0 : -45,
                    opacity: resolvedTheme === 'dark' ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute inset-0 m-auto size-4 text-neutral-200"
            >
                <MoonIcon className='size-4' />
            </motion.span>
        </motion.button>
    )
}

export default ModeToggle
