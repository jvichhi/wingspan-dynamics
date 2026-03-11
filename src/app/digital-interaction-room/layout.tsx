"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, MapPin, ChevronDown, User } from "lucide-react";

const portalNav = [
  { label: "Dashboard", href: "/digital-interaction-room" },
  { label: "Sales Orders", href: "/digital-interaction-room/sales-orders" },
  { label: "Invoices", href: "/digital-interaction-room/invoices" },
  { label: "Sales Contracts", href: "/digital-interaction-room/sales-contracts" },
  { label: "Customer Returns", href: "/digital-interaction-room/customer-returns" },
  { label: "Equipment", href: "/digital-interaction-room/equipment" },
  { label: "Service Tickets", href: "/digital-interaction-room/service-tickets" },
  { label: "Documents", href: "/digital-interaction-room/documents" },
];

export default function DigitalInteractionRoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Portal Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center gap-4 px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 mr-2">
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-widest leading-none" style={{ color: "#1C2B3A", letterSpacing: "0.15em" }}>
                WINGSPAN
              </span>
              <div className="flex items-center gap-1">
                <span className="text-xs tracking-widest font-light leading-none" style={{ color: "#1C2B3A", letterSpacing: "0.25em" }}>
                  DYNAMICS
                </span>
                <span style={{ color: "#E8611A" }}>▶</span>
              </div>
            </div>
          </Link>

          {/* Search */}
          <div className="flex-1 relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search portal..."
              className="w-full border border-gray-300 rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-gray-500 bg-gray-50"
            />
          </div>

          {/* Right */}
          <div className="flex items-center gap-3 ml-auto">
            <button className="text-gray-500 hover:text-gray-800">
              <MapPin size={18} />
            </button>
            <button className="flex items-center gap-1.5 text-white text-sm px-3 py-1.5 rounded-md font-medium" style={{ backgroundColor: "#1C2B3A" }}>
              <User size={14} /> My Account <ChevronDown size={13} />
            </button>
          </div>
        </div>

        {/* Portal Nav Tabs */}
        <nav className="flex" style={{ backgroundColor: "#1C2B3A" }}>
          {portalNav.map((item) => {
            const isActive =
              item.href === "/digital-interaction-room"
                ? pathname === "/digital-interaction-room"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`px-5 py-3 text-xs font-semibold tracking-wide uppercase whitespace-nowrap transition-colors ${
                  isActive
                    ? "text-white border-b-2 border-orange-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>

      {/* Page Content */}
      <main>{children}</main>
    </div>
  );
}