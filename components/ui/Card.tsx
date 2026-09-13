'use client'
import { cn } from "@/lib/utils"
import { motion } from "motion/react"

export const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn(' border border-border  shadow-sm dark:shadow-none  rounded-lg p-2 relative  flex flex-col items-start justify-start ', className)}>


            {children}

        </div>
    )
}

export const CardHeader = ({ children, className, idx }: { children: React.ReactNode, className?: string, idx: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: idx * 0.1 }}
            viewport={{ once: true }}
             className={cn('', className)}>
            {children}
        </motion.div>
    )
}

export const CardBody = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('p-2', className)}>
            {children}
        </div>
    )
}

export const CardFooter = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('p-2', className)}>
            {children}
        </div>
    )
}