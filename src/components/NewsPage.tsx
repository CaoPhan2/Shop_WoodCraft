import React from 'react';
import { Calendar, Eye } from 'lucide-react';

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: 'Giáo dục đại cương tổ chức Hội thảo khoa học năm 2025 tại Trường CĐSPTW',
      date: '20/10/2025',
      views: 23,
      excerpt: 'Thực hiện nhiệm vụ khoa học công nghệ năm 2025 của Trường Cao đẳng Sư phạm Trung ương, Khoa Giáo dục đại cương đã tổ chức thành công Hội thảo khoa học với sự tham gia của các chuyên gia, giảng viên và sinh viên.',
      image: 'https://cdsptw.edu.vn/userfiles/image/2024/001%20picture1.jpg'
    },
    {
      id: 2,
      title: 'Lễ khai giảng năm học mới 2025-2026',
      date: '15/10/2025',
      views: 45,
      excerpt: 'Với tinh thần trách nhiệm và nhiệt huyết, toàn thể sinh viên bước vào năm học mới. Lễ khai giảng diễn ra trang trọng với sự tham gia của Ban Giám hiệu, các thầy cô giáo và toàn thể sinh viên.',
      image: 'https://cdsptw.edu.vn/userfiles/image/2024/006%20img_5780.jpg'
    },
    {
      id: 3,
      title: 'Hội nghị tổng kết công tác Đoàn - Hội năm 2025',
      date: '10/10/2025',
      views: 32,
      excerpt: 'Đánh giá kết quả hoạt động của Đoàn thanh niên và các tổ chức sinh viên trong năm học vừa qua. Nhiều hoạt động ý nghĩa đã được tổ chức, góp phần rèn luyện kỹ năng và tinh thần cho sinh viên.',
      image: 'https://cdsptw.edu.vn/userfiles/image/2022/0211.jpg'
    },
    {
      id: 4,
      title: 'Chương trình trao học bổng cho sinh viên xuất sắc',
      date: '05/10/2025',
      views: 56,
      excerpt: 'Nhà trường trao tặng học bổng khuyến khích học tập cho 50 sinh viên có thành tích cao trong học tập và rèn luyện. Đây là nguồn động viên lớn cho các em tiếp tục nỗ lực.',
      image: 'https://cdsptw.edu.vn/userfiles/image/2024/006%20img_2367.jpg'
    },
    {
      id: 5,
      title: 'Tập huấn kỹ năng thực hành sư phạm cho sinh viên năm thứ 2',
      date: '28/09/2025',
      views: 38,
      excerpt: 'Chương trình tập huấn giúp sinh viên nâng cao kỹ năng giảng dạy, quản lý lớp học và ứng dụng công nghệ trong giáo dục. Đây là hoạt động quan trọng trong chương trình đào tạo giáo viên.',
      image: 'https://cdsptw.edu.vn/userfiles/image/2024/05%20img_0649.jpg'
    },
    {
      id: 6,
      title: 'Giao lưu văn hóa với trường đại học Hàn Quốc',
      date: '22/09/2025',
      views: 41,
      excerpt: 'Trong khuôn khổ hợp tác quốc tế, nhà trường đã tổ chức chương trình giao lưu văn hóa với đại diện từ trường đại học Seoul, Hàn Quốc, mở ra nhiều cơ hội học tập và nghiên cứu cho sinh viên.',
      image: 'https://on.cdn.vccloud.vn/wp-content/uploads/2024/07/anh-cdsptw-1024x683-1-e1710863215691.jpeg'
    }
  ];

  return (
    <div>
      {/* Page Title Banner */}
      <div className="bg-[#f58220] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1>Tin tức - Sự kiện</h1>
          <p className="text-sm mt-2 opacity-90">Trang chủ {'>'} Tin tức</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* News List */}
          <div className="md:col-span-2 space-y-6">
            {newsArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-[#f58220] mb-3 hover:text-[#e07420] cursor-pointer">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {article.views} lượt xem
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{article.excerpt}</p>
                    <a href="#" className="text-[#f58220] hover:text-[#e07420]">
                      [Đọc tiếp]
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-8">
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Trước</button>
              <button className="px-4 py-2 bg-[#f58220] text-white rounded">1</button>
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">2</button>
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">3</button>
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Sau</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Video Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-[#f58220] mb-4">Truyền hình tuyển sinh</h3>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center text-gray-500">
                  <div className="w-16 h-16 bg-[#f58220] rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p>Video tuyển sinh</p>
                </div>
              </div>
            </div>

            {/* Announcements */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex border-b mb-4">
                <button className="px-4 py-2 text-[#f58220] border-b-2 border-[#f58220]">
                  Thông báo
                </button>
                <button className="px-4 py-2 text-gray-600 hover:text-[#f58220]">
                  Văn bản mới
                </button>
              </div>
              
              <ul className="space-y-3">
                <li className="text-sm">
                  <a href="#" className="text-gray-700 hover:text-[#f58220]">
                    • Thông báo tuyển sinh năm 2025
                  </a>
                  <p className="text-xs text-gray-500 ml-3">25/10/2025</p>
                </li>
                <li className="text-sm">
                  <a href="#" className="text-gray-700 hover:text-[#f58220]">
                    • Lịch thi tuyển năng khiếu
                  </a>
                  <p className="text-xs text-gray-500 ml-3">20/10/2025</p>
                </li>
                <li className="text-sm">
                  <a href="#" className="text-gray-700 hover:text-[#f58220]">
                    • Quy chế thi và xét tuyển
                  </a>
                  <p className="text-xs text-gray-500 ml-3">18/10/2025</p>
                </li>
                <li className="text-sm">
                  <a href="#" className="text-gray-700 hover:text-[#f58220]">
                    • Học bổng khuyến khích học tập
                  </a>
                  <p className="text-xs text-gray-500 ml-3">15/10/2025</p>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-[#f58220] mb-4">Danh mục tin</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-700 hover:text-[#f58220] flex justify-between">
                    <span>Tin tức chung</span>
                    <span className="text-gray-500">(24)</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-[#f58220] flex justify-between">
                    <span>Hoạt động sinh viên</span>
                    <span className="text-gray-500">(18)</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-[#f58220] flex justify-between">
                    <span>Hợp tác quốc tế</span>
                    <span className="text-gray-500">(12)</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-[#f58220] flex justify-between">
                    <span>Khoa học công nghệ</span>
                    <span className="text-gray-500">(15)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
