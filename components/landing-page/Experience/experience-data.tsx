import { CassandraIcon, ElasticsearchIcon, ExpressIcon, KafkaIcon, MongoDBIcon, MySQLIcon, NodeJSIcon, RedisIcon, SocketIoIcon, SwaggerIcon, TypeScriptIcon, DockerIcon } from "@/vectors/icons"
import { Globe, Linkedin } from "lucide-react"

export type ExperienceData = {
    Logo: React.ReactNode
    company: string
    position: string
    startDate: string
    endDate: string
    location: string
    socialLinks: {
        name: string
        icon: React.ReactNode
        link: string
    }[]
    points: string[]
    techStack: {
        name: string
        icon: React.ReactNode
        link: string
    }[]
}

const DaffodilLogo = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-8">
        <rect width="30" height="30" rx="2.5" fill="#F15A22" />
        <text x="15" y="21" textAnchor="middle" fill="white" fontSize="16" fontWeight="700" fontFamily="ui-sans-serif, system-ui">D</text>
    </svg>
)

export const experienceData = [
    {
        Logo: <DaffodilLogo />,
        company: "Daffodil Software",
        position: "Software Engineer — PB Fintech / Paisabazaar",
        startDate: "Jan 2025",
        endDate: "Present",
        location: "Gurugram, Haryana, India",
        socialLinks: [
            {
                name: "LinkedIn",
                icon: <Linkedin className="size-4 text-neutral-700 dark:text-neutral-400" />,
                link: "https://www.linkedin.com/company/daffodil-software-ltd-/posts/?feedView=all",
            },
            {
                name: "Website",
                icon: <Globe className="size-4 text-neutral-700 dark:text-neutral-400" />,
                link: "https://www.daffodilsw.com",
            },
        ],
        points: [
            "Currently building backend services and integrations for Paisabazaar's Bonds investment platform — digital KYC, customer verification, bond discovery, and investment order processing.",
            "Built and owned backend components of an end-to-end digital KYC and onboarding pipeline: PAN verification, Aadhaar authentication, liveness detection, bank account verification, Demat verification, eSign, and AOF generation.",
            "Designed the Bonds Vendor microservice as a centralized orchestration layer, abstracting multiple third-party financial systems behind standardized APIs and business workflows.",
            "Implemented encrypted data exchange, consent-driven verification, authentication, transaction state management, and failure recovery for audit-ready financial workflows.",
            "Designed resilient third-party integrations using retry strategies, failure classification, controlled fallbacks, and deterministic transaction states.",
            "Previously worked on the Secured Home Loan journey — bank integration APIs and lead-push APIs for multiple banking partners, with partner-specific request/response transformation behind unified backend APIs.",
        ],
        techStack: [
            {
                name: "TypeScript",
                icon: <TypeScriptIcon className="size-4" />,
                link: "https://www.typescriptlang.org",
            },
            {
                name: "Node.js",
                icon: <NodeJSIcon className="size-4" />,
                link: "https://nodejs.org",
            },
            {
                name: "Express",
                icon: <ExpressIcon className="size-4" />,
                link: "https://expressjs.com",
            },
            {
                name: "MongoDB",
                icon: <MongoDBIcon className="size-4" />,
                link: "https://www.mongodb.com",
            },
            {
                name: "MySQL",
                icon: <MySQLIcon className="size-4" />,
                link: "https://www.mysql.com",
            },
            {
                name: "Redis",
                icon: <RedisIcon className="size-4" />,
                link: "https://redis.io/",
            },
            {
                name: "Elasticsearch",
                icon: <ElasticsearchIcon className="size-4" />,
                link: "https://www.elastic.co/elasticsearch",
            },
            {
                name: "Cassandra",
                icon: <CassandraIcon className="size-4" />,
                link: "https://cassandra.apache.org/",
            },
            {
                name: "Kafka",
                icon: <KafkaIcon className="size-4" />,
                link: "https://kafka.apache.org/",
            },
            {
                name: "Socket.io",
                icon: <SocketIoIcon className="size-4" />,
                link: "https://socket.io/",
            },
            {
                name: "Swagger",
                icon: <SwaggerIcon className="size-4" />,
                link: "https://swagger.io/",
            },
        ],
    },
    {
        Logo: <DaffodilLogo />,
        company: "Daffodil Software",
        position: "Software Engineer — Asset Management System",
        startDate: "Internal Project",
        endDate: "2025",
        location: "Gurugram, Haryana, India",
        socialLinks: [
            {
                name: "Website",
                icon: <Globe className="size-4 text-neutral-700 dark:text-neutral-400" />,
                link: "https://www.daffodilsw.com",
            },
        ],
        points: [
            "Designed REST APIs using Node.js, Express.js, and MongoDB for a permission-first asset management system.",
            "Implemented scalable RBAC using JWT authentication with a focus on auditability, traceability, and access isolation.",
            "Worked on asset lifecycle management using MongoDB schemas, indexing, and aggregation pipelines.",
        ],
        techStack: [
            {
                name: "Node.js",
                icon: <NodeJSIcon className="size-4" />,
                link: "https://nodejs.org",
            },
            {
                name: "Express",
                icon: <ExpressIcon className="size-4" />,
                link: "https://expressjs.com",
            },
            {
                name: "MongoDB",
                icon: <MongoDBIcon className="size-4" />,
                link: "https://www.mongodb.com",
            },
            {
                name: "TypeScript",
                icon: <TypeScriptIcon className="size-4" />,
                link: "https://www.typescriptlang.org",
            },
            {
                name: "Docker",
                icon: <DockerIcon className="size-4" />,
                link: "https://www.docker.com",
            },
        ],
    },
]
