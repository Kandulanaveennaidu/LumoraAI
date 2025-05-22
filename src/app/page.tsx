import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer"; // Import Footer
import { VideoPreviewSection } from "@/components/sections/video-preview-section";
import { TrustedBySection } from "@/components/sections/trusted-by-section";
import { AdvancedAiToolsSection } from "@/components/sections/advanced-ai-tools-section";
import { AiAvatarsSection } from "@/components/sections/ai-avatars-section";
import { CustomAvatarsSection } from "@/components/sections/custom-avatars-section";
import { HowToUseSection } from "@/components/sections/how-to-use-section";
import { InspirationSection } from "@/components/sections/inspiration-section";
import { IntelligentVideoCreationSection } from "@/components/sections/intelligent-video-creation-section";
import { GenerativeAiCapabilitiesSection } from "@/components/sections/generative-ai-capabilities-section";
import { AiPromptToolsSection } from "@/components/sections/ai-prompt-tools-section";
import { TeamsWorkspacesSection } from "@/components/sections/teams-workspaces-section";
import { EnterpriseSection } from "@/components/sections/enterprise-section";
import { AdvancedCapabilitiesSection } from "@/components/sections/advanced-capabilities-section";
import { CustomerStoriesSection } from "@/components/sections/customer-stories-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FloatingChatButton } from "@/components/floating-chat-button";
import { NewsAndUpdatesSection } from "@/components/sections/news-and-updates-section";
import { CallToActionSection } from "@/components/sections/call-to-action-section";
import { Rocket } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="flex animate-in fade-in-0 slide-in-from-bottom-6 duration-700 ease-out flex-col items-center justify-center px-4 pt-8 md:pt-16 pb-2 md:pb-4 text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Produce Compelling Videos from Text with{" "}
              <span className="text-primary">LumoraAI Studio</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/80 md:text-xl">
              Craft professional-grade videos effortlessly using AI avatars and
              voiceovers in over 80 languages, all from your script.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="text-lg active:scale-95 transition-transform"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Begin Your Free Video Creation
              </Button>
            </div>
            <p className="mt-4 text-sm text-foreground/60">
              Unlimited Video Generation | No Credit Card Needed
            </p>
          </div>
        </section>

        {/* Video Preview Section */}
        <div className="flex justify-center px-4">
          <VideoPreviewSection />
        </div>

        {/* Trusted By Section */}
        <TrustedBySection />

        {/* Advanced AI Tools Section */}
        <AdvancedAiToolsSection />

        {/* AI Avatars Section */}
        <AiAvatarsSection />

        {/* Custom Avatars Section */}
        <CustomAvatarsSection />

        {/* Intelligent Video Creation Section */}
        <IntelligentVideoCreationSection />

        {/* Generative AI Capabilities Section */}
        <GenerativeAiCapabilitiesSection />

        {/* How To Use Section */}
        <HowToUseSection />

        {/* AI Prompt Tools Section */}
        <AiPromptToolsSection />

        {/* Inspiration Section */}
        <InspirationSection />

        {/* Teams & Workspaces Section */}
        <TeamsWorkspacesSection />

        {/* Enterprise Section */}
        <EnterpriseSection />

        {/* Advanced Capabilities Section (More than just an AI Video Generator) */}
        <AdvancedCapabilitiesSection />

        {/* Title and Subtitle for Customer Stories / FAQ */}
      

        {/* Customer Stories Section */}
        <CustomerStoriesSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* News and Updates Section */}
        <NewsAndUpdatesSection />

        {/* Call to Action Section */}
        <CallToActionSection />
      </main>
      <Footer /> {/* Add Footer component here */}
      <FloatingChatButton />
    </div>
  );
}