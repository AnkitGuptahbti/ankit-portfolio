import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

export interface BlogFrontmatter {
    title: string;
    description: string;
    date: string;
    author?: string;
    tags?: string[];
}

export interface BlogPost {
    content: React.ReactElement;
    frontmatter: BlogFrontmatter;
}

export interface BlogPostPreview {
    slug: string;
    frontmatter: BlogFrontmatter;
}

export const getSingleBlog = async (slug: string): Promise<BlogPost | null> => {
    try {
        const filePath = path.join(process.cwd(), 'data/blog', `${slug}.mdx`);
        const source = await fs.readFile(filePath, 'utf8');

        const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
            source,
            options: {
                parseFrontmatter: true,
            },
        });

        return { content, frontmatter };
    } catch (error) {
        // Return null if file doesn't exist or other errors
        console.error(`Error loading blog post with slug "${slug}":`, error);
        return null;
    }
}

export const getAllBlogSlugs = async (): Promise<string[]> => {
    try {
        const dataDir = path.join(process.cwd(), 'data/blog');
        const files = await fs.readdir(dataDir);

        return files
            .filter(file => file.endsWith('.mdx'))
            .map(file => file.replace(/\.mdx$/, ''));
    } catch (error) {
        console.error('Error reading blog directory:', error);
        return [];
    }
}

export const getAllBlogs = async (): Promise<BlogPostPreview[]> => {
    try {
        const dataDir = path.join(process.cwd(), 'data/blog');
        const files = await fs.readdir(dataDir);

        const mdxFiles = files.filter(file => file.endsWith('.mdx'));

        const blogs = await Promise.all(
            mdxFiles.map(async (file) => {
                const slug = file.replace(/\.mdx$/, '');
                const filePath = path.join(dataDir, file);
                const source = await fs.readFile(filePath, 'utf8');

                const { frontmatter } = await compileMDX<BlogFrontmatter>({
                    source,
                    options: {
                        parseFrontmatter: true,
                    },
                });

                return {
                    slug,
                    frontmatter,
                };
            })
        );

        // Sort by date (newest first)
        return blogs.sort((a, b) => {
            const dateA = new Date(a.frontmatter.date);
            const dateB = new Date(b.frontmatter.date);
            return dateB.getTime() - dateA.getTime();
        });
    } catch (error) {
        console.error('Error loading all blogs:', error);
        return [];
    }
}