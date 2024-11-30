import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Audio Transcription Pro',
  description: 'Professional audio transcription powered by AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-secondary text-secondary-foreground py-4 px-8 shadow-lg">
          <nav className="flex justify-between items-center max-w-4xl mx-auto">
            <div className="text-xl font-bold text-primary">AudioTrans Pro</div>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Contact</a></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}

