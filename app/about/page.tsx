'use client'
import Container from '@/components/ui/Container'
import { motion } from 'motion/react'

const paragraphs = [
    'I am a Software Engineer with 1.5+ years of backend experience in Node.js, TypeScript, MySQL, Redis, and microservices, specializing in secure third-party API integrations, fault-tolerant systems, and high-reliability financial workflows. I work at Paisabazaar (PB Fintech) through Daffodil Software.',
    'I built the Bonds Identity microservice as the sole developer — 50+ REST APIs for paperless KYC supporting 5,000+ KYCs/day — and cut PAN-to-Aadhaar drop-off from 40% to 10% and bank-verification drop-off from 25% to 15%.',
    'I also designed the Bonds Vendor microservice, a centralized gateway for 20+ third-party integrations (99+ APIs), plus a multi-tenant KYC engine, envelope encryption with HMAC hashes that removed plaintext PII from 20 lakh+ records with zero downtime, and a Redis Streams event pipeline for customer journey events.',
    'I work across the stack — APIs, frontend, reliability, security, and event-driven systems. I look for work I can deliver myself, or with a team when the scope needs it.',
]

const expertise = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'API Integration', 'System Design'] },
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Java 8+', 'SQL'] },
    { category: 'Databases', items: ['MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'Cassandra'] },
    { category: 'Distributed Systems', items: ['Apache Kafka', 'Redis Streams', 'Microservices', 'Event-driven architecture', 'Caching', 'Circuit breakers', 'Rate limiting'] },
    { category: 'Security', items: ['JWT', 'OAuth', 'RBAC', 'AES-256', 'RSA', 'HMAC', 'bcrypt', 'Format-Preserving Encryption', 'PII Protection'] },
    { category: 'Fundamentals', items: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'] },
]

const terminal = [
    { cmd: 'whoami', output: 'ankit-gupta' },
    { cmd: 'role', output: 'full-stack-engineer' },
    { cmd: 'focus', output: 'fullstack + open-to-work' },
    { cmd: 'currently-building', output: 'pbmoney.com — bonds-platform' },
]

const AboutPage = () => {
    return (
        <main className='min-h-[calc(100vh-120px)] flex flex-col'>
            <Container className='flex flex-col py-12 pt-16 border-x border-outline relative items-start justify-start gap-10'>
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.1 }}
                        className='text-2xl md:text-4xl font-bold'
                    >
                        About me
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.2 }}
                        className='text-sm md:text-lg text-neutral-500 dark:text-neutral-400 mt-2'
                    >
                        Full Stack Engineer · Open to work
                    </motion.p>
                </div>

                <div className='grid md:grid-cols-2 gap-10 w-full items-start'>
                    <div className='flex flex-col gap-4'>
                        {paragraphs.map((p, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.05 * i }}
                                viewport={{ once: true }}
                                className='text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed'
                            >
                                {p}
                            </motion.p>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        viewport={{ once: true }}
                        className='w-full rounded-lg border border-outline overflow-hidden'
                    >
                        <div className='flex items-center gap-2 px-4 py-3 border-b border-outline bg-neutral-100 dark:bg-neutral-900'>
                            <div className='w-2.5 h-2.5 rounded-full bg-red-400/70' />
                            <div className='w-2.5 h-2.5 rounded-full bg-amber-400/70' />
                            <div className='w-2.5 h-2.5 rounded-full bg-green-400/70' />
                            <span className='font-mono text-xs text-neutral-500 ml-2'>terminal — zsh</span>
                        </div>
                        <div className='p-4 font-mono text-sm space-y-3'>
                            {terminal.map((line) => (
                                <div key={line.cmd}>
                                    <div className='text-amber-600 dark:text-amber-400'>
                                        <span className='text-neutral-400'>$</span> {line.cmd}
                                    </div>
                                    <div className='text-neutral-600 dark:text-neutral-400 pl-4 mt-1'>{line.output}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className='w-full'>
                    <motion.h2
                        initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        viewport={{ once: true }}
                        className='text-xl font-bold mb-4'
                    >
                        Technical expertise
                    </motion.h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {expertise.map((group, idx) => (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.05 * idx }}
                                viewport={{ once: true }}
                                className='rounded-lg border border-outline p-4'
                            >
                                <p className='text-sm font-semibold mb-2'>{group.category}</p>
                                <div className='flex flex-wrap gap-1.5'>
                                    {group.items.map((item) => (
                                        <span
                                            key={item}
                                            className='text-xs px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300'
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default AboutPage
