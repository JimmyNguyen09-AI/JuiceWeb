'use client';

import React, { useState } from 'react';
import { Package, Phone } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; phone?: string; message?: string }>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = () => {
    const next: typeof errors = {};

    if (!form.name.trim()) next.name = 'Vui lòng nhập họ và tên';
    const digits = form.phone.replace(/\D/g, '');
    if (!digits) next.phone = 'Vui lòng nhập số điện thoại';
    else if (digits.length < 9 || digits.length > 11) next.phone = 'Số điện thoại không hợp lệ';

    if (!form.message.trim()) next.message = 'Vui lòng nhập nội dung tin nhắn';

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setStatus('submitting');
      // TODO: replace with a real API call, e.g. fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
      await new Promise((r) => setTimeout(r, 800));
      setStatus('success');
      setForm({ name: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const inputBase =
    'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700';

  return (
    <section id="contact" className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Liên hệ với chúng tôi</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Chúng tôi luôn sẵn sàng tư vấn và hỗ trợ bạn. Hãy để lại thông tin để nhận ưu đãi đặc biệt!
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-purple-700" aria-hidden="true" />
                <span className="text-gray-700">Hotline: 1900-888-999</span>
              </div>
              <div className="flex items-center space-x-4">
                <Package className="w-6 h-6 text-purple-700" aria-hidden="true" />
                <span className="text-gray-700">Email: support@manep.vn</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} noValidate>
              {/* Họ và tên */}
              <label htmlFor="name" className="sr-only">
                Họ và tên
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Họ và tên"
                autoComplete="name"
                className={`${inputBase} mb-1`}
                value={form.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                required
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-red-600 mb-3">
                  {errors.name}
                </p>
              )}

              {/* Số điện thoại */}
              <label htmlFor="phone" className="sr-only">
                Số điện thoại
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Số điện thoại"
                autoComplete="tel"
                className={`${inputBase} mb-1`}
                value={form.phone}
                onChange={handleChange}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                required
              />
              {errors.phone && (
                <p id="phone-error" className="text-sm text-red-600 mb-3">
                  {errors.phone}
                </p>
              )}

              {/* Nội dung tin nhắn */}
              <label htmlFor="message" className="sr-only">
                Nội dung tin nhắn
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Nội dung tin nhắn"
                rows={4}
                className={`${inputBase} mb-1`}
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                required
              />
              {errors.message && (
                <p id="message-error" className="text-sm text-red-600 mb-3">
                  {errors.message}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={status === 'submitting'}
                aria-busy={status === 'submitting'}
              >
                {status === 'submitting' ? 'Đang gửi...' : 'Gửi tin nhắn'}
              </button>

              {status === 'success' && (
                <div className="mt-4 text-green-700 bg-green-50 border border-green-200 rounded-lg p-3">
                  Cảm ơn bạn! Chúng tôi đã nhận được tin nhắn và sẽ liên hệ sớm nhất.
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
                  Có lỗi xảy ra. Vui lòng thử lại sau!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
