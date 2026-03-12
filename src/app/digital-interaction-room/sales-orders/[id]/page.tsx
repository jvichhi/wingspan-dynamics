"use client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { ArrowLeft, Truck, Package, CheckCircle2, XCircle } from "lucide-react";
import { dirOrders } from "@/lib/mock-data/dir-orders";

const fmt = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2 });

const groupConfig: Record<string, { label: string; bg: string; text: string; dot: string; icon: React.ReactNode }> = {
  Processing: { label: "Processing", bg: "bg-gray-50", text: "text-gray-600", dot: "bg-orange-400", icon: <Package size={14} /> },
  Shipped: { label: "Shipped", bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500", icon: <Truck size={14} /> },
  Delivered: { label: "Delivered", bg: "bg-green-50", text: "text-green-700", dot: "bg-green-500", icon: <CheckCircle2 size={14} /> },
  Cancelled: { label: "Cancelled", bg: "bg-red-50", text: "text-red-600", dot: "bg-red-400", icon: <XCircle size={14} /> },
};

const statusBadge: Record<string, string> = {
  Shipped: "bg-blue-100 text-blue-700",
  "In Progress": "bg-orange-100 text-orange-600",
  Delivered: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-600",
};

export default function SalesOrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const order = dirOrders.find((o) => o.id === id);
  if (!order) notFound();

  const totalItems = order.groups.reduce((s, g) => s + g.items.reduce((ss, i) => ss + i.qty, 0), 0);

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      {/* Back */}
      <Link href="/digital-interaction-room/sales-orders" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 mb-5">
        <ArrowLeft size={14} /> Back to Sales Orders
      </Link>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-2">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-2xl font-bold" style={{ color: "#1C2B3A" }}>Order {order.displayId}</h1>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusBadge[order.status] ?? "bg-gray-100 text-gray-600"}`}>
            {order.status}
          </span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <button className="border border-gray-300 rounded-full px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50">Cancel Order</button>
          <button className="border border-gray-300 rounded-full px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50">Return Order</button>
          <button className="rounded-full px-4 py-2 text-xs font-semibold text-white" style={{ backgroundColor: "#1C2B3A" }}>Reorder</button>
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-5">Purchase Order Number: <span className="font-medium text-gray-700">{order.poNumber}</span></p>

      {/* Meta */}
      <div className="grid grid-cols-3 gap-6 mb-6 border-b border-gray-200 pb-5">
        <div>
          <p className="text-xs font-medium mb-0.5" style={{ color: "#E8611A" }}>Order Placed Date</p>
          <p className="text-sm text-gray-700">{order.placedDate}</p>
        </div>
        <div>
          <p className="text-xs font-medium mb-0.5" style={{ color: "#E8611A" }}>Method of Payment</p>
          <p className="text-sm text-gray-700">{order.paymentMethod}</p>
        </div>
        <div>
          <p className="text-xs font-medium mb-0.5" style={{ color: "#E8611A" }}>Cost Center</p>
          <p className="text-sm text-gray-700">{order.costCenter}</p>
        </div>
      </div>

      {/* Item groups */}
      <div className="flex flex-col gap-5 mb-8">
        {order.groups.map((group, gi) => {
          const cfg = groupConfig[group.status] ?? groupConfig.Processing;
          return (
            <div key={gi} className="border border-gray-200 rounded-xl overflow-hidden">
              {/* Group header */}
              <div className={`flex items-center justify-between px-5 py-3 ${cfg.bg}`}>
                <div className={`flex items-center gap-2 text-sm font-semibold ${cfg.text}`}>
                  {cfg.icon} {group.status}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">{group.dateLabel}</span>
                  <span className={`w-2.5 h-2.5 rounded-full ${cfg.dot}`} />
                </div>
              </div>

              {/* Column headers */}
              <div className="grid grid-cols-[1fr_120px_80px_100px] px-5 py-2 border-b border-gray-100 bg-white">
                <span className="text-xs font-semibold text-gray-500">Item</span>
                <span className="text-xs font-semibold text-gray-500 text-right">Item Price</span>
                <span className="text-xs font-semibold text-gray-500 text-center">Quantity</span>
                <span className="text-xs font-semibold text-gray-500 text-right">Total</span>
              </div>

              {/* Items */}
              {group.items.map((item) => (
                <div key={item.id} className="grid grid-cols-[1fr_120px_80px_100px] items-center px-5 py-4 border-b border-gray-50 last:border-b-0 bg-white">
                  <div className="flex items-start gap-3">
                    <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 relative border border-gray-100">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-600">{item.name}</p>
                      {item.attributes.map((a) => (
                        <p key={a.label} className="text-xs text-gray-500">
                          {a.label}: <span className="font-medium text-gray-600">{a.value}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 text-right">${fmt(item.unitPrice)}</p>
                  <p className="text-sm text-gray-700 text-center">{item.qty}</p>
                  <p className="text-sm font-semibold text-gray-800 text-right">${fmt(item.unitPrice * item.qty)}</p>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200 pt-6">
        {/* Shipped To */}
        <div>
          <p className="text-sm font-bold text-gray-800 mb-2">Shipped To</p>
          <p className="text-sm text-gray-500">{order.shippedTo.partner}</p>
          <p className="text-sm text-gray-700">{order.shippedTo.address1}</p>
          <p className="text-sm text-gray-700">{order.shippedTo.address2}</p>
          <p className="text-sm text-gray-700">{order.shippedTo.cityStateZip}</p>
          <p className="text-sm text-gray-500 mt-1">{order.shippedTo.phone}</p>
        </div>

        {/* Billed To */}
        <div>
          <p className="text-sm font-bold text-gray-800 mb-2">Billed To</p>
          <p className="text-sm text-gray-700 font-medium">{order.billedTo.company} – {order.billedTo.name}</p>
          <p className="text-sm text-gray-700">{order.billedTo.address1}</p>
          <p className="text-sm text-gray-700">{order.billedTo.address2}</p>
          <p className="text-sm text-gray-700">{order.billedTo.cityStateZip}</p>
          <p className="text-sm text-gray-500 mt-1">{order.billedTo.phone}</p>
        </div>

        {/* Order Summary */}
        <div>
          <p className="text-sm font-bold text-gray-800 mb-3">Order Summary</p>
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal ({totalItems} items)</span>
              <span>${fmt(order.subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Shipping</span>
              <span>{order.shipping === 0 ? "$0.00" : `$${fmt(order.shipping)}`}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Sales Tax</span>
              <span>${fmt(order.tax)}</span>
            </div>
            {order.savings > 0 && (
              <div className="flex justify-between text-sm font-medium text-red-500">
                <span>Total Savings</span>
                <span>-${fmt(order.savings)}</span>
              </div>
            )}
            <div className="flex justify-between text-base font-bold border-t border-gray-200 pt-2 mt-1" style={{ color: "#1C2B3A" }}>
              <span>Total</span>
              <span>${fmt(order.total)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}