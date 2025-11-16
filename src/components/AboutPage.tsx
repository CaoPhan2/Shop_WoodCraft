import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Users, Heart, TrendingUp } from 'lucide-react';
import { Card } from './ui/card';

export function AboutPage() {
  const stats = [
    { icon: Award, value: '20+', label: 'Năm kinh nghiệm' },
    { icon: Users, value: '5000+', label: 'Khách hàng hài lòng' },
    { icon: Heart, value: '100%', label: 'Gỗ tự nhiên' },
    { icon: TrendingUp, value: '95%', label: 'Khách quay lại' },
  ];

  const values = [
    {
      title: 'Chất lượng',
      description: 'Cam kết sử dụng 100% gỗ tự nhiên cao cấp, được chọn lọc kỹ lưỡng từ các nguồn uy tín.',
      icon: '🌟'
    },
    {
      title: 'Tay nghề',
      description: 'Đội ngũ thợ mộc lành nghề với hơn 20 năm kinh nghiệm trong nghề chế tác đồ gỗ.',
      icon: '🛠️'
    },
    {
      title: 'Uy tín',
      description: 'Luôn đặt chữ tín lên hàng đầu, cam kết giao hàng đúng tiến độ và chất lượng.',
      icon: '🤝'
    },
    {
      title: 'Sáng tạo',
      description: 'Không ngừng sáng tạo, đổi mới để mang đến những sản phẩm độc đáo và tinh tế.',
      icon: '💡'
    }
  ];

  const timeline = [
    {
      year: '2004',
      title: 'Khởi đầu',
      description: 'Thành lập xưởng mộc nhỏ với 3 thợ, chuyên làm đồ gỗ gia dụng.'
    },
    {
      year: '2010',
      title: 'Phát triển',
      description: 'Mở rộng xưởng sản xuất, đầu tư máy móc hiện đại, tăng năng suất.'
    },
    {
      year: '2015',
      title: 'Chuyên nghiệp',
      description: 'Chính thức thành lập công ty, mở showroom trưng bày sản phẩm.'
    },
    {
      year: '2020',
      title: 'Mở rộng',
      description: 'Ra mắt website, phục vụ khách hàng toàn quốc, xuất khẩu sang nước ngoài.'
    },
    {
      year: '2025',
      title: 'Hiện tại',
      description: 'Trở thành một trong những thương hiệu đồ gỗ uy tín hàng đầu tại Việt Nam.'
    }
  ];

  return (
    <div className="bg-stone-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-white mb-4">Về chúng tôi</h1>
          <p className="text-xl text-amber-100">
            Hơn 20 năm đồng hành cùng hàng nghìn gia đình Việt
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-amber-900 mb-6">Câu chuyện của chúng tôi</h2>
              <div className="space-y-4 text-stone-700">
                <p>
                  <strong className="text-amber-900">Đồ Gỗ Nhật Minh</strong> được thành lập từ năm 2004 bởi nghệ nhân Nguyễn Nhật Minh - một người thợ mộc tài ba với tình yêu và đam mê với nghề chế tác đồ gỗ.
                </p>
                <p>
                  Xuất phát từ một xưởng mộc nhỏ, qua hơn 20 năm phát triển, chúng tôi đã trở thành một trong những đơn vị cung cấp nội thất gỗ cao cấp uy tín hàng đầu tại Việt Nam.
                </p>
                <p>
                  Với phương châm <strong className="text-amber-900">"Chất lượng - Uy tín - Tinh tế"</strong>, chúng tôi luôn nỗ lực không ngừng để mang đến cho khách hàng những sản phẩm nội thất gỗ chất lượng cao nhất, được chế tác tỉ mỉ từ những nghệ nhân lành nghề.
                </p>
                <p>
                  Mỗi sản phẩm của Đồ Gỗ Nhật Minh không chỉ là một món đồ nội thất, mà còn là một tác phẩm nghệ thuật mang đậm dấu ấn của sự tâm huyết và đam mê với nghề.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1685022515813-c42e8348639b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwd29vZHdvcmtpbmd8ZW58MXx8fHwxNjMxMTQ4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Craftsman at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-amber-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-amber-300" />
                  <div className="text-white mb-2">{stat.value}</div>
                  <p className="text-amber-100">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-amber-900 mb-4">Giá trị cốt lõi</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Những giá trị mà chúng tôi luôn hướng đến trong mọi sản phẩm và dịch vụ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-stone-200">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-amber-900 mb-3">{value.title}</h3>
                <p className="text-stone-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-amber-900 mb-4">Hành trình phát triển</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Những mốc son quan trọng trong quá trình phát triển của Đồ Gỗ Nhật Minh
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 w-24">
                  <div className="inline-block bg-amber-900 text-white px-4 py-2 rounded-full">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-amber-200 pl-8 relative">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-amber-600 rounded-full -translate-x-[9px]" />
                  <h3 className="text-amber-900 mb-2">{item.title}</h3>
                  <p className="text-stone-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1732575966442-b2d665c080d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmdXJuaXR1cmUlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjMxMTQ4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Workshop"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-amber-900 mb-6">Xưởng sản xuất</h2>
              <div className="space-y-4 text-stone-700">
                <p>
                  Xưởng sản xuất của chúng tôi được trang bị đầy đủ máy móc thiết bị hiện đại, kết hợp với tay nghề thủ công truyền thống của các nghệ nhân lành nghề.
                </p>
                <p>
                  Quy trình sản xuất được kiểm soát chặt chẽ từ khâu chọn gỗ, xử lý, gia công đến hoàn thiện sản phẩm, đảm bảo chất lượng tốt nhất cho từng chi tiết.
                </p>
                <p>
                  Chúng tôi luôn cập nhật công nghệ mới nhất trong ngành, nhưng vẫn giữ gìn và phát huy những kỹ thuật chế tác truyền thống quý báu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
