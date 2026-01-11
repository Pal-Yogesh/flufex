"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Star, Video, ArrowUpRight } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Influencer Marketing",
    description:
      "Connect your brand with the right influencers to amplify your message and reach your target audience authentically.",
    features: ["Campaign Strategy", "Influencer Matching", "Performance Analytics", "ROI Tracking"],
  },
  {
    icon: Star,
    title: "Talent Management",
    description:
      "Full-service talent management helping creators grow their personal brand and maximize their earning potential.",
    features: ["Brand Partnerships", "Contract Negotiation", "Career Development", "Content Strategy"],
  },
  {
    icon: Video,
    title: "End to End Edutainment Content Production",
    description:
      "End-to-end content production that educates and entertains, creating memorable experiences for your audience.",
    features: ["Concept Development", "Script Writing", "Video Production", "Post-Production"],
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-32 relative" ref={ref}>
      {/* Marquee */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden border-y border-border py-4 bg-secondary/50">
        <div className="marquee whitespace-nowrap">
          <span className="inline-block text-sm font-medium text-muted-foreground px-8">
            INFLUENCER MARKETING • TALENT MANAGEMENT • CONTENT PRODUCTION • BRAND STRATEGY • DIGITAL GROWTH •
          </span>
          <span className="inline-block text-sm font-medium text-muted-foreground px-8">
            INFLUENCER MARKETING • TALENT MANAGEMENT • CONTENT PRODUCTION • BRAND STRATEGY • DIGITAL GROWTH •
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm text-primary font-medium uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-balance">What We Do Best</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Comprehensive digital marketing solutions tailored to elevate your brand presence
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
