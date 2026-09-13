import { getAllBlogs } from '@/lib/mdx'
import Container from '../../ui/Container'
import BlogHeading from '../../common/blog-heading'
import BlogCard from '../../ui/blog-card'

const BlogOnLanding = async () => {
    const blogs = await getAllBlogs()
    return (
        <Container className='flex flex-col py-12 gap-10 border-x border-outline relative'>
            <BlogHeading />
            <div className='flex flex-col gap-6'>
                {blogs.map((blog, idx) => (
                    <BlogCard key={blog.slug} idx={idx} {...blog} />
                ))}
            </div>
        </Container>
    )
}

export default BlogOnLanding
