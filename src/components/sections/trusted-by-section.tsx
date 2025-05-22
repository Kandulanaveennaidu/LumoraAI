// src/components/sections/trusted-by-section.tsx
"use client";

import type { FC } from "react";
import Image from "next/image";
import { useState } from "react";

interface LogoInfo {
  name: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  aiHint: string;
}

const commonHeight = 32; // Corresponds to h-8 in Tailwind

const logos: LogoInfo[] = [
  // {
  //   name: "Roche",
  //   src: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Hoffmann-La_Roche_logo.svg",
  //   alt: "Roche Logo",
  //   width: 100,
  //   height: commonHeight,
  //   aiHint: "Roche",
  // },
  // {
  //   name: "Mondelez International",
  //   src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Mondelez_international_2012_logo.svg",
  //   alt: "Mondelez International Logo",
  //   width: 160,
  //   height: commonHeight,
  //   aiHint: "Mondelez",
  // },
  // {
  //   name: "NEC",
  //   src: "https://upload.wikimedia.org/wikipedia/commons/d/d6/NEC_logo.svg",
  //   alt: "NEC Logo",
  //   width: 70,
  //   height: commonHeight,
  //   aiHint: "NEC",
  // },
  // {
  //   name: "Broadcom",
  //   src: "https://upload.wikimedia.org/wikipedia/commons/6/66/Broadcom_Logo.svg",
  //   alt: "Broadcom Logo",
  //   width: 140,
  //   height: commonHeight,
  //   aiHint: "Broadcom",
  // },
  {
    name: "Intel",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg",
    alt: "Intel Logo",
    width: 80,
    height: commonHeight,
    aiHint: "Intel",
  },
  // {
  //   name: "Lenovo",
  //   src: "https://upload.wikimedia.org/wikipedia/commons/8/85/Lenovo_logo_2015.svg",
  //   alt: "Lenovo Logo",
  //   width: 110,
  //   height: commonHeight,
  //   aiHint: "Lenovo",
  // },
  {
    name: "AWS",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    alt: "AWS Logo",
    width: 60,
    height: commonHeight,
    aiHint: "AWS",
  },
  // {
  //   name: "Pfizer",
  //   src: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Pfizer_logo.svg",
  //   alt: "Pfizer Logo",
  //   width: 100,
  //   height: commonHeight,
  //   aiHint: "Pfizer",
  // },
  {
    name: "BMW",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    alt: "BMW Logo",
    width: 40,
    height: commonHeight,
    aiHint: "BMW",
  },
  // {
  //   name: "Kellanova",
  //   src: "https://upload.wikimedia.org/wikipedia/commons/2/24/Kellogg%27s_logo.svg",
  //   alt: "Kellanova Logo",
  //   width: 120,
  //   height: commonHeight,
  //   aiHint: "Kellanova",
  // },
  {
    name: "Accenture",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
    alt: "Accenture Logo",
    width: 140,
    height: commonHeight,
    aiHint: "Accenture",
  },
  {
    name: "Fox News",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/95/FOX_wordmark-red.svg",
    alt: "Fox News Logo",
    width: 100,
    height: commonHeight,
    aiHint: "Fox News",
  },
  {
    name: "Toyota",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
    alt: "Toyota Logo",
    width: 100,
    height: commonHeight,
    aiHint: "Toyota",
  },
];

export const TrustedBySection: FC = () => {
  const duplicatedLogos = [...logos, ...logos]; // Duplicate for seamless scroll
  const [imgError, setImgError] = useState<Record<string, boolean>>({});

  const handleImageError = (logoName: string, index: number) => {
    setImgError((prev) => ({
      ...prev,
      [`${logoName}-${index}`]: true,
    }));
  };

  return (
    <section className="pt-12 md:pt-28 pb-10 md:pb-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center text-sm font-medium text-muted-foreground mb-6">
          Relied upon by More Than Two Million Creators
        </h2>
        <div className="overflow-hidden w-full group">
          <div className="flex animate-marquee-left group-hover:pause-animation whitespace-nowrap py-4">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 mx-5 md:mx-7 lg:mx-8 transition-all duration-300 ease-in-out filter grayscale hover:filter-none opacity-75 hover:opacity-100"
                title={logo.name}
              >
                {!imgError[`${logo.name}-${index}`] ? (
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain h-8"
                    data-ai-hint={logo.aiHint}
                    onError={() => handleImageError(logo.name, index)}
                    loading="eager"
                    priority={index < 10}
                  />
                ) : (
                  <div className="h-8 flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">
                      {logo.name}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Add this to your global CSS or create a new style
// @keyframes marquee-left {
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-50%); }
// }
//
// .animate-marquee-left {
//   animation: marquee-left 30s linear infinite;
// }
//
// .group:hover .pause-animation {
//   animation-play-state: paused;
// }
