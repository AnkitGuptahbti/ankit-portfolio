import React from 'react'
import { cn } from '@/lib/utils'

const Heading = ({ children, className, tag = 'h2' }: { children: React.ReactNode, className?: string, tag?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' }) => {
    const Tag = tag
    return (
        <Tag className={cn('text-2xl md:text-xl text-neutral-800 dark:text-neutral-200 font-semibold ml-3    relative w-fit', className)}>
            {children}
            <span className='absolute inset-0 w-full h-full scale-110 bg-neutral-200 dark:bg-neutral-800 -z-10'>
                <span className='absolute left-0 top-0 animate-pulse w-1 h-1 bg-neutral-300 dark:bg-neutral-700 -z-10'></span>
                <span className='absolute left-0 bottom-0 animate-pulse w-1 h-1 bg-neutral-300 dark:bg-neutral-700 -z-10'></span>
                <span className='absolute right-0 top-0 animate-pulse w-1 h-1 bg-neutral-300 dark:bg-neutral-700 -z-10'></span>
                <span className='absolute right-0 bottom-0 animate-pulse w-1 h-1 bg-neutral-300 dark:bg-neutral-700 -z-10'></span>
            </span>
        </Tag>
    )
}

export default Heading



