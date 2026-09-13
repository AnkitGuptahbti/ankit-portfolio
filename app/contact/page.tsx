import ContactHero from '@/components/contact-page/contact-hero'
import ContactForm from '@/components/contact-page/contact-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact - Ankit Gupta',
    description: 'Contact me',
}

const Contact = () => {
    return (
        <main className='min-h-[calc(100vh-120px)] flex flex-col'>
        <ContactHero />
        <div className='w-full h-px bg-outline ' />
        <ContactForm />
        </main>
    )
}

export default Contact
