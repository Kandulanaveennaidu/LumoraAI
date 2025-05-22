"use client";

import type { FC } from "react";
import { useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FeatureCardData {
  imageSrc: string;
  imageAlt: string;
  aiHint: string;
  title: string;
  description: string;
  imageWidth: number;
  imageHeight: number;
}

const featureCardsData: FeatureCardData[] = [
  {
    imageSrc:
      "https://images.yourstory.com/cs/2/ab6020f0259611ee840c6712417aa5cf/AI-Voice-Cloning-Tool-1703796231278.jpeg",
    imageAlt: "AI Voice Cloning illustration",
    aiHint: "voice waveform",
    title: "AI Voice Cloning",
    description:
      "Develop a distinct AI voice for your text-to-speech projects.",
    imageWidth: 240,
    imageHeight: 140,
  },
  {
    imageSrc: "https://blog.unrealspeech.com/content/images/2023/11/image2.png",
    imageAlt: "AI Text to Speech engine illustration",
    aiHint: "avatar speech",
    title: "AI Text-to-Speech Engine",
    description:
      "Transform your written material into remarkably natural speech.",
    imageWidth: 240,
    imageHeight: 140,
  },
  {
    imageSrc:
      "https://cdn-docs.vizard.ai/0-web-static/image/www/video_translator_header.webp",
    imageAlt: "AI Video Translation illustration",
    aiHint: "video localization",
    title: "AI Video Translation",
    description:
      "Translate and dub videos into 30+ languages with professional quality.",
    imageWidth: 240,
    imageHeight: 140,
  },
  {
    imageSrc:
      "https://miro.medium.com/v2/resize:fit:1400/1*xdwTMv8BXffwMNf6-oXMtA.png",
    imageAlt: "Custom Avatar Creation illustration",
    aiHint: "custom avatar",
    title: "Custom Avatar Creation",
    description: "Craft your unique avatar using a short video recording.",
    imageWidth: 240,
    imageHeight: 140,
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=2076&auto=format&fit=crop",
    imageAlt: "Integrated Screen Capture illustration",
    aiHint: "screen recorder",
    title: "Integrated Screen Capture",
    description:
      "Record your screen, with options to include yourself or an AI avatar.",
    imageWidth: 240,
    imageHeight: 140,
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Slides to Video illustration",
    aiHint: "presentation video",
    title: "Slides to Video",
    description:
      "Effortlessly convert presentation slides into dynamic video scenes.",
    imageWidth: 240,
    imageHeight: 140,
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Image to Talking Avatar illustration",
    aiHint: "photo talking",
    title: "Image to Talking Avatar",
    description: "Animate any photograph and make it a speaking avatar.",
    imageWidth: 240,
    imageHeight: 140,
  },
];

export const AdvancedAiToolsSection: FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust as needed, e.g., card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="pt-6 md:pt-8 pb-12 md:pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-medium text-primary mb-3">
          Our Platform Strengths
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-foreground mb-12">
          Video Creation Hub Powered by <br />
          Cutting-Edge AI Innovations
        </h2>

        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-card shadow-md hover:bg-accent -ml-4 hidden md:flex active:scale-95 transition-transform"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto pb-6"
          >
            {featureCardsData.map((card) => (
              <Card
                key={card.title}
                className="w-[260px] flex-shrink-0 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <div className="w-full h-[140px] relative">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    width={card.imageWidth}
                    height={card.imageHeight}
                    className="object-cover w-full h-full"
                    data-ai-hint={card.aiHint}
                  />
                </div>
                <CardContent className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-card shadow-md hover:bg-accent -mr-4 hidden md:flex active:scale-95 transition-transform"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
