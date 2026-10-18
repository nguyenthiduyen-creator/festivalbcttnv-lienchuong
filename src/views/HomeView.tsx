import React, { useState, useEffect } from 'react';
import { TabType } from '../types';
import { 
  FESTIVAL_INFO, 
  HIGHLIGHT_STATS 
} from '../data/festivalData';
import { 
  Flame, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft
} from 'lucide-react';
import { FanpageDropdownCTA } from '../components/FanpageDropdownCTA';

interface HomeViewProps {
  onNavigateTab: (tab: TabType, sectionId?: string) => void;
  onOpenSocialModal: () => void;
}

// 4 Featured Activities for Home Page Activity Cards
const FEATURED_ACTIVITIES = [
  {
    id: 'game',
    sectionId: 'chuoi-game',
    title: 'CHUỖI GAME ĐỒNG ĐỘI',
    image: 'game.jpg',
    alt: 'Game',
  },
  {
    id: 'gala',
    sectionId: 'dem-gala',
    title: 'ĐÊM GALA BÙNG NỔ',
    image: 'gala.jpg',
    alt: 'Gala',
  },
  {
    id: 'chimlua',
    sectionId: 'phuong-hoang-lua',
    title: 'PHƯỢNG HOÀNG LỬA',
    image: 'chimlua1.jpg',
    alt: 'Phượng Hoàng Lửa',
  },
  {
    id: 'giaoluu',
    sectionId: 'giao-luu-van-hoa',
    title: 'KHÔNG GIAN GIAO LƯU',
    image: 'khonggiangiaoluu.jpg',
    alt: 'Không gian giao lưu',
  },
];

// CRITICAL: Event Keyvisual (anhbia.png) as FIRST slide, followed by group photos
const HERO_IMAGES = [
  "./anhbia.png",
  "./anhtapthe1.jpg",
  "./anhtapthe2.jpg",
  "./anhtapthe3.jpg",
  "./anhtapthe4.jpg",
  "./anhtapthe5.jpg"
];

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigateTab,
  onOpenSocialModal,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-sliding carousel every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };


  return (
    <div className="w-full bg-[#20123a] text-white">
      {/* 1. HERO SECTION (Auto-Sliding Background Image Carousel with Firefox Vibrant Dark Flat theme) */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="relative min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] rounded-3xl sm:rounded-[36px] overflow-hidden flex items-end justify-center text-center p-6 sm:p-12 lg:p-16 border-none shadow-none">
          
          {/* Background Images with smooth opacity transitions */}
          {HERO_IMAGES.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={index === 0 ? "Keyvisual Festival Báo chí Truyền thông Nhân Văn" : `Khoảnh khắc Liên Chuồng SJC ${index}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              }`}
            />
          ))}

          {/* Gradient Overlay: Transparent at top for bright photos & keyvisual, smoothly transitioning to dark purple */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#20123a]/30 to-[#20123a] z-10" />

          {/* Arrow navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-[#7542e5] text-white flex items-center justify-center transition-colors cursor-pointer z-30 border-none shadow-none hidden sm:flex"
            aria-label="Hình trước"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-[#7542e5] text-white flex items-center justify-center transition-colors cursor-pointer z-30 border-none shadow-none hidden sm:flex"
            aria-label="Hình kế tiếp"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Foreground Hero Content: Clean unobstructed visual with CTA button at bottom */}
          <div className="relative z-20 max-w-4xl mx-auto pb-8">
            {/* Hero CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                onClick={() => onNavigateTab('about')}
                className="bg-[#3a225d]/90 hover:bg-[#4a2e76] text-white font-semibold rounded-full px-8 py-3.5 text-sm sm:text-base transition-colors flex items-center justify-center gap-2 cursor-pointer border-none shadow-none backdrop-blur-md"
              >
                <span>Tìm hiểu về Chuồng</span>
                <ArrowRight className="w-4 h-4 text-[#c4b5fd]" />
              </button>
              <FanpageDropdownCTA 
                label="Theo dõi Fanpage"
                className="px-8 py-3.5 text-sm sm:text-base backdrop-blur-md"
                align="center"
              />
            </div>
          </div>

          {/* Carousel Indicator Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
            {HERO_IMAGES.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => goToSlide(dotIdx)}
                className={`transition-all duration-300 rounded-full cursor-pointer border-none shadow-none ${
                  dotIdx === currentSlide 
                    ? 'w-8 h-2.5 bg-[#7542e5]' 
                    : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Chuyển tới ảnh ${dotIdx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Feature Highlights Grid Underneath Carousel */}
        <div className="max-w-6xl mx-auto mt-8">
          <div className="bg-[#3a225d] rounded-3xl sm:rounded-[32px] p-6 sm:p-10 text-white text-left border-none shadow-none space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#4a2e76] flex items-center justify-center text-[#c4b5fd] shrink-0">
                <Flame className="w-7 h-7 text-amber-400" />
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-100 font-medium leading-relaxed">
                Festival Báo chí Truyền thông Nhân Văn là một sự kiện thường niên do sinh viên Viện Đào tạo Báo chí và Truyền Thông (SJC), Trường ĐHKHXH&NV tổ chức. Đây là nơi gắn kết các thế hệ sinh viên trong Viện với nhau, cùng học, cùng chơi, cùng giúp đỡ nhau phát triển trên con đường nghề nghiệp.
              </p>
            </div>

            {/* Bottom Micro Banner */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-end text-xs text-gray-300 gap-3 border-t border-[#4a2e76]">
              <button
                onClick={() => onNavigateTab('activities')}
                className="text-[#a78bfa] hover:text-white font-bold flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>Xem lịch trình chi tiết</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TỔNG QUAN (Overview: 2-Column Layout with Left Text & Right Image 6) */}
      <section className="bg-[#20123a] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#3a225d] rounded-3xl sm:rounded-[32px] p-8 sm:p-12 lg:p-14 border-none shadow-none">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Text Block */}
              <div className="w-full lg:w-7/12 space-y-6 text-left">
                <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading leading-tight">
                  Di sản truyền thống
                  <br />
                  <span className="text-[#a78bfa]">Khởi nguồn từ năm 2009</span>
                </h2>

                <p className="text-base text-gray-200 leading-relaxed font-normal">
                  Festival Báo Chí Truyền Thông Nhân Văn - Liên Chuồng là hội khoa truyền thống mang tính biểu tượng do sinh viên Viện Đào tạo Báo chí và Truyền thông (SJC), Trường ĐH KHXH&NV tự khởi xướng và tổ chức từ năm 2009.
                </p>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                  Không đơn thuần là một chuyến cắm trại cuối tuần, Liên Chuồng là môi trường tôi luyện thực chiến, nơi mỗi sinh viên khám phá bản lĩnh truyền thông, rèn luyện kỹ năng sinh tồn, kết nối bền chặt cùng thầy cô và mạng lưới cựu sinh viên đang công tác tại các cơ quan báo chí, truyền thông hàng đầu cả nước.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigateTab('about')}
                    className="bg-[#7542e5] hover:bg-[#5b2eb0] text-white transition-colors font-bold rounded-full px-7 py-3.5 text-sm flex items-center gap-2 cursor-pointer border-none shadow-none"
                  >
                    <span>Tìm hiểu thêm về Chuồng</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Image 6 with Hover Glow Effect */}
              <div className="w-full lg:w-5/12 flex items-center justify-center">
                <div className="w-full overflow-hidden rounded-3xl sm:rounded-[32px] transition-all duration-300 ease-in-out hover:scale-[1.02] hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] cursor-pointer">
                  <img
                    src="./anhtapthe6.jpg"
                    alt="Khoảnh khắc tập thể Liên Chuồng SJC"
                    className="w-full h-auto object-cover rounded-3xl sm:rounded-[32px] aspect-[16/10] sm:aspect-[16/9]"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. CÁC HOẠT ĐỘNG TÓM TẮT (Spacious Flat Grid) */}
      <section className="bg-[#20123a] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading">
                Các hoạt động trong sự kiện
              </h2>
              <p className="text-sm text-gray-300 mt-2 max-w-xl font-normal">
                Sự kiện diễn ra trong 2 ngày một đêm với các trò chơi đồng đội…
              </p>
            </div>

            <button
              onClick={() => onNavigateTab('activities')}
              className="bg-[#7542e5] hover:bg-[#5b2eb0] text-white transition-colors font-bold rounded-full px-7 py-3.5 text-xs sm:text-sm cursor-pointer flex items-center gap-2 self-start md:self-auto border-none shadow-none"
            >
              <span>Khám phá chi tiết</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4 Visual Flat Cards Grid (Strictly Firefox Vibrant Dark Flat: bg-[#3a225d], rounded-3xl, no border, no shadow) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_ACTIVITIES.map((activity) => (
              <div
                key={activity.id}
                onClick={() => onNavigateTab('activities', activity.sectionId)}
                className="bg-[#3a225d] hover:bg-[#43286b] transition-all duration-300 rounded-3xl p-5 sm:p-6 flex flex-col justify-between border-none shadow-none group cursor-pointer"
              >
                {/* Top (Header): Keep ONLY the main title in uppercase high-weight font */}
                <div className="mb-4">
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-white font-heading group-hover:text-[#c4b5fd] transition-colors leading-snug min-h-[2.75rem] flex items-center">
                    {activity.title}
                  </h3>
                </div>

                {/* Middle (Image): Full width inner content, object-cover, rounded-2xl */}
                <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl bg-[#20123a] my-auto">
                  <img
                    src={activity.image}
                    alt={activity.alt}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>

                {/* Bottom (Footer): Keep existing 'Xem ->' text link or button at the bottom right corner */}
                <div className="pt-4 mt-4 border-t border-[#4a2e76] flex items-center justify-end">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigateTab('activities', activity.sectionId);
                    }}
                    className="text-xs font-bold text-[#c4b5fd] group-hover:text-white flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <span>Xem</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SỐ LIỆU TRUYỀN THÔNG (Flat Layered Stats) */}
      <section className="bg-[#20123a] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading">
              Sức hút & Dấu ấn qua các mùa
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHT_STATS.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-[#3a225d] rounded-3xl p-8 text-center space-y-2 border-none shadow-none"
              >
                <div className="text-4xl sm:text-6xl font-black text-white font-heading tabular-nums">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-[#c4b5fd] uppercase tracking-wide">
                  {stat.label}
                </div>
                <p className="text-xs text-gray-300 leading-normal font-normal">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
