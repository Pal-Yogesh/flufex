"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your brand, understanding your goals, audience, and what makes you unique in the market.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Our team crafts a tailored strategy, identifying the perfect influencers and content approach for maximum impact.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "We bring the strategy to life, managing campaigns, producing content, and ensuring everything runs seamlessly.",
  },
  {
    number: "04",
    title: "Optimize",
    description: "Continuous monitoring and optimization to maximize ROI and deliver results that exceed expectations.",
  },
]

export default function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="process" className="py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm text-primary font-medium uppercase tracking-wider">Our Process</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-balance">How We Work</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A streamlined approach to delivering exceptional results
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-border to-transparent" />
              )}

              <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
