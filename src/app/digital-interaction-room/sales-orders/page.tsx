"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Search, Filter, ChevronRight, Truck } from "lucide-react";
import { dirOrders } from "@/lib/mock-data/dir-orders";

const statusColorMap: Record<string, string> = {
  Shipped: "text-blue-600",
  "In Progress": "text-orange-500",
  Delivered: "text-gray-400",
  Cancelled: "text-red-500",
};

const statusOptions = ["All Status", "Shipped", "In Progress", "Delivered", "Cancelled"];

export default function SalesOrdersPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const filtered = dirOrders.filter((o) => {
    const matchSearch =
      o.displayId.toLowerCase().includes(search.toLowerCase()) ||
      o.groups.some((g) => g.items.some((i) => i.name.toLowerCase().includes(search.toLowerCase())));
    const matchStatus = statusFilter === "All Status" || o.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-1" style={{ color: "#1C2B3A" }}>
        Sales Orders
      </h1>
      <p className="text-sm text-gray-500 mb-6">Manage your drone fleet orders and track deliveries</p>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="flex-1 relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search orders..."
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
          {statusOptions.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <select className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gray-500 bg-white min-w-[160px]">
          <option>Order Date</option>
          <option>Oldest First</option>
          <option>Newest First</option>
        </select>
        <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 bg-white">
          <Filter size={14} /> More Filters
        </button>
      </div>

      {/* Order List */}
      <div className="flex flex-col gap-4">
        {filtered.map((order) => {
          const firstItem = order.groups[0]?.items[0];
          const totalQty = order.groups.reduce((s, g) => s + g.items.reduce((ss, i) => ss + i.qty, 0), 0);
          const shipGroup = order.groups.find((g) => g.status === "Shipped");

          return (
            <div key={order.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {/* Order Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-gray-700">Order ID:</span>
                  <span className="text-sm font-bold text-blue-600">{order.displayId}</span>
                  <span className="text-xs text-gray-400">Order Date: {order.placedDate}</span>
                </div>
                <span className={`text-sm font-semibold ${statusColorMap[order.status] ?? "text-gray-500"}`}>
                  {order.status}
                </span>
              </div>

              {/* Order Body */}
              <div className="px-5 py-4 flex items-start gap-4">
                {firstItem && (
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative border border-gray-100">
                    <Image src={firstItem.image} alt={firstItem.name} fill className="object-cover" />
                  </div>
                )}
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-800">
                    {firstItem?.name ?? "—"}
                    {order.groups.reduce((s, g) => s + g.items.length, 0) > 1 &&
                      ` + ${order.groups.reduce((s, g) => s + g.items.length, 0) - 1} more`}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{order.groups[0]?.items[0]?.attributes[0]?.value ?? "Purchased Online"}</p>
                  <p className="text-xs text-gray-400">
                    Ordered Items: <span className="font-semibold text-gray-700">{totalQty}</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-base font-bold" style={{ color: "#1C2B3A" }}>
                    ${order.total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </p>
                  <Link
                    href={`/digital-interaction-room/sales-orders/${order.id}`}
                    className="text-xs text-blue-600 hover:underline flex items-center gap-1 ml-auto mt-1 justify-end"
                  >
                    View Details <ChevronRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Delivery Banner */}
              {shipGroup && (
                <div className="mx-5 mb-4 flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-lg px-4 py-2.5">
                  <Truck size={16} className="text-blue-500 flex-shrink-0" />
                  <span className="text-xs font-semibold text-blue-700">In Transit</span>
                  <span className="text-xs text-gray-500">{shipGroup.dateLabel}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}