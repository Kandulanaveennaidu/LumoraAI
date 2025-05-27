"use client";

import type { FC } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Volume2, VolumeX } from "lucide-react";

export const VideoPreviewSection: FC = () => {
  const [isSoundOn, setIsSoundOn] = useState(true);

  return (
    <section className="w-full max-w-[700px] py-2 md:py-4">
      <Card className="relative aspect-video w-full overflow-hidden rounded-lg shadow-2xl">
        <video
          src="https://renew.deepbrainai.io/renewal_resources/videos/common/00_Homepage_v2_cut.mp4"
          className="absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          loop
          autoPlay
          data-ai-hint="video player"
        />
        {/* <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <Button
            variant="ghost"
            size="icon"
            className="h-20 w-20 rounded-full bg-background/80 p-0 hover:bg-background"
            aria-label="Play video"
          >
            <Play className="h-10 w-10 fill-primary text-primary" />
          </Button>
        </div> */}
        <div className="absolute bottom-4 right-4">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsSoundOn(!isSoundOn)}
            className="shadow-md"
          >
            {isSoundOn ? (
              <Volume2 className="mr-2 h-4 w-4" />
            ) : (
              <VolumeX className="mr-2 h-4 w-4" />
            )}
            Sound
          </Button>
        </div>
      </Card>
    </section>
  );
};
