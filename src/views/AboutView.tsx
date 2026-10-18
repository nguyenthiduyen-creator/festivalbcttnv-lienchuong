import React, { useState } from 'react';
import { 
  CHUONG_CHUA_LIST 
} from '../data/festivalData';
import { 
  Crown, 
  Quote
} from 'lucide-react';

interface ProcedureItem {
  id: string;
  tabLabel: string;
  title: string;
  image: string;
  alt: string;
  description: string;
}

const PROCEDURES: ProcedureItem[] = [
  {
    id: 'diem-chi',
    tabLabel: 'Lễ điểm chỉ',
    title: 'LỄ ĐIỂM CHỈ',
    image: 'lediemchi.jpg',
    alt: 'Lễ điểm chỉ',
    description: 'Đây là thủ tục “điểm chỉ” mang tính biểu tượng, nơi toàn bộ thành viên BTC sát cánh bên nhau hô vang lời thề trách nhiệm. Hoạt động này chính là lời cam kết mạnh mẽ nhất về sự đoàn kết, quyết tâm dốc cạn sức lực để tạo nên một mùa Liên Chuồng bùng nổ và an toàn.'
  },
  {
    id: 'mv-nha-lam',
    tabLabel: 'MV nhà làm',
    title: 'MV NHÀ LÀM',
    image: 'mvnhalam.jpg',
    alt: 'MV Nhà làm',
    description: '“Theme song” chính thức mang tinh thần của Liên Chuồng do chính tay đội ngũ BTC nhào nặn. Dù mỗi mùa là một phiên bản khác biệt nhưng câu hát “Báo, em là sinh viên Báo” vẫn được vang lên như nhịp đập chung kết nối mọi thế hệ, thắp lửa tự hào sinh viên viện Báo.'
  },
  {
    id: 'tuyen-truyen',
    tabLabel: 'Tuyên truyền trực tiếp',
    title: 'TUYÊN TRUYỀN TRỰC TIẾP',
    image: 'tuyentruyen.jpg',
    alt: 'Tuyên truyền trực tiếp',
    description: 'Thay vì chỉ truyền thông qua các trang mạng, đội ngũ BTC sẽ đi trực tiếp đến các lớp truyền lửa, giải đáp các thắc mắc để các báo con hiểu rõ hơn về tinh thần của Liên Chuồng.'
  }
];

export const AboutView: React.FC = () => {
  const [activeProcedureTab, setActiveProcedureTab] = useState<string>('diem-chi');
  const currentProcedure = PROCEDURES.find(p => p.id === activeProcedureTab) || PROCEDURES[0];

  return (
    <div className="w-full bg-[#20123a] text-white">
      {/* 1. HERO COVER SECTION (Firefox Vibrant Dark Flat) */}
      <div className="w-full relative">
        <img 
          src="anhbia.png" 
          alt="Liên Chuồng Cover" 
          className="w-full object-cover" 
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#20123a] to-transparent pointer-events-none"></div>
      </div>

      {/* 2. CỘT MỐC MÙA THỨ 17 */}
      <section className="bg-[#20123a] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">

              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading leading-tight">
                MÙA THỨ 17 (2026)
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                Năm 2026, Liên Chuồng trở lại với cột mốc lịch sử đánh dấu chặng đường 17 năm phát triển mạnh mẽ. Khởi nguồn từ năm 2009, Liên Chuồng đã vươn mình bứt phá từ một chuyến dã ngoại gắn kết đơn thuần trở thành hội khoa truyền thống, một văn hóa đầy tự hào của bao thế hệ sinh viên Viện Báo. Như một lời khẳng định cho sự phát triển bền vững, Liên Chuồng tuổi 17 hứa hẹn sẽ quay trở lại thật bùng nổ như bao mùa trước.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative group text-center">
                <img
                  src="./avt.png"
                  alt="Biểu tượng Liên Chuồng SJC - Mùa thứ 17"
                  className="w-full max-w-sm mx-auto rounded-3xl transition-all duration-300 ease-in-out hover:brightness-110 hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.6)] cursor-pointer"
                />
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="px-4 py-1.5 rounded-full bg-[#4a2e76] text-xs font-mono text-[#c4b5fd] font-bold">
                    2009 — 2026 · MÙA THỨ 17
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. NGUỒN GỐC TÊN GỌI & Ý NGHĨA BIỂU TƯỢNG (Zig-Zag Layout) */}
      <section className="bg-[#20123a] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
          
          {/* Row 1: Tại sao lại gọi là "Liên Chuồng"? */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column (Image) */}
            <div className="w-full h-[280px] sm:h-[360px] lg:h-[400px] rounded-3xl overflow-hidden">
              <img 
                src="anhtapthe6.jpg" 
                alt="Tập thể sinh viên Liên Chuồng" 
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            {/* Right Column (Text) */}
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-heading leading-tight">
                TẠI SAO LẠI GỌI LÀ "LIÊN CHUỒNG"?
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                Xuất phát từ cách gọi hóm hỉnh, thân thương mà sinh viên các khóa dành cho nhau. "Chuồng" tượng trưng cho ngôi nhà chung, nơi các bạn sinh viên sinh hoạt, cùng ăn cùng ngủ, cùng lăn xả thâu đêm suốt sáng.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                "Liên Chuồng" chính là sự liên kết, hội tụ giữa các "chuồng" (các khóa K, các lớp chuyên ngành Báo chí, Quan hệ công chúng và Truyền thông đa phương tiện).
              </p>
            </div>
          </div>

          {/* Row 2: Biểu tượng Phượng Hoàng Lửa */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column (Text) - displays 2nd on mobile, 1st on desktop */}
            <div className="order-2 lg:order-1 flex flex-col justify-center space-y-4">
              <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-heading leading-tight">
                BIỂU TƯỢNG PHƯỢNG HOÀNG LỬA
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                Linh vật Phượng Hoàng tượng trưng cho bản lĩnh can trường, tinh thần dấn thân không ngại thử thách và sự tái sinh mạnh mẽ của những người làm báo và truyền thông Nhân Văn.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                Nghi thức thắp sáng Phượng Hoàng Lửa lúc nửa đêm dã ngoại là lời thề gìn giữ ngọn lửa nhiệt huyết, đạo đức nghề nghiệp và tình đoàn kết sắt son giữa các thế hệ sinh viên SJC.
              </p>
            </div>

            {/* Right Column (Image) - displays 1st on mobile, 2nd on desktop */}
            <div className="order-1 lg:order-2 w-full h-[280px] sm:h-[360px] lg:h-[400px] rounded-3xl overflow-hidden">
              <img 
                src="chimlua.jpg" 
                alt="Biểu tượng Phượng Hoàng Lửa" 
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. TAM ĐẠI THỦ TỤC */}
      <section className="bg-[#20123a] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading">
              TAM ĐẠI THỦ TỤC
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
              Một trong những yếu tố quan trọng làm nên một mùa Liên Chuồng thành công là những thủ tục tiền khai chuồng - một truyền thống được truyền thừa qua nhiều năm.
            </p>
          </div>

          {/* Tab Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {PROCEDURES.map((procedure) => {
              const isActive = activeProcedureTab === procedure.id;
              return (
                <button
                  key={procedure.id}
                  onClick={() => setActiveProcedureTab(procedure.id)}
                  className={`px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-200 cursor-pointer border-none shadow-none ${
                    isActive
                      ? 'bg-[#7542e5] text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/15 hover:text-white'
                  }`}
                >
                  {procedure.tabLabel}
                </button>
              );
            })}
          </div>

          {/* Tab Content Container (Split View) */}
          <div className="bg-[#2a174c] rounded-3xl p-6 sm:p-8 lg:p-12 border-none shadow-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Media Column */}
              <div className="w-full h-[280px] sm:h-[360px] lg:h-[420px] rounded-2xl overflow-hidden bg-black/20">
                <img
                  src={currentProcedure.image}
                  alt={currentProcedure.alt}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Text Column */}
              <div className="flex flex-col justify-center space-y-4 sm:space-y-6 lg:px-2">
                <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-heading leading-tight">
                  {currentProcedure.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed font-normal">
                  {currentProcedure.description}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CÁC ĐỜI CHUỒNG CHÚA & ĐIỀU HÀNH */}
      <section className="bg-[#20123a] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-heading">
              Các Đời Chuồng Chúa
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-normal">
              Những thế hệ thủ lĩnh sinh viên tiên phong đã dày công xây đắp và duy trì ngọn lửa Liên Chuồng qua từng chặng đường lịch sử.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CHUONG_CHUA_LIST.map((cc) => (
              <div
                key={cc.id}
                className="bg-[#3a225d] rounded-3xl p-7 flex flex-col justify-between border-none shadow-none space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#4a2e76] flex items-center justify-center text-amber-400">
                    <Crown className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-xs text-[#c4b5fd] font-mono font-bold block">
                      {cc.term}
                    </span>
                    <h4 className="text-lg font-bold text-white uppercase font-heading mt-0.5">
                      {cc.name}
                    </h4>
                    <p className="text-xs text-[#a78bfa] font-semibold mt-0.5">
                      {cc.role}
                    </p>
                  </div>

                  <div className="relative pt-2">
                    <Quote className="w-6 h-6 text-[#58378d] mb-1" />
                    <p className="text-xs text-gray-300 italic leading-relaxed font-normal">
                      "{cc.quote}"
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#4a2e76]">
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider block">
                    Khẩu hiệu:
                  </span>
                  <span className="text-xs text-[#c4b5fd] font-medium mt-0.5 block">
                    {cc.motto}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
