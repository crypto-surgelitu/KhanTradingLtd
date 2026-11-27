import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CookieBanner } from "@/components/shared/cookie-banner";
import { WhatsAppFloat } from "@/components/shared/whatsapp-float";

// DESIGN.md Section 5: the public header and footer are built once here and
// shared by every public screen. The dark header variant is the Home hero
// treatment (Section 5.1); revisit the variant mechanism when more public
// screens land (see docs/TASKS.md).
export default function PublicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <WhatsAppFloat />
      <CookieBanner />
    </>
  );
}
