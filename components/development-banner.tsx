"use client"

import { motion } from "framer-motion"
import { Construction } from "lucide-react"

export default function DevelopmentBanner() {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium flex items-center justify-center gap-2"
    >
      <Construction size={16} />
      <span>Website Under Development - Launching Soon!</span>
    </motion.div>
  )
}
