"use client"

import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
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
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Careers
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Join Hard Reset Labs
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Global project-based network of engineers focused on high-leverage interventions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Careers Content Section */}
        <section className="w-full py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="p-8 md:p-12">
                <CardContent className="space-y-8">
                  <div className="prose prose-lg max-w-none dark:prose-invert">
                    <p className="text-lg leading-relaxed mb-6">
                      At Hard Reset Labs, we operate as a global project-based network of experienced engineers focused on high-leverage interventions across all layers of the stack — from frontend to infrastructure, from dev tooling to backend systems. We don't offer traditional employment. We assemble precise teams of specialists per engagement to solve real problems with surgical precision.
                    </p>
                    <p className="text-lg leading-relaxed mb-8">
                      We partner with organizations that need to restore reliability, performance, and maintainability in systems under load. Whether it's a chaotic frontend bundle, a bloated CI/CD pipeline, or a distributed system outgrowing its foundation — we step in to rewrite, refactor, or rearchitect with clear boundaries and results.
                    </p>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Who We Work With</h3>
                        <p className="text-lg leading-relaxed">
                          Our clients include fast-scaling startups, cloud-native product teams, infrastructure vendors, and engineering leadership trying to regain control of legacy systems. We operate quietly, decisively, and with a high standard of technical and editorial clarity.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold mb-4">How We Work</h3>
                        <ul className="space-y-3 text-lg leading-relaxed">
                          <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1 text-xl">•</span>
                            Fully remote, async-first culture
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1 text-xl">•</span>
                            Project-based assignments (2 to 12 weeks)
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1 text-xl">•</span>
                            Team size: solo, pair, or trio depending on scope
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1 text-xl">•</span>
                            Transparent flat-rate or milestone-based contracts
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1 text-xl">•</span>
                            We meet deadlines. We write postmortems. We merge clean histories.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold mb-4">Current Needs</h3>
                        <p className="text-lg leading-relaxed mb-6">
                          We're looking to expand our bench with professionals in the following areas:
                        </p>

                        <div className="space-y-6">
                          <div>
                            <h4 className="text-xl font-bold mb-3">Fullstack & Frontend Engineers</h4>
                            <ul className="space-y-2 text-base leading-relaxed pl-4">
                              <li className="flex items-start">
                                <span className="text-primary mr-2 mt-1">•</span>
                                Experience building production-grade frontend systems
                              </li>
                              <li className="flex items-start">
                                <span className="text-primary mr-2 mt-1">•</span>
                                Deep experience with modern frameworks
                              </li>
                              <li className="flex items-start">
                                <span className="text-primary mr-2 mt-1">•</span>
                                Strong command of TypeScript, performance profiling, and design systems
                              </li>
                              <li className="flex items-start">
                                <span className="text-primary mr-2 mt-1">•</span>
                                Familiarity with AI-integrated UIs and dev-focused user experiences
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-xl font-bold mb-3">Backend & Systems Engineers</h4>
                            <ul className="space-y-2 text-base leading-relaxed pl-4">
                              <li className="flex items-start">
                                <span className="text-primary mr-2 mt-1">•</span>
                                Strong in at least two programming languages
                              </li>
                              <li className="flex items-start">
                                <span className="text-primary mr-2 mt-1">•</span>
                                Comfortable working in containerized, distributed environments
                              </li>
                              <li className="flex items-start">
                                <span className="text-primary mr-2 mt-1">•</span>
                                Experience rewriting services and optimizing pipelines
                              </li>
                              <li className="flex items-start">
                                <span className="text-primary mr-2 mt-1">•</span>
                                Understanding of observability, logging systems, and async job orchestration
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-xl font-bold mb-3">DevOps & Tooling Engineers</h4>
                            <ul className="space-y-2 text-base leading-relaxed pl-4">
                              <li className="flex items-start">
                                <span className="text-primary mr-2 mt-1">•</span>
                                Expertise in CI/CD systems and build optimization
                              </li>
                              <li className="flex items-start">
                                <span className="text-primary mr-2 mt-1">•</span>
                                Ability to streamline Git workflows and enforce commit hygiene
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold mb-4">What We Expect</h3>
                        <ul className="space-y-3 text-lg leading-relaxed">
                          <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1 text-xl">•</span>
                            5+ years of real-world experience
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1 text-xl">•</span>
                            Clarity in writing (commit messages, code reviews, docs)
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1 text-xl">•</span>
                            Comfortable in async collaboration
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1 text-xl">•</span>
                            Ability to scope and own delivery
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1 text-xl">•</span>
                            Familiarity with open-source practices is a plus
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold mb-4">Compensation</h3>
                        <ul className="space-y-3 text-lg leading-relaxed">
                          <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1 text-xl">•</span>
                            Very competitive, transparent, contract-based pay — we reward depth, clarity, and delivery
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1 text-xl">•</span>
                            Rates adjusted by role, duration, and project impact
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1 text-xl">•</span>
                            No equity. No ping-pong. Just deep work, paid accordingly
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold mb-4">How to Apply</h3>
                        <p className="text-lg leading-relaxed mb-4">
                          Send a short email to{" "}
                          <a
                            href="mailto:careers@hardresetlabs.com"
                            className="text-primary hover:underline font-medium"
                          >
                            careers@hardresetlabs.com
                          </a>{" "}
                          with:
                        </p>
                        <ul className="space-y-3 text-lg leading-relaxed mb-6">
                          <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1 text-xl">•</span>
                            Your background and areas of technical focus
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1 text-xl">•</span>
                            Sample project or refactor you're proud of (anonymized if needed)
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1 text-xl">•</span>
                            GitHub, portfolio, or CLI tools you've built
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1 text-xl">•</span>
                            Availability (next 3 months)
                          </li>
                        </ul>
                        <p className="text-lg leading-relaxed font-medium">
                          We don't fill roles — we deploy talent into surgically scoped engagements. If you're serious about engineering and allergic to cruft, we want to hear from you.
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
