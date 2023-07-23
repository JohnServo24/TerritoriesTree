import styles from './MainLayout.module.scss'
import '@/styles/globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'TerritoriesTree',
    description: 'A list of Philippine territories and their subterritories',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className={styles["main-layout"]}>
                    {children}
                </main>
            </body>
        </html>
    )
}
