import { ThemeProvider } from "@/components/theme-provider"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import type React from "react"

const raleway = Raleway({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hard Reset Labs  - You Shipped It. Now It’s Time to Defuse the Mess.",
  description: "You vibed a codebase into existence last weekend. Now it’s spaghetti with dreams."

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={raleway.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
