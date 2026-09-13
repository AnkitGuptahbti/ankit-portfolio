import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Blogs - Ankit Gupta",
    description: "What I learn that we share with you",
    icons: {
        icon: "/images/profile/newimage.png",
    },
    openGraph: {
        title: "All Blogs - Ankit Gupta",
        description: "What I learn that we share with you",
        images: "/images/profile/newimage.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="min-h-screen">
            {children}
        </main>
    );
}
