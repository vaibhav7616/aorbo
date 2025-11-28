import React from 'react';
import type { Page } from '../App';
import { treks } from '../data/treks';
import OperatorsList from "./OperatorsList";

<OperatorsList operators={["Beyond Dream Destination", "Himalaya Treks", "Travel4U"]} />


import {
  CloudRainIcon,
  ForestIcon,
  HeartIcon,
  MountainIcon,
  TempleIcon,
  WaveIcon,
} from './icons/Icons';

interface TripStylesProps {
  onNavigate: (page: Page, payload?: any) => void;
}

type StyleCard = {
  key: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  palette: [string, string];
  image?: string;
};

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop';

function readImageFromTrek(item: any): string | null {
  if (!item) return null;
  if (item.image) return item.image;
  if (item.imageUrl) return item.imageUrl;
  if (item.img) return item.img;
  if (item.photo) return item.photo;
  if (item.src) return item.src;
  if (item.url) return item.url;

  if (Array.isArray(item.images) && item.images.length) return item.images[0];
  if (Array.isArray(item.photos) && item.photos.length) return item.photos[0];

  if (item.media?.image) return item.media.image;
  return null;
}

function pickImageForStyle(styleKey: string): string {
  const lc = styleKey.toLowerCase();

  for (const t of treks as any[]) {
    const fields = [
      t?.style,
      t?.category,
      t?.tags && Array.isArray(t.tags) ? t.tags.join(' ') : t?.tags,
      t?.name,
      t?.description,
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    if (fields.includes(lc)) {
      const img = readImageFromTrek(t);
      if (img) return img;
    }
  }

  for (const t of treks as any[]) {
    const img = readImageFromTrek(t);
    if (img) return img;
  }

  return FALLBACK_IMAGE;
}

const TripStyles: React.FC<TripStylesProps> = ({ onNavigate }) => {
  return (
    <section id="styles" className="bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Remove margin */}
        <div className="text-center"></div>

        <div className="relative">
          <div
            className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-2"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {/* No cards */}
          </div>
        </div>

      </div>
    </section>
  );
};


export default TripStyles;