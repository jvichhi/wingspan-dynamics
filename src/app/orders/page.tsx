import Link from "next/link";
import { mockOrders } from "@/lib/mock-data/orders";
import { formatPrice } from "@/components/ui/ProductCard";
import { Package } from "lucide-react";

const statusColor: Record<string, { bg: string; text: string }> = {
  "Order Received": { bg: "#dbeafe", text: "#1d4ed8" },
  Processing: { bg: "#fef9c3", text: "#a16207" },
  Shipped: { bg: "#dcfce7", text: "#15803d" },
  Delivered: { bg: "#d1fae5", text: "#065f46" },
  Cancelled: { bg: "#fee2e2", text: "#b91c1c" },
};

// Generate a richer set of mock orders for the list view
const allOrders = [
  ...mockOrders,
  {
    id: "ord-0000000002",
    orderNumber: "0000000002",
    purchaseOrderNumber: "0000076522",
    placedDate: "February 14, 2026",
    status: "Delivered",
    paymentMethod: "Account",
    items: [
      { name: "FieldMapper H10", quantity: 2 },
      { name: "I37 IntelliMax Drone Battery", quantity: 4 },
    ],
    subtotal: 31700,
    total: 33285,
    totalSavings: 1200,
  },
  {
    id: "ord-0000000003",
    orderNumber: "0000000003",
    purchaseOrderNumber: "0000075890",
    placedDate: "January 3, 2026",
    status: "Delivered",
    paymentMethod: "Visa ••••3015",
    items: [
      { name: "Sgrx 310 Controller", quantity: 5 },
      { name: "Propeller Replacement Kit", quantity: 10 },
    ],
    subtotal: 17200,
    total: 18932,
    totalSavings: 580,
  },
  {
    id: "ord-0000000004",
    orderNumber: "0000000004",
    purchaseOrderNumber: "0000074100",
    placedDate: "December 10, 2025",
    status: "Delivered",
    paymentMethod: "Account",
    items: [{ name: "Agri T15 Sprayer", quantity: 3 }],
    subtotal: 121350,
    total: 133485,
    totalSavings: 5220,
  },
  {
    id: "ord-0000000005",
    orderNumber: "0000000005",
    purchaseOrderNumber: "0000073001",
    placedDate: "November 22, 2025",
    status: "Shipped",
    paymentMethod: "Account",
    items: [
      { name: "Agri T15 Irrigation Set", quantity: 2 },
      { name: "High-Capacity Spray Tank", quantity: 5 },
    ],
    subtotal: 170000,
    total: 187000,
    totalSavings: 8500,
  },
];

export default function OrderHistoryPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <nav className="text-xs text-gray-400 mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            {" / "}
            <span className="text-gray-600">Order History</span>
          </nav>
          <div className="flex items-center gap-3">
            <Package size={22} style={{ color: "#1C2B3A" }} />
            <h1 className="text-2xl font-bold" style={{ color: "#1C2B3A" }}>Order History</h1>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-5 flex flex-wrap gap-3 items-center">
          <select className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none">
            <option>All Statuses</option>
            <option>Order Received</option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Delivered</option>
          </select>
          <select className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none">
            <option>Last 90 days</option>
            <option>Last 6 months</option>
            <option>Last year</option>
            <option>All time</option>
          </select>
          <input
            type="text"
            placeholder="Search by order or PO number"
            className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none flex-1 min-w-[200px]"
          />
          <button
            className="px-4 py-1.5 rounded text-sm font-medium text-white ml-auto"
            style={{ backgroundColor: "#1C2B3A" }}
          >
            Search
          </button>
        </div>

        {/* Order Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead style={{ backgroundColor: "#f8fafc" }}>
              <tr className="border-b border-gray-200">
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Order #</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">PO Number</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Date</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden md:table-cell">Items</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Total</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, i) => {
                const sc = statusColor[order.status] || { bg: "#f3f4f6", text: "#374151" };
                const items = "items" in order
                  ? (order.items as Array<{ name: string; quantity: number }>)
                  : [];
                return (
                  <tr
                    key={order.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors last:border-0"
                  >
                    <td className="px-5 py-4">
                      <span className="font-semibold" style={{ color: "#1C2B3A" }}>
                        #{order.orderNumber}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-gray-600">{order.purchaseOrderNumber}</td>
                    <td className="px-5 py-4 text-gray-600 whitespace-nowrap">{order.placedDate}</td>
                    <td className="px-5 py-4 text-gray-500 hidden md:table-cell">
                      <div className="max-w-xs">
                        {items.slice(0, 2).map((item, j) => (
                          <p key={j} className="truncate text-xs">
                            {item.quantity}× {item.name}
                          </p>
                        ))}
                        {items.length > 2 && (
                          <p className="text-xs text-gray-400">+{items.length - 2} more</p>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-4 font-semibold" style={{ color: "#1C2B3A" }}>
                      {formatPrice(order.total as number)}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className="text-xs font-semibold px-2 py-1 rounded whitespace-nowrap"
                        style={{ backgroundColor: sc.bg, color: sc.text }}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <Link
                        href={`/order-confirmation/${order.id}`}
                        className="text-xs font-medium underline"
                        style={{ color: "#E8611A" }}
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-5 text-sm text-gray-500">
          <p>Showing {allOrders.length} of {allOrders.length} orders</p>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50">‹</button>
            <button
              className="w-8 h-8 flex items-center justify-center border rounded text-white font-medium"
              style={{ backgroundColor: "#1C2B3A", borderColor: "#1C2B3A" }}
            >
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50">›</button>
          </div>
        </div>
      </div>
    </div>
  );
}