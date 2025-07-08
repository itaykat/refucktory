"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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
        {/* Privacy Policy Hero Section */}
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
                Legal
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Last updated: [Insert Date]
              </p>
            </motion.div>
          </div>
        </section>

        {/* Privacy Policy Content Section */}
        <section className="w-full py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12">
                <CardContent className="space-y-6">
                  <div className="prose prose-lg max-w-none dark:prose-invert">
                    <p className="text-base leading-relaxed mb-6">
                      This Privacy Policy describes how Hard Reset Labs collects, uses, and protects your data.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold mb-3">1. Data We Collect</h3>
                        <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
                          <li>Name and email address (via contact forms)</li>
                          <li>GitHub or project URLs you submit</li>
                          <li>Analytics data (via cookies and traffic logs)</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">2. Use of Data</h3>
                        <p className="text-base leading-relaxed mb-3">We use your data to:</p>
                        <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
                          <li>Evaluate and quote your project</li>
                          <li>Communicate with you during service delivery</li>
                          <li>Improve our website and service offerings</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">3. Cookies and Tracking</h3>
                        <p className="text-base leading-relaxed">
                          We use minimal analytics cookies to understand page visits. We do not use third-party ad networks.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">4. Data Sharing</h3>
                        <p className="text-base leading-relaxed">
                          We do not sell or rent your data. We may use service providers (e.g. email delivery, analytics) under strict data-processing agreements.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">5. Security</h3>
                        <p className="text-base leading-relaxed">
                          We use reasonable technical and organizational safeguards. However, transmission over the internet is never 100% secure.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">6. Your Rights</h3>
                        <p className="text-base leading-relaxed">
                          You may request access to or deletion of your personal data by contacting us at{" "}
                          <a
                            href="mailto:legal@hardresetlabs.dev"
                            className="text-primary hover:underline"
                          >
                            legal@hardresetlabs.dev
                          </a>.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">7. Compliance</h3>
                        <p className="text-base leading-relaxed">
                          We aim to comply with GDPR, CCPA, and other relevant regulations. If you have concerns, contact us.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">8. Updates</h3>
                        <p className="text-base leading-relaxed">
                          We may update this policy from time to time. Continued use of the site implies acceptance of the latest version.
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
    </div>
  )
}
