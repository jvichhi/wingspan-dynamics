"use client";
import { useState } from "react";
import { Search, Plus, AlertCircle, CheckCircle2, Clock, Wrench } from "lucide-react";

const tickets = [
  {
    id: "SVC-2025-0041",
    title: "Motor Assembly Replacement – SkyStream Pro X840",
    equipment: "DRN-2025-001",
    assigned: "Tech Team Alpha",
    opened: "Jan 21, 2025",
    updated: "Jan 22, 2025",
    priority: "High",
    status: "In Progress",
  },
  {
    id: "SVC-2025-0038",
    title: "Camera Module Recalibration – AirPatrol X8",
    equipment: "DRN-2025-003",
    assigned: "Tech Team Beta",
    opened: "Jan 14, 2025",
    updated: "Jan 18, 2025",
    priority: "Medium",
    status: "Awaiting Parts",
  },
  {
    id: "SVC-2025-0030",
    title: "Battery Pack Replacement – SkyStream Industrial 5000",
    equipment: "DRN-2024-009",
    assigned: "Field Services",
    opened: "Jan 7, 2025",
    updated: "Jan 20, 2025",
    priority: "Critical",
    status: "In Progress",
  },
  {
    id: "SVC-2025-0025",
    title: "Routine 500hr Inspection – SkyFlow Ranger 2000",
    equipment: "DRN-2025-002",
    assigned: "Tech Team Alpha",
    opened: "Jan 3, 2025",
    updated: "Jan 10, 2025",
    priority: "Low",
    status: "Resolved",
  },
  {
    id: "SVC-2024-0199",
    title: "Firmware Update & GPS Calibration – Precision Elite X7",
    equipment: "DRN-2024-007",
    assigned: "Tech Team Beta",
    opened: "Dec 20, 2024",
    updated: "Dec 28, 2024",
    priority: "Low",
    status: "Resolved",
  },
];

function PriorityBadge({ priority }: { priority: string }) {
  const cfg: Record<string, string> = {
    Critical: "text-red-600 bg-red-50 border-red-200",
    High: "text-orange-500 bg-orange-50 border-orange-200",
    Medium: "text-yellow-600 bg-yellow-50 border-yellow-200",
    Low: "text-gray-500 bg-gray-50 border-gray-200",
  };
  return (
    <span className={`inline-flex items-center text-xs font-medium border rounded-full px-2 py-0.5 ${cfg[priority] ?? cfg["Low"]}`}>
      {priority}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  if (status === "Resolved")
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 border border-green-200 rounded-full px-2.5 py-0.5">
        <CheckCircle2 size={12} /> Resolved
      </span>
    );
  if (status === "In Progress")
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-2.5 py-0.5">
        <Wrench size={12} /> In Progress
      </span>
    );
  if (status === "Awaiting Parts")
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-orange-500 bg-orange-50 border border-orange-200 rounded-full px-2.5 py-0.5">
        <Clock size={12} /> Awaiting Parts
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 bg-gray-50 border border-gray-200 rounded-full px-2.5 py-0.5">
      <AlertCircle size={12} /> {status}
    </span>
  );
}

export default function ServiceTicketsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const filtered = tickets.filter((t) => {
    const ms =
      t.id.toLowerCase().includes(search.toLowerCase()) ||
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.equipment.toLowerCase().includes(search.toLowerCase());
    const mf = statusFilter === "All Status" || t.status === statusFilter;
    return ms && mf;
  });

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-1" style={{ color: "#1C2B3A" }}>
        Service Tickets
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        Track open and resolved maintenance service requests
      </p>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="flex-1 relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search tickets..."
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
          {["All Status", "In Progress", "Awaiting Parts", "Resolved"].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <button
          className="flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap"
          style={{ backgroundColor: "#1C2B3A" }}
        >
          <Plus size={15} /> New Ticket
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {filtered.map((t) => (
          <div key={t.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="flex items-start justify-between px-5 py-4 border-b border-gray-100">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-gray-400">{t.id}</span>
                  <PriorityBadge priority={t.priority} />
                </div>
                <p className="text-sm font-bold text-gray-800">{t.title}</p>
              </div>
              <StatusBadge status={t.status} />
            </div>
            <div className="px-5 py-3 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Equipment ID</p>
                <p className="text-xs font-medium text-gray-700">{t.equipment}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Assigned To</p>
                <p className="text-xs font-medium text-gray-700">{t.assigned}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Opened</p>
                <p className="text-xs font-medium text-gray-700">{t.opened}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Last Updated</p>
                <p className="text-xs font-medium text-gray-700">{t.updated}</p>
              </div>
            </div>
            <div className="px-5 py-3 border-t border-gray-100 flex justify-end gap-2">
              <button className="border border-gray-300 rounded-full px-4 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
                View Details
              </button>
              {t.status !== "Resolved" && (
                <button
                  className="rounded-full px-4 py-1.5 text-xs font-semibold text-white"
                  style={{ backgroundColor: "#E8611A" }}
                >
                  Update Status
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}