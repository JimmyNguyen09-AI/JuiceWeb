'use client';

import Image from 'next/image';
import { Leaf, ShieldCheck, Truck, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative bg-gradient-to-b from-purple-50 to-white">
      {/* HERO */}
      <div className="relative min-h-[85vh] w-full overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 py-16 lg:grid-cols-2 lg:gap-12 lg:py-24 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="inline-block">
                <p className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700 ring-2 ring-purple-200">
                  <Leaf className="h-4 w-4" />
                  MANEP DAILY
                </p>
              </div>

              <h1
                id="hero-heading"
                className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 sm:text-6xl lg:text-7xl"
              >
                Khỏe bụng,
                <br />
                <span className="text-purple-600">nhẹ bụng,</span>
                <br />
                tươi mỗi ngày
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Nước ép nho tự nhiên – 2 lựa chọn tinh gọn: <strong className="text-purple-700">Daily 180ml</strong> cho dùng hằng ngày
                và <strong className="text-purple-700">Care+ 350ml</strong> công thức nâng cao (chất xơ kép + probiotics).
              </p>

              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="#products"
                  className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-4 font-bold text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                >
                  Mua ngay
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border-2 border-purple-600 px-8 py-4 font-bold text-purple-700 hover:bg-purple-50 transition-all"
                >
                  Nhận tư vấn
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                {/* Decorative background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full blur-3xl opacity-20 animate-pulse" />
                
                {/* Product Image */}
                <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-purple-100">
                  <Image
                    src="/350ml.png"
                    alt="MANEP Nho Care+ 350ml"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 ring-1 ring-purple-100 animate-bounce">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                      <ShieldCheck className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">100% Tự nhiên</p>
                      <p className="text-xs text-gray-600">Không chất bảo quản</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK BENEFITS STRIP */}
      <div className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-purple-700 to-purple-800 p-8 shadow-2xl ring-1 ring-purple-600">
            <div className="grid gap-6 md:grid-cols-3">
              <Benefit
                icon={<Leaf className="h-6 w-6" />}
                title="100% vị nho tự nhiên"
                desc="Không đường tinh luyện"
              />
              <Benefit
                icon={<ShieldCheck className="h-6 w-6" />}
                title="An toàn & minh bạch"
                desc="Không chất bảo quản, không màu tổng hợp"
              />
              <Benefit
                icon={<Truck className="h-6 w-6" />}
                title="Giao nhanh toàn quốc"
                desc="Đóng gói lạnh, đổi trả trong 48h"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefit({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group flex items-start gap-4 rounded-2xl bg-white/5 p-5 text-white/90 transition-all hover:bg-white/10 hover:scale-105">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 ring-1 ring-white/20 transition-transform group-hover:scale-110">
        {icon}
      </div>
      <div>
        <p className="font-bold text-white text-lg">{title}</p>
        <p className="text-sm text-white/85 mt-1">{desc}</p>
      </div>
    </div>
  );
}