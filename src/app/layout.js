import './globals.css'
import { Lato } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],   // Add other weights if needed
  style: ['normal', 'italic'], // Optional: include italic if needed
})

export const metadata = {
  title: 'Check Weather',
  description: 'Your Travel & Adventure Weather Guide',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        {children}
      </body>
    </html>
  )
}
