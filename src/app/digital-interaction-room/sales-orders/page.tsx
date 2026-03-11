"use client";
import Image from "next/image";
import { useState } from "react";
import { Search, Filter, ChevronRight, Truck } from "lucide-react";

const orders = [
  {
    id: "#5432000128",
    date: "Jan 22, 2025",
    product: "SKYSTREAM Pro System 16 + Accessories",
    source: "Purchased Online",
    qty: 3,
    total: 16250.0,
    status: "Shipped",
    statusColor: "text-blue-600",
    delivery: "In Transit",
    deliveryNote: "First expected delivery: Jan 25, 2025",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=120&q=80",
  },
  {
    id: "#5432000127",
    date: "Jan 18, 2025",
    product: "SkyFlow Ranger 2000 - Commercial Unit",
    source: "Purchased Online",
    qty: 1,
    total: 24900.0,
    status: "In Progress",
    statusColor: "text-orange-500",
    delivery: null,
    deliveryNote: null,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=120&q=80",
  },
  {
    id: "#5432000126",
    date: "Jan 10, 2025",
    product: "Precision Elite Package + Flight Controller",
    source: "Purchased Online",
    qty: 2,
    total: 8750.0,
    status: "Delivered",
    statusColor: "text-gray-400",
    delivery: null,
    deliveryNote: null,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=120&q=80",
  },
  {
    id: "#5432789126",
    date: "Jan 5, 2025",
    product: "AirPatrol X8 Surveillance Bundle",
    source: "Purchased Online",
    qty: 4,
    total: 31200.0,
    status: "Delivered",
    statusColor: "text-gray-400",
    delivery: null,
    deliveryNote: null,
    image: "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=120&q=80",
  },
  {
    id: "#5432000125",
    date: "Dec 28, 2024",
    product: "SkyStream Industrial 5000 Fleet Kit",
    source: "Purchased Online",
    qty: 2,
    total: 42500.0,
    status: "Delivered",
    statusColor: "text-gray-400",
    delivery: null,
    deliveryNote: null,
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=120&q=80",
  },
];

const statusOptions = ["All Status", "Shipped", "In Progress", "Delivered"];

export default function SalesOrdersPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const filtered = orders.filter((o) => {
    const matchSearch =
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.product.toLowerCase().includes(search.toLowerCase());
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
        {filtered.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden"
          >
            {/* Order Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-700">Order ID:</span>
                <span className="text-sm font-bold text-blue-600">{order.id}</span>
                <span className="text-xs text-gray-400">Order Date: {order.date}</span>
              </div>
              <span className={`text-sm font-semibold ${order.statusColor}`}>
                {order.status}
              </span>
            </div>

            {/* Order Body */}
            <div className="px-5 py-4 flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative border border-gray-100">
                <Image
                  src={order.image}
                  alt={order.product}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-800">{order.product}</p>
                <p className="text-xs text-gray-400 mt-0.5">{order.source}</p>
                <p className="text-xs text-gray-400">
                  Ordered Item <span className="font-semibold text-gray-700">{order.qty}</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-base font-bold" style={{ color: "#1C2B3A" }}>
                  ${order.total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </p>
                <button className="text-xs text-blue-600 hover:underline flex items-center gap-1 ml-auto mt-1">
                  View Details <ChevronRight size={12} />
                </button>
              </div>
            </div>

            {/* Delivery Banner */}
            {order.delivery && (
              <div className="mx-5 mb-4 flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-lg px-4 py-2.5">
                <Truck size={16} className="text-blue-500 flex-shrink-0" />
                <span className="text-xs font-semibold text-blue-700">{order.delivery}</span>
                <span className="text-xs text-gray-500">{order.deliveryNote}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}