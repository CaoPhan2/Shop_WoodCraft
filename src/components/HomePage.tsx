import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card } from './ui/card';

type Page = 'home' | 'products' | 'gallery' | 'about' | 'contact';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1732575966442-b2d665c080d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmdXJuaXR1cmUlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjMxMTQ4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Nghệ thuật chế tác gỗ tinh xảo',
      description: 'Mang đến không gian sống đẳng cấp với nội thất gỗ cao cấp'
    },
    {
      image: 'https://images.unsplash.com/photo-1617638924751-cc232f82ecf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b29kZW4lMjB0YWJsZXxlbnwxfHx8fDE3NjMxMTQ4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Thiết kế hiện đại, sang trọng',
      description: 'Kết hợp hoàn hảo giữa truyền thống và đương đại'
    },
    {
      image: 'https://images.unsplash.com/photo-1685022515813-c42e8348639b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwd29vZHdvcmtpbmd8ZW58MXx8fHwxNzYzMTE0ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Tay nghề thợ lành nghề',
      description: 'Hơn 20 năm kinh nghiệm trong nghề chế tác đồ gỗ'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const features = [
    {
      title: 'Chất lượng cao cấp',
      description: 'Sử dụng 100% gỗ tự nhiên từ các nguồn uy tín, được xử lý chống mối mọt, cong vênh.',
      icon: '🌳'
    },
    {
      title: 'Thiết kế độc đáo',
      description: 'Mỗi sản phẩm là một tác phẩm nghệ thuật, được thiết kế riêng theo yêu cầu khách hàng.',
      icon: '✨'
    },
    {
      title: 'Bảo hành dài hạn',
      description: 'Cam kết bảo hành 5 năm, hỗ trợ bảo dưỡng định kỳ miễn phí.',
      icon: '🛡️'
    },
    {
      title: 'Giao hàng toàn quốc',
      description: 'Đóng gói cẩn thận, vận chuyển an toàn đến tận nơi trên toàn quốc.',
      icon: '🚚'
    }
  ];

  const products = [
    {
      name: 'Bàn ăn gỗ óc chó',
      category: 'Phòng ăn',
      image: 'https://images.unsplash.com/photo-1617638924751-cc232f82ecf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b29kZW4lMjB0YWJsZXxlbnwxfHx8fDE3NjMxMTQ4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '25.000.000đ'
    },
    {
      name: 'Ghế sofa gỗ tự nhiên',
      category: 'Phòng khách',
      image: 'https://images.unsplash.com/photo-1680772856779-43eef7cabf18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjaGFpciUyMGludGVyaW9yfGVufDF8fHx8MTc2MzExNDg5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      price: '18.000.000đ'
    },
    {
      name: 'Tủ quần áo gỗ sồi',
      category: 'Phòng ngủ',
      image: 'https://images.unsplash.com/photo-1678555815116-52c1b10517f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjYWJpbmV0JTIwZnVybml0dXJlfGVufDF8fHx8MTc2MzExMDI4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      price: '32.000.000đ'
    },
    {
      name: 'Giường ngủ gỗ cao cấp',
      category: 'Phòng ngủ',
      image: 'https://images.unsplash.com/photo-1583221742001-9ad88bf233ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBiZWRyb29tJTIwZnVybml0dXJlfGVufDF8fHx8MTc2MzExNDg5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      price: '28.000.000đ'
    }
  ];

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ImageWithFallback
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white">
                  <h2 className="text-white mb-4">{slide.title}</h2>
                  <p className="text-xl mb-8 text-white/90">{slide.description}</p>
                  <Button 
                    onClick={() => onNavigate('products')}
                    className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6"
                  >
                    Khám phá sản phẩm
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-amber-900 mb-4">Tại sao chọn chúng tôi?</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Đồ Gỗ Nhật Minh cam kết mang đến những sản phẩm chất lượng cao nhất với dịch vụ tốt nhất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-stone-200">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-amber-900 mb-3">{feature.title}</h3>
                <p className="text-stone-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-amber-900 mb-4">Sản phẩm nổi bật</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Khám phá bộ sưu tập nội thất gỗ cao cấp được yêu thích nhất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow border-stone-200 group">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-amber-700 mb-2">{product.category}</p>
                  <h4 className="text-stone-900 mb-2">{product.name}</h4>
                  <p className="text-amber-900">{product.price}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => onNavigate('products')}
              className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-6"
            >
              Xem tất cả sản phẩm
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white mb-6">Cam kết của chúng tôi</h2>
              <div className="space-y-4">
                {[
                  'Gỗ tự nhiên 100%, không pha tạp chất',
                  'Thiết kế theo yêu cầu, đo đạc tận nơi',
                  'Thi công chuyên nghiệp, đúng tiến độ',
                  'Bảo hành 5 năm, bảo trì trọn đời',
                  'Hỗ trợ tư vấn miễn phí 24/7',
                  'Giá cả cạnh tranh, thanh toán linh hoạt'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-amber-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check size={16} />
                    </div>
                    <p className="text-amber-50">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1685022515813-c42e8348639b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwd29vZHdvcmtpbmd8ZW58MXx8fHwxNzYzMTE0ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Craftsman at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-amber-900 mb-4">Bạn cần tư vấn?</h2>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn 24/7. Hãy liên hệ ngay để được tư vấn miễn phí!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('contact')}
              className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-6"
            >
              Liên hệ ngay
            </Button>
            <Button 
              onClick={() => onNavigate('gallery')}
              className="bg-white hover:bg-stone-50 text-amber-900 border-2 border-amber-900 px-8 py-6"
            >
              Xem thư viện ảnh
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
