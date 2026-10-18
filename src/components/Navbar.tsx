import React, { useState } from 'react';
import { TabType } from '../types';
import { Menu, X, Flame } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';
import { FanpageDropdownCTA } from './FanpageDropdownCTA';

interface NavbarProps {
  currentTab: TabType;
  setCurrentTab: (tab: TabType) => void;
  onOpenSocialModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  onOpenSocialModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: TabType; label: string }[] = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'about', label: 'Về chúng tôi' },
    { id: 'activities', label: 'Chơi gì ở Liên Chuồng' },
    { id: 'stories', label: 'Chuyện nhà Chuồng' },
  ];

  const handleTabClick = (tabId: TabType) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#20123a] border-none shadow-none transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Brand wordmark */}
        <button
          onClick={() => handleTabClick('home')}
          className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
        >
          <div className="w-11 h-11 rounded-2xl bg-[#3a225d] group-hover:bg-[#4a2e76] transition-colors flex items-center justify-center shrink-0">
            <Flame className="w-6 h-6 text-[#a78bfa]" />
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white flex items-center gap-2 font-heading">
              {FESTIVAL_INFO.shortName}
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#3a225d] text-[#c4b5fd] font-bold tracking-normal normal-case">
                SJC
              </span>
            </span>
            <p className="text-[11px] text-gray-300 font-medium tracking-normal hidden sm:block">
              Sự kiện truyền thống do sinh viên SJC tổ chức
            </p>
          </div>
        </button>

        {/* Navigation Switcher: Flat Pills */}
        <nav className="hidden md:flex items-center gap-1.5 bg-[#3a225d] p-1.5 rounded-full">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`px-5 py-2 text-xs lg:text-sm whitespace-nowrap rounded-full transition-colors cursor-pointer border-none shadow-none ${
                  isActive
                    ? 'bg-[#7542e5] text-white font-bold'
                    : 'text-gray-300 hover:text-white hover:bg-[#4a2e76]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* CTA Button: Fanpage Dropdown Menu */}
        <div className="flex items-center gap-3 shrink-0">
          <FanpageDropdownCTA align="right" />

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 text-white rounded-2xl bg-[#3a225d] hover:bg-[#4a2e76] transition-colors focus:outline-none border-none shadow-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown: Flat dark rounded container */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="bg-[#3a225d] rounded-3xl p-3 space-y-1.5 border-none shadow-none">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`w-full text-left px-5 py-3 rounded-2xl text-sm font-semibold transition-colors flex items-center justify-between border-none shadow-none ${
                    isActive
                      ? 'bg-[#7542e5] text-white font-bold'
                      : 'text-gray-300 hover:text-white hover:bg-[#4a2e76]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-white"></div>}
                </button>
              );
            })}
            <div className="pt-2 px-1 border-t border-[#4a2e76]/50 mt-1">
              <FanpageDropdownCTA fullWidthMobile align="left" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
