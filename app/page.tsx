"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import {
  ArrowRight,
  BarChart,
  Check,
  ChevronRight,
  Layers,
  Menu,
  Shield,
  Star,
  Users,
  X,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [visibleTestimonialRows, setVisibleTestimonialRows] = useState(2)
  const [showAllFAQs, setShowAllFAQs] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const services = [
    {
      title: "Spaghetti Containment",
      description: "We isolate logic, extract functionality, and burn everything that starts with utils/.",
      icon: <Zap className="size-5" />,
    },
    {
      title: "Reality-Based Refactors",
      description: "You don't need Scale. You need code that doesn't crash when someone logs in twice.",
      icon: <BarChart className="size-5" />,
    },
    {
      title: "Team-Onboardable Code",
      description: "Readable. Testable. Commented. The kind of code that won't scare your next hire.",
      icon: <Users className="size-5" />,
    },
    {
      title: " Tech-Debt Triage",
      description: "We find the fires, categorize the rot, and prioritize the least terrible path forward.",
      icon: <Shield className="size-5" />,
    },
    {
      title: "Tool Detox & Reintegration",
      description: "We remove the noise and stitch your app back together with frameworks that actually make sense.",
      icon: <Layers className="size-5" />,
    },
    {
      title: "Human Support",
      description: "We don't do 24/7. But we'll answer emails during working hours.",
      icon: <Star className="size-5" />,
    },
  ]

  const testimonials = [
    {
      quote: "They made sense of a codebase I was too scared to open. I just renamed the repo and pretended I wrote it myself.",
      author: "Jon",
      role: "solo founder with imposter syndrome",
      rating: 4,
    },
    {
      quote: "Before Refucktory, our deploys were spiritual experiences. Now they're just… deploys.",
      author: "Maya",
      role: "CTO @ funded app with 12 daily users",
      rating: 5,
    },
    {
      quote: "They turned our 'AI SaaS platform' into an actual platform. Also told us to fire our backend guy. We did.",
      author: "Leon",
      role: "Head of Engineering, quietly relieved",
      rating: 5,
    },
    {
      quote: "They found a bug I'd gaslit my team about for 6 months.",
      author: "Anonymous",
      role: "still employed",
      rating: 3,
    },
    {
      quote: "We thought we needed more devs. Turns out we needed fewer files and fewer feelings.",
      author: "Elina",
      role: "product manager with PTSD",
      rating: 4,
    },
    {
      quote: "They didn't just refactor our code. They refactored our trauma.",
      author: "Alex",
      role: "cofounder with therapy budget",
      rating: 5,
    },
    {
      quote: "They found 3 different date libraries and 6 copies of lodash. We cried. Then we paid them.",
      author: "Two ex-founders",
      role: "now consultants",
      rating: 4,
    },
    {
      quote: "It used to crash when we scrolled. Now it's boring and stable. Thanks, I guess.",
      author: "Ron",
      role: "early user, hates change",
      rating: 3,
    },
    {
      quote: "They made my 'proof of concept' stop deleting users at random.",
      author: "CTO",
      role: "@ VC-funded mess",
      rating: 5,
    },
    {
      quote: "Now my side project doesn't crash when more than 2 people use it.",
      author: "Indie Hacker",
      role: "relieved",
      rating: 4,
    },
    {
      quote: "I wrote the original code drunk. They sobered it up without judging me.",
      author: "Felix",
      role: "weekend hacker turned VC-funded CEO",
      rating: 5,
    },
    {
      quote: "Our CI/CD pipeline was a Google Doc and a prayer. Now it's an actual pipeline.",
      author: "Dana",
      role: "formerly DevOps-in-name-only",
      rating: 4,
    },
    {
      quote: "They refucktored our GraphQL server. Now it only returns what we ask for.",
      author: "Arjun",
      role: "frontend dev, finally unblocked",
      rating: 5,
    },
    {
      quote: "Their PR comments were brutal but correct. We merged them with tears.",
      author: "Chloe",
      role: "junior dev, now slightly more senior",
      rating: 3,
    },
    {
      quote: "The code they delivered runs faster, reads cleaner, and doesn't make my laptop overheat.",
      author: "Ben",
      role: "who used to hear fan noise as a warning signal",
      rating: 5,
    },
    {
      quote: "They removed an entire microservice by asking: 'Why does this exist?'",
      author: "Tali",
      role: "staff engineer, didn't have a good answer",
      rating: 4,
    },
    {
      quote: "We had 14 models for the same user object. They made it one. I didn't know that was legal.",
      author: "Omer",
      role: "backend developer in recovery",
      rating: 5,
    },
    {
      quote: "We used to call it 'tech debt.' They called it 'fraud.' We paid them anyway.",
      author: "Ronit",
      role: "serial founder, now ashamed",
      rating: 3,
    },
    {
      quote: "They told us to delete 80% of our code. So we did. Everything still works.",
      author: "Peter",
      role: "amazed and confused",
      rating: 4,
    },
    {
      quote: "It's not just code cleanup. It's an exorcism.",
      author: "Mira",
      role: "lead dev, finally sleeping at night",
      rating: 5,
    },
    {
      quote: "They opened our repo, sighed, and invoiced us. Worth every dollar.",
      author: "Sam",
      role: "founder, chronic over-promiser",
      rating: 4,
    },
    {
      quote: "They replaced 12,000 lines of code with 600 and told us to never touch it again.",
      author: "Niv",
      role: "ex-architect, now a minimalist",
      rating: 5,
    },
    {
      quote: "They found logic in a switch statement nested inside a regex. We didn't know that was possible.",
      author: "Ada",
      role: "engineer, still apologizing",
      rating: 3,
    },
    {
      quote: "We used to hotfix in prod via SSH. Now we have branches. And dignity.",
      author: "Ilya",
      role: "CTO, reformed cowboy",
      rating: 5,
    },
    {
      quote: "They deleted three folders and somehow fixed six bugs.",
      author: "Ziv",
      role: "confused but grateful",
      rating: 4,
    },
    {
      quote: "We had six versions of the same endpoint. They kept one. It works. We don't ask questions anymore.",
      author: "Rina",
      role: "senior-ish dev",
      rating: 4,
    },
    {
      quote: "I thought they'd fix our code. Instead, they sent a document titled 'Burn This.'",
      author: "Leo",
      role: "non-technical founder",
      rating: 3,
    },
    {
      quote: "We thought our stack was unique. Turns out it was just wrong.",
      author: "Liron",
      role: "tech lead, no longer hiring juniors unsupervised",
      rating: 4,
    },
    {
      quote: "Our API was versioned by mood. They brought order. I didn't know REST could be restful.",
      author: "Tasha",
      role: "backend developer, now using verbs correctly",
      rating: 5,
    },
    {
      quote: "They removed Redux. I cried. Then realized I was free.",
      author: "Joe",
      role: "frontend dev, slowly healing",
      rating: 4,
    },
    {
      quote: "We built our MVP in V0, fast. Too fast. Refucktory cleaned up the auto-gen soup and made it look like humans wrote it.",
      author: "Alon",
      role: "founder who thought UI == product",
      rating: 5,
    },
    {
      quote: "Our whole backend was Bolt. Until Refucktory asked 'where's your state?' We didn't have an answer.",
      author: "Tami",
      role: "solo dev, now journaling regularly",
      rating: 3,
    },
    {
      quote: "They explained why V0-generated code isn't a backend strategy. I cried, then I paid them.",
      author: "Roni",
      role: "non-technical cofounder, now reading docs voluntarily",
      rating: 4,
    },
  ]

  // Calculate how many testimonials to show based on screen size and visible rows
  const testimonialsPerRow = 3 // lg:grid-cols-3
  const visibleTestimonialsCount = visibleTestimonialRows * testimonialsPerRow
  const visibleTestimonials = testimonials.slice(0, Math.min(visibleTestimonialsCount, testimonials.length))
  const hasMoreTestimonials = visibleTestimonialsCount < testimonials.length

  const showMoreTestimonials = () => {
    setVisibleTestimonialRows(prev => prev + 1)
  }

  const faqItems = [
    {
      question: "Is this real?",
      answer:
        "As real as your production incident last Thursday. Yes, we actually refactor codebases. No, we're not a design agency pretending to code.",
    },
    {
      question: "Why are you so expensive?",
      answer:
        "Because fixing tech debt costs more than creating it. We charge per nightmare avoided, not per hour.",
    },
    {
      question: "Can I get a discount?",
      answer:
        "Only if your code is already clean. So no.",
    },
    {
      question: "Is this suitable for funded startups?",
      answer:
        "Yes. We've helped YC-backed, bootstrapped, and Series B+ teams get their technical shit together before hiring rounds, audits, or scaling sprints.",
    },
    {
      question: "Do you support TypeScript / Rust / Go / [insert language]?",
      answer:
        "Yes. We speak all languages. Especially regret.",
    },
    {
      question: "Can you work with our in-house devs?",
      answer:
        "If they don't cry when we push force, sure.",
    },
    {
      question: "Do you use AI?",
      answer:
        "Only to explain to founders why their code is a war crime.",
    },
    {
      question: "Who's actually behind Refucktory?",
      answer:
        "A collective of senior engineers, recovering tech leads, and ex-consultants who were tired of cleaning up messes quietly. Now we do it loud, fast, and professionally.",
    },
    {
      question: "Can you just \"add tests\" to our existing code?",
      answer:
        "We can, but that's like putting a seatbelt on a flaming motorcycle.",
    },
    {
      question: "What if we don't want to refactor, just keep hacking?",
      answer:
        "Cool. We'll see you in 3 months under a different domain, asking the same questions with more capital raised.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes. It's called documentation. Read it.",
    },
    {
      question: "Do you support post-delivery maintenance?",
      answer:
        "No. We operate strictly as a one-time, high-impact intervention. We clean it up, hand it over, and walk away. Ongoing retainers are for people who write fragile code — you won't need us twice.",
    },
    {
      question: "Do you offer contracts, NDAs, or MSAs?",
      answer:
        "Yes. We're a professional service provider. We offer and sign standard legal documents including NDAs, MSAs, and SOWs to define scope, timelines, and responsibilities. We operate with legal accountability and formal delivery processes.",
    },
    {
      question: "Will you work inside our repo or clone externally?",
      answer:
        "We work in our own isolated repo. Always. Your main branch is already haunted — no reason to make things worse. Once we're done, you get clean PRs, docs, and zero exposure to our intermediate suffering.",
    },
    {
      question: "Will you sign an NDA?",
      answer:
        "We will, but we already know your code is embarrassing.",
    }
  ]

  const initialFAQCount = Math.ceil(faqItems.length / 2) // Show half initially (8 items)
  const visibleFAQs = showAllFAQs ? faqItems : faqItems.slice(0, initialFAQCount)
  const hasMoreFAQs = !showAllFAQs && faqItems.length > initialFAQCount

  const showMoreFAQs = () => {
    setShowAllFAQs(true)
  }

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            {/* <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
              R
            </div> */}
            <span>Refucktory</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#services"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </Link>
          </nav>
          {/* <div className="hidden md:flex gap-4 items-center">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Log in
            </Link>
            <Button className="rounded-full">
              Get Started
              <ChevronRight className="ml-1 size-4" />
            </Button>
          </div> */}
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link href="#services" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="#testimonials" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Testimonials
              </Link>
              <Link href="#pricing" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="#faq" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t">
                {/* <Link href="#" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Log in
                </Link>
                <Button className="rounded-full">
                  Get Started
                  <ChevronRight className="ml-1 size-4" />
                </Button> */}
              </div>
            </div>
          </motion.div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
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
                Launching Soon
              </Badge> */}
              <h1 className="text-5xl md:text-3xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
                You Shipped It.
                <br />
                Now It's Time to Unfuck It.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                We'll refactor your weekend vibe coded abomination into something that doesn't make your next hire quit.
              </p>



              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full h-12 px-8 text-base">
                    Send Us Your Sins
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base">
                    Schedule a Confession
                  </Button>
                </Link>
              </div>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                {/* <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Cash Only</span>
                </div> */}
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Cancel Anytime</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>No Refunds</span>
                </div>

              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                <Image
                  src="/bg.jpg"
                  width={1280}
                  height={720}
                  alt="Refucktory hero background"
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
            </motion.div>
          </div>
        </section>



        {/* Services Section */}
        <section id="services" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Our Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything You Should've Done the First Time</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Your Codebase Is a Crime Scene. You shipped fast, cut corners, and called it an MVP. <br />
                We'll turn your stack of bad decisions into something a human can live with.
              </p>
              <p className="text-sm text-muted-foreground/80 mt-4 italic">
                We won't judge your AI-generated code. We've cleaned up worse.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {services.map((feature, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </section>

        {/* Who's This For Section */}
        <section className="w-full py-20 md:py-32">

          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Our Customers
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Who's This For?</h2>
              <p className="text-sm text-muted-foreground/80 mt-4 italic">
                If you recognize yourself here, it's already too late.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="grid gap-6">
                {[
                  "Startup founders who got too far with too little",
                  "Indie hackers in denial",
                  "Devs who inherited something cursed",
                  "Teams with \"one critical guy\" who just left"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-b from-background to-muted/10 backdrop-blur border border-border/40"
                  >
                    <div className="size-2 rounded-full bg-primary shrink-0"></div>
                    <p className="text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>


        {/* Logos Section */}
        {/* <section className="w-full py-12 border-y bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <p className="text-sm font-medium text-muted-foreground">Trusted by innovative companies worldwide</p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-24 bg-muted-foreground/20 rounded opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                  // <Image
                  //   key={i}
                  //   src={`/placeholder-logo.svg`}
                  //   alt={`Company logo ${i}`}
                  //   width={120}
                  //   height={60}
                  //   className="h-8 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  // />
                ))}
              </div>
            </div>
          </div>
        </section> */}



        {/* How It Works Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                How It Works
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">We won't judge. We've seen worse. Probably.</h2>
              {/* <p className="max-w-[800px] text-muted-foreground md:text-lg">
                We don't rewrite for fun. We rewrite because what you wrote can't be saved.
              </p> */}

            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>

              {[
                {
                  step: "01",
                  title: "Show Us the Horror",
                  description: "Send us your repo, therapy notes, and deepest regrets.",
                },
                {
                  step: "02",
                  title: "Confess & Request a Quote",
                  description: "We reserve the right to send you back a meme instead.",
                },
                {
                  step: "03",
                  title: "We Do Our Magic",
                  description: "No NDA required - we've seen things.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Testimonials
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">People We've Emotionally Repaired</h2>
              {/* <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Don't just take our word for it. See what our customers have to say about their experience.
              </p> */}
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleTestimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-4">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, j) => (
                            <Star key={j} className="size-4 text-yellow-500 fill-yellow-500" />
                          ))}
                      </div>
                      <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                        <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Show More Button */}
            {hasMoreTestimonials && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mt-12"
              >
                <Button
                  onClick={showMoreTestimonials}
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8"
                >
                  Show More
                  <ChevronRight className="ml-2 size-4" />
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Pricing
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">This Ain't Fiverr</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                We charge based on entropy, not lines of code. <br />The more your code fights back, the more it costs.
              </p>
              <p className="text-sm text-muted-foreground/80 mt-4 italic">
                We don't rewrite for fun. We rewrite because what you wrote can't be saved.
              </p>

            </motion.div>

            <div className="mx-auto max-w-5xl">
              <Tabs defaultValue="monthly" className="w-full">
                {/* <div className="flex justify-center mb-8">
                  <TabsList className="rounded-full p-1">
                    <TabsTrigger value="monthly" className="rounded-full px-6">
                      Monthly
                    </TabsTrigger>
                    <TabsTrigger value="annually" className="rounded-full px-6">
                      Annually (Save 20%)
                    </TabsTrigger>
                  </TabsList>
                </div> */}
                <TabsContent value="monthly">
                  <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                    {[
                      {
                        name: "Code Regret",
                        price: "$5,000+",
                        description: "You send the code, we send condolences. No fixes. Just truth.",
                        services: [
                          "Deep code review",
                          "Inline snark comments",
                          "Dependency hell mapping",
                          "One call to explain the mess"
                        ],
                        cta: "Submit Your Shame"
                      },
                      {
                        name: "Shame Refactor",
                        price: "$10,000+",
                        description: "Full rewrite of your MVP into something that doesn't cry under load.",
                        services: [
                          "Full refactor, modular redesign",
                          "Unit + integration test coverage",
                          "Production grade infrastructure",
                          "Clean commits",
                          "Real documentation"
                        ],
                        cta: "Get Refactored",
                        popular: true
                      },
                      {
                        name: "Burn the Repo",
                        price: "$25,000+",
                        description: "You admit defeat. We start fresh. You take the credit.",
                        services: [
                          "Architecture planning",
                          "Rebuild from zero",
                          "Observability baked in",
                          "Team onboarding kit",
                          "Trauma therapy"
                        ],
                        cta: "Hard Reset"
                      }
                    ]
                      .map((plan, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                          <Card
                            className={`relative overflow-hidden h-full ${plan.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md"} bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                          >
                            {plan.popular && (
                              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                                Most Popular
                              </div>
                            )}
                            <CardContent className="p-6 flex flex-col h-full">
                              <h3 className="text-2xl font-bold">{plan.name}</h3>
                              <div className="flex items-baseline mt-4">
                                {/* <span className="text-muted-foreground mr-1">Starting at</span> */}
                                <span className="text-4xl font-bold">{plan.price}</span>

                              </div>
                              <p className="text-muted-foreground mt-2">{plan.description}</p>
                              <ul className="space-y-3 my-6 flex-grow">
                                {plan.services.map((feature, j) => (
                                  <li key={j} className="flex items-center">
                                    <Check className="mr-2 size-4 text-primary" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                              <Link href="/contact">
                                <Button
                                  className={`w-full mt-auto rounded-full ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/80"}`}
                                  variant={plan.popular ? "default" : "outline"}
                                >
                                  {plan.cta}
                                </Button>
                              </Link>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </TabsContent>
                {/* <TabsContent value="annually">
                  <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                    {[
                      {
                        name: "Starter",
                        price: "$23",
                        description: "Perfect for small teams and startups.",
                        services: ["Up to 5 team members", "Basic analytics", "5GB storage", "Email support"],
                        cta: "Start Free Trial",
                      },
                      {
                        name: "Professional",
                        price: "$63",
                        description: "Ideal for growing businesses.",
                        services: [
                          "Up to 20 team members",
                          "Advanced analytics",
                          "25GB storage",
                          "Priority email support",
                          "API access",
                        ],
                        cta: "Start Free Trial",
                        popular: true,
                      },
                      {
                        name: "Enterprise",
                        price: "$159",
                        description: "For large organizations with complex needs.",
                        services: [
                          "Unlimited team members",
                          "Custom analytics",
                          "Unlimited storage",
                          "24/7 phone & email support",
                          "Advanced API access",
                          "Custom integrations",
                        ],
                        cta: "Contact Sales",
                      },
                    ].map((plan, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <Card
                          className={`relative overflow-hidden h-full ${plan.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md"} bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                        >
                          {plan.popular && (
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                              Most Popular
                            </div>
                          )}
                          <CardContent className="p-6 flex flex-col h-full">
                            <h3 className="text-2xl font-bold">{plan.name}</h3>
                            <div className="flex items-baseline mt-4">
                              <span className="text-4xl font-bold">{plan.price}</span>
                              <span className="text-muted-foreground ml-1">/month</span>
                            </div>
                            <p className="text-muted-foreground mt-2">{plan.description}</p>
                            <ul className="space-y-3 my-6 flex-grow">
                              {plan.services.map((feature, j) => (
                                <li key={j} className="flex items-center">
                                  <Check className="mr-2 size-4 text-primary" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <Button
                              className={`w-full mt-auto rounded-full ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/80"}`}
                              variant={plan.popular ? "default" : "outline"}
                            >
                              {plan.cta}
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent> */}
              </Tabs>
            </div>
          </div>

        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Clarifications, disclaimers, and other things our lawyer told us to include.
              </p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {visibleFAQs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem value={`item-${i}`} className="border-b border-border/40 py-2">
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>

              {/* Show More Button */}
              {hasMoreFAQs && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center mt-8"
                >
                  <Button
                    onClick={showMoreFAQs}
                    variant="outline"
                    size="lg"
                    className="rounded-full px-8"
                  >
                    Show More
                    <ChevronRight className="ml-2 size-4" />
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                It Got You a Demo. Now Make It Real.
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                You’re not alone. Hundreds of devs have come clean, owned their mess, and shipped code they’re not afraid to show recruiters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full h-12 px-8 text-base hover:bg-primary/70">
                    Send Us Your Sins
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base text-white">
                    Schedule a Confession
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-primary-foreground/80 mt-4">
                Cancel Anytime. No Refunds.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold">
                {/* <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                  S
                </div> */}
                <span>Refucktory</span>
              </div>
              <p className="text-sm text-muted-foreground">
                You Shipped It. Now It's Time to Unfuck It.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            {/* <div className="space-y-4">
              <h4 className="text-sm font-bold">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div> */}
            {/* <div className="space-y-4">
              <h4 className="text-sm font-bold">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div> */}
            {/* <div className="space-y-4">
              <h4 className="text-sm font-bold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
          {/* <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Refucktory. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div> */}
        </div>
      </footer>
    </div >
  )
}
