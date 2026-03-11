import Link from "next/link";
import { formatPrice } from "@/components/ui/ProductCard";
import { Receipt, Download, CheckCircle, Clock, AlertCircle } from "lucide-react";

const invoices = [
  {
    id: "INV-2026-0312",
    orderId: "ord-0000000001",
    orderNumber: "0000000001",
    purchaseOrderNumber: "0000076541",
    issueDate: "March 8, 2026",
    dueDate: "April 22, 2026",
    status: "Unpaid",
    amount: 152256.74,
    lineItems: [
      { description: "Agri T15 Sprayer × 5", amount: 7500.0 },
      { description: "Agri T15 Irrigation Attachment × 5", amount: 31.98 },
      { description: "ERTC-700 Controller Dual × 10", amount: 190.0 },
    ],
    subtotal: 138415.22,
    tax: 13841.52,
    paymentTerms: "Net 45",
    contractRef: "CTR-2026-0042",
  },
  {
    id: "INV-2026-0201",
    orderId: "ord-0000000002",
    orderNumber: "0000000002",
    purchaseOrderNumber: "0000076522",
    issueDate: "February 14, 2026",
    dueDate: "March 31, 2026",
    status: "Paid",
    paidDate: "March 12, 2026",
    amount: 33285.0,
    lineItems: [
      { description: "FieldMapper H10 × 2", amount: 28000.0 },
      { description: "I37 IntelliMax Drone Battery × 4", amount: 3400.0 },
    ],
    subtotal: 31400.0,
    tax: 3140.0,
    paymentTerms: "Net 45",
    contractRef: "CTR-2026-0042",
  },
  {
    id: "INV-2026-0098",
    orderId: "ord-0000000003",
    orderNumber: "0000000003",
    purchaseOrderNumber: "0000075890",
    issueDate: "January 3, 2026",
    dueDate: "February 17, 2026",
    status: "Paid",
    paidDate: "February 14, 2026",
    amount: 18932.0,
    lineItems: [
      { description: "Sgrx 310 Controller × 5", amount: 16000.0 },
      { description: "Propeller Replacement Kit × 10", amount: 1200.0 },
    ],
    subtotal: 17200.0,
    tax: 1720.0,
    paymentTerms: "Net 45",
    contractRef: "CTR-2026-0042",
  },
  {
    id: "INV-2025-1142",
    orderId: "ord-0000000004",
    orderNumber: "0000000004",
    purchaseOrderNumber: "0000074100",
    issueDate: "December 10, 2025",
    dueDate: "January 24, 2026",
    status: "Overdue",
    amount: 133485.0,
    lineItems: [
      { description: "Agri T15 Sprayer × 3", amount: 121350.0 },
    ],
    subtotal: 121350.0,
    tax: 12135.0,
    paymentTerms: "Net 45",
    contractRef: "CTR-2025-0089",
  },
  {
    id: "INV-2025-0982",
    orderId: "ord-0000000005",
    orderNumber: "0000000005",
    purchaseOrderNumber: "0000073001",
    issueDate: "November 22, 2025",
    dueDate: "January 6, 2026",
    status: "Paid",
    paidDate: "January 4, 2026",
    amount: 187000.0,
    lineItems: [
      { description: "Agri T15 Irrigation Set × 2", amount: 80000.0 },
      { description: "High-Capacity Spray Tank × 5", amount: 90000.0 },
    ],
    subtotal: 170000.0,
    tax: 17000.0,
    paymentTerms: "Net 45",
    contractRef: "CTR-2025-0089",
  },
];

const statusStyle = (status: string) => {
  if (status === "Paid") return { bg: "#dcfce7", text: "#15803d" };
  if (status === "Overdue") return { bg: "#fee2e2", text: "#b91c1c" };
  return { bg: "#fef9c3", text: "#a16207" };
};

const statusIcon = (status: string) => {
  if (status === "Paid") return <CheckCircle size={13} />;
  if (status === "Overdue") return <AlertCircle size={13} />;
  return <Clock size={13} />;
};

export default function InvoicesPage() {
  const totalOutstanding = invoices
    .filter((i) => i.status !== "Paid")
    .reduce((sum, i) => sum + i.amount, 0);

  const totalPaid = invoices
    .filter((i) => i.status === "Paid")
    .reduce((sum, i) => sum + i.amount, 0);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        {/* Header */}
        <div className="mb-7">
          <nav className="text-xs text-gray-400 mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            {" / "}
            <span className="text-gray-600">Invoices</span>
          </nav>
          <div className="flex items-center gap-3 mb-1">
            <Receipt size={22} style={{ color: "#1C2B3A" }} />
            <h1 className="text-2xl font-bold" style={{ color: "#1C2B3A" }}>Invoices</h1>
          </div>
          <p className="text-sm text-gray-500">
            Track and download invoices for all your orders and purchase agreements.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-7">
          {[
            { label: "Total Invoices", value: String(invoices.length), color: "#1C2B3A", bg: "#e8f0fa" },
            {
              label: "Outstanding",
              value: formatPrice(totalOutstanding),
              color: "#b91c1c",
              bg: "#fee2e2",
            },
            {
              label: "Paid (YTD)",
              value: formatPrice(totalPaid),
              color: "#15803d",
              bg: "#dcfce7",
            },
            {
              label: "Overdue",
              value: String(invoices.filter((i) => i.status === "Overdue").length),
              color: "#b91c1c",
              bg: "#fee2e2",
            },
          ].map((card) => (
            <div
              key={card.label}
              className="bg-white rounded-xl border border-gray-200 p-4 text-center"
            >
              <p className="text-xl font-bold mb-1 truncate" style={{ color: card.color }}>
                {card.value}
              </p>
              <p className="text-xs text-gray-500">{card.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-5 flex flex-wrap gap-3 items-center">
          <select className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none">
            <option>All Statuses</option>
            <option>Unpaid</option>
            <option>Paid</option>
            <option>Overdue</option>
          </select>
          <select className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none">
            <option>Last 90 days</option>
            <option>Last 6 months</option>
            <option>Last year</option>
            <option>All time</option>
          </select>
          <input
            type="text"
            placeholder="Search by invoice or PO number"
            className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none flex-1 min-w-[200px]"
          />
          <button
            className="px-4 py-1.5 rounded text-sm font-medium text-white ml-auto"
            style={{ backgroundColor: "#1C2B3A" }}
          >
            Search
          </button>
        </div>

        {/* Invoice Cards */}
        <div className="space-y-4">
          {invoices.map((inv) => {
            const sc = statusStyle(inv.status);
            return (
              <div
                key={inv.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Invoice Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 px-6 py-4 border-b border-gray-100">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#f0f4f8" }}
                    >
                      <Receipt size={18} style={{ color: "#1C2B3A" }} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="text-sm font-bold" style={{ color: "#1C2B3A" }}>{inv.id}</p>
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded flex items-center gap-1"
                          style={{ backgroundColor: sc.bg, color: sc.text }}
                        >
                          {statusIcon(inv.status)} {inv.status}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">
                        Order #{inv.orderNumber} · PO {inv.purchaseOrderNumber} · Contract {inv.contractRef}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-lg font-bold" style={{ color: "#1C2B3A" }}>
                      {formatPrice(inv.amount)}
                    </p>
                    <button className="flex items-center gap-1.5 text-xs px-3 py-1.5 border border-gray-300 rounded hover:bg-gray-50 text-gray-700">
                      <Download size={13} /> PDF
                    </button>
                    {inv.status !== "Paid" && (
                      <button
                        className="text-xs px-4 py-1.5 rounded text-white font-medium"
                        style={{ backgroundColor: inv.status === "Overdue" ? "#b91c1c" : "#1C2B3A" }}
                      >
                        Pay Now
                      </button>
                    )}
                  </div>
                </div>

                {/* Invoice Details */}
                <div className="px-6 py-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Issue Date</p>
                      <p className="text-xs font-medium text-gray-700">{inv.issueDate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Due Date</p>
                      <p
                        className="text-xs font-medium"
                        style={{ color: inv.status === "Overdue" ? "#b91c1c" : "#374151" }}
                      >
                        {inv.dueDate}
                        {inv.status === "Overdue" && " — OVERDUE"}
                      </p>
                    </div>
                    {"paidDate" in inv && (
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">Paid On</p>
                        <p className="text-xs font-medium text-green-600">{inv.paidDate as string}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Payment Terms</p>
                      <p className="text-xs font-medium text-gray-700">{inv.paymentTerms}</p>
                    </div>
                  </div>

                  {/* Line Items */}
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="pb-1.5 text-left text-gray-400 font-medium">Description</th>
                        <th className="pb-1.5 text-right text-gray-400 font-medium">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inv.lineItems.map((li, i) => (
                        <tr key={i} className="border-b border-gray-50">
                          <td className="py-1.5 text-gray-600">{li.description}</td>
                          <td className="py-1.5 text-right font-medium text-gray-800">
                            {formatPrice(li.amount)}
                          </td>
                        </tr>
                      ))}
                      <tr className="border-b border-gray-100">
                        <td className="py-1.5 text-gray-400">Subtotal</td>
                        <td className="py-1.5 text-right text-gray-600">{formatPrice(inv.subtotal)}</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-1.5 text-gray-400">Sales Tax (10%)</td>
                        <td className="py-1.5 text-right text-gray-600">{formatPrice(inv.tax)}</td>
                      </tr>
                      <tr>
                        <td className="pt-2 font-bold" style={{ color: "#1C2B3A" }}>Total Due</td>
                        <td className="pt-2 text-right font-bold" style={{ color: "#1C2B3A" }}>
                          {formatPrice(inv.amount)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-5 text-sm text-gray-500">
          <p>Showing {invoices.length} of {invoices.length} invoices</p>
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