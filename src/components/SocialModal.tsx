import React, { useState } from 'react';
import { X, ExternalLink, Copy, Check, Share2, Smartphone } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';

interface SocialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SocialModal: React.FC<SocialModalProps> = ({ isOpen, onClose }) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const fanpageShareUrl = "https://www.facebook.com/share/19pgn5r3wd/?mibextid=wwXIfr";

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(fanpageShareUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#3a225d] rounded-3xl sm:rounded-[32px] p-6 sm:p-8 text-white border-none shadow-none overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-gray-300 hover:text-white bg-[#4a2e76] hover:bg-[#58378d] transition-colors border-none shadow-none"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-[#4a2e76] flex items-center justify-center text-[#c4b5fd]">
            <Share2 className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-black uppercase text-white font-heading tracking-tight">
            Kênh Truyền Thông Chính Thức
          </h3>
          <p className="text-xs text-gray-300 mt-1 font-normal">
            Theo dõi để cập nhật các sản phẩm truyền thông, MV và hoạt động gắn kết sinh viên SJC
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {/* Fanpage Facebook: Nhà mới */}
          <a
            href="https://www.facebook.com/share/19pgn5r3wd/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-[#4a2e76] hover:bg-[#58378d] transition-colors group border-none shadow-none"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                <span>f</span>
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-white group-hover:text-[#c4b5fd] transition-colors flex items-center gap-2">
                  <span>Fanpage: Địa chỉ nhà mới</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#7542e5] text-white uppercase font-bold">Mới</span>
                </div>
                <div className="text-xs text-gray-300">Kênh phát ngôn & bộ nhận diện chính thức</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
          </a>

          {/* Fanpage Facebook: Nhà cũ */}
          <a
            href="https://www.facebook.com/share/18mX2DBBzf/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-[#4a2e76] hover:bg-[#58378d] transition-colors group border-none shadow-none"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#3a225d] flex items-center justify-center text-white font-bold text-lg">
                <span>f</span>
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-white group-hover:text-[#c4b5fd] transition-colors">
                  Fanpage: Địa chỉ nhà cũ
                </div>
                <div className="text-xs text-gray-300">Lưu trữ kỷ niệm các mùa giải tiền bối</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
          </a>

          {/* TikTok */}
          <a
            href={FESTIVAL_INFO.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-[#4a2e76] hover:bg-[#58378d] transition-colors group border-none shadow-none"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#20123a] flex items-center justify-center text-white">
                <Smartphone className="w-5 h-5 text-pink-400" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-white group-hover:text-[#c4b5fd] transition-colors">
                  TikTok: @festivalbcttnv
                </div>
                <div className="text-xs text-gray-300">Hậu trường 'nhà Chuồng', trend & khoảnh khắc lầy lội</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
          </a>

          {/* Contact Hotline & Email */}
          <div className="p-4 rounded-2xl bg-[#20123a] text-xs text-gray-300 space-y-1.5 border-none shadow-none">
            <div className="flex items-center justify-between font-medium">
              <span className="text-gray-400">Đơn vị tổ chức:</span>
              <span className="text-white font-bold">Sinh viên SJC (Viện ĐT Báo chí & TT)</span>
            </div>
            <div className="flex items-center justify-between font-medium">
              <span className="text-gray-400">Email liên hệ:</span>
              <a 
                href={`mailto:${FESTIVAL_INFO.email}`} 
                className="text-[#c4b5fd] font-semibold hover:underline"
              >
                {FESTIVAL_INFO.email}
              </a>
            </div>
          </div>
        </div>

        {/* Copy share link */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value={fanpageShareUrl}
            className="flex-1 bg-[#20123a] text-xs text-gray-300 rounded-full px-4 py-3 outline-none border-none shadow-none font-mono"
          />
          <button
            onClick={handleCopyLink}
            className="bg-[#7542e5] hover:bg-[#5b2eb0] text-white px-5 py-3 rounded-full text-xs font-bold flex items-center gap-1.5 transition-colors border-none shadow-none cursor-pointer shrink-0"
          >
            {copiedLink ? (
              <>
                <Check className="w-4 h-4" />
                <span>Đã chép</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Sao chép</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
