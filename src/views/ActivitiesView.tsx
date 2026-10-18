import React, { useState, useRef } from 'react';
import { 
  Sparkles, 
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

const GAME_IMAGES = [
  { src: 'game0.jpg', alt: 'Chuỗi Game Đồng Đội 0 - Khởi động và chia đội rực lửa' },
  { src: 'game1.jpg', alt: 'Chuỗi Game Đồng Đội 1 - Đồng lòng vượt chướng ngại vật' },
  { src: 'game2.jpg', alt: 'Chuỗi Game Đồng Đội 2 - Tinh thần đồng đội Liên Chuồng' },
  { src: 'game3.jpg', alt: 'Chuỗi Game Đồng Đội 3 - Lăn xả trên bãi cỏ dã ngoại' },
  { src: 'game4.jpg', alt: 'Chuỗi Game Đồng Đội 4 - Tiếng cười bùng nổ cùng đồng đội' },
  { src: 'game5.jpg', alt: 'Chuỗi Game Đồng Đội 5 - Chiến thuật thông minh và gắn kết' },
  { src: 'game6.jpg', alt: 'Chuỗi Game Đồng Đội 6 - Khoảnh khắc kề vai sát cánh' },
  { src: 'game7.jpg', alt: 'Chuỗi Game Đồng Đội 7 - Sức trẻ sinh viên Viện Báo' },
  { src: 'game8.jpg', alt: 'Chuỗi Game Đồng Đội 8 - Thử thách thể lực và phản xạ' },
  { src: 'game9.jpg', alt: 'Chuỗi Game Đồng Đội 9 - Vỡ òa trong niềm vui đồng đội' },
  { src: 'game10.jpg', alt: 'Chuỗi Game Đồng Đội 10 - Năng lượng nhiệt huyết Gen Z' },
  { src: 'game11.jpg', alt: 'Chuỗi Game Đồng Đội 11 - Phá vỡ khoảng cách giữa các khóa' },
  { src: 'game12.jpg', alt: 'Chuỗi Game Đồng Đội 12 - Tinh thần không bỏ rơi ai lại phía sau' },
  { src: 'game13.jpg', alt: 'Chuỗi Game Đồng Đội 13 - Tranh tài nghẹt thở từng giây' },
  { src: 'game14.jpg', alt: 'Chuỗi Game Đồng Đội 14 - Chiến thắng vang dội của các tiểu đội' },
  { src: 'game15.jpg', alt: 'Chuỗi Game Đồng Đội 15 - Kỷ niệm thanh xuân không thể nào quên' }
];

const GALA_IMAGES = [
  { src: 'gala0.jpg', alt: 'Đêm Gala Bùng Nổ 1 - Sân khấu rực rỡ sắc màu và âm thanh sống động' },
  { src: 'gala1.jpg', alt: 'Đêm Gala Bùng Nổ 2 - Tiết mục công phu được chuẩn bị kỹ lưỡng' },
  { src: 'gala2.jpg', alt: 'Đêm Gala Bùng Nổ 3 - Những tràng pháo tay và tiếng reo hò cuồng nhiệt' },
  { src: 'gala3.jpg', alt: 'Đêm Gala Bùng Nổ 4 - Khoảnh khắc thăng hoa trên sân khấu Gala' },
  { src: 'gala4.jpg', alt: 'Đêm Gala Bùng Nổ 5 - Tinh thần đồng đội bùng cháy trong từng điệu nhảy' },
  { src: 'gala5.jpg', alt: 'Đêm Gala Bùng Nổ 6 - Trò chơi tương tác kịch tính nghẹt thở' },
  { src: 'gala6.jpg', alt: 'Đêm Gala Bùng Nổ 7 - Tiếng cười vỡ òa của sinh viên Viện Báo chí' },
  { src: 'gala7.jpg', alt: 'Đêm Gala Bùng Nổ 8 - Những tiết mục bất ngờ đặc sắc từ Ban Tổ Chức' },
  { src: 'gala8.jpg', alt: 'Đêm Gala Bùng Nổ 9 - Cảm xúc kết nối giữa các thế hệ Liên Chuồng' },
  { src: 'gala9.jpg', alt: 'Đêm Gala Bùng Nổ 10 - Trao giải và vinh danh những đội chơi xuất sắc' },
  { src: 'gala10.jpg', alt: 'Đêm Gala Bùng Nổ 11 - Vũ điệu sôi động xua tan màn đêm' },
  { src: 'gala11.jpg', alt: 'Đêm Gala Bùng Nổ 12 - Tỏa sáng rực rỡ dưới ánh đèn sân khấu' },
  { src: 'gala12.jpg', alt: 'Đêm Gala Bùng Nổ 13 - Nụ cười và kỷ niệm khắc sâu trong tim' },
  { src: 'gala13.jpg', alt: 'Đêm Gala Bùng Nổ 14 - Giây phút gắn kết không thể nào quên' },
  { src: 'gala14.jpg', alt: 'Đêm Gala Bùng Nổ 15 - Đêm hội bùng nổ sức trẻ và ngọn lửa nhiệt huyết' }
];

const PHOENIX_IMAGES = [
  { src: 'chim0.jpg', alt: 'Phượng Hoàng Lửa 1 - Nghi thức thắp sáng ngọn lửa truyền thống thiêng liêng' },
  { src: 'chim1.jpg', alt: 'Phượng Hoàng Lửa 2 - Ngọn lửa rực cháy truyền qua bao thế hệ Liên Chuồng' },
  { src: 'chim2.jpg', alt: 'Phượng Hoàng Lửa 3 - Đốm lửa đầu tiên từ Founder và các đời Chuồng Chúa' },
  { src: 'chim3.jpg', alt: 'Phượng Hoàng Lửa 4 - Rực sáng ngọn lửa nhiệt huyết tuổi trẻ SJC' },
  { src: 'chim4.jpg', alt: 'Phượng Hoàng Lửa 5 - Giây phút Chim Lửa giang cánh hạ cánh rực rỡ' },
  { src: 'chim5.jpg', alt: 'Phượng Hoàng Lửa 6 - Vòng tròn kết nối hàng ngàn sinh viên Viện Báo' },
  { src: 'chim6.jpg', alt: 'Phượng Hoàng Lửa 7 - Ánh lửa soi rọi những nụ cười và giọt nước mắt hạnh phúc' },
  { src: 'chim7.jpg', alt: 'Phượng Hoàng Lửa 8 - Hát vang bài ca truyền thống bên ngọn lửa bập bùng' },
  { src: 'chim8.jpg', alt: 'Phượng Hoàng Lửa 9 - Tinh thần bất diệt và ngọn lửa không bao giờ tắt' },
  { src: 'chim9.jpg', alt: 'Phượng Hoàng Lửa 10 - Khoảnh khắc lắng đọng và xúc động thâu đêm' },
  { src: 'chim10.jpg', alt: 'Phượng Hoàng Lửa 11 - Kỷ niệm thanh xuân thuần khiết nhất' },
  { src: 'chim11.jpg', alt: 'Phượng Hoàng Lửa 12 - Tự hào là một phần của đại gia đình Liên Chuồng' }
];

const CULTURE_IMAGES = [
  { src: 'ruou0.jpg', alt: 'Giao Lưu Văn Hoá 1 - Những ly rượu ấm nồng bên đồng đội giữa màn đêm' },
  { src: 'ruou1.jpg', alt: 'Giao Lưu Văn Hoá 2 - Khoảnh khắc ngồi lại sau một ngày dài lăn xả và cháy hết mình' },
  { src: 'ruou2.jpg', alt: 'Giao Lưu Văn Hoá 3 - Thức uống truyền thống vừa lạ vừa quen gắn kết tình tri kỉ' },
  { src: 'ruou3.jpg', alt: 'Giao Lưu Văn Hoá 4 - Rôm rả những câu chuyện không hồi kết dưới ánh đèn vàng' },
  { src: 'ruou4.jpg', alt: 'Giao Lưu Văn Hoá 5 - Lắng đọng tâm sự, sẻ chia hoài bão và dự định tương lai' },
  { src: 'ruou5.jpg', alt: 'Giao Lưu Văn Hoá 6 - Nụ cười rạng rỡ và những cái ôm siết chặt xoá tan mọi khoảng cách' },
  { src: 'ruou6.jpg', alt: 'Giao Lưu Văn Hoá 7 - Chén rượu thân tình kết nối các thế hệ sinh viên Viện Báo' },
  { src: 'ruou7.jpg', alt: 'Giao Lưu Văn Hoá 8 - Đêm còn dài, Liên Chuồng còn đầy và đong đầy kỷ niệm thanh xuân' }
];

export const ActivitiesView: React.FC = () => {
  const [activeGameIndex, setActiveGameIndex] = useState(0);
  const [activeGalaIndex, setActiveGalaIndex] = useState(0);
  const [activePhoenixIndex, setActivePhoenixIndex] = useState(0);
  const [activeCultureIndex, setActiveCultureIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<{ type: 'game' | 'gala' | 'phoenix' | 'culture'; index: number } | null>(null);
  
  const gameSliderRef = useRef<HTMLDivElement>(null);
  const galaSliderRef = useRef<HTMLDivElement>(null);
  const phoenixSliderRef = useRef<HTMLDivElement>(null);
  const cultureSliderRef = useRef<HTMLDivElement>(null);

  const handleGameScroll = (direction: 'left' | 'right') => {
    if (!gameSliderRef.current) return;
    const container = gameSliderRef.current;
    const scrollAmount = container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleGameSliderScroll = () => {
    if (!gameSliderRef.current) return;
    const container = gameSliderRef.current;
    const itemWidth = 380;
    const newIndex = Math.min(
      Math.max(0, Math.round(container.scrollLeft / itemWidth)),
      GAME_IMAGES.length - 1
    );
    setActiveGameIndex(newIndex);
  };

  const handleGalaScroll = (direction: 'left' | 'right') => {
    if (!galaSliderRef.current) return;
    const container = galaSliderRef.current;
    const scrollAmount = container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleGalaSliderScroll = () => {
    if (!galaSliderRef.current) return;
    const container = galaSliderRef.current;
    const itemWidth = 380;
    const newIndex = Math.min(
      Math.max(0, Math.round(container.scrollLeft / itemWidth)),
      GALA_IMAGES.length - 1
    );
    setActiveGalaIndex(newIndex);
  };

  const handlePhoenixScroll = (direction: 'left' | 'right') => {
    if (!phoenixSliderRef.current) return;
    const container = phoenixSliderRef.current;
    const scrollAmount = container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const handlePhoenixSliderScroll = () => {
    if (!phoenixSliderRef.current) return;
    const container = phoenixSliderRef.current;
    const itemWidth = 380;
    const newIndex = Math.min(
      Math.max(0, Math.round(container.scrollLeft / itemWidth)),
      PHOENIX_IMAGES.length - 1
    );
    setActivePhoenixIndex(newIndex);
  };

  const handleCultureScroll = (direction: 'left' | 'right') => {
    if (!cultureSliderRef.current) return;
    const container = cultureSliderRef.current;
    const scrollAmount = container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleCultureSliderScroll = () => {
    if (!cultureSliderRef.current) return;
    const container = cultureSliderRef.current;
    const itemWidth = 380;
    const newIndex = Math.min(
      Math.max(0, Math.round(container.scrollLeft / itemWidth)),
      CULTURE_IMAGES.length - 1
    );
    setActiveCultureIndex(newIndex);
  };

  return (
    <div className="w-full bg-[#20123a] text-white">
      {/* 1. HERO COVER SECTION (Firefox Vibrant Dark Flat) */}
      <div className="w-full relative">
        <img 
          src="anhbia.png" 
          alt="Chơi gì ở Liên Chuồng Cover" 
          className="w-full object-cover" 
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#20123a] to-transparent pointer-events-none"></div>
      </div>

      {/* 2. CHUỖI GAME ĐỒNG ĐỘI (Firefox Vibrant Dark Flat Horizontal Slider) */}
      <section id="chuoi-game" className="bg-[#20123a] py-14 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Header & Description */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-tight">
                CHUỖI GAME ĐỒNG ĐỘI
              </h2>
              
              <div className="space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p className="font-semibold text-white/95">
                  Trước D-Day, BTC chia người chơi thành các đội chơi.
                </p>
                <ul className="space-y-2.5 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-[#7542e5] font-bold text-lg leading-none mt-1 shrink-0">•</span>
                    <span>
                      Bắt đầu ngày mới tại Liên Chuồng, người chơi được khởi động với các hạng mục GAME. Mỗi mùa, Liên Chuồng đem đến hình thức và luật chơi đa dạng, nhưng đều hướng tới mục tiêu tối thượng: <strong className="text-white font-bold">TĂNG TINH THẦN ĐỒNG ĐỘI</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7542e5] font-bold text-lg leading-none mt-1 shrink-0">•</span>
                    <span>
                      Các trò chơi ở Liên Chuồng mang tính nhân văn nhưng không đáng kể, đòi hỏi người chơi phải lăn xả hết mình, phối hợp nhịp nhàng và bứt phá giới hạn để mang về vinh quang cho toàn đội.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-3 shrink-0 self-start lg:self-end pt-2">
              <span className="text-xs font-semibold text-[#c4b5fd] bg-[#3a225d] px-3.5 py-2 rounded-full hidden sm:inline-block">
                {activeGameIndex + 1} / {GAME_IMAGES.length} ảnh
              </span>
              <button
                type="button"
                onClick={() => handleGameScroll('left')}
                className="w-11 h-11 rounded-full bg-[#3a225d] hover:bg-[#7542e5] text-white flex items-center justify-center transition-all cursor-pointer border-none shadow-none"
                aria-label="Ảnh trước"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => handleGameScroll('right')}
                className="w-11 h-11 rounded-full bg-[#7542e5] hover:bg-[#8a57f8] text-white flex items-center justify-center transition-all cursor-pointer border-none shadow-none"
                aria-label="Ảnh kế tiếp"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Horizontal Slider */}
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <div
              ref={gameSliderRef}
              onScroll={handleGameSliderScroll}
              className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-3 px-1 no-scrollbar cursor-grab active:cursor-grabbing select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {GAME_IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage({ type: 'game', index: idx })}
                  className="snap-start shrink-0 w-[290px] sm:w-[380px] md:w-[440px] aspect-[4/3] rounded-3xl overflow-hidden bg-[#3a225d] group relative cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#20123a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 rounded-3xl">
                    <span className="text-xs font-semibold text-white bg-[#7542e5] px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Phóng to ảnh
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. ĐÊM GALA BÙNG NỔ (Firefox Vibrant Dark Flat Horizontal Slider) */}
      <section id="dem-gala" className="bg-[#20123a] py-14 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Header & Description */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-tight">
                ĐÊM GALA BÙNG NỔ
              </h2>
              
              <div className="space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                <ul className="space-y-2.5 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-[#7542e5] font-bold text-lg leading-none mt-1 shrink-0">•</span>
                    <span>
                      Trải qua những giây phút tranh đấu để giành lấy phần thưởng bí ẩn, gala là thời điểm tất cả bung xõa cùng nhau. Nhưng chờ đã, Liên Chuồng không hề dễ dàng như vậy, vẫn còn những thử thách để đảm bảo rằng các phần thưởng được trao đúng người.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7542e5] font-bold text-lg leading-none mt-1 shrink-0">•</span>
                    <span>
                      Đến với sàn đấu Gala Liên Chuồng, mỗi đội chơi cần chuẩn bị một tiết mục đủ thu hút, thú vị, ấn tượng để giành lấy những tràng pháo tay reo hò không ngớt. Những tràng pháo tay ấy sẽ quyết định rất lớn tỉ lệ liệu bạn có thể mang về cho đội của mình những món quà giá trị hay không.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7542e5] font-bold text-lg leading-none mt-1 shrink-0">•</span>
                    <span>
                      Không chỉ dừng lại ở đó, BTC cũng sẽ mang đến những màn trình diễn bí mật, đặc sắc, cùng những trò chơi vô cùng hấp dẫn đang đón chờ những người chơi dũng cảm.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-3 shrink-0 self-start lg:self-end pt-2">
              <span className="text-xs font-semibold text-[#c4b5fd] bg-[#3a225d] px-3.5 py-2 rounded-full hidden sm:inline-block">
                {activeGalaIndex + 1} / {GALA_IMAGES.length} ảnh
              </span>
              <button
                type="button"
                onClick={() => handleGalaScroll('left')}
                className="w-11 h-11 rounded-full bg-[#3a225d] hover:bg-[#7542e5] text-white flex items-center justify-center transition-all cursor-pointer border-none shadow-none"
                aria-label="Ảnh trước"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => handleGalaScroll('right')}
                className="w-11 h-11 rounded-full bg-[#7542e5] hover:bg-[#8a57f8] text-white flex items-center justify-center transition-all cursor-pointer border-none shadow-none"
                aria-label="Ảnh kế tiếp"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Horizontal Slider */}
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <div
              ref={galaSliderRef}
              onScroll={handleGalaSliderScroll}
              className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-3 px-1 no-scrollbar cursor-grab active:cursor-grabbing select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {GALA_IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage({ type: 'gala', index: idx })}
                  className="snap-start shrink-0 w-[290px] sm:w-[380px] md:w-[440px] aspect-[4/3] rounded-3xl overflow-hidden bg-[#3a225d] group relative cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#20123a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 rounded-3xl">
                    <span className="text-xs font-semibold text-white bg-[#7542e5] px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Phóng to ảnh
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. PHƯỢNG HOÀNG LỬA (Firefox Vibrant Dark Flat Horizontal Slider) */}
      <section id="phuong-hoang-lua" className="bg-[#20123a] py-14 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Header & Description */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-tight">
                PHƯỢNG HOÀNG LỬA
              </h2>
              
              <div className="space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                <ul className="space-y-2.5 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-[#7542e5] font-bold text-lg leading-none mt-1 shrink-0">•</span>
                    <span>
                      Truyền thống kéo dài một thập kỷ, hoạt động được nhiều người mong chờ nhất gọi tên PHƯỢNG HOÀNG LỬA a.k.a Chim Lửa.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7542e5] font-bold text-lg leading-none mt-1 shrink-0">•</span>
                    <span>
                      Trước giờ phút chứng kiến Chim Lửa hạ cánh, founder - anh Phong Anh là người truyền những đốm lửa đầu tiên đến cho trưởng BTC các năm, sau đó truyền nhân các đời chim lửa đón đuốc từ trưởng BTC và đốt cháy Chim Lửa.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7542e5] font-bold text-lg leading-none mt-1 shrink-0">•</span>
                    <span>
                      Người tham gia cùng nhau nắm chặt tay kết thành vòng tròn quanh đống lửa, cùng hòa mình vào không khí thiêng liêng, hát vang bài ca truyền thống và chia sẻ những xúc cảm rực rỡ nhất của thanh xuân.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-3 shrink-0 self-start lg:self-end pt-2">
              <span className="text-xs font-semibold text-[#c4b5fd] bg-[#3a225d] px-3.5 py-2 rounded-full hidden sm:inline-block">
                {activePhoenixIndex + 1} / {PHOENIX_IMAGES.length} ảnh
              </span>
              <button
                type="button"
                onClick={() => handlePhoenixScroll('left')}
                className="w-11 h-11 rounded-full bg-[#3a225d] hover:bg-[#7542e5] text-white flex items-center justify-center transition-all cursor-pointer border-none shadow-none"
                aria-label="Ảnh trước"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => handlePhoenixScroll('right')}
                className="w-11 h-11 rounded-full bg-[#7542e5] hover:bg-[#8a57f8] text-white flex items-center justify-center transition-all cursor-pointer border-none shadow-none"
                aria-label="Ảnh kế tiếp"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Horizontal Slider */}
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <div
              ref={phoenixSliderRef}
              onScroll={handlePhoenixSliderScroll}
              className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-3 px-1 no-scrollbar cursor-grab active:cursor-grabbing select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {PHOENIX_IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage({ type: 'phoenix', index: idx })}
                  className="snap-start shrink-0 w-[290px] sm:w-[380px] md:w-[440px] aspect-[4/3] rounded-3xl overflow-hidden bg-[#3a225d] group relative cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#20123a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 rounded-3xl">
                    <span className="text-xs font-semibold text-white bg-[#7542e5] px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Phóng to ảnh
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. GIAO LƯU VĂN HOÁ (Firefox Vibrant Dark Flat Horizontal Slider) */}
      <section id="giao-luu-van-hoa" className="bg-[#20123a] pt-14 pb-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header & Controls */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#4a2e76]">
            <div className="space-y-4 max-w-4xl">
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading tracking-wide">
                GIAO LƯU VĂN HOÁ
              </h2>
              <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-3 font-normal">
                <p>
                  Đêm còn dài, Liên Chuồng còn đầy. Sau một ngày, mọi người đã cháy hết mình, giờ là lúc chúng ta ngồi lại, nhâm nhi với nhau. Với một thức uống vừa lạ vừa quen, những người mới gặp ban sáng trở thành tri kỉ từ khúc nào chẳng hay. Những tâm sự, những câu chuyện, những dự định được chia sẻ, không còn một chút khoảng cách nào giữa các thành viên.
                </p>
                <p>
                  Đó là nét văn hoá truyền thống đặc trưng không thể trộn lẫn của Liên Chuồng — nơi mọi thế hệ cùng lắng lòng, gắn kết và lưu giữ những kỷ niệm đẹp nhất của tuổi trẻ.
                </p>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-3 shrink-0 self-start lg:self-end pt-2">
              <span className="text-xs font-semibold text-[#c4b5fd] bg-[#3a225d] px-3.5 py-2 rounded-full hidden sm:inline-block">
                {activeCultureIndex + 1} / {CULTURE_IMAGES.length} ảnh
              </span>
              <button
                type="button"
                onClick={() => handleCultureScroll('left')}
                className="w-11 h-11 rounded-full bg-[#3a225d] hover:bg-[#7542e5] text-white flex items-center justify-center transition-all cursor-pointer border-none shadow-none"
                aria-label="Ảnh trước"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => handleCultureScroll('right')}
                className="w-11 h-11 rounded-full bg-[#7542e5] hover:bg-[#8a57f8] text-white flex items-center justify-center transition-all cursor-pointer border-none shadow-none"
                aria-label="Ảnh kế tiếp"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Horizontal Slider */}
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <div
              ref={cultureSliderRef}
              onScroll={handleCultureSliderScroll}
              className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-3 px-1 no-scrollbar cursor-grab active:cursor-grabbing select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {CULTURE_IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage({ type: 'culture', index: idx })}
                  className="snap-start shrink-0 w-[290px] sm:w-[380px] md:w-[440px] aspect-[4/3] rounded-3xl overflow-hidden bg-[#3a225d] group relative cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#20123a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 rounded-3xl">
                    <span className="text-xs font-semibold text-white bg-[#7542e5] px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Phóng to ảnh
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal for Game, Gala, Phoenix & Culture Images */}
      {selectedImage !== null && (() => {
        let currentList = GAME_IMAGES;
        let sectionTitle = 'Chuỗi Game Đồng Đội';
        
        if (selectedImage.type === 'gala') {
          currentList = GALA_IMAGES;
          sectionTitle = 'Đêm Gala Bùng Nổ';
        } else if (selectedImage.type === 'phoenix') {
          currentList = PHOENIX_IMAGES;
          sectionTitle = 'Phượng Hoàng Lửa';
        } else if (selectedImage.type === 'culture') {
          currentList = CULTURE_IMAGES;
          sectionTitle = 'Giao Lưu Văn Hoá';
        }

        const currentItem = currentList[selectedImage.index];

        return (
          <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Controls */}
              <div className="w-full flex items-center justify-between mb-3 text-white">
                <span className="text-xs sm:text-sm font-semibold bg-[#3a225d] px-4 py-1.5 rounded-full text-[#c4b5fd]">
                  {selectedImage.index + 1} / {currentList.length} • {sectionTitle}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="w-10 h-10 rounded-full bg-[#3a225d] hover:bg-[#7542e5] text-white flex items-center justify-center transition-colors cursor-pointer border-none shadow-none"
                  aria-label="Đóng"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image */}
              <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-3xl bg-[#20123a]">
                <img
                  src={currentItem.src}
                  alt={currentItem.alt}
                  className="max-h-[75vh] w-auto max-w-full object-contain rounded-3xl"
                />

                {/* Prev / Next Buttons in Modal */}
                <button
                  type="button"
                  onClick={() => setSelectedImage((prev) => (prev ? { ...prev, index: prev.index > 0 ? prev.index - 1 : currentList.length - 1 } : null))}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#7542e5] text-white flex items-center justify-center transition-all cursor-pointer border-none shadow-none backdrop-blur-sm"
                  aria-label="Ảnh trước"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedImage((prev) => (prev ? { ...prev, index: prev.index < currentList.length - 1 ? prev.index + 1 : 0 } : null))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#7542e5] text-white flex items-center justify-center transition-all cursor-pointer border-none shadow-none backdrop-blur-sm"
                  aria-label="Ảnh sau"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-gray-300 text-center font-medium">
                {currentItem.alt}
              </p>
            </div>
          </div>
        );
      })()}
    </div>
  );
};
