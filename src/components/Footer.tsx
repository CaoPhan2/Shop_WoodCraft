import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

type Page = 'home' | 'products' | 'gallery' | 'about' | 'contact';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-amber-950 text-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-amber-200 mb-4">Đồ Gỗ Nhật Minh</h3>
            <p className="text-amber-100 mb-4">
              Chuyên cung cấp các sản phẩm nội thất gỗ cao cấp, được chế tác tỉ mỉ từ những nghệ nhân lành nghề với hơn 20 năm kinh nghiệm.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-amber-200 mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2 text-amber-100">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-amber-300 transition-colors">
                  Trang chủ
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-amber-300 transition-colors">
                  Sản phẩm
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-amber-300 transition-colors">
                  Thư viện ảnh
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-300 transition-colors">
                  Giới thiệu
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-amber-300 transition-colors">
                  Liên hệ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-amber-200 mb-4">Thông tin liên hệ</h3>
            <ul className="space-y-3 text-amber-100">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>123 Đường Láng, Đống Đa, Hà Nội</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0" />
                <a href="tel:+84123456789" className="hover:text-amber-300 transition-colors">
                  0123 456 789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0" />
                <a href="mailto:contact@dogonhatminh.vn" className="hover:text-amber-300 transition-colors">
                  contact@dogonhatminh.vn
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="flex-shrink-0 mt-1" />
                <div>
                  <p>Thứ 2 - Thứ 7: 8:00 - 18:00</p>
                  <p>Chủ nhật: 9:00 - 17:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-900 mt-8 pt-8 text-center text-amber-200">
          <p>&copy; 2025 Đồ Gỗ Nhật Minh. Bản quyền thuộc về Công ty TNHH Đồ Gỗ Nhật Minh.</p>
        </div>
      </div>
    </footer>
  );
}
