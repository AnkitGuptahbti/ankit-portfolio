'use client'
import { BlogFrontmatter } from '@/lib/mdx'
import { motion } from 'motion/react'
import Link from 'next/link'

const BlogCard = ({ slug, frontmatter, idx }: { slug: string, frontmatter: BlogFrontmatter, idx: number }) => { 
    const trancatedDescription = frontmatter.description.slice(0, 200) + '...'
    return (
        <Link href={`/blog/${slug}`} className='w-full relative flex flex-row items-start justify-between gap-4'>
            <div className='flex flex-col items-start justify-start gap-1'>
                <motion.h3 initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: idx * 0.1 }}
                    viewport={{ once: true }} className='text-lg font-bold'>{frontmatter.title}</motion.h3>
                <motion.p initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: idx * 0.1 }}
                    viewport={{ once: true }} className='text-sm text-neutral-500 dark:text-neutral-400'>{trancatedDescription}</motion.p>
            </div>
            <div className='flex flex-col items-end justify-end gap-2'>
                <p className='text-sm text-neutral-500 dark:text-neutral-400 whitespace-nowrap'>{frontmatter.date}</p>
            </div>
        </Link>
    )
}

export default BlogCard
