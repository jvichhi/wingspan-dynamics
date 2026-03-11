import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  CreditCard,
  Ticket,
  Wrench,
  FileSignature,
  ChevronRight,
  Download,
  Bell,
  AlertCircle,
  CheckCircle2,
  FileText,
} from "lucide-react";

const statCards = [
  {
    icon: ShoppingBag,
    value: "18",
    sub: "+3 this week",
    label: "Open Orders",
    color: "#1C2B3A",
  },
  {
    icon: CreditCard,
    value: "$62,450",
    sub: "7 invoices due",
    subColor: "text-red-500",
    label: "Pending Payments",
    color: "#1C2B3A",
  },
  {
    icon: Ticket,
    value: "12",
    sub: "5 urgent",
    label: "Active Tickets",
    color: "#1C2B3A",
  },
  {
    icon: Wrench,
    value: "3",
    sub: "next 30 days",
    label: "Drone Maintenance",
    color: "#1C2B3A",
  },
  {
    icon: FileSignature,
    value: "3",
    sub: "next 30 days",
    label: "Contracts",
    color: "#1C2B3A",
  },
];

const notifications = [
  {
    title: "Ticket #RF-12345 updated",
    description: 'Battery calibration status changed to "In Progress"',
    time: "2 hours ago",
    icon: AlertCircle,
    iconColor: "text-orange-400",
    unread: true,
  },
  {
    title: "Order #5432000123 shipped",
    description: "Your drone fleet order is on the way. Expected delivery: Jan 25",
    time: "2 hours ago",
    icon: CheckCircle2,
    iconColor: "text-green-500",
    unread: false,
  },
  {
    title: "Maintenance reminder",
    description: "SkyStream Voyager X 3000 maintenance due in 10 days",
    time: "5 hours ago",
    icon: Wrench,
    iconColor: "text-blue-500",
    unread: false,
  },
  {
    title: "Invoice overdue",
    description: "Invoice ID #0094287959 is overdue. Amount: $32,450.00",
    time: "1 day ago",
    icon: AlertCircle,
    iconColor: "text-red-500",
    unread: true,
  },
  {
    title: "Order #5432000129 shipped",
    description: "Your drone fleet order is on the way. Expected delivery: Jan 25",
    time: "2 hours ago",
    icon: CheckCircle2,
    iconColor: "text-green-500",
    unread: false,
  },
];

const faqs = [
  {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=120&q=80",
    question: "How do I track my drone fleet order?",
    answer:
      "Go to Purchase Orders section, select your order, and click on tracking to view real-time status information and delivery",
  },
  {
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=120&q=80",
    question: "What is the warranty period for drones?",
    answer:
      "Standard warranty is 36 months from delivery date. Extended warranties and maintenance plans are available.",
  },
  {
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=120&q=80",
    question: "How do I request a return or exchange?",
    answer:
      "Go to Returns section, select your order, and follow the return request process. Returns are accepted within 30 days.",
  },
  {
    image: "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=120&q=80",
    question: "How often should drones be serviced?",
    answer:
      "We recommend servicing every 6 months or after 200 flight hours, whichever comes first.",
  },
];

const recentDocuments = [
  { name: "SkyStream Pro X840 User Manual", size: "8.8 MB", date: "12/24/2025" },
  { name: "Maintenance Schedule 2026", size: "1.2 MB", date: "01/05/2026" },
  { name: "Drone Fleet Catalog 2026", size: "15.8 MB", date: "01/01/2026" },
  { name: "Enterprise Systems Catalog 2026", size: "15.8 MB", date: "01/01/2026" },
  { name: "Flight Operations Catalog 2026", size: "15.8 MB", date: "01/01/2026" },
];

export default function DigitalInteractionRoomDashboard() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1400&q=80"
          alt="Aerial facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative h-full flex flex-col justify-center px-10">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome back, John</h1>
          <div className="w-12 h-0.5 bg-white mb-4" />
          <p className="text-gray-200 text-base font-medium">
            Wingspan Dynamics — Digital Interaction Room
          </p>
          <p className="text-gray-300 text-sm mt-1">
            Manage your drone fleet orders, track shipments, and monitor equipment status
          </p>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10 mb-10">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 grid grid-cols-2 md:grid-cols-5 divide-x divide-gray-100">
          {statCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.label} className="flex items-center gap-3 px-5 py-5">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-gray-100">
                  <Icon size={20} style={{ color: card.color }} />
                </div>
                <div>
                  <div className="text-xl font-bold" style={{ color: "#1C2B3A" }}>
                    {card.value}
                  </div>
                  {card.sub && (
                    <div className={`text-xs ${card.subColor ?? "text-gray-400"}`}>
                      {card.sub}
                    </div>
                  )}
                  <div className="text-xs text-gray-500 mt-0.5">{card.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Latest News */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold" style={{ color: "#1C2B3A" }}>
                Latest News &amp; Guides
              </h2>
              <Link
                href="#"
                className="text-sm text-blue-600 hover:underline flex items-center gap-1"
              >
                View More <ChevronRight size={14} />
              </Link>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="relative h-52">
                <Image
                  src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=700&q=80"
                  alt="Drone in field"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-7 h-7 rounded-full bg-gray-200 overflow-hidden relative flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&q=80"
                      alt="Author"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700">John Doe</span>
                  <span className="text-xs text-gray-400 ml-auto">Jan 10, 2025</span>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded font-medium">
                    News
                  </span>
                </div>
                <h3 className="font-bold text-sm mb-1" style={{ color: "#1C2B3A" }}>
                  Fleet Expansion: What to Consider
                </h3>
                <p className="text-xs text-gray-500 mb-3">
                  Don't let outdated equipment limit your operations—upgrade for better performance.
                </p>
                <Link
                  href="#"
                  className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
                >
                  Read more <ChevronRight size={12} />
                </Link>
              </div>
            </div>
          </div>

          {/* Recent Notifications */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold" style={{ color: "#1C2B3A" }}>
                Recent Notifications
              </h2>
              <div className="flex items-center gap-3">
                <button className="text-xs text-blue-600 hover:underline">
                  Mark all as read
                </button>
                <Link
                  href="#"
                  className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                >
                  View All <ChevronRight size={12} />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {notifications.map((n, i) => {
                const Icon = n.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-lg border border-gray-200 px-4 py-3"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                        {n.title}
                        {n.unread && (
                          <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                        )}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon size={15} className={`mt-0.5 flex-shrink-0 ${n.iconColor}`} />
                      <div>
                        <p className="text-xs text-gray-600">{n.description}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{n.time}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* FAQs + Recent Documents */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* FAQs */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold" style={{ color: "#1C2B3A" }}>
                Frequently Asked Questions
              </h2>
              <Link
                href="#"
                className="text-sm text-blue-600 hover:underline flex items-center gap-1"
              >
                View all FAQs <ChevronRight size={14} />
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="flex gap-4 bg-white rounded-lg border border-gray-200 p-4"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                    <Image
                      src={faq.image}
                      alt={faq.question}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1" style={{ color: "#1C2B3A" }}>
                      {faq.question}
                    </h4>
                    <p className="text-xs text-gray-500 mb-2">{faq.answer}</p>
                    <Link
                      href="#"
                      className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
                    >
                      Read more <ChevronRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Documents */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold" style={{ color: "#1C2B3A" }}>
                Recent Documents
              </h2>
              <Link
                href="/digital-interaction-room/documents"
                className="text-sm text-blue-600 hover:underline flex items-center gap-1"
              >
                View All Documents <ChevronRight size={14} />
              </Link>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="divide-y divide-gray-100">
                {recentDocuments.map((doc, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <FileText size={16} className="text-gray-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate">{doc.name}</p>
                      <p className="text-xs text-gray-400">
                        PDF • {doc.size} • {doc.date}
                      </p>
                    </div>
                    <button className="text-gray-400 hover:text-blue-600 transition-colors flex-shrink-0">
                      <Download size={16} />
                    </button>
                  </div>
                ))}
              </div>
              <div className="px-4 py-3 border-t border-gray-100">
                <Link
                  href="/digital-interaction-room/documents"
                  className="w-full flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition-colors"
                >
                  Browse Document Library
                </Link>
              </div>
            </div>

            {/* Notification Bell */}
            <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Bell size={18} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800">Stay up to date</p>
                <p className="text-xs text-gray-500">
                  Enable notifications to receive order updates, maintenance alerts, and contract reminders.
                </p>
              </div>
              <button className="text-xs font-semibold text-blue-600 hover:underline whitespace-nowrap">
                Enable
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}