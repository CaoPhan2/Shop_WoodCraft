import React from 'react';
import { BookOpen, Users, Calendar, FileText } from 'lucide-react';

export default function AdmissionPage() {
  const programs = [
    {
      name: 'Giáo dục Mầm non',
      quota: '200 chỉ tiêu',
      duration: '2,5 - 3 năm',
      requirements: 'Tốt nghiệp THPT, thi năng khiếu'
    },
    {
      name: 'Giáo dục Đặc biệt',
      quota: '100 chỉ tiêu',
      duration: '3 năm',
      requirements: 'Tốt nghiệp THPT, thi năng khiếu'
    },
    {
      name: 'Giáo dục Nghề nghiệp',
      quota: '150 chỉ tiêu',
      duration: '2,5 - 3 năm',
      requirements: 'Tốt nghiệp THPT'
    }
  ];

  const schedule = [
    { event: 'Nhận hồ sơ đăng ký', time: '15/03 - 30/06/2025' },
    { event: 'Thi năng khiếu', time: '15/07 - 20/07/2025' },
    { event: 'Công bố kết quả', time: '01/08/2025' },
    { event: 'Nhập học', time: '15/08 - 20/08/2025' }
  ];

  return (
    <div>
      {/* Page Title Banner */}
      <div className="bg-[#f58220] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1>Tuyển sinh</h1>
          <p className="text-sm mt-2 opacity-90">Trang chủ {'>'} Tuyển sinh</p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-64">
        <img
          src="https://cdsptw.edu.vn/userfiles/image/2023/01_l2.jpg"
          alt="Sinh viên"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl mb-2">Tuyển sinh năm 2025</h2>
            <p className="text-xl">Cùng nhau xây dựng tương lai giáo dục</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Programs */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-[#f58220] mb-6">Thông tin tuyển sinh</h2>
              
              <div className="space-y-6">
                {programs.map((program, index) => (
                  <div key={index} className="border-l-4 border-[#f58220] pl-6 py-4 bg-orange-50">
                    <h3 className="text-[#f58220] mb-3">{program.name}</h3>
                    <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                      <div>
                        <span className="block text-gray-500">Chỉ tiêu:</span>
                        <span>{program.quota}</span>
                      </div>
                      <div>
                        <span className="block text-gray-500">Thời gian:</span>
                        <span>{program.duration}</span>
                      </div>
                      <div>
                        <span className="block text-gray-500">Yêu cầu:</span>
                        <span>{program.requirements}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Exam Schedule */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-[#f58220] mb-6">Lịch thi năng khiếu</h2>
              
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <Calendar className="w-8 h-8 text-[#f58220]" />
                    <div className="flex-1">
                      <p className="text-gray-900">{item.event}</p>
                      <p className="text-sm text-gray-600">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-[#f58220] mb-6">Tra cứu kết quả tuyển sinh</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Số báo danh</label>
                  <input
                    type="text"
                    placeholder="Nhập số báo danh"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f58220]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Ngày sinh</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f58220]"
                  />
                </div>
                <button className="w-full bg-[#f58220] text-white py-3 rounded-lg hover:bg-[#e07420] transition-colors">
                  Tra cứu kết quả
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-[#f58220] mb-4">Thông tin nhanh</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-[#f58220] flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-900">Tổng chỉ tiêu</p>
                    <p className="text-gray-600">450 sinh viên</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-[#f58220] flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-900">Hình thức đào tạo</p>
                    <p className="text-gray-600">Chính quy</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-[#f58220] flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-900">Hồ sơ yêu cầu</p>
                    <p className="text-gray-600">Theo quy định</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-[#f58220] mb-4">Tài liệu tải về</h3>
              
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-700 hover:text-[#f58220] flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Đơn đăng ký dự tuyển
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-700 hover:text-[#f58220] flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Quy chế tuyển sinh 2025
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-700 hover:text-[#f58220] flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Hướng dẫn nộp hồ sơ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-700 hover:text-[#f58220] flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Danh mục ngành đào tạo
                  </a>
                </li>
              </ul>
            </div>

            {/* News */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-[#f58220] mb-4">Tin tức tuyển sinh</h3>
              
              <ul className="space-y-3">
                <li className="text-sm">
                  <a href="#" className="text-gray-700 hover:text-[#f58220]">
                    Thông báo xét tuyển bổ sung
                  </a>
                  <p className="text-xs text-gray-500">25/10/2025</p>
                </li>
                <li className="text-sm">
                  <a href="#" className="text-gray-700 hover:text-[#f58220]">
                    Kết quả thi năng khiếu đợt 1
                  </a>
                  <p className="text-xs text-gray-500">20/10/2025</p>
                </li>
                <li className="text-sm">
                  <a href="#" className="text-gray-700 hover:text-[#f58220]">
                    Hướng dẫn thủ tục nhập học
                  </a>
                  <p className="text-xs text-gray-500">15/10/2025</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
