import Link from "next/link";
import { FileSignature, Download, CheckCircle, Clock, AlertCircle } from "lucide-react";

const contracts = [
  {
    id: "CTR-2026-0042",
    title: "AgriCo Master Supply Agreement",
    type: "Master Supply Agreement",
    startDate: "January 1, 2026",
    endDate: "December 31, 2027",
    status: "Active",
    value: "$2,400,000",
    account: "AgriCo Procurement Division",
    products: [
      "Agri T15 Sprayer",
      "AgriPro A6",
      "FieldMapper H10",
      "ERTC-700 Controller",
    ],
    discountRate: "Up to 25% off list pricing",
    paymentTerms: "Net 45",
    notes:
      "Preferred supplier status. Volume pricing applies to all drone and controller SKUs. Annual review in Q4.",
  },
  {
    id: "CTR-2026-0011",
    title: "Accessories & Parts Framework",
    type: "Framework Agreement",
    startDate: "March 1, 2026",
    endDate: "February 28, 2027",
    status: "Active",
    value: "$480,000",
    account: "AgriCo Procurement Division",
    products: [
      "I37 IntelliMax Drone Battery",
      "Propeller Replacement Kit",
      "Drone Carrying Case",
      "Agri T15 Irrigation Attachment",
    ],
    discountRate: "20% off list pricing",
    paymentTerms: "Net 30",
    notes:
      "Covers all consumable and maintenance SKUs. Replenishment orders ship within 2 business days.",
  },
  {
    id: "CTR-2025-0089",
    title: "2025 Agricultural Drone Program",
    type: "Annual Contract",
    startDate: "January 1, 2025",
    endDate: "December 31, 2025",
    status: "Expired",
    value: "$1,820,000",
    account: "AgriCo Procurement Division",
    products: ["Agri T15 Sprayer", "AgriPro A6", "ERTC-700 Controller"],
    discountRate: "Up to 20% off list pricing",
    paymentTerms: "Net 45",
    notes: "Contract has expired. Contact your account manager to renew.",
  },
  {
    id: "CTR-2026-0058",
    title: "Precision Mapping Pilot Program",
    type: "Pilot Agreement",
    startDate: "April 1, 2026",
    endDate: "September 30, 2026",
    status: "Pending Signature",
    value: "$320,000",
    account: "AgriCo – R&D Division",
    products: ["FieldMapper H10", "Owl N10 – Surveillance"],
    discountRate: "15% off list pricing",
    paymentTerms: "Net 30",
    notes: "Awaiting countersignature from AgriCo legal team. Estimated close: March 20, 2026.",
  },
];

const statusIcon = (status: string) => {
  if (status === "Active") return <CheckCircle size={14} className="text-green-600" />;
  if (status === "Expired") return <AlertCircle size={14} className="text-gray-400" />;
  return <Clock size={14} className="text-yellow-500" />;
};

const statusStyle = (status: string) => {
  if (status === "Active") return { bg: "#dcfce7", text: "#15803d" };
  if (status === "Expired") return { bg: "#f3f4f6", text: "#6b7280" };
  return { bg: "#fef9c3", text: "#a16207" };
};

export default function ContractsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        {/* Header */}
        <div className="mb-7">
          <nav className="text-xs text-gray-400 mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            {" / "}
            <span className="text-gray-600">Contracts</span>
          </nav>
          <div className="flex items-center gap-3 mb-1">
            <FileSignature size={22} style={{ color: "#1C2B3A" }} />
            <h1 className="text-2xl font-bold" style={{ color: "#1C2B3A" }}>Contracts</h1>
          </div>
          <p className="text-sm text-gray-500">
            View and manage your active supply agreements, framework contracts, and pricing programs.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-7">
          {[
            { label: "Active Contracts", value: "2", color: "#15803d", bg: "#dcfce7" },
            { label: "Pending Signature", value: "1", color: "#a16207", bg: "#fef9c3" },
            { label: "Expired", value: "1", color: "#6b7280", bg: "#f3f4f6" },
            { label: "Total Contract Value", value: "$5.0M", color: "#1C2B3A", bg: "#e8f0fa" },
          ].map((card) => (
            <div
              key={card.label}
              className="bg-white rounded-xl border border-gray-200 p-4 text-center"
            >
              <p className="text-2xl font-bold mb-1" style={{ color: card.color }}>
                {card.value}
              </p>
              <p className="text-xs text-gray-500">{card.label}</p>
            </div>
          ))}
        </div>

        {/* Contract Cards */}
        <div className="space-y-4">
          {contracts.map((c) => {
            const sc = statusStyle(c.status);
            return (
              <div
                key={c.id}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded"
                      >
                        {c.id}
                      </span>
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded flex items-center gap-1"
                        style={{ backgroundColor: sc.bg, color: sc.text }}
                      >
                        {statusIcon(c.status)} {c.status}
                      </span>
                    </div>
                    <h2 className="text-base font-bold" style={{ color: "#1C2B3A" }}>
                      {c.title}
                    </h2>
                    <p className="text-xs text-gray-500 mt-0.5">{c.type} · {c.account}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      className="flex items-center gap-1.5 text-xs px-3 py-1.5 border border-gray-300 rounded hover:bg-gray-50 text-gray-700"
                    >
                      <Download size={13} /> Download PDF
                    </button>
                    {c.status === "Pending Signature" && (
                      <button
                        className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded text-white font-medium"
                        style={{ backgroundColor: "#E8611A" }}
                      >
                        <FileSignature size={13} /> Sign Now
                      </button>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm border-t border-gray-100 pt-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Contract Period</p>
                    <p className="text-xs font-medium text-gray-700">{c.startDate} – {c.endDate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Contract Value</p>
                    <p className="text-sm font-bold" style={{ color: "#1C2B3A" }}>{c.value}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Discount Rate</p>
                    <p className="text-xs font-medium text-gray-700">{c.discountRate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Payment Terms</p>
                    <p className="text-xs font-medium text-gray-700">{c.paymentTerms}</p>
                  </div>
                </div>

                {/* Products covered */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 mb-2">Products Covered</p>
                  <div className="flex flex-wrap gap-2">
                    {c.products.map((p) => (
                      <span
                        key={p}
                        className="text-xs px-2.5 py-1 rounded border border-gray-200 text-gray-600"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 mb-1">Notes</p>
                  <p className="text-xs text-gray-600">{c.notes}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help CTA */}
        <div
          className="mt-8 rounded-xl p-6 text-white text-center"
          style={{ backgroundColor: "#1C2B3A" }}
        >
          <h3 className="text-base font-bold mb-1">Need a custom contract?</h3>
          <p className="text-sm opacity-70 mb-4">
            Contact your dedicated Wingspan Dynamics account manager to negotiate pricing, terms, and coverage.
          </p>
          <Link
            href="#"
            className="inline-block px-5 py-2 rounded text-sm font-semibold bg-white hover:bg-gray-100 transition-colors"
            style={{ color: "#1C2B3A" }}
          >
            Contact Account Manager
          </Link>
        </div>
      </div>
    </div>
  );
}