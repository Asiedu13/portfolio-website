import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins( { weight: ['100', '200', '500'] , subsets: ['latin'] })

export const metadata = {
  title: 'Prince Kofi Asiedu',
  description: 'My personal portfolio',
  keywords: ["Prince", "Asiedu"," Kofi", "Ghana", "web","developer", "frontend", "backend", "fullstack", "african", "software developer", "software", "IT", "ICT", "Node.JS", "Next.JS", "React.JS", "KNUST", "Accra", "engineer", "software engineer"]  // TODO: Edit this
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
