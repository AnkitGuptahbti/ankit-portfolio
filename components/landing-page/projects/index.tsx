'use client'
import { DockerIcon, ExpressIcon, KafkaIcon, MongoDBIcon, MySQLIcon, NodeJSIcon, RedisIcon, SocketIoIcon, TypeScriptIcon } from '@/vectors/icons'
import { motion } from 'motion/react'
import Container from '../../ui/Container'
import Heading from '../../ui/Heading'
import ProjectCard from '../../common/project-card'

const Projects = () => {
    const projects = [
        {
            title: 'PB Money',
            description: 'Bonds investment platform I currently work on — digital KYC, bond discovery, and investment order processing.',
            image: '/images/projects/pbmoney.png',
            techStack: [
                {
                    name: 'TypeScript',
                    icon: <TypeScriptIcon className='size-4' />,
                    link: 'https://www.typescriptlang.org',
                },
                {
                    name: 'Node.js',
                    icon: <NodeJSIcon className='size-4' />,
                    link: 'https://nodejs.org',
                },
                {
                    name: 'Express',
                    icon: <ExpressIcon className='size-4' />,
                    link: 'https://expressjs.com/',
                },
                {
                    name: 'MongoDB',
                    icon: <MongoDBIcon className='size-4' />,
                    link: 'https://www.mongodb.com/',
                },
                {
                    name: 'MySQL',
                    icon: <MySQLIcon className='size-4' />,
                    link: 'https://www.mysql.com',
                },
                {
                    name: 'Redis',
                    icon: <RedisIcon className='size-4' />,
                    link: 'https://redis.io/',
                },
                {
                    name: 'Kafka',
                    icon: <KafkaIcon className='size-4' />,
                    link: 'https://kafka.apache.org/',
                },
            ],
            link: 'https://pbmoney.com'
        },
        {
            title: 'JobConnect',
            description: 'Professional networking platform built as a multi-service product — Auth, User, Post, Feed, Chat, Notification, Job, and Search behind an API gateway.',
            placeholder: {
                flow: ['Client', 'API Gateway', 'Microservices', 'Kafka / Redis / MongoDB'],
            },
            techStack: [
                {
                    name: 'Node.js',
                    icon: <NodeJSIcon className='size-4' />,
                    link: 'https://nodejs.org'
                },
                {
                    name: 'Express',
                    icon: <ExpressIcon className='size-4' />,
                    link: 'https://expressjs.com/'
                },
                {
                    name: 'TypeScript',
                    icon: <TypeScriptIcon className='size-4' />,
                    link: 'https://www.typescriptlang.org'
                },
                {
                    name: 'Kafka',
                    icon: <KafkaIcon className='size-4' />,
                    link: 'https://kafka.apache.org/'
                },
                {
                    name: 'Redis',
                    icon: <RedisIcon className='size-4' />,
                    link: 'https://redis.io/'
                },
                {
                    name: 'MongoDB',
                    icon: <MongoDBIcon className='size-4' />,
                    link: 'https://www.mongodb.com/'
                },
                {
                    name: 'Socket.io',
                    icon: <SocketIoIcon className='size-4' />,
                    link: 'https://socket.io/'
                },
                {
                    name: 'Docker',
                    icon: <DockerIcon className='size-4' />,
                    link: 'https://www.docker.com'
                },
            ],
            github: 'https://github.com/AnkitGuptahbti'
        },
    ]

    return (
        <Container className='flex flex-col py-12 gap-10 border-x border-outline relative '>
            <Heading tag='h2' >

                {`Work shipped with teams`.split(' ').map((word, index, arr) => (
                    <motion.span key={index} className='relative inline-block'
                        initial={{ y: 10, opacity: 0, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.3, ease: 'easeInOut', delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        {word}{index < arr.length - 1 ? '\u00A0' : ''}
                    </motion.span>
                ))}

            </Heading>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 relative'>
                {projects.map((project, index) => (
                    <ProjectCard key={project.title} {...project} idx={index} />
                ))}
            </div>
        </Container>
    )
}

export default Projects
