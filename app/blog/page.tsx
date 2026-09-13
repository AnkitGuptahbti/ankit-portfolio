import AllBlog from '@/components/blog-page/all-blog'
import BlogHero from '@/components/blog-page/blog-hero'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'All Blogs - Ankit Gupta',
    description: 'What I learn that we share with you',
    authors: [{ name: 'Ankit Gupta' }],
    openGraph: {
        title: 'All Blogs - Ankit Gupta',
        description: 'What I learn that we share with you',
        type: 'website',
        url: 'https://github.com/AnkitGuptahbti',
    },
}

const Blog = () => {

    return (
        <>
            <BlogHero /> 
            <div className="w-full h-px bg-outline " />
            <AllBlog />
       
        </>

    )
}

export default Blog
