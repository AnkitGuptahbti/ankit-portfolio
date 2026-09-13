'use client'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { FormEvent, useState } from 'react'

const EMAIL = 'ankitgupta92368892@gmail.com'

const ContactForm = () => {
    const [copied, setCopied] = useState(false)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const data = new FormData(form)
        const name = String(data.get('name') || '')
        const email = String(data.get('email') || '')
        const message = String(data.get('message') || '')
        const subject = encodeURIComponent(`Portfolio message from ${name}`)
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    }

    const copyEmail = async () => {
        await navigator.clipboard.writeText(EMAIL)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <Container className='flex flex-1 h-full flex-col py-12 pt-16 border-x border-outline relative items-start justify-start'>

            <div className='absolute rounded-full -top-1 -left-1 w-2 h-2 z-10 bg-amber-400 [box-shadow:0_0_16px_1px_var(--color-amber-400)]' />
            <div className='absolute rounded-full -bottom-1 -left-1 w-2 h-2 z-10 bg-amber-400 [box-shadow:0_0_16px_1px_var(--color-amber-400)]' />
            <div className='absolute rounded-full -top-1 -right-1 w-2 h-2 z-10 bg-amber-400 [box-shadow:0_0_16px_1px_var(--color-amber-400)]' />
            <div className='absolute rounded-full -bottom-1 -right-1 w-2 h-2 z-10 bg-amber-400 [box-shadow:0_0_16px_1px_var(--color-amber-400)]' />

            <div className='mb-8 flex flex-col gap-2'>
                <p className='text-sm text-neutral-500 dark:text-neutral-400'>Gurugram, Haryana, India</p>
                <div className='flex items-center gap-2'>
                    <a href={`mailto:${EMAIL}`} className='text-sm font-medium hover:underline'>
                        {EMAIL}
                    </a>
                    <button
                        type='button'
                        onClick={copyEmail}
                        className='text-xs px-2 py-1 rounded-md border border-outline text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-50'
                    >
                        {copied ? 'Copied' : 'Copy'}
                    </button>
                </div>
            </div>

            <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="name" className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        className="px-4 py-2 rounded-md border border-outline bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                        placeholder="Your name"
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="px-4 py-2 rounded-md border border-outline bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                        placeholder="you@email.com"
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="px-4 py-2 rounded-md border border-outline bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                        placeholder="Write your message..."
                    />
                </div>
                <Button
                    tag="button"
                    variant="primary"
                    size="md"
                    className='w-fit self-center rounded-lg'
                >
                    Send Message
                </Button>
            </form>
        </Container>
    )
}

export default ContactForm
