"use client";
import Link from "next/link";
import { use, useState } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft, FileText, Edit, RefreshCw, History, Download } from "lucide-react";
import { dirContracts } from "@/lib/mock-data/dir-contracts";

const fmt = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2 });
const statusColor: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  "Pending Signature": "bg-yellow-100 text-yellow-700",
  "Expiring Soon": "bg-orange-100 text-orange-600",
  Expired: "bg-gray-100 text-gray-500",
};
const TABS = ["General Information", "Items", "Prices", "Texts", "Status & Blocks"];

export default function ContractDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const c = dirContracts.find((x) => x.id === id);
  if (!c) notFound();
  const [tab, setTab] = useState(0);

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <Link href="/digital-interaction-room/sales-contracts" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 mb-5">
        <ArrowLeft size={14} /> Back to Sales Contracts
      </Link>

      {/* Header card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-5">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#1C2B3A" }}>
              <FileText size={26} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl font-bold" style={{ color: "#1C2B3A" }}>{c.title}</h1>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColor[c.status] ?? "bg-gray-100 text-gray-500"}`}>{c.status}</span>
                <span className="text-xs px-2 py-1 rounded border border-gray-200 text-gray-500">{c.typeName}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">SAP Document: <span className="font-mono font-medium text-gray-700">{c.sapNumber}</span> · Contract ID: <span className="font-mono font-medium text-gray-700">{c.id}</span></p>
              <p className="text-sm text-gray-500 mt-0.5">Customer: <span className="font-medium text-gray-700">{c.customer}</span> <span className="text-gray-400">({c.customerId})</span></p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap shrink-0">
            <button className="inline-flex items-center gap-1 border border-gray-300 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"><Edit size={12} />Edit</button>
            <button className="inline-flex items-center gap-1 border border-gray-300 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"><RefreshCw size={12} />Update Prices</button>
            <button className="inline-flex items-center gap-1 border border-gray-300 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"><History size={12} />Change Log</button>
            <button className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold text-white" style={{ backgroundColor: "#E8611A" }}><Download size={12} />Download PDF</button>
          </div>
        </div>

        {/* Status strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Approval Status</p>
            <p className="text-sm font-semibold text-gray-700">{c.approvalStatus}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Overall Status</p>
            <p className="text-sm font-semibold text-gray-700">{c.overallStatus}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Net Value</p>
            <p className="text-sm font-bold" style={{ color: "#1C2B3A" }}>${fmt(c.value)} {c.currency}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Blocking Status</p>
            <p className="text-sm font-semibold text-gray-700">{c.blockingStatus}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-0 border-b border-gray-200 mb-6 overflow-x-auto">
        {TABS.map((t, i) => (
          <button key={t} onClick={() => setTab(i)} className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${i === tab ? "border-orange-500 text-orange-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}>
            {t}
          </button>
        ))}
      </div>

      {/* Tab: General Information */}
      {tab === 0 && (
        <div className="flex flex-col gap-6">
          {/* Basic Data */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h2 className="text-sm font-bold text-gray-700 mb-4">Basic Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Contract Data */}
              <div className="md:col-span-2">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Contract Data</p>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    ["Sold-to Party", `${c.customer} (${c.customerId})`],
                    ["Customer Group", c.customerGroup],
                    ["Customer Reference", c.customerReference],
                    ["Shipping Conditions", c.shippingConditions],
                    ["Document Date", c.documentDate],
                    ["Valid From", c.start],
                    ["Order Reason", c.orderReason],
                    ["Valid To", c.end],
                  ].map(([label, val]) => (
                    <div key={label}>
                      <dt className="text-xs text-gray-400">{label}</dt>
                      <dd className="text-sm text-gray-700 font-medium">{val}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              {/* Ship-to */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Ship-to Party</p>
                <p className="text-xs text-gray-400">Customer</p>
                <p className="text-sm font-medium text-gray-700 mb-1">{c.shipToParty} ({c.shipToPartyId})</p>
                <p className="text-xs text-gray-400 mt-2">Address</p>
                <p className="text-sm text-gray-700">{c.shipToAddress}</p>
              </div>
            </div>
          </div>

          {/* Advanced Data */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h2 className="text-sm font-bold text-gray-700 mb-4">Advanced Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Terms & Conditions</p>
                <dl className="flex flex-col gap-2.5">
                  {[
                    ["Incoterms", c.incoterms],
                    ["Incoterms Version", c.incotermsVersion],
                    ["Incoterms Location", c.incotermsLocation1],
                    ["Pricing Date", c.pricingDate],
                    ["Billing Date", c.billingDate],
                    ["Pricing Procedure", c.pricingProcedure],
                  ].map(([l, v]) => (
                    <div key={l}><dt className="text-xs text-gray-400">{l}</dt><dd className="text-sm text-gray-700 font-medium">{v}</dd></div>
                  ))}
                </dl>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Organization Data</p>
                <dl className="flex flex-col gap-2.5">
                  {[
                    ["Sales Organization", c.salesOrganization],
                    ["Distribution Channel", c.distributionChannel],
                    ["Division", c.division],
                  ].map(([l, v]) => (
                    <div key={l}><dt className="text-xs text-gray-400">{l}</dt><dd className="text-sm text-gray-700 font-medium">{v}</dd></div>
                  ))}
                </dl>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Administrative Data</p>
                <dl className="flex flex-col gap-2.5">
                  {[
                    ["Created By", c.createdBy],
                    ["Created On", c.createdOn],
                    ["Changed By", c.changedBy],
                    ["Changed On", c.changedOn],
                  ].map(([l, v]) => (
                    <div key={l}><dt className="text-xs text-gray-400">{l}</dt><dd className="text-sm text-gray-700 font-medium">{v}</dd></div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Items */}
      {tab === 1 && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {["Pos.", "Material", "Description", "Target Qty", "UOM", "Net Price", "Currency", "Total Value"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {c.items.map((item) => (
                <tr key={item.position} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-500">{item.position}</td>
                  <td className="px-4 py-3 font-mono text-xs text-blue-600">{item.material}</td>
                  <td className="px-4 py-3 text-gray-700">{item.description}</td>
                  <td className="px-4 py-3 text-gray-700">{item.targetQty}</td>
                  <td className="px-4 py-3 text-gray-500">{item.unit}</td>
                  <td className="px-4 py-3 text-gray-700">${fmt(item.netPrice)}</td>
                  <td className="px-4 py-3 text-gray-500">{item.currency}</td>
                  <td className="px-4 py-3 font-semibold text-gray-800">${fmt(item.totalValue)}</td>
                </tr>
              ))}
              <tr className="bg-gray-50 border-t-2 border-gray-200">
                <td colSpan={7} className="px-4 py-3 text-sm font-bold text-gray-700 text-right">Total Contract Value</td>
                <td className="px-4 py-3 text-sm font-bold" style={{ color: "#1C2B3A" }}>${fmt(c.value)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Tab: Prices */}
      {tab === 2 && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
            <p className="text-sm font-semibold text-gray-700">Pricing Conditions — {c.pricingProcedure}</p>
          </div>
          <table className="w-full text-sm">
            <thead className="border-b border-gray-200">
              <tr>
                {["Cond. Type", "Description", "Rate", "Currency", "Value (USD)"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {c.pricingConditions.map((p) => (
                <tr key={p.condType} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-xs text-blue-600">{p.condType}</td>
                  <td className="px-4 py-3 text-gray-700">{p.description}</td>
                  <td className="px-4 py-3 text-gray-600">{p.rate}</td>
                  <td className="px-4 py-3 text-gray-500">{p.currency}</td>
                  <td className={`px-4 py-3 font-semibold ${p.value < 0 ? "text-red-500" : "text-gray-800"}`}>
                    {p.value < 0 ? `-$${fmt(Math.abs(p.value))}` : `$${fmt(p.value)}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Tab: Texts */}
      {tab === 3 && (
        <div className="flex flex-col gap-4">
          {[["Header Note", "This contract governs the supply of drone systems and associated services between Wingspan Dynamics and the customer. All items are subject to standard export compliance and warranty terms."],
            ["Internal Note", "Account Manager: See CRM opportunity WD-OPP-2025-0042 for background. Customer has expressed interest in Phase 2 expansion."],
            ["Delivery Instructions", "All deliveries require signed acceptance documentation. Contact customer logistics coordinator 48 hours prior to each shipment."]
          ].map(([title, text]) => (
            <div key={title as string} className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{title}</p>
              <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      )}

      {/* Tab: Status & Blocks */}
      {tab === 4 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { title: "Header Status", rows: [["Delivery Block", "None"], ["Billing Block", "None"], ["Credit Status", "OK"], ["Overall Status", c.overallStatus]] },
            { title: "Approval Workflow", rows: [["Approval Status", c.approvalStatus], ["Approved By", c.approvalStatus === "Approved" ? "Sales Manager – Level 2" : "—"], ["Approved On", c.approvalStatus === "Approved" ? c.changedOn : "—"], ["Rejection Reason", "—"]] },
            { title: "Payment & Credit", rows: [["Payment Terms", "Net 30 (ZB30)"], ["Credit Limit Check", "Passed"], ["Customer Credit Limit", "$500,000.00"], ["Credit Exposure", `$${fmt(c.value)}`]] },
            { title: "Document Flow", rows: [["Related Sales Orders", c.status === "Expired" ? "5 Orders Released" : c.status === "Active" ? "2 Orders Released" : "0 Orders Released"], ["Invoices", c.status === "Expired" ? "5 Invoices Posted" : c.status === "Active" ? "2 Invoices Posted" : "None"], ["Open Value", c.overallStatus === "Closed" ? "$0.00" : `$${fmt(c.value)}`], ["Released Value", c.overallStatus === "Closed" ? `$${fmt(c.value)}` : c.status === "Active" ? `$${fmt(c.value * 0.3)}` : "$0.00"]] },
          ].map((block) => (
            <div key={block.title} className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="text-sm font-bold text-gray-700 mb-3">{block.title}</p>
              <dl className="flex flex-col gap-2.5">
                {block.rows.map(([l, v]) => (
                  <div key={l} className="flex justify-between">
                    <dt className="text-xs text-gray-400">{l}</dt>
                    <dd className="text-sm text-gray-700 font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}