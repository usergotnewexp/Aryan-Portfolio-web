'use client'

import { StackVertical } from "@/components/layout/layout-stack/layout-stack"
import Text from "@/components/ui/text/text"
import TextHeading from "@/components/ui/text-heading/text-heading"
import { DynamicBreadcrumb } from "@/components/ui/primitives/breadcrumb"
import { ThemeToggle } from "@/components/ui/theme/theme-toggle"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils/utils"
import { monoFont } from "@/styles/fonts/fonts"
import { GraduationCap, Brain, Code2, Lightbulb, Target, Sparkles } from "lucide-react"

const journey = [
    {
        icon: <GraduationCap className="w-5 h-5" />,
        title: "ECE Background",
        description: "Electronics & Communication Engineering undergrad with strong foundations in mathematics and signal processing."
    },
    {
        icon: <Brain className="w-5 h-5" />,
        title: "ML & AI Focus",
        description: "Self-taught machine learning practitioner, fascinated by how algorithms learn from data and make predictions."
    },
    {
        icon: <Code2 className="w-5 h-5" />,
        title: "Full-Stack Skills",
        description: "Building end-to-end solutions from data pipelines to web interfaces with Python, Django, and Next.js."
    },
    {
        icon: <Lightbulb className="w-5 h-5" />,
        title: "Research Mindset",
        description: "Curious about the 'why' behind systems, constantly exploring new concepts in statistics and deep learning."
    }
]

export default function AboutPage() {
    return (
        <StackVertical gap="md">
            <div className="flex items-center justify-between">
                <DynamicBreadcrumb
                    items={[
                        { href: '/', label: 'Home', emoji: '🏠' },
                        { label: 'About' }
                    ]}
                />
                <ThemeToggle />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl"
            >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary/10">
                        <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <TextHeading as="h1" weight="bold" className="text-3xl md:text-4xl">
                        About Me
                    </TextHeading>
                </div>

                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                >
                    <Text className="text-lg leading-relaxed mb-4">
                        I&apos;m <span className="font-semibold text-primary">Aryan Gahlot</span>,
                        an ECE undergrad with a deep passion for <span className="text-gradient font-semibold">data science</span>,
                        <span className="text-gradient font-semibold"> machine learning</span>, and the
                        mathematics that powers intelligent systems.
                    </Text>
                    <Text className="leading-relaxed text-muted-foreground">
                        While my degree is in electronics, my heart is in algorithms, code, and
                        understanding how raw data transforms into actionable insights. I&apos;m a
                        self-taught practitioner who believes in learning by building.
                    </Text>
                </motion.div>

                {/* Journey Cards */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                >
                    <TextHeading as="h2" className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        My Journey
                    </TextHeading>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {journey.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="card-premium"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <TextHeading as="h3" className="font-semibold mb-1">
                                            {item.title}
                                        </TextHeading>
                                        <Text variant="muted" size="sm">
                                            {item.description}
                                        </Text>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Philosophy */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-border/50"
                >
                    <TextHeading as="h2" className="text-xl font-semibold mb-3">
                        💡 My Philosophy
                    </TextHeading>
                    <Text className="leading-relaxed">
                        I believe in understanding the <em>&quot;why&quot;</em> behind systems, not just
                        using them. Whether it&apos;s implementing regression from scratch or building
                        a neural network, I enjoy diving deep into the fundamentals. Learning isn&apos;t
                        a phase for me—it&apos;s how I approach everything.
                    </Text>
                </motion.div>

                {/* What I'm Looking For */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-8"
                >
                    <TextHeading as="h2" className="text-xl font-semibold mb-3">
                        🎯 What I&apos;m Looking For
                    </TextHeading>
                    <Text className="leading-relaxed text-muted-foreground">
                        I&apos;m actively seeking opportunities in <span className="text-foreground font-medium">data science</span>,
                        <span className="text-foreground font-medium"> ML engineering</span>, or
                        <span className="text-foreground font-medium"> AI research</span>. I&apos;m excited
                        about roles where I can apply my skills to solve meaningful problems and
                        continue growing as a practitioner.
                    </Text>
                </motion.div>
            </motion.div>
        </StackVertical>
    )
}
