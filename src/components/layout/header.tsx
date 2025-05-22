"use client";

import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AppLogoIcon } from "@/components/icons/app-logo-icon";
import {
  Menu,
  ChevronDown,
  UserCircle2,
  Volume2,
  Users,
  Languages,
  LayoutPanelTop,
  MessageSquareText,
  ArrowRight,
  Headset,
  Newspaper,
  Cog,
  Building,
  Link as LinkIcon,
  Briefcase,
  UsersRound,
  Handshake,
  Zap,
  BookOpen,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
} from "lucide-react";
import React from "react";

// Define types for mega menu
interface MegaMenuLink {
  label: string;
  href: string;
  isEmphasized?: boolean;
  iconAfter?: LucideIconName;
}

interface MegaMenuColumn {
  title: string;
  links: MegaMenuLink[];
}

interface CoreFeatureItem {
  icon: LucideIconName;
  title: string;
  description: string;
  href: string;
}

interface FeaturesMegaMenuData {
  coreFeatures: CoreFeatureItem[];
  columns: MegaMenuColumn[][]; // Array of arrays for rows of columns
}

// Define types for Solutions mega menu
interface SolutionsMegaMenuLink {
  label: string;
  href: string;
}

interface SolutionsMegaMenuTextColumn {
  title: string;
  links: SolutionsMegaMenuLink[];
  actionLink?: { label: string; href: string; iconAfter?: LucideIconName };
}

interface SolutionsStoryCardData {
  imageSrc: string;
  imageAlt: string;
  aiHint: string;
  title: string;
  description: string;
  href: string;
}

interface SolutionsMegaMenuLayoutData {
  linkColumns: SolutionsMegaMenuTextColumn[];
  storyCards: SolutionsStoryCardData[];
}

// Define types for simple dropdown (like Resources)
interface DropdownItem {
  label: string;
  href: string;
  icon?: LucideIconName;
}

interface DropdownSection {
  title?: string;
  items: DropdownItem[];
}

type LucideIconName = keyof typeof LucideIcons;

// Helper for Lucide Icons
const LucideIcons = {
  UserCircle2,
  Volume2,
  Users,
  Languages,
  LayoutPanelTop,
  MessageSquareText,
  ArrowRight,
  ChevronDown,
  Menu,
  Headset,
  Newspaper,
  Cog,
  Building,
  Link: LinkIcon,
  Briefcase,
  UsersRound,
  Handshake,
  Zap,
  BookOpen,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
};

const Icon: FC<{ name: LucideIconName; className?: string }> = ({
  name,
  className,
}) => {
  const IconComponent = LucideIcons[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
};

const featuresMegaMenuData: FeaturesMegaMenuData = {
  coreFeatures: [
    {
      icon: "UserCircle2",
      title: "AI Avatars",
      description: "Over 150 Lifelike Digital Avatars",
      href: "#ai-avatars",
    },
    {
      icon: "Volume2",
      title: "AI Voices",
      description: "Discover AI Voices in 80+ Languages",
      href: "#ai-voices",
    },
    {
      icon: "Users",
      title: "Team Collaboration",
      description: "Work together for faster video creation",
      href: "#teams-workspaces",
    },
    {
      icon: "Languages",
      title: "Video Translation",
      description: "Translate videos instantly across languages",
      href: "#video-translation",
    },
    {
      icon: "LayoutPanelTop",
      title: "Video Templates",
      description: "Customizable, Stylized Video Layouts",
      href: "#video-templates",
    },
    {
      icon: "MessageSquareText",
      title: "Interactive Avatars",
      description: "Engage with LLM-Powered AI Avatars",
      href: "#conversational-avatar-core",
    },
  ],
  columns: [
    [
      // First row of columns
      {
        title: "AI Avatar Suite",
        links: [
          { label: "Photo-to-Avatar", href: "#photo-avatar" },
          { label: "Studio Quality Avatars", href: "#studio-avatar" },
          { label: "Advanced 3D Avatars", href: "#3d-avatars" },
          { label: "Avatar Motion & Gestures", href: "#avatar-gestures" },
          { label: "Multi-Character Scenes", href: "#multi-avatar-scenes" },
          { label: "Personalized Dictionary", href: "#custom-dictionary" },
          { label: "Bespoke Avatar Design", href: "#custom-avatar" },
        ],
      },
      {
        title: "Intelligent Tools",
        links: [
          { label: "Text-to-Video Engine", href: "#text-to-video" },
          { label: "Topic-based Video Generation", href: "#topic-to-video" },
          { label: "Convert URL to Video", href: "#url-to-video" },
          { label: "Document-to-Video", href: "#docs-to-video" },
          { label: "Article-to-Video Converter", href: "#article-to-video" },
          { label: "AI Video Production", href: "#ai-video-generator" },
          { label: "AI Image Creation", href: "#ai-image-generator" },
          { label: "AI Scriptwriting Aid", href: "#ai-script-assistant" },
          {
            label: "AI Video Language Translator",
            href: "#ai-video-translator",
          },
          { label: "AI Voice Dubbing", href: "#ai-dubbing" },
        ],
      },
      {
        title: "Template Library",
        links: [
          { label: "Social Media Templates", href: "#tiktok-youtube-reels" },
          { label: "Corporate & Business", href: "#business-templates" },
          { label: "News & Reporting", href: "#news-templates" },
          { label: "E-commerce & Ads", href: "#commerce-templates" },
          { label: "Events & Holidays", href: "#holiday-event-templates" },
          {
            label: "Explore All Templates",
            href: "#all-templates",
            isEmphasized: true,
            iconAfter: "ArrowRight",
          },
        ],
      },
    ],
    [
      // Second row of columns
      {
        title: "Conversational AI",
        links: [
          { label: "Digital Human Avatars", href: "#ai-human" },
          { label: "Integrate Custom LLMs", href: "#custom-llms" },
        ],
      },
      {
        title: "Video Editing Suite",
        links: [
          {
            label: "AI Creative Studios",
            href: "#ai-studios-editing",
            isEmphasized: true,
          },
          { label: "Intuitive AI Video Editor", href: "#ai-video-editor" },
          { label: "Built-in Screen Recorder", href: "#screen-recording" },
          { label: "Automatic Captioning", href: "#auto-captions" },
          { label: "Your Brand Kit", href: "#brand-kit" },
          { label: "Advanced Text-to-Speech", href: "#text-to-speech-editing" },
        ],
      },
      {
        title: "Innovations",
        links: [
          { label: "Digital Face Swap", href: "#face-swap" },
          { label: "Deepfake Analysis Tool", href: "#deepfake-detector" },
          { label: "AI-Powered Interviews", href: "#ai-interview" },
          { label: "Personalized Re;memory", href: "#re-memory" },
        ],
      },
    ],
  ],
};

const solutionsMegaMenuData: SolutionsMegaMenuLayoutData = {
  linkColumns: [
    {
      title: "Video Generation Use Cases",
      links: [
        { label: "Training & Development", href: "#solution-learning" },
        { label: "Social Media Content", href: "#solution-social" },
        { label: "Digital Advertising", href: "#solution-ads" },
        { label: "Marketing Campaigns", href: "#solution-marketing" },
        { label: "News Broadcasting", href: "#solution-news" },
        { label: "Online Course Creation", href: "#solution-elearning" },
      ],
    },
    {
      title: "Interactive Avatar Uses",
      links: [
        { label: "AI Digital Ambassador", href: "#solution-brand-ambassador" },
        { label: "Virtual Bank Assistant", href: "#solution-bank-teller" },
        { label: "AI Support Agent", href: "#solution-customer-service" },
        { label: "AI Educators & Tutors", href: "#solution-tutor" },
      ],
      actionLink: {
        label: "View All Client Successes",
        href: "#customer-stories",
        iconAfter: "ArrowRight",
      },
    },
  ],

  storyCards: [
    {
      imageSrc:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg", // Replace with an actual image of AI in banking
      imageAlt: "AI avatars in a modern bank",
      aiHint: "bank branch",
      title: "LumoraAI's Avatars Powering an Autonomous Bank",
      description:
        "Explore how Shinhan Bank introduced its pioneering unmanned 'AI Branch' in Seoul.",
      href: "#unmanned-bank-story",
    },
    {
      imageSrc:
        "https://cdn.pixabay.com/photo/2021/03/29/22/22/teleprompter-6135431_1280.jpg", // Replace with an actual image of an AI news presenter
      imageAlt: "AI news presenter",
      aiHint: "news anchor",
      title: "MBN Employs AI Anchor for News Delivery",
      description:
        "MBN utilized an AI anchor, Kim Joo-ha, for regular news updates on its website over several weeks.",
      href: "#ai-anchor-story",
    },
  ],
};

interface NavLink {
  label: string;
  href: string;
  isMegaMenu?: boolean;
  featuresMegaMenuData?: FeaturesMegaMenuData;
  solutionsMegaMenuData?: SolutionsMegaMenuLayoutData;
  isSimpleDropdown?: boolean;
  dropdownSections?: DropdownSection[];
}

const navLinksData: NavLink[] = [
  {
    label: "Features",
    href: "#features",
    isMegaMenu: true,
    featuresMegaMenuData: featuresMegaMenuData,
  },
  {
    label: "Solutions",
    href: "#solutions",
    isMegaMenu: true,
    solutionsMegaMenuData: solutionsMegaMenuData,
  },
  {
    label: "Resources",
    href: "#resources",
    isSimpleDropdown: true,
    dropdownSections: [
      {
        title: "Support & Knowledge",
        items: [
          { label: "Help Desk", href: "#help-center", icon: "Headset" },
          { label: "Our Blog", href: "#blogs", icon: "Newspaper" },
        ],
      },
      {
        title: "More Resources",
        items: [
          {
            label: "Platform Integrations",
            href: "#integrations",
            icon: "Cog",
          },
        ],
      },
    ],
  },
  {
    label: "Company",
    href: "#company",
    isSimpleDropdown: true,
    dropdownSections: [
      {
        items: [
          { label: "About LumoraAI", href: "#about-lumora", icon: "Building" },
          { label: "Get In Touch", href: "#connect", icon: "Link" },
          { label: "Join Our Team", href: "#careers", icon: "Briefcase" },
          {
            label: "Affiliate Program",
            href: "#affiliate",
            icon: "UsersRound",
          },
          { label: "Our Partners", href: "#partners", icon: "Handshake" },
        ],
      },
    ],
  },
  { href: "#pricing", label: "Pricing" },
  { href: "#enterprise", label: "Enterprise" },
];

export const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <AppLogoIcon className="h-8 w-8" />
          <span className="text-xl font-bold">LumoraAI</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinksData.map((link) => {
            if (link.isMegaMenu || link.isSimpleDropdown) {
              return (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground hover:no-underline active:scale-95"
                    >
                      {link.label}
                      <Icon name="ChevronDown" className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className={`w-auto max-w-screen-lg shadow-xl bg-popover rounded-lg border data-[side=bottom]:mt-2 ${
                      link.isSimpleDropdown &&
                      !link.featuresMegaMenuData &&
                      !link.solutionsMegaMenuData
                        ? "p-1"
                        : "p-6"
                    }`}
                  >
                    {link.featuresMegaMenuData && (
                      <div className="flex gap-x-8">
                        {/* Core Features Column */}
                        <div className="w-[300px] flex-shrink-0">
                          <h3 className="mb-4 text-sm font-semibold text-foreground/70">
                            Core Capabilities
                          </h3>
                          <div className="space-y-3">
                            {link.featuresMegaMenuData.coreFeatures.map(
                              (item) => (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  className="flex items-start gap-3 p-2 -m-2 rounded-md hover:bg-accent transition-colors"
                                >
                                  <Icon
                                    name={item.icon}
                                    className="mt-1 h-5 w-5 text-primary flex-shrink-0"
                                  />
                                  <div>
                                    <p className="font-medium text-sm text-foreground">
                                      {item.title}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              )
                            )}
                          </div>
                        </div>

                        {/* Vertical Separator */}
                        <div className="w-px bg-border self-stretch"></div>

                        {/* Other Columns Section */}
                        <div className="flex-1 space-y-6">
                          {link.featuresMegaMenuData.columns.map(
                            (row, rowIndex) => (
                              <div
                                key={rowIndex}
                                className={`grid grid-cols-3 gap-x-8 ${
                                  rowIndex > 0 ? "pt-6 border-t mt-6" : ""
                                }`}
                              >
                                {row.map((col) => (
                                  <div key={col.title}>
                                    <h3 className="mb-3 text-sm font-semibold text-foreground">
                                      {col.title}
                                    </h3>
                                    <ul className="space-y-2">
                                      {col.links.map((subLink) => (
                                        <li key={subLink.label}>
                                          <Link
                                            href={subLink.href}
                                            className={`flex items-center text-sm hover:text-primary transition-colors ${
                                              subLink.isEmphasized
                                                ? "font-semibold text-primary"
                                                : "text-foreground/80"
                                            }`}
                                          >
                                            {subLink.label}
                                            {subLink.iconAfter && (
                                              <Icon
                                                name={subLink.iconAfter}
                                                className="ml-1 h-3 w-3"
                                              />
                                            )}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                    {link.solutionsMegaMenuData && (
                      <div className="flex gap-x-8">
                        {/* Link Columns */}
                        <div className="flex gap-x-8">
                          {link.solutionsMegaMenuData.linkColumns.map((col) => (
                            <div key={col.title} className="w-[200px]">
                              <h3 className="mb-3 text-sm font-semibold text-foreground">
                                {col.title}
                              </h3>
                              <ul className="space-y-2">
                                {col.links.map((subLink) => (
                                  <li key={subLink.label}>
                                    <Link
                                      href={subLink.href}
                                      className="flex items-center text-sm text-foreground/80 hover:text-primary transition-colors"
                                    >
                                      {subLink.label}
                                    </Link>
                                  </li>
                                ))}
                                {col.actionLink && (
                                  <li className="mt-3">
                                    <Link
                                      href={col.actionLink.href}
                                      className="flex items-center text-sm font-semibold text-primary hover:underline"
                                    >
                                      {col.actionLink.label}
                                      {col.actionLink.iconAfter && (
                                        <Icon
                                          name={col.actionLink.iconAfter}
                                          className="ml-1 h-3 w-3"
                                        />
                                      )}
                                    </Link>
                                  </li>
                                )}
                              </ul>
                            </div>
                          ))}
                        </div>
                        {/* Vertical Separator */}
                        <div className="w-px bg-border self-stretch mx-4"></div>
                        {/* Story Cards Column */}
                        <div className="flex flex-col gap-y-4 w-[320px]">
                          {link.solutionsMegaMenuData.storyCards.map((card) => (
                            <Link
                              key={card.title}
                              href={card.href}
                              className="block p-3 -m-3 rounded-lg hover:bg-accent transition-colors"
                            >
                              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md mb-2">
                                <Image
                                  src={card.imageSrc}
                                  alt={card.imageAlt}
                                  fill
                                  objectFit="cover"
                                  data-ai-hint={card.aiHint}
                                />
                              </div>
                              <h4 className="text-sm font-semibold text-foreground mb-1">
                                {card.title}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {card.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                    {link.isSimpleDropdown &&
                      !link.featuresMegaMenuData &&
                      !link.solutionsMegaMenuData && (
                        <div>
                          {link.dropdownSections?.map(
                            (section, sectionIndex) => (
                              <React.Fragment
                                key={section.title || sectionIndex}
                              >
                                {section.title && sectionIndex > 0 && (
                                  <DropdownMenuSeparator className="my-1" />
                                )}
                                {section.title && (
                                  <div className="px-2 py-1.5 text-sm font-medium text-muted-foreground">
                                    {section.title}
                                  </div>
                                )}
                                {section.items.map((item) => (
                                  <DropdownMenuItem key={item.label} asChild>
                                    <Link
                                      href={item.href}
                                      className="flex items-center w-full text-sm text-foreground/90"
                                    >
                                      {item.icon && (
                                        <Icon
                                          name={item.icon}
                                          className="mr-2 h-4 w-4 text-primary"
                                        />
                                      )}
                                      {item.label}
                                    </Link>
                                  </DropdownMenuItem>
                                ))}
                              </React.Fragment>
                            )
                          )}
                        </div>
                      )}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            // Plain link
            return (
              <Button
                key={link.label}
                variant="ghost"
                asChild
                className="px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground hover:no-underline active:scale-95"
              >
                <Link href={link.href} className="flex items-center">
                  {link.label}
                </Link>
              </Button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="link"
            asChild
            className="active:scale-95 transition-transform"
          >
            <Link href="#login">Log In</Link>
          </Button>
          <Button
            variant="secondary"
            asChild
            className="active:scale-95 transition-transform"
          >
            <Link href="#contact-sales">Contact Sales Team</Link>
          </Button>
          <Button asChild className="active:scale-95 transition-transform">
            <Link href="#signup">Sign Up Free</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Icon name="Menu" className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-0">
              <SheetTitle className="sr-only">Main Menu</SheetTitle>
              <div className="flex h-full flex-col space-y-4 overflow-y-auto">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="mb-4 flex items-center gap-2 p-6 pb-0"
                  >
                    <AppLogoIcon className="h-8 w-8" />
                    <span className="text-xl font-bold">LumoraAI</span>
                  </Link>
                </SheetClose>
                <nav className="flex flex-col space-y-1 px-6">
                  {navLinksData.map((link) => {
                    if (link.isMegaMenu || link.isSimpleDropdown) {
                      return (
                        <Accordion
                          key={link.label}
                          type="single"
                          collapsible
                          className="w-full"
                        >
                          <AccordionItem
                            value={link.label}
                            className="border-b-0"
                          >
                            <AccordionTrigger className="flex w-full items-center justify-between py-2 text-base font-medium text-foreground/80 transition-colors hover:text-foreground hover:no-underline">
                              {link.label}
                            </AccordionTrigger>
                            <AccordionContent className="pb-1 pl-4 pt-1">
                              <nav className="flex flex-col space-y-1">
                                {link.featuresMegaMenuData && (
                                  <>
                                    <div className="py-1 text-sm font-semibold text-foreground/70">
                                      Core Capabilities
                                    </div>
                                    {link.featuresMegaMenuData.coreFeatures.map(
                                      (coreItem) => (
                                        <SheetClose
                                          key={coreItem.title}
                                          asChild
                                        >
                                          <Link
                                            href={coreItem.href}
                                            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-accent hover:text-accent-foreground"
                                          >
                                            <Icon
                                              name={coreItem.icon}
                                              className="h-4 w-4 text-primary"
                                            />
                                            {coreItem.title}
                                          </Link>
                                        </SheetClose>
                                      )
                                    )}
                                    {link.featuresMegaMenuData.columns
                                      .flat()
                                      .map((column) => (
                                        <React.Fragment key={column.title}>
                                          <div className="pt-3 pb-1 text-sm font-semibold text-foreground/70">
                                            {column.title}
                                          </div>
                                          {column.links.map((subItem) => (
                                            <SheetClose
                                              key={subItem.label}
                                              asChild
                                            >
                                              <Link
                                                href={subItem.href}
                                                className="block rounded-md py-1.5 pl-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-accent hover:text-accent-foreground"
                                              >
                                                {subItem.label}
                                                {subItem.iconAfter && (
                                                  <Icon
                                                    name={subItem.iconAfter}
                                                    className="ml-1 inline h-3 w-3"
                                                  />
                                                )}
                                              </Link>
                                            </SheetClose>
                                          ))}
                                        </React.Fragment>
                                      ))}
                                  </>
                                )}
                                {link.solutionsMegaMenuData && (
                                  <>
                                    {link.solutionsMegaMenuData.linkColumns.map(
                                      (column) => (
                                        <React.Fragment key={column.title}>
                                          <div className="pt-3 pb-1 text-sm font-semibold text-foreground/70">
                                            {column.title}
                                          </div>
                                          {column.links.map((subItem) => (
                                            <SheetClose
                                              key={subItem.label}
                                              asChild
                                            >
                                              <Link
                                                href={subItem.href}
                                                className="block rounded-md py-1.5 pl-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-accent hover:text-accent-foreground"
                                              >
                                                {subItem.label}
                                              </Link>
                                            </SheetClose>
                                          ))}
                                          {column.actionLink && (
                                            <SheetClose asChild>
                                              <Link
                                                href={column.actionLink.href}
                                                className="flex items-center rounded-md py-1.5 pl-2 text-sm font-semibold text-primary transition-colors hover:underline"
                                              >
                                                {column.actionLink.label}
                                                {column.actionLink
                                                  .iconAfter && (
                                                  <Icon
                                                    name={
                                                      column.actionLink
                                                        .iconAfter
                                                    }
                                                    className="ml-1 inline h-3 w-3"
                                                  />
                                                )}
                                              </Link>
                                            </SheetClose>
                                          )}
                                        </React.Fragment>
                                      )
                                    )}
                                    <div className="pt-3 pb-1 text-sm font-semibold text-foreground/70">
                                      Client Successes
                                    </div>
                                    {link.solutionsMegaMenuData.storyCards.map(
                                      (card) => (
                                        <SheetClose key={card.title} asChild>
                                          <Link
                                            href={card.href}
                                            className="block rounded-md py-1.5 pl-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-accent hover:text-accent-foreground"
                                          >
                                            {card.title}
                                          </Link>
                                        </SheetClose>
                                      )
                                    )}
                                  </>
                                )}
                                {link.isSimpleDropdown &&
                                  link.dropdownSections?.map((section) => (
                                    <React.Fragment
                                      key={
                                        section.title || section.items[0]?.label
                                      }
                                    >
                                      {" "}
                                      {/* Ensure key is unique */}
                                      {section.title && (
                                        <div className="pt-3 pb-1 text-sm font-semibold text-foreground/70">
                                          {section.title}
                                        </div>
                                      )}
                                      {section.items.map((item) => (
                                        <SheetClose key={item.label} asChild>
                                          <Link
                                            href={item.href}
                                            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-accent hover:text-accent-foreground"
                                          >
                                            {item.icon && (
                                              <Icon
                                                name={item.icon}
                                                className="h-4 w-4 text-primary"
                                              />
                                            )}
                                            {item.label}
                                          </Link>
                                        </SheetClose>
                                      ))}
                                    </React.Fragment>
                                  ))}
                              </nav>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      );
                    }
                    // Plain link
                    return (
                      <SheetClose key={link.label} asChild>
                        <Link
                          href={link.href}
                          className="flex items-center rounded-md px-2 py-2 text-base font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground active:scale-95"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
                <div className="mt-auto flex flex-col space-y-2 border-t pt-6 px-6 pb-6">
                  <SheetClose asChild>
                    <Button
                      variant="link"
                      className="w-full justify-start px-2 active:scale-95 transition-transform"
                      asChild
                    >
                      <Link href="#login">Log In</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button
                      variant="secondary"
                      className="w-full active:scale-95 transition-transform"
                      asChild
                    >
                      <Link href="#contact-sales">Contact Sales Team</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button
                      className="w-full active:scale-95 transition-transform"
                      asChild
                    >
                      <Link href="#signup">Sign Up Free</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
