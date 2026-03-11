"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  MapPin,
  ChevronDown,
  Search,
  Menu,
  X,
  Package,
  Receipt,
  FileSignature,
  Tag,
  User,
  Clock,
} from "lucide-react";

const navItems = [
  {
    label: "Industries",
    href: "#",
    mega: [
      { label: "Agriculture", href: "/industries/agriculture" },
      { label: "Construction", href: "#" },
      { label: "Mining", href: "#" },
      { label: "Logistics", href: "#" },
      { label: "Public Safety", href: "#" },
      { label: "Energy", href: "#" },
    ],
  },
  {
    label: "Products",
    href: "#",
    mega: [
      { label: "Drones", href: "/industries/agriculture" },
      { label: "Controllers", href: "/industries/agriculture" },
      { label: "Batteries", href: "/industries/agriculture" },
      { label: "Sensors", href: "/industries/agriculture" },
      { label: "Accessories", href: "/industries/agriculture" },
    ],
  },
  { label: "Solutions", href: "#" },
  {
    label: "Parts & Accessories",
    href: "/industries/agriculture",
  },
  { label: "Resources", href: "#" },
  { label: "Support", href: "#" },
];

const accountMenuItems = [
  { label: "Order History", href: "/orders", icon: Package },
  { label: "Invoices", href: "/invoices", icon: Receipt },
  { label: "Contracts", href: "/contracts", icon: FileSignature },
  { label: "Special Offers", href: "/offers", icon: Tag },
  { label: "Order Confirmation", href: "/order-confirmation/ord-0000000001", icon: Clock },
];

const NINE_HOURS = 9 * 60 * 60; // 9 hours in seconds

function formatCountdown(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(NINE_HOURS);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const cartCount = 3;

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Announcement Bar */}
      <div
        className="text-white text-xs py-1.5 px-4 flex items-center justify-between"
        style={{ backgroundColor: "#1C2B3A" }}
      >
        <div className="flex items-center gap-2">
          <button className="opacity-60 hover:opacity-100">‹</button>
          <button className="opacity-60 hover:opacity-100">›</button>
          <span>
            <span className="font-semibold">{formatCountdown(timeLeft)}</span> Left till today&apos;s special deal
            ends! —{" "}
            <Link href="/offers" className="underline font-semibold hover:text-orange-300">
              Buy Now
            </Link>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-5">
          <Link href="#" className="hover:underline">About</Link>
          <Link href="#" className="hover:underline">Rewards</Link>
          <Link href="#" className="hover:underline">Knowledge Hub</Link>
          <span className="flex items-center gap-1">🇺🇸 USA EN / $ USD</span>
        </div>
      </div>

      {/* Main Nav */}
      <div className="border-b border-gray-200 px-4 md:px-8 py-3 flex items-center gap-4">
        {/* Search */}
        <div className="flex-1 max-w-xs relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-300 rounded pl-8 pr-3 py-1.5 text-sm focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Logo */}
        <Link href="/" className="flex-shrink-0 mx-auto md:mx-0">
          <div className="flex flex-col items-center">
            <span
              className="text-xl font-bold tracking-widest"
              style={{ color: "#1C2B3A", letterSpacing: "0.15em" }}
            >
              WINGSPAN
            </span>
            <span
              className="text-xs tracking-widest font-light"
              style={{ color: "#1C2B3A", letterSpacing: "0.25em" }}
            >
              DYNAMICS
            </span>
          </div>
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-3 ml-auto">
          <button className="text-gray-600 hover:text-gray-900">
            <MapPin size={20} />
          </button>
          <Link href="/cart" className="relative text-gray-600 hover:text-gray-900">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span
                className="absolute -top-2 -right-2 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold"
                style={{ backgroundColor: "#E8611A" }}
              >
                {cartCount}
              </span>
            )}
          </Link>

          {/* My Account Dropdown */}
          <div
            className="relative hidden md:block"
            onMouseEnter={() => setAccountOpen(true)}
            onMouseLeave={() => setAccountOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-white text-sm px-3 py-1.5 rounded font-medium"
              style={{ backgroundColor: "#1C2B3A" }}
            >
              <User size={14} /> My Account <ChevronDown size={14} />
            </button>

            {accountOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white shadow-lg border border-gray-200 rounded-lg min-w-[220px] z-50 py-2">
                {/* Account Info */}
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-xs font-bold text-gray-800">John Whitfield</p>
                  <p className="text-xs text-gray-500">AgriCo Procurement Division</p>
                </div>
                {accountMenuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      <Icon size={15} className="text-gray-400" />
                      {item.label}
                    </Link>
                  );
                })}
                <div className="border-t border-gray-100 mt-2 pt-2">
                  <button className="w-full text-left px-4 py-2 text-xs text-gray-400 hover:bg-gray-50 hover:text-gray-600">
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            className="md:hidden text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Desktop Nav Links */}
      <nav className="hidden md:block border-b border-gray-200">
        <div className="px-8 flex items-center">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.mega && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={item.href || "#"}
                className="flex items-center gap-1 px-5 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap"
              >
                {item.label}
                {item.mega && <ChevronDown size={12} />}
              </Link>

              {/* Dropdown */}
              {item.mega && openMenu === item.label && (
                <div className="absolute top-full left-0 bg-white shadow-lg border border-gray-200 rounded-b min-w-[200px] z-50">
                  {item.mega.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Special Offers highlight in nav */}
          <Link
            href="/offers"
            className="ml-2 flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded"
            style={{ color: "#E8611A" }}
          >
            <Tag size={13} /> Special Offers
          </Link>
        </div>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href || "#"}
                className="block py-2 text-sm font-medium text-gray-700 border-b border-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.mega && (
                <div className="pl-4">
                  {item.mega.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block py-1.5 text-sm text-gray-500"
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Account Links */}
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">My Account</p>
            {accountMenuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-2 text-sm text-gray-700 border-b border-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}