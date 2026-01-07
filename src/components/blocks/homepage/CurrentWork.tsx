'use client'

import { motion } from 'framer-motion'
import {
    Brain, Database, Code2, Server,
    BarChart3, FileCode, Layers, Cpu,
    Sparkles, TrendingUp
} from 'lucide-react'
import { StackVertical } from '@/components/layout/layout-stack/layout-stack'
import Text from '@/components/ui/text/text'
import TextHeading from '@/components/ui/text-heading/text-heading'
import { cn } from '@/lib/utils/utils'
import { monoFont } from '@/styles/fonts/fonts'

interface SkillCategory {
    title: string
    icon: React.ReactNode
    skills: { name: string; level?: number }[]
    gradient: string
}

const skillCategories: SkillCategory[] = [
    {
        title: "Machine Learning & AI",
        icon: <Brain className="w-5 h-5" />,
        gradient: "from-cyan-500 to-blue-500",
        skills: [
            { name: "PyTorch", level: 85 },
            { name: "TensorFlow", level: 80 },
            { name: "Scikit-learn", level: 90 },
            { name: "Deep Learning", level: 85 },
            { name: "NLP", level: 75 }
        ]
    },
    {
        title: "Data Engineering",
        icon: <Database className="w-5 h-5" />,
        gradient: "from-purple-500 to-pink-500",
        skills: [
            { name: "PySpark", level: 80 },
            { name: "Pandas", level: 95 },
            { name: "NumPy", level: 95 },
            { name: "SQL", level: 85 },
            { name: "Data Pipelines", level: 80 }
        ]
    },
    {
        title: "Development",
        icon: <Code2 className="w-5 h-5" />,
        gradient: "from-orange-500 to-red-500",
        skills: [
            { name: "Python", level: 95 },
            { name: "TypeScript", level: 80 },
            { name: "Next.js", level: 85 },
            { name: "Django", level: 75 },
            { name: "Git", level: 85 }
        ]
    }
]

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
            className="card-premium group"
        >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                <div className={cn(
                    "p-2.5 rounded-lg",
                    `bg-gradient-to-br ${category.gradient}`,
                    "text-white shadow-lg"
                )}>
                    {category.icon}
                </div>
                <TextHeading as="h3" className="text-lg font-semibold">
                    {category.title}
                </TextHeading>
            </div>

            {/* Skills List */}
            <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.15 + skillIndex * 0.05 }}
                        className="flex items-center justify-between"
                    >
                        <Text className={cn("text-sm", monoFont.className)}>
                            {skill.name}
                        </Text>
                        {skill.level && (
                            <div className="flex items-center gap-2">
                                <div className="w-24 h-1.5 bg-muted rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.level}%` }}
                                        transition={{ delay: 0.6 + index * 0.15 + skillIndex * 0.05, duration: 0.8 }}
                                        className={cn(
                                            "h-full rounded-full",
                                            `bg-gradient-to-r ${category.gradient}`
                                        )}
                                    />
                                </div>
                                <Text variant="muted" size="sm" className={monoFont.className}>
                                    {skill.level}%
                                </Text>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export function CurrentWork() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="py-8"
        >
            <StackVertical gap="lg">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-3"
                >
                    <div className="p-2 rounded-lg bg-primary/10">
                        <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <TextHeading as="h2" className="text-2xl font-bold">
                        Tech Stack & Expertise
                    </TextHeading>
                </motion.div>

                <Text variant="muted" className="max-w-2xl">
                    Specialized in building end-to-end ML pipelines, from data preprocessing
                    to model deployment. Here's my technical toolkit:
                </Text>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {skillCategories.map((category, index) => (
                        <SkillCard
                            key={category.title}
                            category={category}
                            index={index}
                        />
                    ))}
                </div>

                {/* Currently Learning */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-6 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-border/50"
                >
                    <div className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <Text className="font-medium">Currently Exploring:</Text>
                        <div className="flex flex-wrap gap-2">
                            {["LLMs", "Transformers", "MLOps", "Bayesian Methods"].map((topic) => (
                                <span
                                    key={topic}
                                    className={cn(
                                        "px-3 py-1 text-xs rounded-full",
                                        "bg-primary/10 text-primary",
                                        monoFont.className
                                    )}
                                >
                                    {topic}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </StackVertical>
        </motion.div>
    )
}