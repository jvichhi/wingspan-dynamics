"use client";
import Image from "next/image";
import { useState } from "react";
import { Search, Wrench, AlertCircle, CheckCircle2, Clock } from "lucide-react";

const equipment = [
  {
    id: "DRN-2025-001",
    name: "SkyStream Pro X840",
    model: "Pro X840",
    serial: "SN-84021-X",
    location: "Site A – Hangar 3",
    nextService: "Feb 15, 2025",
    flightHours: 142,
    status: "Operational",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=200&q=80",
  },
  {
    id: "DRN-2025-002",
    name: "SkyFlow Ranger 2000",
    model: "Ranger 2000",
    serial: "SN-20034-R",
    location: "Site B – Field Station",
    nextService: "Jan 25, 2025",
    flightHours: 187,
    status: "Service Due",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=200&q=80",
  },
  {
    id: "DRN-2025-003",
    name: "AirPatrol X8 Unit",
    model: "X8 Surveillance",
    serial: "SN-X8091-A",
    location: "Site C – Command Center",
    nextService: "Mar 10, 2025",
    flightHours: 98,
    status: "Operational",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&q=80",
  },
  {
    id: "DRN-2024-009",
    name: "SkyStream Voyager X 3000",
    model: "Voyager X 3000",
    serial: "SN-30078-V",
    location: "Site A – Hangar 1",
    nextService: "Jan 30, 2025",
    flightHours: 215,
    status: "Under Maintenance",
    image: "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=200&q=80",
  },
  {
    id: "DRN-2024-007",
    name: "Precision Elite X7 Pro",
    model: "Elite X7 Pro",
    serial: "SN-X7043-P",
    location: "Site D – Warehouse",
    nextService: "Apr 5, 2025",
    flightHours: 55,
    status: "Operational",
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=200&q=80",
  },
];

function StatusBadge({ status }: { status: string }) {
  if (status === "Operational")
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 border border-green-200 rounded-full px-2.5 py-0.5">
        <CheckCircle2 size={12} /> Operational
      </span>
    );
  if (status === "Service Due")
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-orange-500 bg-orange-50 border border-orange-200 rounded-full px-2.5 py-0.5">
        <AlertCircle size={12} /> Service Due
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-2.5 py-0.5">
      <Clock size={12} /> Under Maintenance
    </span>
  );
}

export default function EquipmentPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const filtered = equipment.filter((e) => {
    const ms =
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.serial.toLowerCase().includes(search.toLowerCase()) ||
      e.location.toLowerCase().includes(search.toLowerCase());
    const mf = statusFilter === "All Status" || e.status === statusFilter;
    return ms && mf;
  });

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-1" style={{ color: "#1C2B3A" }}>
        Equipment
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        Monitor your drone fleet status and upcoming maintenance schedules
      </p>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="flex-1 relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search equipment..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-gray-500 bg-white"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none bg-white min-w-[200px]"
        >
          {["All Status", "Operational", "Service Due", "Under Maintenance"].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {filtered.map((eq) => (
          <div
            key={eq.id}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative h-44">
              <Image src={eq.image} alt={eq.name} fill className="object-cover" />
              <div className="absolute top-3 right-3">
                <StatusBadge status={eq.status} />
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm font-bold mb-0.5" style={{ color: "#1C2B3A" }}>
                {eq.name}
              </p>
              <p className="text-xs text-gray-400 mb-3">{eq.id} · {eq.serial}</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="text-xs font-medium text-gray-700">{eq.location}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Flight Hours</p>
                  <p className="text-xs font-medium text-gray-700">{eq.flightHours} hrs</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Next Service</p>
                  <p
                    className={`text-xs font-semibold ${
                      eq.status === "Service Due" ? "text-orange-500" : "text-gray-700"
                    }`}
                  >
                    {eq.nextService}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-1.5 border border-gray-300 rounded-lg py-2 text-xs font-medium text-gray-700 hover:bg-gray-50">
                  View Details
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold text-white" style={{ backgroundColor: "#1C2B3A" }}>
                  <Wrench size={12} /> Schedule Service
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}