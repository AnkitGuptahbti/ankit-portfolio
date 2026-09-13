import Container from '@/components/ui/Container';
import Link from 'next/link';


export default function NotFound() {
    return (
        <Container>
            <div className="max-w-3xl mx-auto py-20 text-center">
                <h1 className="text-6xl font-bold mb-4 text-neutral-900 dark:text-neutral-50">
                    404
                </h1>
                <h2 className="text-3xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
                    Blog Post Not Found
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                    Sorry, we couldn&apos;t find the blog post you&apos;re looking for.
                </p>
                <Link
                    href="/blog"
                    className="inline-block px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
                >
                    Back to Blog
                </Link>
            </div>
        </Container>
    );
}

