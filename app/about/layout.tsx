import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About - Ankit Gupta",
    description: "Full stack engineer at Paisabazaar through Daffodil Software. Open to new work — solo or with a team.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
