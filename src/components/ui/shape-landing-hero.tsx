"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]"
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return <motion.div initial={{
    opacity: 0,
    y: -150,
    rotate: rotate - 15
  }} animate={{
    opacity: 1,
    y: 0,
    rotate: rotate
  }} transition={{
    duration: 2.4,
    delay,
    ease: [0.23, 0.86, 0.39, 0.96],
    opacity: {
      duration: 1.2
    }
  }} className={cn("absolute", className)}>
            <motion.div animate={{
      y: [0, 15, 0]
    }} transition={{
      duration: 12,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut"
    }} style={{
      width,
      height
    }} className="relative">
                <div className={cn("absolute inset-0 rounded-full", "bg-gradient-to-r to-transparent", gradient, "backdrop-blur-[2px] border-2 border-white/[0.15]", "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]", "after:absolute after:inset-0 after:rounded-full", "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]")} />
            </motion.div>
        </motion.div>;
}
function HeroGeometric({
  badge = "Design Collective",
  title1 = "Elevate Your Digital Vision",
  title2 = "Crafting Exceptional Websites",
  subtitle = "Crafting exceptional digital experiences through innovative design and cutting-edge technology.",
  children
}: {
  badge?: string;
  title1?: string;
  title2?: string;
  subtitle?: string | React.ReactNode;
  children?: React.ReactNode;
}) {
  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as const
      }
    })
  };
  return <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Mantenemos las barras animadas pero sin fondo sólido */}

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape delay={0.3} width={600} height={140} rotate={12} gradient="from-[#074862]/[0.4] to-[#074862]/[0.4]" className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" />

                <ElegantShape delay={0.5} width={500} height={120} rotate={-15} gradient="from-[#074862]/[0.4] to-[#074862]/[0.4]" className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]" />

                <ElegantShape delay={0.4} width={300} height={80} rotate={-8} gradient="from-[#053225]/[0.4] to-[#053225]/[0.4]" className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]" />

                <ElegantShape delay={0.6} width={200} height={60} rotate={20} gradient="from-[#E9D758]/[0.4] to-[#E9D758]/[0.4]" className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]" />

                <ElegantShape delay={0.7} width={150} height={40} rotate={-25} gradient="from-[#23A451]/[0.4] to-[#23A451]/[0.4]" className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]" />

                <ElegantShape delay={0.8} width={250} height={70} rotate={10} gradient="from-[#23A451]/[0.4] to-[#23A451]/[0.4]" className="right-[5%] md:right-[10%] bottom-[20%] md:bottom-[25%]" />

                <ElegantShape delay={0.9} width={180} height={50} rotate={-20} gradient="from-[#E9D758]/[0.4] to-[#E9D758]/[0.4]" className="left-[30%] md:left-[35%] top-[60%] md:top-[65%]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    

                    <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-montserrat leading-tight">
                            {title1}
                            <br />
                            <span className="bg-gradient-to-r from-palette-blue via-palette-green to-palette-blue bg-clip-text text-transparent bg-[length:200%_200%] animate-[gradient-flow_6s_ease-in-out_infinite]">
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
                        <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-montserrat max-w-5xl mx-auto">
                            {subtitle}
                        </p>
                    </motion.div>

                    {children && <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible">
                            {children}
                        </motion.div>}
                </div>
            </div>

            {/* Fondo transparente para mostrar el fondo global */}
        </div>;
}
export { HeroGeometric };