import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X } from 'lucide-react';

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const gallery = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1760894382828-6c1b121d638c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmdXJuaXR1cmUlMjBnYWxsZXJ5fGVufDF8fHx8MTc2MzExNDk3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Showroom nội thất',
      category: 'Showroom'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1687180497716-5872969e5125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b29kZW4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjMxMTQ5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Nội thất phòng khách cao cấp',
      category: 'Phòng khách'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1758977403438-1b8546560d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkaW5pbmclMjByb29tfGVufDF8fHx8MTc2MzExNDk4MHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Bộ bàn ăn gia đình',
      category: 'Phòng ăn'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1583221742001-9ad88bf233ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBiZWRyb29tJTIwZGVzaWdufGVufDF8fHx8MTc2MzExNDk4MHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Thiết kế phòng ngủ sang trọng',
      category: 'Phòng ngủ'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1617638924751-cc232f82ecf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b29kZW4lMjB0YWJsZXxlbnwxfHx8fDE3NjMxMTQ4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Bàn làm việc hiện đại',
      category: 'Văn phòng'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1680772856779-43eef7cabf18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjaGFpciUyMGludGVyaW9yfGVufDF8fHx8MTc2MzExNDg5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Ghế sofa gỗ tự nhiên',
      category: 'Phòng khách'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1678555815116-52c1b10517f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjYWJpbmV0JTIwZnVybml0dXJlfGVufDF8fHx8MTc2MzExMDI4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Tủ quần áo cao cấp',
      category: 'Phòng ngủ'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1685022515813-c42e8348639b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwd29vZHdvcmtpbmd8ZW58MXx8fHwxNjMxMTQ4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Quy trình chế tác',
      category: 'Xưởng sản xuất'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1732575966442-b2d665c080d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmdXJuaXR1cmUlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjMxMTQ4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Xưởng sản xuất',
      category: 'Xưởng sản xuất'
    },
  ];

  return (
    <div className="bg-stone-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-white mb-4">Thư viện ảnh</h1>
          <p className="text-xl text-amber-100">
            Khám phá những dự án và sản phẩm đã hoàn thành của chúng tôi
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div
                key={item.id}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm text-amber-300 mb-1">{item.category}</p>
                    <h3 className="text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <ImageWithFallback
              src={gallery[selectedImage].image}
              alt={gallery[selectedImage].title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4 text-white">
              <p className="text-amber-400 mb-2">{gallery[selectedImage].category}</p>
              <h3 className="text-white">{gallery[selectedImage].title}</h3>
            </div>
          </div>

          {/* Navigation */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((prev) => (prev! - 1 + gallery.length) % gallery.length);
            }}
          >
            ‹
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((prev) => (prev! + 1) % gallery.length);
            }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
