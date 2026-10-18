import React, { useState, useRef } from 'react';
import { 
  MASCOT_SHIRTS, 
  FAQ_LIST 
} from '../data/festivalData';
import { 
  MapPin, 
  Shirt, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles 
} from 'lucide-react';

const locations = [
  "Làng Dân tộc Sinh thái - Thái Nguyên",
  "Sơn Tinh Camp - Ba Vì",
  "Mai Châu",
  "Thung lũng Bản Xôi - Ba Vì",
  "Trung tâm Phát triển ĐHQG - Ba Vì",
];

const MASCOT_SLIDES = [
  {
    year: "Năm 2023",
    mascot: "Linh vật: Chú Báo",
    image: "ao2023.jpg",
    alt: "Áo 2023",
    isMystery: false,
  },
  {
    year: "Năm 2024",
    mascot: "Linh vật: Pikalong (Rồng)",
    image: "ao2024.jpg",
    alt: "Áo 2024",
    isMystery: false,
  },
  {
    year: "Năm 2025",
    mascot: "Linh vật: Chú Hổ",
    image: "ao2025.jpg",
    alt: "Áo 2025",
    isMystery: false,
  },
  {
    year: "Năm 2026",
    mascot: "Linh vật: Gấu Đại Hùng (Đang chờ đón...)",
    image: null,
    alt: "Áo 2026",
    isMystery: true,
  },
];

const songs = [
  { id: 2016, title: "MV Liên Chuồng ca 2016", videoId: "vl-2su0E0Zg" },
  { id: 2017, title: "MV Liên Chuồng ca 2017", videoId: "vXqv_mQsC-A" },
  { id: 2020, title: "MV Liên Chuồng ca 2020", videoId: "7GnHQSjyqV4" },
  { id: 2022, title: "MV Liên Chuồng ca 2022", videoId: "v0ruS5QuIjY" },
  { id: 2023, title: "MV Liên Chuồng ca 2023", videoId: "JI2O89hMVgg" },
  { id: 2024, title: "MV Liên Chuồng ca 2024", videoId: "XtZcd-AYtCw" },
  { id: 2025, title: "MV Liên Chuồng ca 2025", videoId: "lJY-aYhr3Io" }
];

export const StoriesView: React.FC = () => {
  // Active waypoint state for roadmap interaction
  const [activeWaypoint, setActiveWaypoint] = useState<number | null>(null);

  // Mascot slider state & ref
  const [activeMascotIndex, setActiveMascotIndex] = useState(0);
  const mascotSliderRef = useRef<HTMLDivElement>(null);

  const handleMascotScroll = (direction: 'left' | 'right') => {
    if (!mascotSliderRef.current) return;
    const container = mascotSliderRef.current;
    const scrollAmount = container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleMascotSliderScroll = () => {
    if (!mascotSliderRef.current) return;
    const container = mascotSliderRef.current;
    const itemWidth = 360;
    const newIndex = Math.min(
      Math.max(0, Math.round(container.scrollLeft / itemWidth)),
      MASCOT_SLIDES.length - 1
    );
    setActiveMascotIndex(newIndex);
  };

  // YouTube MV Accordion state
  const [activeAccordion, setActiveAccordion] = useState<number | null>(2025);

  const toggleAccordion = (id: number) => {
    setActiveAccordion(prev => prev === id ? null : id);
  };

  // FAQ Accordion open set
  const [openFaqIds, setOpenFaqIds] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': false,
    'faq-3': false,
    'faq-4': false,
    'faq-5': false,
    'faq-6': false,
    'faq-7': false,
  });

  const toggleFaq = (id: string) => {
    setOpenFaqIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full bg-[#20123a] text-white">
      {/* 1. HERO COVER SECTION (Firefox Vibrant Dark Flat) */}
      <section className="w-full relative bg-[#20123a]">
        <div className="w-full relative">
          <img 
            src="anhbia.png" 
            alt="Chuyện nhà Chuồng Cover" 
            className="w-full object-cover" 
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#20123a] to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* 2. BẢN ĐỒ DU LỊCH LIÊN CHUỒNG (Winding Roadmap) */}
      <section className="bg-[#20123a] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-tight">
              BẢN ĐỒ DU LỊCH LIÊN CHUỒNG
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-normal max-w-2xl mx-auto leading-relaxed">
              Những vùng đất đã ghi dấu bước chân của các thế hệ Chuồng Chúa và báo con.
            </p>
          </div>

          {/* Winding Roadmap Flow */}
          <div className="relative max-w-4xl mx-auto py-6">
            
            {/* SVG Winding Road Path */}
            <div className="absolute top-8 bottom-8 left-6 md:left-1/2 -translate-x-1/2 w-8 md:w-36 pointer-events-none flex justify-center">
              {/* Desktop S-Curve Winding Neon Path */}
              <svg 
                className="hidden md:block w-full h-full" 
                viewBox="0 0 140 800" 
                fill="none" 
                preserveAspectRatio="none"
              >
                {/* Background road track glow */}
                <path 
                  d="M 70 0 C 10 100, 130 140, 70 200 C 10 260, 130 340, 70 400 C 10 460, 130 540, 70 600 C 10 660, 130 740, 70 800" 
                  stroke="#3a225d" 
                  strokeWidth="12" 
                  strokeLinecap="round"
                />
                {/* Neon violet dashed trail */}
                <path 
                  d="M 70 0 C 10 100, 130 140, 70 200 C 10 260, 130 340, 70 400 C 10 460, 130 540, 70 600 C 10 660, 130 740, 70 800" 
                  stroke="#7542e5" 
                  strokeWidth="4" 
                  strokeDasharray="8 8" 
                  strokeLinecap="round"
                />
              </svg>

              {/* Mobile Straight Vertical Dashed Path */}
              <svg 
                className="block md:hidden w-full h-full" 
                viewBox="0 0 20 800" 
                fill="none" 
                preserveAspectRatio="none"
              >
                <line 
                  x1="10" 
                  y1="0" 
                  x2="10" 
                  y2="800" 
                  stroke="#3a225d" 
                  strokeWidth="8" 
                  strokeLinecap="round"
                />
                <line 
                  x1="10" 
                  y1="0" 
                  x2="10" 
                  y2="800" 
                  stroke="#7542e5" 
                  strokeWidth="3.5" 
                  strokeDasharray="6 6" 
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Waypoint Nodes (5 Locations) */}
            <div className="relative space-y-10 sm:space-y-14">
              {locations.map((location, idx) => {
                const isEven = idx % 2 === 0;
                const isHovered = activeWaypoint === idx;

                return (
                  <div 
                    key={location} 
                    className="relative flex items-center md:justify-center group cursor-pointer"
                    onMouseEnter={() => setActiveWaypoint(idx)}
                    onMouseLeave={() => setActiveWaypoint(null)}
                    onClick={() => setActiveWaypoint(idx)}
                  >
                    {/* Desktop Left Side Card (for even indices) */}
                    <div className="hidden md:flex md:w-1/2 md:pr-12 justify-end">
                      {isEven && (
                        <div 
                          className={`w-full max-w-sm rounded-3xl p-5 sm:p-6 text-right transition-all duration-300 border-none shadow-none ${
                            isHovered 
                              ? 'bg-[#3e2468] -translate-y-0.5' 
                              : 'bg-[#2c1a4d] hover:bg-[#382163]'
                          }`}
                        >
                          <div className="flex items-center justify-end gap-2 text-xs font-bold uppercase tracking-wider text-[#c4b5fd] mb-2">
                            <span>Trạm dừng 0{idx + 1}</span>
                            <MapPin className="w-4 h-4 text-[#a78bfa] shrink-0" />
                          </div>
                          <div className="text-lg sm:text-xl font-bold text-white font-heading leading-snug">
                            {location}
                          </div>
                          <div className="mt-3 flex justify-end">
                            <span className="inline-block px-3.5 py-1 rounded-full bg-[#3a225d] text-xs font-semibold text-[#c4b5fd] border-none shadow-none">
                              Dấu chân dã ngoại
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Circular Waypoint Marker */}
                    <div 
                      className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-black text-sm sm:text-base border-none shadow-none ring-4 sm:ring-8 ring-[#20123a] shrink-0 transition-all duration-300 ${
                        isHovered 
                          ? 'bg-white text-[#7542e5] scale-110' 
                          : 'bg-[#7542e5] group-hover:bg-[#8b5cf6] text-white'
                      }`}
                    >
                      <span>0{idx + 1}</span>
                    </div>

                    {/* Right Side Card (Desktop odd indices, Mobile all indices) */}
                    <div className="flex-1 md:w-1/2 md:flex-initial md:pl-12 ml-4 md:ml-0">
                      <div 
                        className={`w-full max-w-sm rounded-3xl p-5 sm:p-6 text-left transition-all duration-300 border-none shadow-none ${
                          isEven ? 'block md:hidden' : 'block'
                        } ${
                          isHovered 
                            ? 'bg-[#3e2468] -translate-y-0.5' 
                            : 'bg-[#2c1a4d] hover:bg-[#382163]'
                        }`}
                      >
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c4b5fd] mb-2">
                          <MapPin className="w-4 h-4 text-[#a78bfa] shrink-0" />
                          <span>Trạm dừng 0{idx + 1}</span>
                        </div>
                        <div className="text-lg sm:text-xl font-bold text-white font-heading leading-snug">
                          {location}
                        </div>
                        <div className="mt-3 flex">
                          <span className="inline-block px-3.5 py-1 rounded-full bg-[#3a225d] text-xs font-semibold text-[#c4b5fd] border-none shadow-none">
                            Dấu chân dã ngoại
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 3. BST THẦN THÚ & HÀNH TRÌNH CHIẾC ÁO CHUỒNG (Firefox Vibrant Dark Flat Horizontal Slider) */}
      <section className="bg-[#20123a] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-tight">
              BST THẦN THÚ & HÀNH TRÌNH CHIẾC ÁO CHUỒNG
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-normal max-w-3xl mx-auto leading-relaxed">
              “Mỗi chiếc áo - một câu chuyện, mỗi linh vật - một thời gian”. Cùng nhìn lại bộ sưu tập linh vật của Liên Chuồng và những chiếc áo đã cùng bao thế hệ sinh viên Viện S bùng nổ!
            </p>
          </div>

          {/* Slider Controls & Counter */}
          <div className="flex items-center justify-between sm:justify-end gap-3 pt-2">
            <span className="text-xs font-semibold text-[#c4b5fd] bg-[#3a225d] px-3.5 py-2 rounded-full border-none shadow-none">
              {activeMascotIndex + 1} / {MASCOT_SLIDES.length} mùa áo
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleMascotScroll('left')}
                className="w-11 h-11 rounded-full bg-[#3a225d] hover:bg-[#7542e5] text-white flex items-center justify-center transition-all cursor-pointer border-none shadow-none"
                aria-label="Mùa trước"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => handleMascotScroll('right')}
                className="w-11 h-11 rounded-full bg-[#7542e5] hover:bg-[#8a57f8] text-white flex items-center justify-center transition-all cursor-pointer border-none shadow-none"
                aria-label="Mùa kế tiếp"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Horizontal Slider (Carousel) */}
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <div
              ref={mascotSliderRef}
              onScroll={handleMascotSliderScroll}
              className="flex flex-nowrap overflow-x-auto gap-6 snap-x py-8 scrollbar-hide scroll-smooth no-scrollbar select-none cursor-grab active:cursor-grabbing"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {MASCOT_SLIDES.map((slide, idx) => (
                <div
                  key={idx}
                  className="min-w-[300px] md:min-w-[400px] snap-center flex flex-col items-center text-center bg-[#2a174c] p-6 rounded-3xl hover:scale-105 transition-transform duration-300 border-none shadow-none shrink-0"
                >
                  {slide.isMystery ? (
                    <div className="w-full h-64 flex items-center justify-center bg-[#150b29] rounded-2xl mb-4 border-none shadow-none">
                      <span className="text-6xl text-[#7542e5] font-bold">?</span>
                    </div>
                  ) : (
                    <img 
                      src={slide.image!} 
                      alt={slide.alt} 
                      className="w-full h-64 object-cover rounded-2xl mb-4 border-none shadow-none" 
                    />
                  )}
                  <h3 className="text-xl font-bold text-white mb-2 font-heading">
                    {slide.year}
                  </h3>
                  <p className="text-gray-300">
                    {slide.mascot}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. LIÊN CHUỒNG CA (Interactive YouTube Accordion) */}
      <section className="bg-[#20123a] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-tight">
              LIÊN CHUỒNG CA
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-normal max-w-3xl mx-auto leading-relaxed">
              Những thanh âm rực cháy, mang đậm tinh thần của các thế hệ sinh viên Viện Đào tạo Báo chí - Truyền thông.
            </p>
          </div>

          {/* Accordion UI Design (List with Dropdown) */}
          <div className="flex flex-col gap-4">
            {songs.map((song) => {
              const isExpanded = activeAccordion === song.id;
              return (
                <div 
                  key={song.id} 
                  className="w-full transition-all duration-200 border-none shadow-none"
                >
                  {/* Header Button */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(song.id)}
                    className={`w-full flex items-center justify-between p-5 sm:p-6 bg-[#2a174c] hover:bg-[#351e60] transition-colors cursor-pointer border-none shadow-none text-left ${
                      isExpanded ? 'rounded-t-2xl' : 'rounded-2xl'
                    }`}
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="w-10 h-10 rounded-xl bg-[#7542e5] text-white flex items-center justify-center font-bold text-sm shrink-0">
                        {song.id}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                        {song.title}
                      </h3>
                    </div>

                    <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all shrink-0 ${
                      isExpanded ? 'bg-[#7542e5] text-white' : 'bg-[#3a225d] text-[#c4b5fd]'
                    }`}>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Content Area with YouTube Embed */}
                  {isExpanded && (
                    <div className="w-full bg-[#2a174c] rounded-b-2xl overflow-hidden border-none shadow-none">
                      <div className="w-full aspect-video">
                        <iframe
                          src={"https://www.youtube.com/embed/" + song.videoId}
                          title={song.title}
                          className="w-full h-full aspect-video rounded-b-2xl object-cover"
                          allowFullScreen
                          frameBorder="0"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. FAQ SECTION (ACCORDION) */}
      <section className="bg-[#20123a] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-10">
          
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading">
              Giải Đáp Thắc Mắc Tân Binh
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-normal">
              Tất tần tật những băn khoăn kinh điển nhất của sinh viên trước thềm nhập Chuồng.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {FAQ_LIST.map((faq) => {
              const isOpen = !!openFaqIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className="bg-[#3a225d] rounded-2xl sm:rounded-3xl overflow-hidden border-none shadow-none"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#43286b] transition-colors border-none shadow-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="w-8 h-8 rounded-xl bg-[#4a2e76] text-[#c4b5fd] flex items-center justify-center text-xs font-bold shrink-0">
                        Q
                      </span>
                      <span className="text-base sm:text-lg font-bold text-white font-heading">
                        {faq.question}
                      </span>
                    </div>
                    <div className="p-1.5 rounded-xl text-gray-400">
                      {isOpen ? <ChevronUp className="w-5 h-5 text-white" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm leading-relaxed animate-fadeIn">
                      <div className="p-5 rounded-2xl bg-[#4a2e76] text-gray-200 font-normal leading-relaxed border-none shadow-none">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
};
