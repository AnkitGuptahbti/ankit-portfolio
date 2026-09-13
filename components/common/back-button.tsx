'use client';

import { ArrowLeftIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="flex rounded-lg relative w-fit bg-background/70 backdrop-blur-sm shadow-sm  py-2 px-4 z-10 group items-center gap-2 text-foreground dark:text-foreground hover:text-foreground transition-colors"
        >
            <ArrowLeftIcon className="w-4 h-4 group-hover:translate-x-[-2px] transition-transform duration-300" />
            Back
        </button>
    );
}

