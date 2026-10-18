/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TabType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SocialModal } from './components/SocialModal';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ActivitiesView } from './views/ActivitiesView';
import { StoriesView } from './views/StoriesView';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [isSocialModalOpen, setIsSocialModalOpen] = useState(false);

  const handleTabChange = (tab: TabType) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateAndScroll = (tab: TabType, sectionId?: string) => {
    setCurrentTab(tab);
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#20123a] text-white flex flex-col selection:bg-[#7542e5] selection:text-white">
      {/* Firefox Vibrant Dark Flat Persistent Navigation */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={handleTabChange}
        onOpenSocialModal={() => setIsSocialModalOpen(true)}
      />

      {/* Main Tab Content Container */}
      <main className="flex-1 w-full bg-[#20123a]">
        {currentTab === 'home' && (
          <HomeView
            onNavigateTab={handleNavigateAndScroll}
            onOpenSocialModal={() => setIsSocialModalOpen(true)}
          />
        )}

        {currentTab === 'about' && (
          <AboutView />
        )}

        {currentTab === 'activities' && (
          <ActivitiesView />
        )}

        {currentTab === 'stories' && (
          <StoriesView />
        )}
      </main>

      {/* Firefox Vibrant Dark Flat Footer */}
      <Footer
        onSelectTab={handleTabChange}
        onOpenSocialModal={() => setIsSocialModalOpen(true)}
      />

      {/* Fanpage & Social Channels Modal */}
      <SocialModal
        isOpen={isSocialModalOpen}
        onClose={() => setIsSocialModalOpen(false)}
      />
    </div>
  );
}
