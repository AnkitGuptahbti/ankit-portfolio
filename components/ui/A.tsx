"use client";
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import Link from 'next/link';

function A({
    children,
    href,
    target,
    rel,
    className,
    tooltip,
    idx,
    ...props
}: React.ComponentProps<'a'> & {
    tooltip?: string
    idx: number
    href: string
    target?: string
    rel?: string
    className?: string
}) {
    const [showTooltip, setShowTooltip] = useState(false)

    return (
        <motion.div
            initial={{ y: 10, opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.3, ease: 'easeInOut', delay: idx * 0.1 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
            className="relative inline-block">
            <Link
                {...props}
                href={href}
                target={target}
                rel={rel}
                className={cn(className)}
                onMouseEnter={() => tooltip && setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onFocus={() => tooltip && setShowTooltip(true)}
                onBlur={() => setShowTooltip(false)}

            >

               

                {children}
            </Link>
            <AnimatePresence>
                {tooltip && showTooltip && (
                    <motion.div

                        initial={{ opacity: 0, y: 8, scale: 0.85, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: 8, scale: 0.85, filter: 'blur(10px)' }}
                        transition={{ type: "spring", stiffness: 500, damping: 25, mass: 0.5, duration: 0.3 }}
                        className={cn(
                            "absolute z-50 px-2 py-1 text-sm text-white bg-neutral-900 dark:bg-neutral-200 dark:text-black rounded-lg shadow-lg",
                            "pointer-events-none whitespace-nowrap",
                            "bottom-full left-1/2 -translate-x-1/2 mb-2",
                            "after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2",
                            "after:border-4 after:border-transparent after:border-t-neutral-900 dark:after:border-t-white"
                        )}
                        role="tooltip"
                    >
                        {tooltip}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default A;