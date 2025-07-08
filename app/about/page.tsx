"use client"

import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
        {/* About Hero Section */}
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
                About Us
              </Badge> */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                About Us
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Cleaning up technical wreckage, one codebase at a time.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content Section */}
        <section className="w-full py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12">
                <CardContent className="space-y-6">
                  <div className="prose prose-lg max-w-none dark:prose-invert">
                    <p className="text-lg leading-relaxed mb-6">
                      Hard Reset Labs exists for one reason: to clean up the technical wreckage left behind by well-meaning developers, rushed MVPs, and overconfident founders. We are a global collective of engineers who've been deep in the trenches - from early-stage chaos to post-scale rot - and we know how to rebuild under pressure.


                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                      We specialize in refactors, architectural rewrites, Git hygiene, and narrative control for codebases that got a little out of hand. We operate quietly, under the radar, and largely by referral - not out of mystique, but because our work speaks for itself (and also because some of our clients prefer not to publicly admit what their code looked like before we arrived).
                    </p>
                    <p className="text-lg leading-relaxed">


                      Behind the sarcasm, we're deadly serious about the quality and precision of what we ship. Every engagement is a commitment to clarity, correctness, and structural integrity. We don’t just improve code - we reset its trajectory.   </p>
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
