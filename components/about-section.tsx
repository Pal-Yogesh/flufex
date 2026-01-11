"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Building2, MapPin, Mail, Calendar, FileCheck } from "lucide-react"
import Image from "next/image"

const companyDetails = [
  {
    icon: Building2,
    label: "Organization",
    value: "BRIDGEIT MARKETING PVT. LTD.",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "606, 6th Floor Estate, Plaza HB Road, Kantatoli, Ranchi-834001, Jharkhand",
  },
  // {
  //   icon: FileCheck,
  //   label: "GST No.",
  //   value: "20AANCB3666P1Z9",
  // },
  {
    icon: Mail,
    label: "Email",
    value: "contact@flufexconnect.com",
  },
  {
    icon: Calendar,
    label: "Established",
    value: "March 2025",
  },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm text-primary font-medium uppercase tracking-wider">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
              Connecting Brands with <span className="text-gradient">Culture</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Flufex Connect, we believe in the power of authentic storytelling. Our team specializes in bridging the
              gap between brands and their audiences through strategic influencer partnerships and compelling content
              creation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              As a registered company under MCA, we bring professionalism and transparency to every collaboration. Our
              mission is to help brands resonate with the digital-first generation while empowering creators to build
              sustainable careers.
            </p>

            {/* Company Details */}
            <div className="space-y-4">
              {companyDetails.map((detail, index) => (
                <motion.div
                  key={detail.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <detail.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{detail.label}</div>
                    <div className="text-sm text-foreground font-medium mt-0.5">{detail.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                    className="text-8xl md:text-9xl font-bold text-gradient"
                  >
                    <Image src="/logo.JPEG" alt="Flufex" width={100} height={100} className="rounded-full"/>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="text-muted-foreground mt-4 text-sm"
                  >
                    Flufex Connect
                  </motion.p>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute top-10 right-10 w-20 h-20 border border-primary/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute bottom-20 left-10 w-32 h-32 border border-primary/20 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
