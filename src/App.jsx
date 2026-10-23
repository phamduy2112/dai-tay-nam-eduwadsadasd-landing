import React from 'react';
import HeaderTanSanhNgu from './components/HeaderTanSanhNgu.jsx';
import HeroStandard from './components/HeroStandard.jsx';
import NeedsCategorized from './components/NeedsCategorized.jsx';
import WhyUsComparison from './components/WhyUsComparison.jsx';
import CoursesGrid from './components/CoursesGrid.jsx';
import RoadmapTimeline from './components/RoadmapTimeline.jsx';
import OpeningScheduleTable from './components/OpeningScheduleTable.jsx';
import TeachersSlider from './components/TeachersSlider.jsx';
import FeedbackSlider from './components/FeedbackSlider.jsx';
import FaqAccordion from './components/FaqAccordion.jsx';
import ConsultationForm from './components/ConsultationForm.jsx';
import FloatingContact from './components/FloatingContact.jsx';
import FooterSection from './components/FooterSection.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-primary selection:text-white">
      <main className="flex-1">
        {/* Section: Header Tân Sanh Ngữ (Thực Tế) */}
        <HeaderTanSanhNgu />
        {/* Section: Hero Banner Chuẩn Quốc Tế */}
        <HeroStandard />
        {/* Section: Phân Loại Đối Tượng & Nỗi Đau */}
        <NeedsCategorized />
        {/* Section: Bảng So Sánh Lợi Thế Vượt Trội */}
        <WhyUsComparison />
        {/* Section: Lưới Khóa Học & Bảng Giá Ưu Đãi */}
        <CoursesGrid />
        {/* Section: Lộ Trình Tinh Gọn 4 Bước (Roadmap) */}
        <RoadmapTimeline />
        {/* Section: Bảng Lịch Khai Giảng Dự Kiến */}
        <OpeningScheduleTable />
        {/* Section: Đội Ngũ Giảng Viên & Chuyên Gia */}
        <TeachersSlider />
        {/* Section: Đánh Giá & Bằng Chứng Học Viên */}
        <FeedbackSlider />
        {/* Section: Câu Hỏi Thường Gặp (Accordion FAQ) */}
        <FaqAccordion />
        {/* Section: Form Tư Vấn Lead & Quà Tặng Đính Kèm */}
        <ConsultationForm />
        {/* Section: Nút Nổi Liên Hệ Zalo & Hotline */}
        <FloatingContact />
        {/* Section: Footer Chi Nhánh & Pháp Lý */}
        <FooterSection />
      </main>
    </div>
  );
}
