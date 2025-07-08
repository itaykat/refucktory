"use client"

import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <span>HARD RESET LABS</span>
          </div>
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 size-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Careers Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              {/* <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Careers
              </Badge> */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Join Us
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                We're not always hiring - but we're always watching.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Careers Content Section */}
        <section className="w-full py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12">
                <CardContent className="space-y-6">
                  <div className="prose prose-lg max-w-none dark:prose-invert">
                    <div className="space-y-6">
                      <div>
                        <p className="text-lg leading-relaxed mb-4">
                          If you:
                        </p>
                        <ul className="space-y-3 text-lg leading-relaxed mb-6">
                          <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1">•</span>
                            Have shipped code that made a system faster, safer, or cleaner
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1">•</span>
                            Believe clear commits are a moral obligation
                          </li>
                        </ul>
                        <p className="text-lg leading-relaxed mb-4">
                          Then email us at{" "}
                          <a
                            href="mailto:careers@hardresetlabs.dev"
                            className="text-primary hover:underline font-medium"
                          >
                            careers@hardresetlabs.dev
                          </a>. Attach a repo you've saved or a refactor you're proud of. Bonus points if it comes with a commit message that made someone cry (for the right reasons).
                        </p>
                        <p className="text-lg leading-relaxed font-medium">
                          No recruiters. No rockstars. No "ninjas." Just surgical engineers with standards.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
