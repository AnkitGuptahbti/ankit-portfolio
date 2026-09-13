import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About - Ankit Gupta",
    description: "Software Engineer focused on backend architecture, distributed systems, and FinTech at Paisabazaar through Daffodil Software.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
