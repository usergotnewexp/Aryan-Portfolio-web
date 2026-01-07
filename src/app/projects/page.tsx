'use client'

import { StackVertical } from "@/components/layout/layout-stack/layout-stack"
import Text from "@/components/ui/text/text"
import TextHeading from "@/components/ui/text-heading/text-heading"
import { DynamicBreadcrumb } from "@/components/ui/primitives/breadcrumb"
import { ThemeToggle } from "@/components/ui/theme/theme-toggle"
import { motion } from "framer-motion"
import ProjectCard from '@/components/blocks/projects/ProjectCard'
import { projects } from '@/lib/projects/projects'

export default function ProjectsPage() {
    return (
        <StackVertical gap="md">
            <div className="flex items-center justify-between">
                <DynamicBreadcrumb 
                    items={[
                        { href: '/', label: 'Home', emoji: '🚀' },
                        { label: 'Projects' }
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
                    Projects
                </TextHeading>
                <Text variant="muted" size="sm">
                    A showcase of my work and projects. Check back soon for updates!
                </Text>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
            >
                {/* Mini Projects Section */}
                <div className="col-span-full">
                    <TextHeading as="h2" weight="bold" className="text-xl mb-4">
                        Mini Projects
                    </TextHeading>
                </div>

                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}

                {/* end of projects list */}
            </motion.div>
        </StackVertical>
    )
} 
