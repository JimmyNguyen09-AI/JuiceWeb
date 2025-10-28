'use client';
export default function HeroSection() {
   return (
    <section id="home" className="relative mt-16 bg-gradient-to-r from-purple-900 to-purple-700 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              MANEP DAILY -<br />
              Khỏe ruột, nhẹ bụng,<br />
              tươi mỗi ngày
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Nước ép trái cây tươi nguyên chất 100% từ thiên nhiên
            </p>
            <button className="bg-white text-purple-700 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition transform hover:scale-105">
              Khám phá ngay
            </button>
          </div>
          <div className="relative z-10 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 transform hover:scale-105 transition">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-24 h-32 bg-gradient-to-b from-purple-600 to-purple-800 rounded-2xl shadow-xl"></div>
                  <div className="w-28 h-36 bg-gradient-to-b from-purple-500 to-purple-700 rounded-2xl shadow-xl"></div>
                  <div className="w-20 h-28 bg-gradient-to-b from-purple-600 to-purple-800 rounded-2xl shadow-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}