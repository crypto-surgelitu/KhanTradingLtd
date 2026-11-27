import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

// DESIGN.md Section 5.3: 56px circular ink button, bottom-right. Lucide has no
// WhatsApp brand mark, so MessageCircle is the stand-in icon family (AGENTS.md
// Section 6: Lucide only).
export function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.links.whatsapp}
      aria-label="WhatsApp us"
      className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-ink text-white shadow-lg transition-colors hover:bg-graphite"
    >
      <MessageCircle aria-hidden="true" className="size-6" strokeWidth={1.5} />
    </a>
  );
}
