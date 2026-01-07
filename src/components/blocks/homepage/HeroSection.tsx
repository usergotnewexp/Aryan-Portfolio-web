'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { monoFont } from '@/styles/fonts/fonts'
import { cn } from '@/lib/utils/utils'
import TextHeading from '@/components/ui/text-heading/text-heading'
import Text from '@/components/ui/text/text'
import { StackVertical } from '@/components/layout/layout-stack/layout-stack'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRight, Github, Brain, Database, Code2, Sparkles } from 'lucide-react'

const titles = [
    "Data Scientist",
    "ML Engineer", 
    "AI Researcher",
    "Python Developer"
]

const stats = [
    { value: "9+", label: "Projects", icon: <Code2 className="w-4 h-4" /> },
    { value: "7+", label: "Technologies", icon: <Database className="w-4 h-4" /> },
    { value: "ML", label: "Focused", icon: <Brain className="w-4 h-4" /> }
]

function TypewriterText() {
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
    const [displayText, setDisplayText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentTitle = titles[currentTitleIndex]
        
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentTitle.length) {
                    setDisplayText(currentTitle.slice(0, displayText.length + 1))
                } else {
                    setTimeout(() => setIsDeleting(true), 2000)
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1))
                } else {
                    setIsDeleting(false)
                    setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
                }
            }
        }, isDeleting ? 50 : 100)

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, currentTitleIndex])

    return (
        <span className="text-gradient-animated">
            {displayText}
            <span className="animate-pulse text-primary">|</span>
        </span>
    )
}

function FloatingCodeSnippet({ delay, className }: { delay: number; className?: string }) {
    const codeSnippets = [
        "import torch",
        "model.fit(X, y)",
        "df.describe()",
        "np.array([...])",
        "sklearn.metrics",
        "plt.show()"
    ]
    
    const randomSnippet = codeSnippets[Math.floor(delay * 10) % codeSnippets.length]
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
                opacity: [0.3, 0.6, 0.3],
                y: [-5, 5, -5]
            }}
            transition={{ 
                delay,
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className={cn(
                "absolute px-3 py-1.5 rounded-md text-xs font-mono",
                "bg-card/50 backdrop-blur-sm border border-border/50",
                "text-muted-foreground hidden md:block",
                className
            )}
        >
            {randomSnippet}
        </motion.div>
    )
}

function NeuralNode({ delay, className }: { delay: number; className?: string }) {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ 
                delay,
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className={cn(
                "absolute w-3 h-3 rounded-full",
                "bg-gradient-to-r from-cyan-400 to-purple-500",
                "hidden md:block",
                className
            )}
        />
    )
}

export function HeroSection() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative py-8 md:py-12"
        >
            {/* Floating decorative elements */}
            <FloatingCodeSnippet delay={0.2} className="top-4 right-8" />
            <FloatingCodeSnippet delay={0.5} className="bottom-20 right-16" />
            <FloatingCodeSnippet delay={0.8} className="top-20 left-[60%]" />
            
            <NeuralNode delay={0.3} className="top-8 right-32" />
            <NeuralNode delay={0.6} className="bottom-32 right-8" />
            <NeuralNode delay={0.9} className="top-24 right-[45%]" />

            <div className="relative z-10">
                <StackVertical gap="lg">
                    {/* Greeting with animated wave */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-3"
                    >
                        <motion.span
                            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                            transition={{ 
                                duration: 2.5, 
                                repeat: Infinity, 
                                repeatDelay: 3 
                            }}
                            className="text-3xl md:text-4xl"
                        >
                            👋
                        </motion.span>
                        <Text className={cn("text-lg text-muted-foreground", monoFont.className)}>
                            Hi, I'm Aryan
                        </Text>
                    </motion.div>

                    {/* Main headline with typing effect */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <TextHeading 
                            as="h1" 
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                        >
                            <span className="block text-foreground mb-2">
                                Aspiring
                            </span>
                            <TypewriterText />
                        </TextHeading>
                    </motion.div>

                    {/* Tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Text className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                            Transforming raw data into actionable intelligence. 
                            I build ML systems, analyze complex datasets, and create 
                            thoughtful web interfaces.
                        </Text>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-4 pt-2"
                    >
                        <Link 
                            href="/projects"
                            className="btn-primary inline-flex items-center gap-2 group"
                        >
                            View Projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link 
                            href="https://github.com/usergotnewexp"
                            target="_blank"
                            className="btn-secondary inline-flex items-center gap-2"
                        >
                            <Github className="w-4 h-4" />
                            GitHub
                        </Link>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap gap-6 pt-8 border-t border-border/50 mt-4"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.9 + index * 0.1 }}
                                className="flex items-center gap-3"
                            >
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    {stat.icon}
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-foreground">
                                        {stat.value}
                                    </div>
                                    <div className={cn("text-xs text-muted-foreground", monoFont.className)}>
                                        {stat.label}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </StackVertical>
            </div>

            {/* Decorative gradient orb */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
    )
}
