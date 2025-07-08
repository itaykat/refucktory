"use client"

import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsOfServicePage() {
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
        {/* Terms of Service Hero Section */}
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
                Legal
              </Badge> */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Terms of Service
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Last updated: July 8th, 2025
              </p>
            </motion.div>
          </div>
        </section>

        {/* Terms of Service Content Section */}
        <section className="w-full py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12">
                <CardContent className="space-y-6">
                  <div className="prose prose-lg max-w-none dark:prose-invert">
                    <p className="text-base leading-relaxed mb-6">
                      Welcome to Hard Reset Labs. By accessing or using our website, services, or interacting with any materials (including our code refactor deliverables, assessments, and consultation), you agree to be bound by these Terms of Service. If you do not agree, do not use our services.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold mb-3">1. Scope of Service</h3>
                        <p className="text-base leading-relaxed">
                          Hard Reset Labs provides high-impact, one-time technical refactor services, code reviews, software rewrites, and related consulting. We are not a maintenance provider. All engagements are scoped, quoted, and delivered with clear handoff.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">2. Who We Are</h3>
                        <p className="text-base leading-relaxed">
                          Hard Reset Labs is a collective of professional software engineers with extensive backgrounds in a wide range of technologies, systems, and architectural paradigms. While our website and language use humor, irony, and sarcasm to reflect developer reality, our work is rigorously professional, deeply methodical, and rooted in decades of engineering experience across startups, enterprises, and infrastructure teams. We take our craft - and your codebase - seriously.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">3. Professional Conduct</h3>
                        <p className="text-base leading-relaxed">
                          We provide all services with honesty, sarcasm, and brutal technical clarity. All assessments, commentary, and deliverables are based on our professional judgment. Our humor is blunt, but our engineering standards are strict.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">4. Payments and Refunds</h3>
                        <p className="text-base leading-relaxed">
                          All payments are due as quoted. We operate on a flat-fee or milestone model. All sales are final. No refunds will be issued unless contractually agreed in writing.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">5. Client Responsibilities</h3>
                        <p className="text-base leading-relaxed">
                          You are responsible for providing access to the relevant codebases, documentation, and clarifications. You affirm you own or have permission to share all materials submitted.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">6. Delivery</h3>
                        <p className="text-base leading-relaxed">
                          All work is delivered via pull requests, documentation, and supplementary reports. You are responsible for integrating and testing within your own environments.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">7. Confidentiality</h3>
                        <p className="text-base leading-relaxed">
                          We offer and sign standard NDAs upon request. All data and code shared with us will be treated as confidential and will not be used outside the engagement scope.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">8. Intellectual Property</h3>
                        <p className="text-base leading-relaxed">
                          All custom code we write for you is yours upon delivery and full payment. We retain the right to reuse general techniques, patterns, or boilerplate.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">9. Limitations of Liability</h3>
                        <p className="text-base leading-relaxed">
                          Hard Reset Labs is not liable for business losses, data corruption, or misuse of advice. We offer professional judgment - not guarantees. Use our refactored code at your own discretion.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">10. Jurisdiction</h3>
                        <p className="text-base leading-relaxed">
                          These Terms shall be governed under the laws of the jurisdiction in which Hard Reset Labs is legally registered. Any dispute shall be settled in the appropriate local courts.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">11. Amendments</h3>
                        <p className="text-base leading-relaxed">
                          We may update these terms at any time. Continued use of our services implies agreement to the updated terms.
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
