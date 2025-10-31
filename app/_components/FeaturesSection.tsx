'use client';
import { FlaskConical, Leaf, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section id="values" className="bg-gradient-to-b from-purple-900 to-purple-800 py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-3">Giá trị cốt lõi của MANEP</h2>
        <p className="text-white/80 max-w-3xl mx-auto mb-12">
          MANEP xây dựng trên bốn trụ cột giá trị: <b>Tinh khiết tự nhiên</b>, <b>Hiệu quả khoa học</b>, <b>Trải nghiệm toàn diện</b> và <b>Trách nhiệm cộng đồng</b>.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1. Tinh khiết tự nhiên */}
          <FeatureCard
            icon={<Leaf className="h-8 w-8 text-green-300" />}
            title="Tinh khiết tự nhiên"
            desc="Sử dụng 100% nguyên liệu tự nhiên, không đường tinh luyện, không chất bảo quản – mang lại sự an toàn tuyệt đối cho sức khỏe."
          />

          {/* 2. Hiệu quả khoa học */}
          <FeatureCard
            icon={<FlaskConical className="h-8 w-8 text-cyan-300" />}
            title="Hiệu quả khoa học"
            desc="Công thức dựa trên nền tảng khoa học dinh dưỡng tiên tiến, kết hợp chất xơ kép và probiotics để tối ưu hệ tiêu hóa."
          />

          {/* 3. Trải nghiệm toàn diện */}
          <FeatureCard
            icon={<HeartHandshake className="h-8 w-8 text-pink-300" />}
            title="Trải nghiệm toàn diện"
            desc="Không chỉ hỗ trợ tiêu hóa mà còn giúp cân bằng hệ vi sinh, thanh lọc cơ thể và tăng sức đề kháng mỗi ngày."
          />

          {/* 4. Trách nhiệm cộng đồng */}
          <FeatureCard
            icon={<ShieldCheck className="h-8 w-8 text-yellow-300" />}
            title="Trách nhiệm cộng đồng"
            desc="Cam kết phát triển bền vững, cung cấp sản phẩm an toàn, hướng dẫn sử dụng có trách nhiệm vì sức khỏe lâu dài."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-left hover:bg-white/15 transition">
      <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-white/10">{icon}</div>
      <h3 className="font-semibold text-lg mb-2 text-white">{title}</h3>
      <p className="text-sm text-white/80 leading-relaxed">{desc}</p>
    </div>
  );
}
