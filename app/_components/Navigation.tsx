'use client';
import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
  <Image
    src="/gogo.png"
    alt="MANEP Logo"
    width={80}      
    height={80}
    priority
    className="object-cover"
  />
</div>

          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-purple-700 transition">Trang chủ</a>
            <a href="#products" className="text-gray-700 hover:text-purple-700 transition">Sản phẩm</a>
            <a href="#about" className="text-gray-700 hover:text-purple-700 transition">Về chúng tôi</a>
      
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              type="button"
              aria-label="Giỏ hàng"
              className="relative p-2 text-gray-700 hover:text-purple-700"
              onClick={() => setCartCount((c) => c + 1)}
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <a
              href="#contact"
              className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition"
            >
              Liên hệ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((o) => !o)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t">
            <a href="#home" className="block py-2 text-gray-700 hover:text-purple-700">Trang chủ</a>
            <a href="#products" className="block py-2 text-gray-700 hover:text-purple-700">Sản phẩm</a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-purple-700">Về chúng tôi</a>
        
          

            {/* Mobile actions */}
            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                aria-label="Giỏ hàng"
                className="relative p-2 text-gray-700 hover:text-purple-700"
                onClick={() => setCartCount((c) => c + 1)}
              >
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <a
                href="#contact"
                className="bg-purple-700 text-white px-5 py-2 rounded-full hover:bg-purple-800 transition"
              >
                Liên hệ
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
