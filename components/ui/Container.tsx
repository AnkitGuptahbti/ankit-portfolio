import { cn } from '@/lib/utils'
import React from 'react'

const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
      <section className={cn('container mx-auto max-w-2xl px-4 lg:px-6', className)}>
        {children}
    </section>
  )
}

export default Container
