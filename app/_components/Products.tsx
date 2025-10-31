'use client';

import Image from 'next/image';
import { Star, Leaf, ShieldCheck, Info, ChevronDown } from 'lucide-react';
import { useState } from 'react';

type SKU = 'daily' | 'care';

type Product = {
  name: string;
  volume: string;
  image: string;
  rating: number;
  price: string; 
  highlights: string[];
  ingredients: string[];
  nutrition: { label: string; value: string }[];
  usage: string[];
  storage: string[];
  claims: string[];
};

const PRODUCTS: Record<SKU, Product> = {
  daily: {
    name: 'MANEP Daily',
    volume: '180 ml',
    image: '/180ml1.png',
    rating: 5,
    price: '25.000₫',
    highlights: [
      '100% vị mận tươi tự nhiên',
      'Hỗ trợ tiêu hoá mỗi ngày',
      'Không đường tinh luyện',
    ],
    ingredients: [
      'Nước ép mận tím (80%) – giàu chất xơ và hợp chất chống oxy hoá tự nhiên',
      'Inulin (chất xơ hoà tan) – hỗ trợ nhu động ruột',
      'Magie tự nhiên – cân bằng điện giải, hỗ trợ co bóp ruột',
      'Nước cốt chanh – vị tươi mát, chống oxy hoá',
      'Vitamin C (từ quả acerola)',
      'Chất tạo ngọt tự nhiên Stevia (0 kcal)',
      'Chiết xuất hạt mận (ít) – tăng ổn định sản phẩm',
    ],
    nutrition: [
      { label: 'Năng lượng', value: '≈55–60 kcal' },
      { label: 'Carbohydrate', value: '12–14 g' },
      { label: 'Chất xơ (inulin, oligofructose)', value: '4–5 g' },
      { label: 'Đường tự nhiên', value: '6–7 g' },
      { label: 'Vitamin C', value: '15–20 mg' },
      { label: 'Magie', value: '20–25 mg' },
    ],
    usage: [
      'Lắc nhẹ trước khi uống. Uống trực tiếp, ngon hơn khi để lạnh.',
      'Khuyến nghị: 1–2 chai/ngày (180 ml), tuỳ nhu cầu.',
      'Gợi ý: dùng buổi sáng sau bữa ăn hoặc sau bữa trưa/tối để hỗ trợ nhu động ruột.',
      'Không nên uống quá 4 chai/ngày.',
    ],
    storage: [
      'Để nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.',
      'Sau khi mở nắp, giữ lạnh và dùng trong 24 giờ.',
      'Thức uống bổ trợ dinh dưỡng, không phải thuốc.',
    ],
    claims: ['Nguồn gốc nguyên liệu rõ ràng', 'Không chất bảo quản', 'Không màu tổng hợp'],
  },
  care: {
    name: 'MANEP Care+',
    volume: '350 ml',
    image: '/350ml1.png',
    rating: 5,
    price: '40.000₫', 
    highlights: [
      'Công thức nâng cao: chất xơ kép + probiotics',
      'Thanh lọc dịu nhẹ với chiết xuất lô hội',
      'Tăng cường vitamin C, K, Mg',
    ],
    ingredients: [
      'Nước ép mận tím (70%)',
      'Inulin + Oligofructose (chất xơ kép)',
      'Probiotics (Bifidobacterium / Lactobacillus rhamnosus) – ≥ 1 tỷ CFU',
      'Chiết xuất lô hội (liều nhẹ an toàn)',
      'Magie + Kali (tăng cường so với bản thường)',
      'Vitamin C (cao hơn bản Daily)',
      'Stevia (0 kcal)',
    ],
    nutrition: [
      { label: 'Năng lượng', value: '≈90–100 kcal' },
      { label: 'Carbohydrate', value: '22–25 g' },
      { label: 'Chất xơ (inulin, oligofructose)', value: '8–10 g' },
      { label: 'Đường tự nhiên', value: '10–12 g' },
      { label: 'Vitamin C', value: '30–40 mg' },
      { label: 'Kali', value: '250–300 mg' },
      { label: 'Magie', value: '40–50 mg' },
      { label: 'Lô hội', value: '100–150 mg' },
      { label: 'Probiotics', value: '≥ 1 tỷ CFU' },
    ],
    usage: [
      'Lắc nhẹ trước khi uống. Uống trực tiếp, ngon hơn khi để lạnh.',
      'Khuyến nghị: 1 chai/ngày hoặc cách ngày, tốt nhất sáng trước bữa ăn để probiotics hoạt động tối ưu.',
      'Dùng như liệu trình 7 ngày khi có dấu hiệu rối loạn tiêu hoá.',
      'Không dùng quá 2 chai/ngày (có lô hội & probiotics).',
    ],
    storage: [
      'Để nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.',
      'Sau khi mở nắp, giữ lạnh và dùng trong 24 giờ.',
      'Thức uống bổ trợ dinh dưỡng, không phải thuốc.',
    ],
    claims: ['Không đường tinh luyện', 'Không chất bảo quản', '100% thành phần thiên nhiên'],
  },
};

export default function Products() {
  const [active, setActive] = useState<SKU>('daily');
  const p = PRODUCTS[active];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Sản phẩm MANEP</h2>
          <p className="text-gray-600 text-lg lg:text-xl">Chỉ 2 lựa chọn thiết yếu: Daily 180ml & Care+ 350ml</p>
        </div>

        {/* Switcher */}
        <div className="mx-auto mb-12 grid max-w-md grid-cols-2 rounded-full bg-white p-1.5 shadow-xl ring-2 ring-purple-100">
          <button
            type="button"
            onClick={() => setActive('daily')}
            className={`rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ${
              active === 'daily'
                ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg scale-105'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            aria-pressed={active === 'daily'}
          >
            Daily 180ml
          </button>
          <button
            type="button"
            onClick={() => setActive('care')}
            className={`rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ${
              active === 'care'
                ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg scale-105'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            aria-pressed={active === 'care'}
          >
            Care+ 350ml
          </button>
        </div>

        {/* Product Card */}
        <article className="grid gap-8 lg:grid-cols-[45%_55%] items-start">
          {/* Image */}
          <div className="sticky top-8 rounded-3xl overflow-hidden bg-gradient-to-br from-purple-50 to-white shadow-xl ring-1 ring-purple-100/50 p-8">
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src={p.image}
                alt={p.name}
                fill
                priority={active === 'daily'}
                className="object-contain transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl ring-1 ring-purple-100/50">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{p.name}</h3>
                  <p className="text-lg text-purple-600 font-medium">Dung tích: {p.volume}</p>

                  <div className="mt-3 inline-flex items-center gap-3 rounded-full bg-purple-50 px-4 py-2 ring-1 ring-purple-200">
                    <span className="text-xl font-extrabold text-purple-700">Giá: {p.price}</span>
                    <span className="flex text-yellow-400" aria-label="Đánh giá 5 sao">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current drop-shadow-sm" aria-hidden="true" />
                      ))}
                    </span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-8 grid gap-4">
                {p.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-3 bg-purple-50 rounded-xl p-4 border border-purple-100">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <span className="text-gray-700 font-medium">{h}</span>
                  </div>
                ))}
              </div>

              {/* Claims */}
              <div className="mt-6 flex flex-wrap gap-2">
                {p.claims.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-50 to-purple-100 px-4 py-2 text-sm font-semibold text-purple-700 ring-2 ring-purple-200/50"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    {c}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="flex-1 min-w-[200px] rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-4 text-white font-bold hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Thêm vào giỏ
                </button>
                <a
                  href="#contact"
                  className="flex-1 min-w-[200px] text-center rounded-full border-2 border-purple-600 px-8 py-4 text-purple-700 font-bold hover:bg-purple-50 transition-all"
                >
                  Nhận tư vấn
                </a>
              </div>
            </div>

            {/* Ingredients */}
            <div className="bg-white rounded-3xl p-8 shadow-xl ring-1 ring-purple-100/50">
              <Section title="Thành phần" defaultOpen>
                <ul className="list-none space-y-2 text-sm text-gray-700">
                  {p.ingredients.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            </div>

            {/* Nutrition */}
            <div className="bg-white rounded-3xl p-8 shadow-xl ring-1 ring-purple-100/50">
              <Section title="Thông tin dinh dưỡng (ước tính)">
                <div className="grid gap-3">
                  {p.nutrition.map((n) => (
                    <div
                      key={n.label}
                      className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3 border border-gray-100"
                    >
                      <span className="text-gray-600 font-medium">{n.label}</span>
                      <span className="font-bold text-purple-700">{n.value}</span>
                    </div>
                  ))}
                </div>
              </Section>
            </div>

            {/* Usage */}
            <div className="bg-white rounded-3xl p-8 shadow-xl ring-1 ring-purple-100/50">
              <Section title="Hướng dẫn sử dụng & bảo quản">
                <ul className="list-none space-y-2 text-sm text-gray-700">
                  {p.usage.map((u) => (
                    <li key={u} className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-xs text-amber-800 font-medium">
                    Sản phẩm bổ trợ dinh dưỡng, không phải thuốc và không có tác dụng thay thế thuốc chữa bệnh.
                  </p>
                </div>
                <div className="mt-3 p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-600">
                    <strong>Nhà sản xuất:</strong> Công ty TNHH Thực phẩm Dinh dưỡng Việt An
                    <br />
                    <strong>Xuất xứ:</strong> Việt Nam
                  </p>
                </div>
              </Section>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function Section({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mt-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between p-0 text-left mb-4"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2 font-bold text-gray-900 text-lg">
          <Info className="w-5 h-5 text-purple-600" /> {title}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-purple-600 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <div className="animate-fadeIn">{children}</div>}
    </div>
  );
}
