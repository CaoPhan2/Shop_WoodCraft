import React from 'react';
import { GraduationCap, Clock, BookOpen } from 'lucide-react';

export default function TrainingPage() {
  const programs = [
    {
      name: 'Giáo dục Mầm non',
      image: 'https://cdsptw.edu.vn/userfiles/image/2019/21.jpg',
      description: 'Đào tạo giáo viên mầm non với phương pháp hiện đại, tâm huyết và yêu trẻ'
    },
    {
      name: 'Giáo dục Đặc biệt',
      image: 'https://cdsptw.edu.vn/userfiles/image/2024/001%20picture1.jpg',
      description: 'Chuyên môn sâu về giáo dục trẻ em có nhu cầu đặc biệt'
    },
    {
      name: 'Giáo dục Nghề nghiệp',
      image: 'https://cdsptw.edu.vn/WfImage.ashx?i=/userfiles/image/2025/img_%206342.jpg&is=8',
      description: 'Đào tạo giáo viên dạy nghề với kỹ năng thực hành cao'
    }
  ];

  const curriculum = [
    { semester: 'HK1', content: 'Kiến thức cơ sở' },
    { semester: 'HK2', content: 'Kiến thức ngành' },
    { semester: 'HK3', content: 'Thực tập sư phạm' },
    { semester: 'HK4', content: 'Tốt nghiệp & báo cáo' }
  ];

  return (
    <div>
      {/* Page Title Banner */}
      <div className="bg-[#7B1FA2] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1>Đào tạo</h1>
          <p className="text-sm mt-2 opacity-90">Trang chủ {'>'} Đào tạo</p>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-72">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8wE3DTjw_T3utcCd6w5LkYI_1tg1yKwaC5A&s"
          alt="Đào tạo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white bg-opacity-30 flex items-center justify-center">
          <h2 className="text-5xl text-[#6A1B9A]">ĐÀO TẠO</h2>
        </div>
      </div>

      <div className="bg-[#FFF8E1] min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Programs Section */}
          <section className="mb-12">
            <h2 className="text-[#7B1FA2] mb-8">Danh sách các ngành đào tạo</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-[#E65100] mb-3">{program.name}</h3>
                    <p className="text-gray-700">{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Curriculum Structure */}
          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-[#7B1FA2]" />
                <h2 className="text-[#7B1FA2]">Cấu trúc chương trình đào tạo</h2>
              </div>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-[#7B1FA2] flex-shrink-0 mt-1" />
                  <div>
                    <span>Thời lượng đào tạo: </span>
                    <span>2,5 – 3 năm</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BookOpen className="w-5 h-5 text-[#7B1FA2] flex-shrink-0 mt-1" />
                  <div>
                    <span>Hình thức: </span>
                    <span>Chính quy</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 text-[#7B1FA2] flex-shrink-0 mt-1">📚</div>
                  <div>
                    <span>Nội dung: </span>
                    <span>Kiến thức cơ sở, chuyên ngành, thực tập sư phạm, khóa luận tốt nghiệp</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-[#7B1FA2] mb-6">Lịch học – kế hoạch học tập</h2>
              
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#7B1FA2] text-white">
                      <th className="px-4 py-3 text-left">Học kỳ</th>
                      <th className="px-4 py-3 text-left">Nội dung chính</th>
                    </tr>
                  </thead>
                  <tbody>
                    {curriculum.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-3 text-gray-900">{item.semester}</td>
                        <td className="px-4 py-3 text-gray-700">{item.content}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Additional Info */}
          <section className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200">
              <div className="w-16 h-16 bg-[#E1BEE7] rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-[#7B1FA2]" />
              </div>
              <h3 className="text-[#6A1B9A] mb-2">Chất lượng cao</h3>
              <p className="text-gray-700">Đội ngũ giảng viên giàu kinh nghiệm</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200">
              <div className="w-16 h-16 bg-[#E1BEE7] rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-[#7B1FA2]" />
              </div>
              <h3 className="text-[#6A1B9A] mb-2">Cơ sở vật chất</h3>
              <p className="text-gray-700">Phòng học, thư viện hiện đại</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200">
              <div className="w-16 h-16 bg-[#E1BEE7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#7B1FA2]" />
              </div>
              <h3 className="text-[#6A1B9A] mb-2">Thời gian linh hoạt</h3>
              <p className="text-gray-700">Lịch học phù hợp với sinh viên</p>
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
