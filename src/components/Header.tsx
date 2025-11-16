import { Menu, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'products' | 'gallery' | 'about' | 'contact';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as Page, label: 'Trang chủ' },
    { id: 'products' as Page, label: 'Sản phẩm' },
    { id: 'gallery' as Page, label: 'Thư viện' },
    { id: 'about' as Page, label: 'Giới thiệu' },
    { id: 'contact' as Page, label: 'Liên hệ' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-amber-900 text-amber-50 py-2">
        <div className="container mx-auto px-4 flex justify-end gap-6 text-sm">
          <a href="tel:+84123456789" className="flex items-center gap-2 hover:text-amber-200 transition-colors">
            <Phone size={16} />
            <span>0123 456 789</span>
          </a>
          <a href="mailto:contact@dogonhatminh.vn" className="flex items-center gap-2 hover:text-amber-200 transition-colors">
            <Mail size={16} />
            <span>contact@dogonhatminh.vn</span>
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-12 h-12 bg-amber-800 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">🪵</span>
            </div>
            <div>
              <h1 className="text-amber-900">Đồ Gỗ Nhật Minh</h1>
              <p className="text-sm text-stone-600">Chất lượng - Uy tín - Tinh tế</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`transition-colors ${
                  currentPage === item.id
                    ? 'text-amber-800'
                    : 'text-stone-700 hover:text-amber-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-stone-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-4 rounded transition-colors ${
                  currentPage === item.id
                    ? 'bg-amber-100 text-amber-900'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
