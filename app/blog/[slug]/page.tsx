import BackButton from '@/components/common/back-button';
import Container from '@/components/ui/Container';
import { getAllBlogSlugs, getSingleBlog } from '@/lib/mdx';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';


interface PageProps {
    params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts (SSG optimization)
export async function generateStaticParams() {
    const slugs = await getAllBlogSlugs();
    return slugs.map((slug) => ({
        slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const data = await getSingleBlog(slug);

    if (!data) {
        return {
            title: 'Blog Not Found - Ankit Gupta',
            description: 'The requested blog post could not be found.',
        };
    }

    const { frontmatter } = data;

    return {
        title: `${frontmatter.title} - Ankit Gupta`,
        description: frontmatter.description || 'Blog post by Ankit Gupta',
        authors: frontmatter.author ? [{ name: frontmatter.author }] : undefined,
        openGraph: {
            title: frontmatter.title,
            description: frontmatter.description || 'Blog post by Ankit Gupta',
            type: 'article',
            publishedTime: frontmatter.date,
        },
    };
}

const Page = async ({ params }: PageProps) => {
    const { slug } = await params;
    const data = await getSingleBlog(slug);


    if (!data) {
        notFound();
    }

    const { content, frontmatter } = data;

    return (
        <Container className='flex min-h-screen flex-col py-12 gap-16 border-x border-outline relative'>
            <div className='sticky top-20  '>
                {/* <div className='absolute rounded-full -top-1 -left-1 w-2 h-2 z-10 bg-green-400 dark:bg-amber-400 [box-shadow:0_0_8px_1px_var(--color-green-400)] dark:[box-shadow:0_0_16px_1px_var(--color-amber-400)]' />
                <div className='absolute rounded-full -bottom-1 -left-1 w-2 h-2 z-10 bg-green-400 dark:bg-amber-400 [box-shadow:0_0_8px_1px_var(--color-green-400)] dark:[box-shadow:0_0_16px_1px_var(--color-amber-400)]' />
                <div className='absolute rounded-full -top-1 -right-1 w-2 h-2 z-10 bg-green-400 dark:bg-amber-400 [box-shadow:0_0_8px_1px_var(--color-green-400)] dark:[box-shadow:0_0_16px_1px_var(--color-amber-400)]' />
                <div className='absolute rounded-full -bottom-1 -right-1 w-2 h-2 z-10 bg-green-400 dark:bg-amber-400 [box-shadow:0_0_8px_1px_var(--color-green-400)] dark:[box-shadow:0_0_16px_1px_var(--color-amber-400)]' /> */}

                <BackButton />
            </div>
            <div className="prose
                prose-neutral
                dark:prose-invert                
                prose-headings:text-neutral-900
                prose-headings:font-bold
                dark:prose-headings:font-bold
                dark:prose-headings:text-neutral-50
                prose-p:text-neutral-700
                dark:prose-p:text-neutral-300
                prose-a:text-blue-600
                dark:prose-a:text-blue-400
                prose-strong:text-neutral-900
                dark:prose-strong:text-neutral-50
                prose-code:text-neutral-900
                dark:prose-code:text-neutral-50
                prose-pre:bg-neutral-100
                dark:prose-pre:bg-neutral-900">
                {content}
            </div>
        </Container>
    );
}

export default Page;
