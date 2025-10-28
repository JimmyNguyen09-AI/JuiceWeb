'use client';
import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Truck, Shield, Award, Package, CheckCircle2 } from 'lucide-react';

const FEATURES = [
  {
    icon: Package,
    title: 'Sản phẩm chất lượng',
    tagline: '100% trái cây tươi nguyên chất',
    points: ['Nguồn gốc rõ ràng', 'Chọn lọc thủ công', 'Bảo quản lạnh 0–4°C'],
  },
  {
    icon: Truck,
    title: 'Miễn phí vận chuyển',
    tagline: 'Giao hàng nhanh toàn quốc',
    points: ['Miễn phí từ 499k', 'Theo dõi lộ trình realtime', 'Đổi trả trong 48h'],
  },
  {
    icon: Shield,
    title: 'An toàn thực phẩm',
    tagline: 'Quy trình vệ sinh nghiêm ngặt',
    points: ['Bao bì an toàn', 'Kiểm soát nhiệt độ', 'Kiểm định định kỳ'],
  },
  {
    icon: Award,
    title: 'Thương hiệu uy tín',
    tagline: 'Hơn 10 năm kinh nghiệm',
    points: ['Hàng ngàn phản hồi 5★', 'Đối tác chuỗi bán lẻ', 'Đảm bảo hoàn tiền'],
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      y: { type: 'spring', stiffness: 120, damping: 14 },
      scale: { type: 'spring', stiffness: 120, damping: 14 },
      opacity: { duration: 0.2 },
    },
  },
};

export default function FeaturesSection() {
  return (
    <section aria-labelledby="features-heading" className="relative py-24 overflow-hidden" id='about'>
      {/* Decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-900 via-purple-800 to-purple-700" />
      <div aria-hidden="true" className="absolute -top-32 -left-32 h-64 w-64 rounded-full blur-3xl opacity-30 bg-fuchsia-400" />
      <div aria-hidden="true" className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full blur-3xl opacity-30 bg-indigo-400" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white/90 backdrop-blur">
            Về chúng tôi - MANEP
          </p>
          <h2 id="features-heading" className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            Vì sao khách hàng chọn chúng tôi
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-white/80">
            Chúng tôi không chỉ bán trái cây—chúng tôi giao sự an tâm và trải nghiệm tuyệt vời trong từng đơn hàng.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {FEATURES.map((f, idx) => {
            const Icon = f.icon;
            return (
              <motion.article
                key={f.title}
                variants={item}
                className="group relative rounded-2xl bg-white/95 backdrop-blur p-6 shadow-lg ring-1 ring-black/5 transition transform hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* subtle gradient ring on hover */}
                <div aria-hidden className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-fuchsia-500/0 group-hover:from-purple-500/10 group-hover:to-fuchsia-500/10 transition" />

                <div className="relative">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-50 text-purple-700 ring-1 ring-purple-200">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{f.tagline}</p>

                  <ul className="mt-5 space-y-2">
                    {f.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-purple-600" aria-hidden="true" />
                        <span className="text-sm leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>

                  {/* subtle footer */}
                  <div className="mt-6 flex items-center justify-between border-t pt-4 text-xs text-gray-500">
                    <span>Cam kết MANEP</span>
                    <span>#{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* CTA */}
        <div className="mt-12 grid place-items-center">
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-full bg-white text-purple-700 px-6 py-3 font-semibold shadow hover:shadow-lg transition ring-1 ring-white/60 hover:ring-white"
            aria-label="Xem sản phẩm nổi bật"
          >
            Xem sản phẩm nổi bật
          </a>
        </div>
      </div>
    </section>
  );
}
