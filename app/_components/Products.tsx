'use client';

import { Star } from "lucide-react";


export default function Products() {
   const products = [
    {
      name: "MANEP Mận",
      price: "125.000đ",
      image: "bg-gradient-to-br from-purple-400 to-purple-600",
      rating: 5,
      benefits: "Giàu chất xơ, tốt cho tiêu hóa"
    },
    {
      name: "MANEP Nho",
      price: "135.000đ",
      image: "bg-gradient-to-br from-purple-500 to-purple-700",
      rating: 5,
      benefits: "Chống oxi hóa, làm đẹp da"
    },
    {
      name: "MANEP Mix Berry",
      price: "145.000đ",
      image: "bg-gradient-to-br from-red-400 to-purple-600",
      rating: 5,
      benefits: "Tăng cường miễn dịch"
    },
    {
      name: "MANEP Táo",
      price: "115.000đ",
      image: "bg-gradient-to-br from-green-400 to-green-600",
      rating: 5,
      benefits: "Giảm cholesterol, thanh lọc cơ thể"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Sản phẩm nổi bật</h2>
          <p className="text-gray-600 text-lg">Nước ép trái cây tươi nguyên chất, giàu vitamin và khoáng chất</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className={`${product.image} h-48 flex items-center justify-center`}>
                <div className="w-20 h-28 bg-white/20 backdrop-blur-sm rounded-xl"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{product.benefits}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-700">{product.price}</span>
                  <button className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition">
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
