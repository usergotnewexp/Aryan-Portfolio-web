'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, Rocket } from 'lucide-react'
import { StackVertical } from '@/components/layout/layout-stack/layout-stack'
import Text from '@/components/ui/text/text'
import TextHeading from '@/components/ui/text-heading/text-heading'
import { cn } from '@/lib/utils/utils'
import { monoFont } from '@/styles/fonts/fonts'
import Link from 'next/link'

interface FeaturedProject {
    id: number
    title: string
    description: string
    tags: string[]
    repo: string
    gradient: string
    icon: string
}

const featuredProjects: FeaturedProject[] = [
    {
        id: 1,
        title: "Brain Tumor Detection",
        description: "Deep learning model for medical imaging analysis using CNNs for brain tumor classification and detection.",
        tags: ["Deep Learning", "Medical AI", "CNN", "Python"],
        repo: "https://github.com/usergotnewexp/brain-tumor-res",
        gradient: "from-rose-500 to-purple-600",
        icon: "🧠"
    },
    {
        id: 2,
        title: "Bayesian Modeling",
        description: "Statistical modeling experiments implementing Bayesian inference techniques for probabilistic predictions.",
        tags: ["Bayesian", "Statistics", "Python", "Inference"],
        repo: "https://github.com/usergotnewexp/Bayesian-Model-re",
        gradient: "from-cyan-500 to-blue-600",
        icon: "📊"
    },
    {
        id: 3,
        title: "PySpark Data Pipeline",
        description: "End-to-end distributed data processing pipeline with feature engineering and ETL workflows.",
        tags: ["PySpark", "Big Data", "ETL", "Data Engineering"],
        repo: "https://github.com/usergotnewexp/Pyspark-pipeline-implementation",
        gradient: "from-orange-500 to-red-600",
        icon: "⚡"
    }
]

function ProjectCard({ project, index }: { project: FeaturedProject; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group relative"
        >
            <div className="card-premium h-full flex flex-col">
                {/* Gradient accent bar */}
                <div className={cn(
                    "absolute top-0 left-0 right-0 h-1 rounded-t-xl",
                    `bg-gradient-to-r ${project.gradient}`
                )} />

                {/* Header */}
                <div className="flex items-start justify-between mb-4 pt-2">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">{project.icon}</span>
                        <TextHeading as="h3" className="text-xl font-bold group-hover:text-primary transition-colors">
                            {project.title}
                        </TextHeading>
                    </div>
                    <Link
                        href={project.repo}
                        target="_blank"
                        className="p-2 rounded-lg bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all"
                    >
                        <Github className="w-5 h-5" />
                    </Link>
                </div>

                {/* Description */}
                <Text variant="muted" className="mb-4 flex-grow">
                    {project.description}
                </Text>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className={cn(
                                "px-2.5 py-1 text-xs rounded-md",
                                "bg-muted/70 text-muted-foreground",
                                "group-hover:bg-primary/10 group-hover:text-primary",
                                "transition-colors",
                                monoFont.className
                            )}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Link */}
                <Link
                    href={project.repo}
                    target="_blank"
                    className={cn(
                        "inline-flex items-center gap-2 text-sm font-medium",
                        "text-muted-foreground group-hover:text-primary",
                        "transition-colors",
                        monoFont.className
                    )}
                >
                    View on GitHub
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    )
}

export function FeaturedProjects() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="py-8"
        >
            <StackVertical gap="lg">
                {/* Section Header */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3"
                    >
                        <div className="p-2 rounded-lg bg-primary/10">
                            <Rocket className="w-5 h-5 text-primary" />
                        </div>
                        <TextHeading as="h2" className="text-2xl font-bold">
                            Featured Projects
                        </TextHeading>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <Link
                            href="/projects"
                            className={cn(
                                "inline-flex items-center gap-2 text-sm",
                                "text-muted-foreground hover:text-primary",
                                "transition-colors group",
                                monoFont.className
                            )}
                        >
                            View all projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <Text variant="muted" className="max-w-2xl">
                    Showcasing my best work in machine learning, data engineering, and AI research.
                </Text>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </StackVertical>
        </motion.div>
    )
}
