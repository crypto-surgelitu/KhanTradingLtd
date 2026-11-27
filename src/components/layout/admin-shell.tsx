import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  Car,
  CreditCard,
  Handshake,
  LayoutDashboard,
  LogOut,
  Mail,
  CalendarDays,
  Plus,
  PlusCircle,
  Receipt,
  Search,
  Settings,
  Truck,
  User,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { dashboardUser } from "@/features/admin/mocks";

// DESIGN.md Section 8 admin shell (built once here; the (admin) layout will
// adopt it when the authenticated admin routes land). Left graphite sidebar
// with grouped nav, top bar with page title, search and "Add vehicle", and
// the content <main>. Sidebar stacks above content on mobile (no drawer JS).

type AdminShellProps = {
  children: React.ReactNode;
  current?: string;
};

const navGroups = [
  {
    label: "Sales",
    items: [
      { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
      { href: "/admin/deals", label: "Deals", icon: Handshake },
      { href: "/admin/enquiries", label: "Enquiries", icon: Mail },
      { href: "/admin/viewings", label: "Viewings", icon: CalendarDays },
      { href: "/admin/customers", label: "Customers", icon: Users },
    ],
  },
  {
    label: "Stock",
    items: [
      { href: "/admin/inventory", label: "Inventory", icon: Car },
      { href: "/admin/add-vehicle", label: "Add Vehicle", icon: PlusCircle },
      { href: "/admin/shipments", label: "Shipments", icon: Truck },
      { href: "/admin/costing", label: "Costing", icon: Receipt },
    ],
  },
  {
    label: "Finance",
    items: [{ href: "/admin/payments", label: "Payments", icon: CreditCard }],
  },
  {
    label: "System",
    items: [{ href: "/admin/settings", label: "Settings", icon: Settings }],
  },
] as const;

export function AdminShell({ children, current }: AdminShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-ivory lg:flex-row">
      <aside className="flex flex-col gap-8 bg-graphite px-4 py-6 text-white lg:w-64 lg:shrink-0">
        <div>
          <Image
            src="/brand/logo-white.png"
            alt="KHANS TRADING Ltd."
            width={1600}
            height={537}
            className="h-10 w-auto object-contain"
          />
          <p className="pt-2 font-body text-eyebrow uppercase text-mist">
            Dealership Ops
          </p>
        </div>

        <nav aria-label="Admin" className="flex flex-1 flex-col gap-6">
          {navGroups.map((group) => (
            <div key={group.label} className="flex flex-col gap-1">
              <p className="px-3 pb-1 font-body text-eyebrow uppercase text-mist">
                {group.label}
              </p>
              {group.items.map((item) => {
                const active = current === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex min-h-11 items-center gap-3 rounded-sm px-3 font-body text-small transition-colors",
                      active
                        ? "bg-white/10 text-white"
                        : "text-mist hover:bg-white/5 hover:text-white",
                    )}
                  >
                    <item.icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3 border-t border-white/10 pt-4">
          <span
            aria-hidden="true"
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-champagne font-body text-caption font-semibold text-ink"
          >
            {dashboardUser.initials}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate font-body text-small font-medium text-white">
              {dashboardUser.name}
            </p>
            <p className="truncate font-body text-caption text-mist">
              {dashboardUser.role}
            </p>
          </div>
          <Link
            href="/admin/login"
            aria-label="Log out"
            className="flex size-11 items-center justify-center rounded-sm text-mist transition-colors hover:text-white"
          >
            <LogOut aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </Link>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-40 flex flex-wrap items-center gap-3 border-b border-stone bg-white px-4 py-3 sm:px-6">
          <p className="font-heading text-h3 lg:text-h3-lg">Dealership Operations</p>
          <div className="relative hidden flex-1 items-center md:flex">
            <label htmlFor="admin-search" className="sr-only">
              Search
            </label>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3 size-5 text-mist"
              strokeWidth={1.5}
            />
            <input
              id="admin-search"
              type="search"
              className="h-11 w-full max-w-md rounded-sm border border-stone bg-ivory pl-10 pr-14 font-body text-small text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            />
            <span
              aria-hidden="true"
              className="absolute right-3 rounded-sm border border-stone bg-white px-1.5 font-body text-caption text-slate"
            >
              ⌘K
            </span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              aria-label="Notifications"
              className="flex size-11 items-center justify-center rounded-full border border-stone bg-white text-ink transition-colors hover:bg-champagne-tint"
            >
              <Bell aria-hidden="true" className="size-5" strokeWidth={1.5} />
            </button>
            <Link
              href="/admin/add-vehicle"
              className={buttonVariants({ variant: "primary" })}
            >
              <Plus aria-hidden="true" className="mr-2 size-5" strokeWidth={1.5} />
              Add vehicle
            </Link>
            <button
              type="button"
              aria-label="Account"
              className="flex size-11 items-center justify-center rounded-full border border-stone bg-white text-ink transition-colors hover:bg-champagne-tint"
            >
              <User aria-hidden="true" className="size-5" strokeWidth={1.5} />
            </button>
          </div>
        </header>

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</main>
      </div>
    </div>
  );
}
