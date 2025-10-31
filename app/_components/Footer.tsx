'use client';

import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">MANEP</h3>
            <p className="text-purple-200">Nước ép mận tươi nguyên chất, mang đến sức khỏe cho mọi nhà</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Sản phẩm</h4>
            <ul className="space-y-2 text-purple-200">
              <li><a href="#" className="hover:text-white transition">MANEP Daily</a></li>
              <li><a href="#" className="hover:text-white transition">MANEP Care +</a></li>
       
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Hỗ trợ</h4>
            <ul className="space-y-2 text-purple-200">
              <li><a href="#" className="hover:text-white transition">Chính sách đổi trả</a></li>
              <li><a href="#" className="hover:text-white transition">Vận chuyển</a></li>
              <li><a href="#" className="hover:text-white transition">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="hover:text-white transition">Liên hệ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kết nối với chúng tôi</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-purple-800 p-3 rounded-full hover:bg-purple-700 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-purple-800 p-3 rounded-full hover:bg-purple-700 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-purple-800 p-3 rounded-full hover:bg-purple-700 transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-purple-800 pt-8 text-center text-purple-200">
          <p>&copy; 2025 MANEP. All rights reserved. Made with ❤️ in Vietnam</p>
        </div>
      </div>
    </footer>
  );
    
}