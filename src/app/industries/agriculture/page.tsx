"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import { getAgricultureProducts } from "@/lib/mock-data/products";
import { ChevronDown, ChevronUp, LayoutGrid, List, X } from "lucide-react";

const categories = [
  { name: "Drones", image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=120&q=80" },
  { name: "Attachments", image: "https://images.unsplash.com/photo-1581093804475-577d72e35a2f?w=120&q=80" },
  { name: "Batteries", image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=120&q=80" },
  { name: "Sensors", image: "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=120&q=80" },
  { name: "Replacements", image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=120&q=80" },
  { name: "Remotes", image: "https://images.unsplash.com/photo-1596566791891-695c72c98ce0?w=120&q=80" },
  { name: "Cameras", image: "https://images.unsplash.com/photo-1589872307379-0ffdf9a34b8f?w=120&q=80" },
  { name: "Cargo containers", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=120&q=80" },
];

const filterGroups = [
  {
    id: "application",
    label: "Application",
    expanded: true,
    options: [
      { label: "Crop Monitoring", value: "crop-monitoring", checked: false },
      { label: "Field Mapping & Surveying", value: "field-mapping", checked: false },
      { label: "Spraying & Seeding", value: "spraying-seeding", checked: true },
      { label: "Livestock Monitoring", value: "livestock", checked: false },
      { label: "Irrigation Assessment", value: "irrigation", checked: false },
      { label: "Yield Analysis", value: "yield", checked: false },
    ],
  },
  {
    id: "payload",
    label: "Payload Compatibility",
    expanded: false,
    options: [],
  },
  {
    id: "sensor",
    label: "Sensor Type",
    expanded: true,
    options: [
      { label: "RGB Imaging", value: "rgb", checked: false },
      { label: "Multispectral", value: "multispectral", checked: false },
      { label: "Thermal", value: "thermal", checked: true },
      { label: "LiDAR", value: "lidar", checked: false },
    ],
  },
  {
    id: "technology",
    label: "Technology",
    expanded: false,
    options: [],
  },
  {
    id: "power",
    label: "Power & Endurance",
    expanded: false,
    options: [],
  },
];

export default function AgricultureCatalogPage() {
  const products = getAgricultureProducts();
  const [activeFilters, setActiveFilters] = useState(["Spraying & Seeding", "Drones"]);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    application: true,
    sensor: true,
  });
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("Relevance");
  const [page, setPage] = useState(1);

  const toggleGroup = (id: string) => {
    setExpandedGroups((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const removeFilter = (filter: string) => {
    setActiveFilters((prev) => prev.filter((f) => f !== filter));
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-40 md:h-52 bg-blue-100 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1400&q=80"
          alt="Agriculture drones"
          fill
          className="object-cover object-top opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=300&q=80"
            alt="Drone"
            width={220}
            height={160}
            className="object-contain drop-shadow-lg"
          />
        </div>
      </div>

      {/* Breadcrumb + Title */}
      <div className="max-w-7xl mx-auto px-8 pt-5">
        <nav className="text-xs text-gray-400 mb-3">
          <Link href="/" className="hover:underline">Home</Link>
          {" / "}
          <Link href="#" className="hover:underline">Industries</Link>
          {" / "}
        </nav>
        <div className="flex items-baseline gap-3 mb-4">
          <h1 className="text-3xl font-bold" style={{ color: "#1C2B3A" }}>Agriculture</h1>
          <span className="text-sm text-gray-400">{products.length * 21} Products</span>
        </div>
      </div>

      {/* Category Sub-Nav */}
      <div className="border-t border-b border-gray-200 py-4 bg-white mb-6">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-5 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className="flex flex-col items-center gap-1.5 flex-shrink-0 group"
              >
                <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 group-hover:border-orange-400 transition-colors">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="text-xs text-gray-600 text-center whitespace-nowrap group-hover:text-orange-500 transition-colors">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 pb-16">
        {/* Sort + View Controls */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2 flex-wrap">
            {activeFilters.map((filter) => (
              <span
                key={filter}
                className="flex items-center gap-1.5 text-xs bg-gray-100 border border-gray-300 px-3 py-1.5 rounded-full"
              >
                {filter}
                <button onClick={() => removeFilter(filter)} className="hover:text-red-500">
                  <X size={12} />
                </button>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <span className="text-sm text-gray-500">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none"
            >
              <option>Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded border ${viewMode === "grid" ? "bg-gray-900 text-white border-gray-900" : "border-gray-300 text-gray-500"}`}
            >
              <LayoutGrid size={16} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded border ${viewMode === "list" ? "bg-gray-900 text-white border-gray-900" : "border-gray-300 text-gray-500"}`}
            >
              <List size={16} />
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <aside className="w-56 flex-shrink-0 hidden md:block">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Filter by</h3>

            {/* Product Type (collapsed) */}
            <div className="border-t border-gray-200 py-3">
              <button
                className="flex items-center justify-between w-full text-sm font-medium text-gray-700"
                onClick={() => toggleGroup("productType")}
              >
                Product Type
                {expandedGroups["productType"] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            </div>

            {filterGroups.map((group) => (
              <div key={group.id} className="border-t border-gray-200 py-3">
                <button
                  className="flex items-center justify-between w-full text-sm font-medium text-gray-700 mb-2"
                  onClick={() => toggleGroup(group.id)}
                >
                  {group.label}
                  {expandedGroups[group.id] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
                {expandedGroups[group.id] && group.options.length > 0 && (
                  <div className="space-y-2">
                    {group.options.map((opt) => (
                      <label key={opt.value} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-900">
                        <input
                          type="checkbox"
                          defaultChecked={opt.checked}
                          className="rounded"
                          style={{ accentColor: "#1C2B3A" }}
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className={`grid gap-5 ${viewMode === "grid" ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1"}`}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-10">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 text-sm"
              >
                ‹
              </button>
              {[1, 2, 3].map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className="w-8 h-8 flex items-center justify-center border rounded text-sm font-medium transition-colors"
                  style={
                    page === p
                      ? { backgroundColor: "#1C2B3A", color: "white", borderColor: "#1C2B3A" }
                      : { borderColor: "#d1d5db", color: "#374151" }
                  }
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(3, p + 1))}
                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 text-sm"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}