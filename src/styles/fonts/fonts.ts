import { Space_Grotesk, Outfit, JetBrains_Mono } from 'next/font/google'

export const monoFont = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-mono',
    display: 'swap',
})

export const sansFont = Space_Grotesk({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-sans',
    display: 'swap',
})

export const codeFont = Outfit({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-code',
    display: 'swap',
})