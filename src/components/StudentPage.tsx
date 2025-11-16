import React from 'react';
import { Users, Gift, FileText, Monitor } from 'lucide-react';

export default function StudentPage() {
  const sections = [
    {
      icon: Users,
      title: 'Góc HSSV: Hoạt động Đoàn, Hội, CLB',
      description: 'Nơi cập nhật thông tin các hoạt động đoàn thể, phong trào sinh viên, câu lạc bộ học thuật và văn nghệ.',
      link: '#clubs'
    },
    {
      icon: Gift,
      title: 'Thông báo học bổng, hỗ trợ sinh viên',
      description: 'Cập nhật các loại học bổng khuyến khích học tập, chính sách hỗ trợ sinh viên khó khăn, miễn giảm học phí.',
      link: '#scholarships'
    },
    {
      icon: FileText,
      title: 'Quy định học vụ',
      description: 'Thông tin về quy chế học tập, nghỉ học, bảo lưu kết quả, khen thưởng và kỷ luật sinh viên.',
      link: '#regulations'
    },
    {
      icon: Monitor,
      title: 'Liên kết tra cứu điểm – thời khóa biểu',
      description: 'Sinh viên có thể tra cứu kết quả học tập, thời khóa biểu và lịch thi qua hệ thống trực tuyến.',
      link: '#lookup'
    }
  ];

  return (
    <div>
      {/* Page Title Banner */}
      <div className="bg-[#7B1FA2] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1>Học sinh - Sinh viên (HSSV)</h1>
          <p className="text-sm mt-2 opacity-90">Trang chủ {'>'} HSSV</p>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-72">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200"
          alt="Sinh viên"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white bg-opacity-30 flex items-center justify-center">
          <h2 className="text-5xl text-[#7B1FA2]">HỌC SINH – SINH VIÊN (HSSV)</h2>
        </div>
      </div>

      <div className="bg-[#FFF8E1] min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Sections Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow border border-gray-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-[#E1BEE7] rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-7 h-7 text-[#6A1B9A]" />
                    </div>
                    <h3 className="text-[#6A1B9A] flex-1">{section.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6">{section.description}</p>
                  <a 
                    href={section.link}
                    className="inline-block bg-[#FFA000] hover:bg-[#FFCA28] text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    {index === 3 ? 'Truy cập hệ thống' : index === 2 ? 'Tải quy định' : 'Xem chi tiết'}
                  </a>
                </div>
              );
            })}
          </div>

          {/* Activities Section */}
          <section className="mb-12">
            <h2 className="text-[#7B1FA2] mb-8">Hoạt động sinh viên nổi bật</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://cdsptw.edu.vn/userfiles/image/2023/001%20img_6987.jpg"
                  alt="Hoạt động 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-[#6A1B9A] mb-2">Đại hội Đoàn thanh niên</h4>
                  <p className="text-sm text-gray-600 mb-2">25/10/2025</p>
                  <p className="text-gray-700">Tổng kết hoạt động Đoàn năm học 2024-2025</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://cdsptw.edu.vn/userfiles/image/2025/019%20img_1173.jpg"
                  alt="Hoạt động 2"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-[#6A1B9A] mb-2">Ngày hội Văn hóa</h4>
                  <p className="text-sm text-gray-600 mb-2">18/10/2025</p>
                  <p className="text-gray-700">Giao lưu văn hóa các dân tộc Việt Nam</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqd6B-VBt52unzFIiOjCv93ANqOId0LBOZxg&s"
                  alt="Hoạt động 3"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-[#6A1B9A] mb-2">Tình nguyện Mùa hè xanh</h4>
                  <p className="text-sm text-gray-600 mb-2">10/10/2025</p>
                  <p className="text-gray-700">Chiến dịch tình nguyện hè tại vùng cao</p>
                </div>
              </div>
            </div>
          </section>

          {/* Clubs Section */}
          <section>
            <h2 className="text-[#7B1FA2] mb-8">Câu lạc bộ sinh viên</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {['CLB Tiếng Anh', 'CLB Nghệ thuật', 'CLB Thể thao', 'CLB Tình nguyện'].map((club, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[#E1BEE7] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-[#6A1B9A]" />
                  </div>
                  <h4 className="text-[#6A1B9A] mb-2">{club}</h4>
                  <p className="text-sm text-gray-600">50+ thành viên</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer with different color */}
      <div className="bg-[#FDD835] py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-[#4E342E]">
          <p>© 2025 Trường Cao đẳng Sư phạm Trung ương</p>
          <p className="text-sm mt-1">387 Hoàng Quốc Việt, Cầu Giấy, Hà Nội | Điện thoại: (024) 3833 0708 | Website: cdsptw.edu.vn</p>
        </div>
      </div>
    </div>
  );
}
