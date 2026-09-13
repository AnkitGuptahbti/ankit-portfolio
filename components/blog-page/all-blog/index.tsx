import BlogHeading from '@/components/common/blog-heading'
import BlogCard from '@/components/ui/blog-card'
import Container from '@/components/ui/Container'
import { getAllBlogs } from '@/lib/mdx'
import { HTMLAttributes } from 'react'

const AllBlog = async (props: HTMLAttributes<HTMLDivElement>) => {

    const blogs = await getAllBlogs()
    return (
        <Container  className='flex  flex-col py-12 gap-10 border-x border-outline relative' {...props} >

            <div className='absolute rounded-full -top-1 -left-1 w-2 h-2 z-10 bg-amber-400 [box-shadow:0_0_16px_1px_var(--color-amber-400)]' />
            <div className='absolute rounded-full -bottom-1 -left-1 w-2 h-2 z-10 bg-amber-400 [box-shadow:0_0_16px_1px_var(--color-amber-400)]' />
            <div className='absolute rounded-full -top-1 -right-1 w-2 h-2 z-10 bg-amber-400 [box-shadow:0_0_16px_1px_var(--color-amber-400)]' />
            <div className='absolute rounded-full -bottom-1 -right-1 w-2 h-2 z-10 bg-amber-400 [box-shadow:0_0_16px_1px_var(--color-amber-400)]' />

            <BlogHeading />
            {blogs.map((blog, idx) => (
                <BlogCard key={blog.slug} idx={idx} {...blog} />
            ))}
        </Container>
    )
}

export default AllBlog
