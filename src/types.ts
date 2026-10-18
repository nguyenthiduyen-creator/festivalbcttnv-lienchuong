export type TabType = 'home' | 'about' | 'activities' | 'stories';

export interface ActivityItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  vibe: string;
  iconName: string;
  color: string;
}

export interface RitualItem {
  id: string;
  title: string;
  order: string;
  subtitle: string;
  description: string;
  significance: string;
  highlight: string;
}

export interface CoordinatorItem {
  id: string;
  name: string;
  term: string;
  role: string;
  quote: string;
  motto: string;
}

export interface TimelineSlot {
  time: string;
  title: string;
  description: string;
  location: string;
  icon: string;
}

export interface TravelDestination {
  id: string;
  year: string;
  name: string;
  location: string;
  terrain: string;
  highlight: string;
  memory: string;
}

export interface MascotShirt {
  id: string;
  season: string;
  year: string;
  colorName: string;
  hexColor: string;
  mascot: string;
  concept: string;
  quote: string;
  image?: string;
}

export interface MvItem {
  id: string;
  title: string;
  season: string;
  year: string;
  views: string;
  description: string;
  lyricHook: string;
}

export interface FaqItem {
  id: string;
  question: string;
  shortQ: string;
  answer: string;
  category: string;
}
