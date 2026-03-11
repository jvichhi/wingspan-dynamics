"use client";
import { useState } from "react";
import { Search, Download, FileText, FileSpreadsheet, File, Eye } from "lucide-react";

const documents = [
  {
    id: "DOC-001",
    name: "Enterprise Fleet Supply Agreement – 2025",
    type: "Contract",
    format: "PDF",
    size: "1.2 MB",
    date: "Jan 1, 2025",
    related: "CTR-2025-0042",
  },
  {
    id: "DOC-002",
    name: "Invoice #009000000 – AeroLogistics International",
    type: "Invoice",
    format: "PDF",
    size: "340 KB",
    date: "Jan 22, 2025",
    related: "#009000000",
  },
  {
    id: "DOC-003",
    name: "Order Confirmation #5432000128",
    type: "Order",
    format: "PDF",
    size: "180 KB",
    date: "Jan 20, 2025",
    related: "#5432000128",
  },
  {
    id: "DOC-004",
    name: "Fleet Replacement Program – Phase 2 Proposal",
    type: "Quote",
    format: "XLSX",
    size: "820 KB",
    date: "Sep 1, 2024",
    related: "CTR-2024-0088",
  },
  {
    id: "DOC-005",
    name: "Annual Maintenance & Support Contract – 2025",
    type: "Contract",
    format: "PDF",
    size: "2.1 MB",
    date: "Mar 1, 2025",
    related: "CTR-2025-0039",
  },
  {
    id: "DOC-006",
    name: "Invoice #0094999999 – SkyInspect Solutions",
    type: "Invoice",
    format: "PDF",
    size: "290 KB",
    date: "Jan 18, 2025",
    related: "#0094999999",
  },
  {
    id: "DOC-007",
    name: "Return Authorization – RET-2025-0018",
    type: "Return",
    format: "PDF",
    size: "150 KB",
    date: "Jan 20, 2025",
    related: "RET-2025-0018",
  },
  {
    id: "DOC-008",
    name: "Q4 2024 Fleet Inventory Report",
    type: "Report",
    format: "XLSX",
    size: "1.8 MB",
    date: "Dec 31, 2024",
    related: "—",
  },
];

const typeColors: Record<string, string> = {
  Contract: "text-blue-600 bg-blue-50",
  Invoice: "text-green-600 bg-green-50",
  Order: "text-purple-600 bg-purple-50",
  Quote: "text-orange-500 bg-orange-50",
  Return: "text-red-500 bg-red-50",
  Report: "text-gray-600 bg-gray-100",
};

function DocIcon({ format }: { format: string }) {
  if (format === "XLSX")
    return <FileSpreadsheet size={20} className="text-green-600" />;
  if (format === "PDF")
    return <FileText size={20} className="text-red-500" />;
  return <File size={20} className="text-gray-400" />;
}

export default function DocumentsPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");

  const filtered = documents.filter((d) => {
    const ms =
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.related.toLowerCase().includes(search.toLowerCase());
    const mf = typeFilter === "All Types" || d.type === typeFilter;
    return ms && mf;
  });

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-1" style={{ color: "#1C2B3A" }}>
        Documents
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        Access and download all your business documents in one place
      </p>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="flex-1 relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search documents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-gray-500 bg-white"
          />
        </div>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none bg-white min-w-[180px]"
        >
          {["All Types", "Contract", "Invoice", "Order", "Quote", "Return", "Report"].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide w-8"></th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Document Name</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Type</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Related To</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Date</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Size</th>
              <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((doc, i) => (
              <tr
                key={doc.id}
                className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${i === filtered.length - 1 ? "border-0" : ""}`}
              >
                <td className="px-5 py-3">
                  <DocIcon format={doc.format} />
                </td>
                <td className="px-4 py-3">
                  <p className="font-medium text-gray-800 text-sm">{doc.name}</p>
                  <p className="text-xs text-gray-400">{doc.format}</p>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${typeColors[doc.type] ?? "text-gray-600 bg-gray-100"}`}>
                    {doc.type}
                  </span>
                </td>
                <td className="px-4 py-3 text-xs text-gray-500">{doc.related}</td>
                <td className="px-4 py-3 text-xs text-gray-500">{doc.date}</td>
                <td className="px-4 py-3 text-xs text-gray-500">{doc.size}</td>
                <td className="px-5 py-3">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-gray-500 transition-colors">
                      <Eye size={14} />
                    </button>
                    <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-gray-500 transition-colors">
                      <Download size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}