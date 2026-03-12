"use client";
import Link from "next/link";
import { useState } from "react";
import { Search, Download, FileSignature, AlertCircle, CheckCircle2, Clock, ChevronRight } from "lucide-react";
import { dirContracts } from "@/lib/mock-data/dir-contracts";

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { color: string; icon: React.ReactNode }> = {
    Active: { color: "text-green-600 bg-green-50 border-green-200", icon: <CheckCircle2 size={12} /> },
    "Pending Signature": { color: "text-orange-500 bg-orange-50 border-orange-200", icon: <Clock size={12} /> },
    "Expiring Soon": { color: "text-yellow-600 bg-yellow-50 border-yellow-200", icon: <AlertCircle size={12} /> },
    Expired: { color: "text-gray-400 bg-gray-50 border-gray-200", icon: <AlertCircle size={12} /> },
  };
  const cfg = map[status] ?? map["Expired"];
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-medium border rounded-full px-2.5 py-0.5 ${cfg.color}`}>
      {cfg.icon} {status}
    </span>
  );
}

export default function SalesContractsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const filtered = dirContracts.filter((c) => {
    const ms =
      c.id.toLowerCase().includes(search.toLowerCase()) ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.customer.toLowerCase().includes(search.toLowerCase());
    const mf = statusFilter === "All Status" || c.status === statusFilter;
    return ms && mf;
  });

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-1" style={{ color: "#1C2B3A" }}>
        Sales Contracts
      </h1>
      <p className="text-sm text-gray-500 mb-6">Review and manage your active and pending contracts</p>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="flex-1 relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search contracts..."
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
          {["All Status", "Active", "Pending Signature", "Expiring Soon", "Expired"].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-4">
        {filtered.map((c) => (
          <div key={c.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="flex items-start justify-between px-5 py-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <FileSignature size={18} style={{ color: "#1C2B3A" }} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">{c.title}</p>
                  <p className="text-xs text-gray-400">{c.id}</p>
                </div>
              </div>
              <StatusBadge status={c.status} />
            </div>

            <div className="px-5 py-4 flex flex-col md:flex-row md:items-center gap-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2 flex-1">
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Customer</p>
                  <p className="text-sm text-gray-700 font-medium">{c.customer}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Start Date</p>
                  <p className="text-sm text-gray-700 font-medium">{c.start}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">End Date</p>
                  <p className="text-sm text-gray-700 font-medium">{c.end}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Contract Value</p>
                  <p className="text-sm font-bold" style={{ color: "#1C2B3A" }}>
                    ${c.value.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button className="flex items-center gap-1.5 border border-gray-300 rounded-full px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50">
                  <Download size={13} /> Download
                </button>
                {c.status === "Pending Signature" && (
                  <button
                    className="rounded-full px-4 py-2 text-xs font-semibold text-white"
                    style={{ backgroundColor: "#E8611A" }}
                  >
                    Sign Now
                  </button>
                )}
                {c.status === "Expiring Soon" && (
                  <button
                    className="rounded-full px-4 py-2 text-xs font-semibold text-white"
                    style={{ backgroundColor: "#1C2B3A" }}
                  >
                    Renew
                  </button>
                )}
                <Link
                  href={`/digital-interaction-room/sales-contracts/${c.id}`}
                  className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline font-medium"
                >
                  View Details <ChevronRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}