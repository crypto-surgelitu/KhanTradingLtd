import type { Metadata } from "next";
import { AboutCta } from "@/features/about/components/about-cta";
import { AboutHero } from "@/features/about/components/about-hero";
import { AboutProcess } from "@/features/about/components/about-process";
import { AboutStory } from "@/features/about/components/about-story";
import { AboutTeam } from "@/features/about/components/about-team";
import { AboutValues } from "@/features/about/components/about-values";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Curating exceptional motor vehicles with uncompromising standards of provenance, inspection, and client integrity.",
};

// DESIGN.md Screen 4 — About Us. Server Component; the <main> landmark is
// provided by the (public) layout. Sections follow the approved Stitch export
// in order: hero, story, values, process, team, visit-the-showroom CTA.

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutProcess />
      <AboutTeam />
      <AboutCta />
    </>
  );
}
