'use client'

import { StackVertical } from "@/components/layout/layout-stack/layout-stack"
import Text from "@/components/ui/text/text"
import TextHeading from "@/components/ui/text-heading/text-heading"
import { DynamicBreadcrumb } from "@/components/ui/primitives/breadcrumb"
import { ThemeToggle } from "@/components/ui/theme/theme-toggle"
import { motion } from "framer-motion"

export default function BlogPage() {
    return (
        <StackVertical gap="md">
            <div className="flex items-center justify-between">
                <DynamicBreadcrumb 
                    items={[
                        { href: '/', label: 'Home', emoji: '✍️' },
                        { label: 'Blog' }
                    ]}
                />
                <ThemeToggle />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <TextHeading as="h1" weight="bold">
                    Blog
                </TextHeading>
                <Text variant="muted" size="sm">
                    My thoughts, experiences, and learnings. Coming soon!
                </Text>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6"
            >
                <div className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors">
                    <TextHeading as="h3" weight="bold" className="text-lg mb-2">
                        Coming Soon
                    </TextHeading>
                    <Text variant="muted" size="sm">
                        Blog posts will be added here. Stay tuned for updates!
                    </Text>
                </div>
            </motion.div>
        </StackVertical>
    )
}