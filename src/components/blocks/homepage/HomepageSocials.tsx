'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, ArrowUpRight, Github, Twitter } from 'lucide-react'
import TextHeading from '@/components/ui/text-heading/text-heading'
import Text from '@/components/ui/text/text'
import Link from 'next/link'
import { cn } from '@/lib/utils/utils'
import { monoFont } from '@/styles/fonts/fonts'

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/usergotnewexp",
        icon: <Github className="w-5 h-5" />,
        username: "@usergotnewexp",
        color: "hover:text-foreground hover:border-foreground/50"
    },
    {
        name: "X (Twitter)",
        href: "https://x.com/indeedlemonpie",
        icon: <Twitter className="w-5 h-5" />,
        username: "@indeedlemonpie",
        color: "hover:text-blue-400 hover:border-blue-400/50"
    },
    {
        name: "Email",
        href: "mailto:aryangahlot50@gmail.com",
        icon: <Mail className="w-5 h-5" />,
        username: "aryangahlot50@gmail.com",
        color: "hover:text-emerald-400 hover:border-emerald-400/50"
    }
]

export function HomepageSocials() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="py-8 border-t border-border/50"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                    <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <TextHeading as="h2" className="text-2xl font-bold">
                    Let's Connect
                </TextHeading>
            </div>

            <Text variant="muted" className="mb-6 max-w-xl">
                Open to collaborations on ML/AI projects, research opportunities,
                or just a chat about data science. Feel free to reach out!
            </Text>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socialLinks.map((link, index) => (
                    <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                    >
                        <Link
                            href={link.href}
                            target={link.name !== "Email" ? "_blank" : undefined}
                            className={cn(
                                "group flex items-center gap-3 p-4 rounded-xl",
                                "bg-card/50 backdrop-blur-sm border border-border/50",
                                "transition-all duration-300",
                                link.color
                            )}
                        >
                            <div className="p-2 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                                {link.icon}
                            </div>
                            <div className="flex-grow min-w-0">
                                <div className="font-medium text-sm">{link.name}</div>
                                <div className={cn(
                                    "text-xs text-muted-foreground truncate",
                                    monoFont.className
                                )}>
                                    {link.username}
                                </div>
                            </div>
                            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}