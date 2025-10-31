'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, ShieldCheck, Truck } from 'lucide-react';

/**
 * Hero.tsx
 * Hero section matching the provided look
 * - Background image with soft gradient
 * - Headline + CTA buttons
 * - Feature pills
 * - Product bottles with tilt on hover
 */
export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative">
      <div className="relative min-h-[560px] w-full overflow-hidden">
        {/* Background */}
        <Image
          src="/bg.png"
          alt="Vườn mận tự nhiên"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-purple-900/40" />

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[560px] items-center">
            <div className="max-w-2xl py-16 sm:py-20">
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                MANEP 
              </motion.p>

              <motion.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mt-3 text-4xl font-bold leading-tight text-white drop-shadow-xl sm:text-5xl lg:text-6xl"
              >
                MANEP - 
                <br />
                Cho ngày trôi thật nhẹ
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="mt-7 flex flex-wrap items-center gap-3"
              >
                <a
                  href="#products"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-purple-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  Đặt hàng ngay
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#benefits"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  Xem lợi ích
                </a>
              </motion.div>

              {/* Feature pills (optional) */}
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="mt-6 flex flex-wrap gap-3 text-[13px] text-white/90"
                aria-label="Key product highlights"
              >
                <li className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur">
                  <Leaf className="h-4 w-4" />
                  Tự nhiên & thanh mát
                </li>
                <li className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur">
                  <ShieldCheck className="h-4 w-4" />
                  An toàn cho hệ tiêu hoá
                </li>
                <li className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur">
                  <Truck className="h-4 w-4" />
                  Giao nhanh trong ngày
                </li>
              </motion.ul>

              {/* Bottles */}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

