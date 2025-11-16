import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Địa chỉ',
      content: '123 Đường Láng, Đống Đa, Hà Nội',
      link: 'https://maps.google.com/?q=123+Duong+Lang+Ha+Noi'
    },
    {
      icon: Phone,
      title: 'Điện thoại',
      content: '0123 456 789',
      link: 'tel:+84123456789'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@dogonhatminh.vn',
      link: 'mailto:contact@dogonhatminh.vn'
    },
    {
      icon: Clock,
      title: 'Giờ làm việc',
      content: 'Thứ 2 - Thứ 7: 8:00 - 18:00\nChủ nhật: 9:00 - 17:00',
      link: null
    }
  ];

  return (
    <div className="bg-stone-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-white mb-4">Liên hệ với chúng tôi</h1>
          <p className="text-xl text-amber-100">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-stone-200">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-amber-900" size={24} />
                  </div>
                  <h3 className="text-amber-900 mb-2">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-stone-700 hover:text-amber-900 transition-colors whitespace-pre-line"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-stone-700 whitespace-pre-line">{info.content}</p>
                  )}
                </Card>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-amber-900 mb-6">Gửi tin nhắn cho chúng tôi</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-stone-700 mb-2">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Nhập họ và tên của bạn"
                    className="border-stone-300"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-stone-700 mb-2">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="0123 456 789"
                      className="border-stone-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-stone-700 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="border-stone-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-stone-700 mb-2">
                    Tiêu đề <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Tôi muốn tư vấn về..."
                    className="border-stone-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-stone-700 mb-2">
                    Nội dung <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Nhập nội dung bạn muốn trao đổi..."
                    rows={6}
                    className="border-stone-300"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-amber-800 hover:bg-amber-900 text-white py-6"
                >
                  <Send className="mr-2" size={20} />
                  Gửi tin nhắn
                </Button>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-amber-900 mb-6">Bản đồ</h2>
              <div className="bg-white rounded-lg overflow-hidden shadow-md h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8639810788253!2d105.79420831493333!3d21.037853985993673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cd0c66f05%3A0xea51c0cddc2e5a!2zMTIzIMSQLiBMw6FuZywgxJDhu5NuZyDEkGEsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1234567890123!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-amber-900 mb-4">Câu hỏi thường gặp</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Những câu hỏi khách hàng thường đặt ra khi sử dụng dịch vụ của chúng tôi
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Làm thế nào để đặt hàng?',
                answer: 'Bạn có thể liên hệ trực tiếp qua hotline 0123 456 789, gửi email hoặc điền form liên hệ trên website. Đội ngũ tư vấn sẽ hỗ trợ bạn ngay lập tức.'
              },
              {
                question: 'Thời gian sản xuất và giao hàng?',
                answer: 'Thời gian sản xuất thông thường từ 15-30 ngày tùy vào độ phức tạp của sản phẩm. Chúng tôi giao hàng toàn quốc trong vòng 3-7 ngày.'
              },
              {
                question: 'Có nhận thiết kế theo yêu cầu không?',
                answer: 'Có, chúng tôi nhận thiết kế và sản xuất nội thất theo yêu cầu riêng của khách hàng. Đội ngũ thiết kế sẽ tư vấn và đo đạc tận nơi miễn phí.'
              },
              {
                question: 'Chính sách bảo hành như thế nào?',
                answer: 'Tất cả sản phẩm đều được bảo hành 5 năm về kết cấu. Chúng tôi cung cấp dịch vụ bảo trì và sửa chữa trọn đời với chi phí hợp lý.'
              },
              {
                question: 'Có showroom để xem sản phẩm trực tiếp không?',
                answer: 'Có, showroom của chúng tôi tại 123 Đường Láng, Đống Đa, Hà Nội mở cửa từ thứ 2 đến thứ 7 (8:00-18:00) và chủ nhật (9:00-17:00).'
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 border-stone-200">
                <h3 className="text-amber-900 mb-3">{faq.question}</h3>
                <p className="text-stone-700">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
