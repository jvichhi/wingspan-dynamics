"use client";
import Image from "next/image";
import { useState } from "react";
import { Search, PackageX, AlertCircle, CheckCircle2, Clock, RefreshCw } from "lucide-react";

const returns = [
  {
    id: "RET-2025-0018",
    orderNum: "#5432000121",
    product: "SkyStream Pro X840 — Unit #3",
    reason: "Defective motor assembly on arrival",
    date: "Jan 20, 2025",
    refund: 5416.67,
    status: "Approved",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=120&q=80",
  },
  {
    id: "RET-2025-0014",
    orderNum: "#5432000118",
    product: "AirPatrol X8 Surveillance Unit",
    reason: "Camera calibration failure",
    date: "Jan 12, 2025",
    refund: 7800.0,
    status: "Under Review",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=120&q=80",
  },
  {
    id: "RET-2025-0009",
    orderNum: "#5432000113",
    product: "Precision Elite Package + Flight Controller",
    reason: "Wrong item shipped",
    date: "Jan 5, 2025",
    refund: 4375.0,
    status: "Refunded",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=120&q=80",
  },
  {
    id: "RET-2024-0097",
    orderNum: "#5432000105",
    product: "SkyFlow Ranger 2000 Commercial Unit",
    reason: "Customer changed order",
    date: "Dec 18, 2024",
    refund: 24900.0,
    status: "Rejected",
    image: "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=120&q=80",
  },
  {
    id: "RET-2024-0089",
    orderNum: "#5432000099",
    product: "SkyStream Industrial 5000 Fleet Kit",
    reason: "Battery pack damaged in transit",
    date: "Dec 5, 2024",
    refund: 21250.0,
    status: "Approved",
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=120&q=80",
  },
];

function StatusBadge({ status }: { status: string }) {
  const cfg: Record<string, string> = {
    Approved: "text-green-600 bg-green-50 border-green-200",
    "Under Review": "text-orange-500 bg-orange-50 border-orange-200",
    Refunded: "text-blue-600 bg-blue-50 border-blue-200",
    Rejected: "text-red-500 bg-red-50 border-red-200",
  };
  const icons: Record<string, React.ReactNode> = {
    Approved: <CheckCircle2 size={12} />,
    "Under Review": <Clock size={12} />,
    Refunded: <RefreshCw size={12} />,
    Rejected: <AlertCircle size={12} />,
  };
  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-medium border rounded-full px-2.5 py-0.5 ${cfg[status] ?? cfg["Rejected"]}`}
    >
      {icons[status]} {status}
    </span>
  );
}

export default function CustomerReturnsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const filtered = returns.filter((r) => {
    const ms =
      r.id.toLowerCase().includes(search.toLowerCase()) ||
      r.product.toLowerCase().includes(search.toLowerCase()) ||
      r.orderNum.toLowerCase().includes(search.toLowerCase());
    const mf = statusFilter === "All Status" || r.status === statusFilter;
    return ms && mf;
  });

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-1" style={{ color: "#1C2B3A" }}>
        Customer Returns
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        Track your return requests and refund status
      </p>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="flex-1 relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search returns..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-gray-500 bg-white"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none bg-white min-w-[180px]"
        >
          {["All Status", "Approved", "Under Review", "Refunded", "Rejected"].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <button
          className="flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap"
          style={{ backgroundColor: "#1C2B3A" }}
        >
          <PackageX size={15} /> New Return Request
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {filtered.map((r) => (
          <div key={r.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-700">Return ID:</span>
                <span className="text-sm font-bold text-blue-600">{r.id}</span>
                <span className="text-xs text-gray-400">Order: {r.orderNum}</span>
              </div>
              <StatusBadge status={r.status} />
            </div>

            {/* Body */}
            <div className="px-5 py-4 flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative border border-gray-100">
                <Image src={r.image} alt={r.product} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-800">{r.product}</p>
                <p className="text-xs text-gray-400 mt-0.5">Reason: {r.reason}</p>
                <p className="text-xs text-gray-400 mt-0.5">Submitted: {r.date}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-xs text-gray-400 mb-0.5">Refund Amount</p>
                <p className="text-base font-bold" style={{ color: "#1C2B3A" }}>
                  ${r.refund.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </p>
                {r.status === "Under Review" && (
                  <button className="mt-2 text-xs text-blue-600 hover:underline">
                    View Status
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}