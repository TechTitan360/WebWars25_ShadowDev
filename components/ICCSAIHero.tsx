"use client"

import { motion, useTransform } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"
import ElegantShape from "@/components/ElegantShape"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

interface ICCSAIHeroProps {
  scrollYProgress?: any
}

export default function ICCSAIHero({ scrollYProgress }: ICCSAIHeroProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.7, ease: "easeOut", type: "spring", stiffness: 80 },
    },
  };

  const shapeY = scrollYProgress
    ? useTransform(scrollYProgress, [0, 1], [0, 300])
    : 0
  const shapeOpacity = scrollYProgress
    ? useTransform(scrollYProgress, [0, 1], [1, 0.3])
    : 1
  const contentOpacity = scrollYProgress
    ? useTransform(scrollYProgress, [0, 0.7], [1, 0])
    : 1

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#1E2A44]">
      {/* Refined Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-purple-500/[0.08] blur-3xl" />

      {/* Parallax Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div style={{ y: shapeY, opacity: shapeOpacity }}>
          <ElegantShape
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            gradient="from-blue-500/[0.15]"
            className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          />
          <ElegantShape
            delay={0.5}
            width={500}
            height={120}
            rotate={-15}
            gradient="from-purple-500/[0.15]"
            className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
          />
          <ElegantShape
            delay={0.4}
            width={300}
            height={80}
            rotate={-8}
            gradient="from-cyan-500/[0.15]"
            className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
          />
          <ElegantShape
            delay={0.6}
            width={200}
            height={60}
            rotate={20}
            gradient="from-green-500/[0.15]"
            className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
          />
          <ElegantShape
            delay={0.7}
            width={150}
            height={40}
            rotate={-25}
            gradient="from-yellow-500/[0.15]"
            className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
          />
        </motion.div>
      </div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 container mx-auto px-4 md:px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            <span className="text-sm text-white/60 tracking-wide">Powered by IEEE Computer Society</span>
          </motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">Welcome to</span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white/90 to-purple-300",
                  pacifico.className
                )}
              >
                ICCSAI 2025
              </span>
            </h1>
          </motion.div>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
              The International Conference on AI, Security, and Communication (ICCSAI 2025) brings together leading
              researchers, industry experts, and academics to discuss groundbreaking advancements in artificial
              intelligence, cybersecurity, and modern communication technologies.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Learn More Button */}
            <a
              href="#about"
              className="px-6 py-3 rounded-3xl bg-gradient-to-br from-cyan-500 to-teal-400 
          text-white font-semibold shadow-[0_3px_10px_rgba(0,255,255,0.2)] 
          hover:shadow-[0_4px_15px_rgba(0,255,255,0.3)] 
          hover:scale-105 hover:-translate-y-1 
          transition-all duration-300 ease-in-out border border-cyan-400/30"
            >
              Learn More
            </a>

            {/* Register Now Button */}
            <a
              href="#register"
              className="px-6 py-3 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-400 
          text-white font-semibold shadow-[0_3px_10px_rgba(255,0,255,0.2)] 
          hover:shadow-[0_4px_15px_rgba(255,0,255,0.3)] 
          hover:scale-105 hover:-translate-y-1 
          transition-all duration-300 ease-in-out border border-purple-400/30"
            >
              Register Now
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Adjusted Transition Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#1E2A44] to-transparent pointer-events-none" />
    </div>
  )
}