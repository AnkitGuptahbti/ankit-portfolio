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
            "Built the Bonds Identity microservice as the sole developer, delivering 50+ REST APIs for paperless KYC and supporting 5,000+ KYCs/day (1.5 lakh+/month).",
            "Reduced PAN-to-Aadhaar journey drop-off from 40% to 10% by pre-fetching verified KRA data and applicant photos, letting eligible users bypass DigiLocker.",
            "Reduced bank-verification drop-off from 25% to 15% with retry mechanisms and cancelled-cheque uploads using OCR-based account number and IFSC extraction.",
            "Architected a config-driven, multi-tenant KYC engine with tenant routing and data isolation, enabling partner onboarding without per-partner code changes.",
            "Unified Digio and HyperVerge integrations behind a single abstraction layer with weighted traffic distribution, per-API vendor locks, and automatic failover across 6 verification services.",
            "Designed the Bonds Vendor microservice as a centralized gateway for 20+ third-party integrations (99+ APIs) spanning bond discovery, KYC/KRA, NSE onboarding, payments, and AOF generation, with Redis-cached authentication, encrypted payloads, and per-call audit logging.",
            "Built an asynchronous Python (FastAPI) face-extraction worker using Redis queues, InsightFace, and OCR to extract applicant photos from KRA PDFs, offloading CPU-intensive work from Node.js services via streamed uploads and async job polling.",
            "Implemented a reliable event pipeline using Redis Streams and consumer groups, with exponential-backoff retries and stalled-message recovery, delivering 20+ customer journey events to the marketing automation platform.",
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
            "Built REST APIs with Node.js, Express.js, and MongoDB for an asset management system with scalable RBAC and JWT authentication.",
            "Optimized asset lifecycle tracking using MongoDB indexing and aggregation pipelines, improving auditability and access isolation.",
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
