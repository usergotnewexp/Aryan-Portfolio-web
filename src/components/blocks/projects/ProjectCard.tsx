import { Github } from 'lucide-react'
import Link from 'next/link'
import Text from '@/components/ui/text/text'
import TextHeading from '@/components/ui/text-heading/text-heading'

interface Props {
    project: {
        id: number
        title: string
        description: string
        tags: string[]
        repo?: string
        link?: string
    }
}

export default function ProjectCard({ project }: Props) {
    return (
        <div className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors">
            <div className="flex justify-between items-start mb-3">
                <TextHeading as="h3" weight="bold" className="text-lg">
                    {project.title}
                </TextHeading>

                {project.repo ? (
                    <Link href={project.repo} target="_blank" className="text-blue-500 hover:text-blue-600 transition-colors">
                        <Github className="w-5 h-5" />
                    </Link>
                ) : project.link ? (
                    <Link href={project.link} target="_blank" className="text-blue-500 hover:text-blue-600 transition-colors">
                        Visit
                    </Link>
                ) : null}
            </div>

            <Text variant="muted" size="sm" className="mb-4">
                {project.description}
            </Text>

            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-500">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
}
