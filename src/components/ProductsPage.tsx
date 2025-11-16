import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Filter } from 'lucide-react';

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tất cả sản phẩm' },
    { id: 'living', name: 'Phòng khách' },
    { id: 'dining', name: 'Phòng ăn' },
    { id: 'bedroom', name: 'Phòng ngủ' },
    { id: 'office', name: 'Văn phòng' },
  ];

  const products = [
    {
      id: 1,
      name: 'Bàn ăn gỗ óc chó 6 ghế',
      category: 'dining',
      image: 'https://images.unsplash.com/photo-1617638924751-cc232f82ecf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b29kZW4lMjB0YWJsZXxlbnwxfHx8fDE3NjMxMTQ4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '25.000.000đ',
      description: 'Bàn ăn 6 ghế gỗ óc chó tự nhiên, thiết kế hiện đại'
    },
    {
      id: 2,
      name: 'Ghế sofa gỗ 3 chỗ ngồi',
      category: 'living',
      image: 'https://images.unsplash.com/photo-1680772856779-43eef7cabf18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjaGFpciUyMGludGVyaW9yfGVufDF8fHx8MTc2MzExNDg5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      price: '18.000.000đ',
      description: 'Sofa gỗ tự nhiên kết hợp đệm êm ái, sang trọng'
    },
    {
      id: 3,
      name: 'Tủ quần áo gỗ sồi 4 cánh',
      category: 'bedroom',
      image: 'https://images.unsplash.com/photo-1678555815116-52c1b10517f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjYWJpbmV0JTIwZnVybml0dXJlfGVufDF8fHx8MTc2MzExMDI4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      price: '32.000.000đ',
      description: 'Tủ quần áo gỗ sồi Mỹ, dung tích lớn, thiết kế thông minh'
    },
    {
      id: 4,
      name: 'Giường ngủ gỗ King Size',
      category: 'bedroom',
      image: 'https://images.unsplash.com/photo-1583221742001-9ad88bf233ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBiZWRyb29tJTIwZnVybml0dXJlfGVufDF8fHx8MTc2MzExNDg5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      price: '28.000.000đ',
      description: 'Giường ngủ cao cấp 1m8x2m, gỗ tự nhiên chắc chắn'
    },
    {
      id: 5,
      name: 'Bàn làm việc gỗ óc chó',
      category: 'office',
      image: 'https://images.unsplash.com/photo-1617638924751-cc232f82ecf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b29kZW4lMjB0YWJsZXxlbnwxfHx8fDE3NjMxMTQ4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '15.000.000đ',
      description: 'Bàn làm việc thiết kế tối giản, nhiều ngăn kéo'
    },
    {
      id: 6,
      name: 'Kệ tivi gỗ hiện đại',
      category: 'living',
      image: 'https://images.unsplash.com/photo-1678555815116-52c1b10517f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjYWJpbmV0JTIwZnVybml0dXJlfGVufDF8fHx8MTc2MzExMDI4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      price: '12.000.000đ',
      description: 'Kệ tivi gỗ tự nhiên, thiết kế tinh tế và gọn gàng'
    },
    {
      id: 7,
      name: 'Bàn ăn tròn 4 ghế',
      category: 'dining',
      image: 'https://images.unsplash.com/photo-1617638924751-cc232f82ecf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b29kZW4lMjB0YWJsZXxlbnwxfHx8fDE3NjMxMTQ4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '18.000.000đ',
      description: 'Bàn ăn tròn gỗ sồi, phù hợp cho gia đình nhỏ'
    },
    {
      id: 8,
      name: 'Tủ sách gỗ cao cấp',
      category: 'office',
      image: 'https://images.unsplash.com/photo-1678555815116-52c1b10517f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjYWJpbmV0JTIwZnVybml0dXJlfGVufDF8fHx8MTc2MzExMDI4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      price: '22.000.000đ',
      description: 'Tủ sách gỗ tự nhiên với nhiều ngăn kệ linh hoạt'
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-stone-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-white mb-4">Sản phẩm của chúng tôi</h1>
          <p className="text-xl text-amber-100">
            Khám phá bộ sưu tập nội thất gỗ cao cấp được chế tác tỉ mỉ
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4 text-stone-700">
              <Filter size={20} />
              <span>Danh mục:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id
                      ? 'bg-amber-800 text-white hover:bg-amber-900'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-300'
                  }`}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow border-stone-200 group">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-stone-900 mb-2">{product.name}</h3>
                  <p className="text-stone-600 text-sm mb-3">{product.description}</p>
                  <p className="text-amber-900 mb-4">{product.price}</p>
                  <Button className="w-full bg-amber-800 hover:bg-amber-900 text-white">
                    Liên hệ đặt hàng
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-stone-600">Không tìm thấy sản phẩm nào trong danh mục này.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-amber-900 mb-4">Không tìm thấy sản phẩm phù hợp?</h2>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            Chúng tôi nhận thiết kế và sản xuất nội thất theo yêu cầu riêng. Liên hệ ngay để được tư vấn!
          </p>
          <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-6">
            Tư vấn thiết kế
          </Button>
        </div>
      </section>
    </div>
  );
}
