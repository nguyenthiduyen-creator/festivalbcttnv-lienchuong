import React from 'react';
import { TabType } from '../types';
import { Flame, ArrowUpRight } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';
import { FanpageDropdownCTA } from './FanpageDropdownCTA';

interface FooterProps {
  onSelectTab: (tab: TabType) => void;
  onOpenSocialModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenSocialModal,
}) => {
  return (
    <footer className="relative bg-[#20123a] text-white pt-16 pb-12 border-none shadow-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Callout Box: Solid Flat Purple Container (rounded-3xl, no border, no shadow) */}
        <div className="bg-[#3a225d] rounded-3xl sm:rounded-[32px] p-8 sm:p-16 text-center max-w-5xl mx-auto space-y-6 border-none shadow-none">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white font-heading">
            Sẵn sàng nhập Chuồng?
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Hai ngày một đêm gác lại âu lo, hòa mình vào không gian dã ngoại âm nhạc lớn nhất do chính sinh viên Báo chí & Truyền thông Nhân Văn tự tổ chức.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <FanpageDropdownCTA 
              label="Theo dõi Fanpage ngay"
              className="px-8 py-3.5 text-sm sm:text-base w-full sm:w-auto"
              align="center"
              fullWidthMobile
            />

            <a
              href="https://www.tiktok.com/@festivalbcttnv?_r=1&_t=ZS-9AaE4YOIMsO"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#4a2e76] hover:bg-[#58378d] text-white transition-colors font-bold rounded-full px-8 py-3.5 text-sm sm:text-base cursor-pointer flex items-center justify-center gap-2 border-none shadow-none"
            >
              <span>Tiktok nhà Chuồng</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Detailed Footer Columns: Clean 4-Column Flat Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-8 border-none text-sm">
          {/* Col 1: Identity */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#3a225d] flex items-center justify-center">
                <Flame className="w-5 h-5 text-[#a78bfa]" />
              </div>
              <span className="font-black uppercase tracking-wider text-xl text-white font-heading">
                LIÊN CHUỒNG
              </span>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed font-normal">
              {FESTIVAL_INFO.name} - Ngày hội truyền thống mang tính biểu tượng do sinh viên SJC tự tổ chức kể từ năm 2009.
            </p>
            <p className="text-xs text-[#a78bfa] font-semibold">
              {FESTIVAL_INFO.milestone}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Điều hướng
            </div>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <button
                  onClick={() => { onSelectTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Trang chủ
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Về chúng tôi (17 Mùa)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectTab('activities'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Chơi gì ở Liên Chuồng (2N1Đ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectTab('stories'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Chuyện nhà Chuồng & FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Organization */}
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Thông tin liên hệ
            </div>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div>
                <span className="text-white font-semibold block">Đơn vị tổ chức:</span>
                <span>{FESTIVAL_INFO.organization}</span>
              </div>
              <div>
                <span className="text-white font-semibold block">Email tiếp nhận:</span>
                <a 
                  href={`mailto:${FESTIVAL_INFO.email}`} 
                  className="text-gray-200 hover:text-[#c4b5fd] transition-colors"
                >
                  {FESTIVAL_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Official Social Channels */}
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Mạng xã hội
            </div>
            <div className="space-y-3">
              <a
                href={FESTIVAL_INFO.fanpageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-gray-300 hover:text-white transition-colors group font-normal"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#7542e5]" />
                <span>Fanpage Liên Chuồng SJC</span>
              </a>
              <a
                href={FESTIVAL_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-gray-300 hover:text-white transition-colors group font-normal"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-pink-400" />
                <span>Kênh TikTok @festivalbcttnv</span>
              </a>
              <button
                onClick={onOpenSocialModal}
                className="text-xs text-[#a78bfa] hover:text-[#c4b5fd] pt-1 cursor-pointer block font-semibold transition-colors"
              >
                Xem chi tiết các cổng tiếp sóng →
              </button>
            </div>
          </div>
        </div>

        {/* Quiet copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 border-t border-[#3a225d]">
          <div>
            © {FESTIVAL_INFO.currentYear} Liên Chuồng - Ban Tổ Chức Sinh viên SJC. Sự kiện sinh viên tự tổ chức, không đại diện nhân danh Viện.
          </div>
          <div className="flex items-center gap-3">
            <span>Trang thông tin chính thức</span>
            <span>·</span>
            <span>Không bán vé thương mại</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
