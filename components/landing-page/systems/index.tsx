'use client'
import { motion } from 'motion/react'
import Container from '../../ui/Container'
import Heading from '../../ui/Heading'
import { Card, CardBody } from '../../ui/Card'

const featuredSystems = [
    {
        id: 'kyc',
        title: 'Financial KYC & Onboarding Engine',
        description:
            'Enables a fully digital onboarding workflow — orchestrating identity verification, bank validation, and document signing into a single cohesive pipeline.',
        flow: [
            'PAN',
            'Aadhaar',
            'Liveness',
            'Bank Verification',
            'Demat Verification',
            'eSign',
            'AOF',
        ],
        concepts: [
            'Digital onboarding',
            'Identity verification',
            'Consent-driven flows',
            'Audit-ready workflows',
        ],
    },
    {
        id: 'bonds',
        title: 'Bonds Integration & Orchestration Layer',
        description:
            'Centralized integration and orchestration layer that abstracts multiple third-party financial systems behind standardized APIs and deterministic business workflows.',
        flow: [
            'Client',
            'API',
            'Bonds Vendor Service',
            'Partner Integrations',
            'Financial Workflow',
        ],
        concepts: [
            'API abstraction',
            'Orchestration',
            'State management',
            'Retries',
            'Failure classification',
            'Fallback handling',
        ],
    },
    {
        id: 'home-loan',
        title: 'Home Loan Bank Integration Layer',
        description:
            'Integration layer enabling seamless customer journeys across banking partners with different APIs and workflow requirements.',
        flow: [
            'Customer Journey',
            'Backend',
            'Lead Push API',
            'Bank-specific Integration',
            'Banking Partner',
        ],
        concepts: [
            'Partner abstraction',
            'Lead-push APIs',
            'Request transformation',
            'Multi-bank workflows',
        ],
    },
]

const FeaturedSystems = () => {
    return (
        <Container className='flex flex-col py-12 gap-10 border-x border-outline relative '>
            <div className='absolute rounded-full -top-1 -left-1 w-2 h-2 z-10 bg-amber-400 [box-shadow:0_0_16px_1px_var(--color-amber-400)]' />
            <div className='absolute rounded-full -bottom-1 -left-1 w-2 h-2 z-10 bg-amber-400 [box-shadow:0_0_16px_1px_var(--color-amber-400)]' />
            <div className='absolute rounded-full -top-1 -right-1 w-2 h-2 z-10 bg-amber-400 [box-shadow:0_0_16px_1px_var(--color-amber-400)]' />
            <div className='absolute rounded-full -bottom-1 -right-1 w-2 h-2 z-10 bg-amber-400 [box-shadow:0_0_16px_1px_var(--color-amber-400)]' />

            <Heading tag='h2'>
                {`Systems I've built`.split(' ').map((word, index, arr) => (
                    <motion.span key={index} className='relative inline-block'
                        initial={{ y: 10, opacity: 0, filter: 'blur(10px)' }}
                        whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 0.3, ease: 'easeInOut', delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        {word}{index < arr.length - 1 ? '\u00A0' : ''}
                    </motion.span>
                ))}
            </Heading>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 relative'>
                {featuredSystems.map((system, idx) => (
                    <Card key={system.id} className='h-full'>
                        <CardBody className='flex flex-col gap-3 p-3'>
                            <motion.h3
                                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.1 * idx }}
                                viewport={{ once: true }}
                                className='text-base font-bold'
                            >
                                {system.title}
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.1 * idx }}
                                viewport={{ once: true }}
                                className='text-sm text-neutral-500 dark:text-neutral-400'
                            >
                                {system.description}
                            </motion.p>
                            <div className='flex flex-wrap items-center gap-1.5 mt-1'>
                                {system.flow.map((step, i) => (
                                    <span key={step} className='flex items-center gap-1'>
                                        <span className='text-[11px] px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'>
                                            {step}
                                        </span>
                                        {i < system.flow.length - 1 && (
                                            <span className='text-neutral-400 text-[10px]'>→</span>
                                        )}
                                    </span>
                                ))}
                            </div>
                            <div className='flex flex-wrap gap-1.5 mt-1'>
                                {system.concepts.map((concept) => (
                                    <span
                                        key={concept}
                                        className='text-[11px] px-2 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400'
                                    >
                                        {concept}
                                    </span>
                                ))}
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </Container>
    )
}

export default FeaturedSystems
