"use client";
import Link from "next/link";
import { use, useState } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft, FileText, Download } from "lucide-react";
import { dirContracts } from "@/lib/mock-data/dir-contracts";

const fmt = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2 });
const statusColor: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  "Pending Signature": "bg-yellow-100 text-yellow-700",
  "Expiring Soon": "bg-orange-100 text-orange-600",
  Expired: "bg-gray-100 text-gray-500",
};
const TABS = ["Contract Details", "Items", "Pricing", "Notes"];

export default function ContractDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const c = dirContracts.find((x) => x.id === id);
  if (!c) notFound();
  const [tab, setTab] = useState(0);

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <Link
        href="/digital-interaction-room/sales-contracts"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 mb-5"
      >
        <ArrowLeft size={14} /> Back to Sales Contracts
      </Link>

      {/* Header card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-5">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex items-start gap-4">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#1C2B3A" }}
            >
              <FileText size={26} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl font-bold" style={{ color: "#1C2B3A" }}>
                  {c.title}
                </h1>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColor[c.status] ?? "bg-gray-100 text-gray-500"}`}
                >
                  {c.status}
                </span>
                <span className="text-xs px-2 py-1 rounded border border-gray-200 text-gray-500">{c.typeName}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Contract ID: <span className="font-mono font-medium text-gray-700">{c.id}</span>
              </p>
              <p className="text-sm text-gray-500 mt-0.5">
                Customer: <span className="font-medium text-gray-700">{c.customer}</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap shrink-0">
            <button
              className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold text-white"
              style={{ backgroundColor: "#E8611A" }}
            >
              <Download size={12} /> Download PDF
            </button>
          </div>
        </div>

        {/* Summary strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Valid From</p>
            <p className="text-sm font-semibold text-gray-700">{c.start}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Valid To</p>
            <p className="text-sm font-semibold text-gray-700">{c.end}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Contract Value</p>
            <p className="text-sm font-bold" style={{ color: "#1C2B3A" }}>
              ${fmt(c.value)} {c.currency}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Payment Terms</p>
            <p className="text-sm font-semibold text-gray-700">Net 30</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-0 border-b border-gray-200 mb-6 overflow-x-auto">
        {TABS.map((t, i) => (
          <button
            key={t}
            onClick={() => setTab(i)}
            className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
              i === tab
                ? "border-orange-500 text-orange-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tab: Contract Details */}
      {tab === 0 && (
        <div className="flex flex-col gap-6">
          {/* Contract Information */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h2 className="text-sm font-bold text-gray-700 mb-4">Contract Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Contract Data</p>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    ["Customer", c.customer],
                    ["Customer Reference", c.customerReference],
                    ["Document Date", c.documentDate],
                    ["Valid From", c.start],
                    ["Valid To", c.end],
                  ].map(([label, val]) => (
                    <div key={label}>
                      <dt className="text-xs text-gray-400">{label}</dt>
                      <dd className="text-sm text-gray-700 font-medium">{val}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Shipping & Delivery</p>
                <dl className="flex flex-col gap-2.5">
                  {[
                    ["Ship-to Party", c.shipToParty],
                    ["Ship-to Address", c.shipToAddress],
                    ["Incoterms", c.incoterms],
                    ["Incoterms Location", c.incotermsLocation1],
                  ].map(([l, v]) => (
                    <div key={l}>
                      <dt className="text-xs text-gray-400">{l}</dt>
                      <dd className="text-sm text-gray-700 font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Billing */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h2 className="text-sm font-bold text-gray-700 mb-4">Billing</h2>
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3">
              {[
                ["Payment Terms", "Net 30"],
                ["Pricing Date", c.pricingDate],
                ["Billing Date", c.billingDate],
                ["Currency", c.currency],
              ].map(([l, v]) => (
                <div key={l}>
                  <dt className="text-xs text-gray-400">{l}</dt>
                  <dd className="text-sm text-gray-700 font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      )}

      {/* Tab: Items */}
      {tab === 1 && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {["#", "Description", "Target Qty", "Unit", "Unit Price", "Total Value"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {c.items.map((item) => (
                <tr key={item.position} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-500">{item.position}</td>
                  <td className="px-4 py-3 text-gray-700">{item.description}</td>
                  <td className="px-4 py-3 text-gray-700">{item.targetQty}</td>
                  <td className="px-4 py-3 text-gray-500">{item.unit}</td>
                  <td className="px-4 py-3 text-gray-700">${fmt(item.netPrice)}</td>
                  <td className="px-4 py-3 font-semibold text-gray-800">${fmt(item.totalValue)}</td>
                </tr>
              ))}
              <tr className="bg-gray-50 border-t-2 border-gray-200">
                <td colSpan={5} className="px-4 py-3 text-sm font-bold text-gray-700 text-right">
                  Total Contract Value
                </td>
                <td className="px-4 py-3 text-sm font-bold" style={{ color: "#1C2B3A" }}>
                  ${fmt(c.value)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Tab: Pricing */}
      {tab === 2 && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
            <p className="text-sm font-semibold text-gray-700">Price Breakdown</p>
          </div>
          <table className="w-full text-sm">
            <thead className="border-b border-gray-200">
              <tr>
                {["Description", "Rate", "Value (USD)"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {c.pricingConditions.map((p) => (
                <tr key={p.condType} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">{p.description}</td>
                  <td className="px-4 py-3 text-gray-600">{p.rate}</td>
                  <td className={`px-4 py-3 font-semibold ${p.value < 0 ? "text-red-500" : "text-gray-800"}`}>
                    {p.value < 0 ? `-$${fmt(Math.abs(p.value))}` : `$${fmt(p.value)}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Tab: Notes */}
      {tab === 3 && (
        <div className="flex flex-col gap-4">
          {[
            [
              "Contract Terms",
              "This contract governs the supply of drone systems and associated services between Wingspan Dynamics and the customer. All items are subject to standard export compliance and warranty terms.",
            ],
            [
              "Delivery Instructions",
              "All deliveries require signed acceptance documentation. Contact customer logistics coordinator 48 hours prior to each shipment.",
            ],
          ].map(([title, text]) => (
            <div key={title as string} className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{title}</p>
              <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}