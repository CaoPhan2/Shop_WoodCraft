import React from 'react';
import { BookOpen, Users as UsersIcon } from 'lucide-react';

export default function DepartmentPage() {
  const departments = [
    {
      name: 'Khoa Giáo dục Mầm non',
      description: 'Đào tạo giáo viên mầm non chuyên nghiệp với phương pháp giảng dạy tiên tiến, tâm huyết với nghề và yêu trẻ em.',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400'
    },
    {
      name: 'Khoa Giáo dục Đặc biệt',
      description: 'Chuyên đào tạo giáo viên có năng lực giảng dạy trẻ em có nhu cầu đặc biệt, với sự tận tâm và chuyên môn cao.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400'
    },
    {
      name: 'Khoa Nghệ thuật',
      description: 'Đào tạo giáo viên âm nhạc, mỹ thuật với kỹ năng sư phạm và năng khiếu nghệ thuật xuất sắc.',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400'
    },
    {
      name: 'Khoa Cơ bản',
      description: 'Cung cấp kiến thức nền tảng về toán, lý, hóa, văn cho các ngành sư phạm.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400'
    },
    {
      name: 'Khoa Giáo dục Nghề nghiệp',
      description: 'Đào tạo giảng viên dạy nghề với kỹ năng thực hành và kinh nghiệm chuyên môn vững vàng.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400'
    }
  ];

  const teachers = [
    {
      name: 'ThS. Nguyễn Thị Hạnh',
      position: 'Giảng viên Khoa Giáo dục Mầm non',
      expertise: 'Phương pháp giảng dạy mầm non, Tâm lý học trẻ em',
      image: 'https://images.unsplash.com/photo-1662732899935-2a702a214b95?w=200'
    },
    {
      name: 'TS. Phạm Văn Long',
      position: 'Giảng viên Khoa Giáo dục Đặc biệt',
      expertise: 'Giáo dục trẻ khuyết tật, Can thiệp sớm',
      image: 'https://images.unsplash.com/photo-1740153204470-53badbf17266?w=200'
    },
    {
      name: 'ThS. Lê Thu Hà',
      position: 'Giảng viên Khoa Nghệ thuật',
      expertise: 'Âm nhạc sư phạm, Lý thuyết âm nhạc',
      image: 'https://images.unsplash.com/photo-1515073838964-4d4d56a58b21?w=200'
    }
  ];

  return (
    <div>
      {/* Page Title Banner */}
      <div className="bg-[#FDD835] text-[#B71C1C] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1>Khoa - Bộ môn</h1>
          <p className="text-sm mt-2 opacity-90">Trang chủ {'>'} Khoa - Bộ môn</p>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-72">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200"
          alt="Khoa bộ môn"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white bg-opacity-30 flex items-center justify-center">
          <h2 className="text-5xl text-[#7B1FA2]">KHOA – BỘ MÔN</h2>
        </div>
      </div>

      <div className="bg-[#FFF8E1] min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Departments Section */}
          <section className="mb-12">
            <h2 className="text-[#6A1B9A] mb-8">Danh sách các khoa – bộ môn</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {departments.map((dept, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img
                        src={dept.image}
                        alt={dept.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-6">
                      <h3 className="text-[#E65100] mb-3">{dept.name}</h3>
                      <p className="text-gray-700">{dept.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Teachers Section */}
          <section className="mb-12">
            <h2 className="text-[#6A1B9A] mb-8">Giảng viên tiêu biểu</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {teachers.map((teacher, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-200">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-[#E1BEE7]"
                  />
                  <h3 className="text-[#6A1B9A] mb-2">{teacher.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{teacher.position}</p>
                  <p className="text-sm text-gray-700">
                    <span className="text-gray-500">Chuyên môn:</span><br/>
                    {teacher.expertise}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="mt-12">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200">
                <div className="w-16 h-16 bg-[#FFF9C4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-[#E65100]" />
                </div>
                <h3 className="text-[#6A1B9A] mb-2">5 Khoa</h3>
                <p className="text-gray-700">Đa dạng ngành đào tạo</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200">
                <div className="w-16 h-16 bg-[#FFF9C4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="w-8 h-8 text-[#E65100]" />
                </div>
                <h3 className="text-[#6A1B9A] mb-2">150+ Giảng viên</h3>
                <p className="text-gray-700">Đội ngũ chuyên môn cao</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200">
                <div className="w-16 h-16 bg-[#FFF9C4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎓</span>
                </div>
                <h3 className="text-[#6A1B9A] mb-2">2000+ Sinh viên</h3>
                <p className="text-gray-700">Đang theo học</p>
              </div>
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
