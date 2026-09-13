import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

    const Button = ({ children, className, onClick, href, tag = 'button', variant = 'primary', size = 'md', target = '_self'  }: { children: React.ReactNode, className?: string, onClick?: () => void, href?: string, tag?: 'button' | 'link', variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link', size?: 'sm' | 'md' | 'lg', target?: string }) => {
        const Tag = tag === 'button' ? 'button' : Link;

        const variants = {
            primary: 'bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50 hover:bg-neutral-300 dark:hover:bg-neutral-700 ',
            secondary: 'bg-neutral-800 text-neutral-50 dark:bg-neutral-200 dark:text-neutral-900 hover:bg-neutral-900 dark:hover:bg-neutral-300',
            outline: 'bg-transparent border border-neutral-200 text-neutral-900 dark:border-neutral-800 dark:text-neutral-50 hover:bg-neutral-100',
            ghost: 'bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800',
            link: 'bg-transparent text-neutral-900 dark:text-neutral-50 hover:underline',
        }

        const sizes = {
            sm: 'text-sm px-3 py-2',
            md: 'text-base px-4 py-2',
            lg: 'text-lg px-5 py-3',
        }


  return (
    <Tag href={href || ""} className={cn(variants[variant], sizes[size],'cursor-pointer relative transition-all duration-300 ', className)} onClick={onClick} target={target}>
      {children}
    </Tag>
  )
}

export default Button
