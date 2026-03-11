"use client";
import { useState } from "react";
import { Search, Filter, Download, AlertCircle, CheckCircle2, Clock } from "lucide-react";

const invoices = [
  {
    id: "#009000000",
    status: "Overdue",
    orderNum: "#5432000128",
    shipTo: "AeroLogistics International",
    issueDate: "Jan 22, 2025",
    dueDate: "May 15, 2025",
    dueDateColor: "text-red-500",
    amount: 16250.0,
    actions: ["dispute", "download", "pay"],
  },
  {
    id: "#0094999999",
    status: "Pending",
    orderNum: "#5432000127",
    shipTo: "SkyInspect Solutions Inc.",
    issueDate: "Jan 18, 2025",
    dueDate: "Feb 18, 2025",
    dueDateColor: "text-gray-700",
    amount: 24900.0,
    actions: ["dispute", "download", "pay"],
  },
  {
    id: "#0094987999",
    status: "Paid",
    orderNum: "#5432000126",
    shipTo: "Federal Infrastructure Bureau",
    issueDate: "Jan 10, 2025",
    dueDate: "Feb 10, 2025",
    dueDateColor: "text-gray-700",
    amount: 8750.0,
    actions: ["download"],
  },
  {
    id: "#0094987959",
    status: "Paid",
    orderNum: "#5432789126",
    shipTo: "Industrial Patrol Systems",
    issueDate: "Jan 5, 2025",
    dueDate: "Feb 5, 2025",
    dueDateColor: "text-gray-700",
    amount: 1250.0,
    actions: ["download"],
  },
  {
    id: "#0094287959",
    status: "Pending",
    orderNum: "#5432000125",
    shipTo: "Northern Grid Authority",
    issueDate: "Dec 28, 2024",
    dueDate: "Jan 28, 2025",
    dueDateColor: "text-gray-700",
    amount: 32500.0,
    actions: ["dispute", "download", "pay"],
  },
];

function StatusBadge({ status }: { status: string }) {
  if (status === "Overdue")
    return (
      <span className="flex items-center gap-1 text-xs text-red-500 font-medium">
        <AlertCircle size={13} /> Overdue
      </span>
    );
  if (status === "Pending")
    return (
      <span className="flex items-center gap-1 text-xs text-orange-500 font-medium">
        <Clock size={13} /> Pending
      </span>
    );
  return (
    <span className="flex items-center gap-1 text-xs text-green-600 font-medium">
      <CheckCircle2 size={13} /> Paid
    </span>
  );
}

export default function InvoicesPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const filtered = invoices.filter((inv) => {
    const matchSearch =
      inv.id.toLowerCase().includes(search.toLowerCase()) ||
      inv.shipTo.toLowerCase().includes(search.toLowerCase()) ||
      inv.orderNum.toLowerCase().includes(search.toLowerCase());
    const matchStatus =
      statusFilter === "All Status" || inv.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-1" style={{ color: "#1C2B3A" }}>
        Invoices
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        Manage your drone fleet orders and track deliveries
      </p>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="flex-1 relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search invoices..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-gray-500 bg-white"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gray-500 bg-white min-w-[160px]"
        >
          {["All Status", "Overdue", "Pending", "Paid"].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <select className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gray-500 bg-white min-w-[160px]">
          <option>Invoice Date</option>
          <option>Oldest First</option>
          <option>Newest First</option>
        </select>
        <select className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gray-500 bg-white min-w-[160px]">
          <option>Order Number</option>
        </select>
        <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 bg-white whitespace-nowrap">
          <Filter size={14} /> More Filters
        </button>
      </div>

      {/* Invoice List */}
      <div className="flex flex-col gap-4">
        {filtered.map((inv) => (
          <div
            key={inv.id}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden"
          >
            {/* Invoice Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-700">Invoice ID</span>
                <span className="text-sm font-bold text-blue-600">{inv.id}</span>
                <StatusBadge status={inv.status} />
              </div>
              <span className="text-lg font-bold" style={{ color: "#1C2B3A" }}>
                ${inv.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </div>

            {/* Invoice Details */}
            <div className="px-5 py-4 flex flex-col md:flex-row md:items-center gap-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2 flex-1">
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Order Number</p>
                  <p className="text-sm text-gray-700 font-medium">{inv.orderNum}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Ship To</p>
                  <p className="text-sm text-gray-700 font-medium">{inv.shipTo}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Issue Date</p>
                  <p className="text-sm text-gray-700 font-medium">{inv.issueDate}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Due Date</p>
                  <p className={`text-sm font-semibold ${inv.dueDateColor}`}>{inv.dueDate}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 flex-shrink-0">
                {inv.actions.includes("dispute") && (
                  <button className="flex items-center gap-1.5 border border-gray-300 rounded-full px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    <AlertCircle size={13} /> Dispute
                  </button>
                )}
                {inv.actions.includes("download") && (
                  <button className="flex items-center gap-1.5 border border-gray-300 rounded-full px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    <Download size={13} /> Download
                  </button>
                )}
                {inv.actions.includes("pay") && (
                  <button
                    className="flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-white transition-colors"
                    style={{ backgroundColor: "#1C2B3A" }}
                  >
                    Pay Now
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