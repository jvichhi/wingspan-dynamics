"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductById, getRelatedProducts } from "@/lib/mock-data/products";
import ProductCard from "@/components/ui/ProductCard";
import { formatPrice } from "@/components/ui/ProductCard";
import { ChevronDown, ChevronUp, ShoppingCart, Zap, X } from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const product = getProductById(params.id as string);
  const related = product ? getRelatedProducts(product.id) : [];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]?.name || "");
  const [selectedConfig, setSelectedConfig] = useState(product?.configurations?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [showVolume, setShowVolume] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-8 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-700">Product not found</h1>
        <Link href="/industries/agriculture" className="text-blue-600 underline mt-4 block">
          Browse products
        </Link>
      </div>
    );
  }

  const images = product.images || [product.image];
  const currentDiscount = product.volumeDiscounts?.find((d) => quantity >= d.minQty);
  const effectivePrice = currentDiscount ? currentDiscount.pricePerUnit : product.price;

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-8 pt-5 pb-3">
        <nav className="text-xs text-gray-400">
          <Link href="/" className="hover:underline">Home</Link>
          {" / "}
          <Link href="/industries/agriculture" className="hover:underline">Agriculture</Link>
          {" / "}
          <span className="text-gray-600">{product.name}</span>
        </nav>
      </div>

      {/* Product Layout */}
      <div className="max-w-7xl mx-auto px-8 pb-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Images */}
          <div>
            <div className="relative rounded-xl overflow-hidden bg-gray-100 mb-3" style={{ aspectRatio: "4/3" }}>
              <Image
                src={images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.isNew && (
                <span className="absolute top-3 left-3 text-white text-xs font-semibold px-2 py-0.5 rounded" style={{ backgroundColor: "#E8611A" }}>
                  New
                </span>
              )}
            </div>
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative w-16 h-16 rounded overflow-hidden border-2 transition-colors ${selectedImage === i ? "border-gray-900" : "border-gray-200 hover:border-gray-400"}`}
                >
                  <Image src={img} alt={`${product.name} ${i + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div>
            {product.isNew && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded text-white mb-2 inline-block" style={{ backgroundColor: "#E8611A" }}>
                New
              </span>
            )}
            <h1 className="text-2xl font-bold mb-2" style={{ color: "#1C2B3A" }}>{product.name}</h1>
            {product.shortDescription && (
              <p className="text-sm text-gray-500 mb-4">{product.shortDescription}</p>
            )}

            {/* Features */}
            {product.features && (
              <div className="flex gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                {product.features.map((f) => (
                  <div key={f.label} className="flex flex-col items-center text-center">
                    <span className="text-lg mb-0.5">
                      {f.icon === "ndvi" ? "🌿" : f.icon === "irrigation" ? "💧" : "🗺️"}
                    </span>
                    <span className="text-xs font-semibold text-gray-700">{f.label}</span>
                    {f.sublabel && <span className="text-xs text-gray-500">{f.sublabel}</span>}
                  </div>
                ))}
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-3xl font-bold" style={{ color: "#1C2B3A" }}>
                {formatPrice(effectivePrice)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-lg text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
              )}
              {currentDiscount && (
                <span className="text-sm font-semibold px-2 py-0.5 rounded" style={{ backgroundColor: "#fff0e8", color: "#E8611A" }}>
                  -{currentDiscount.discount}% off
                </span>
              )}
            </div>

            {/* Volume Discount Button */}
            {product.volumeDiscounts && (
              <button
                onClick={() => setShowVolume(true)}
                className="text-xs font-medium underline mb-4 block"
                style={{ color: "#E8611A" }}
              >
                View volume pricing →
              </button>
            )}

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Color: <span className="font-normal">{selectedColor}</span></p>
                <div className="flex gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      title={c.name}
                      className={`w-7 h-7 rounded-full border-2 transition-all ${selectedColor === c.name ? "border-gray-900 scale-110" : "border-gray-300 hover:border-gray-500"}`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Configuration */}
            {product.configurations && product.configurations.length > 0 && (
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Configuration</p>
                <div className="flex flex-wrap gap-2">
                  {product.configurations.map((cfg) => (
                    <button
                      key={cfg}
                      onClick={() => setSelectedConfig(cfg)}
                      className={`px-3 py-1.5 rounded text-xs font-medium border transition-colors ${selectedConfig === cfg ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 text-gray-600 hover:border-gray-500"}`}
                    >
                      {cfg}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Compatibility */}
            {product.compatibility && (
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Compatibility:</span> {product.compatibility}
              </p>
            )}
            {product.flowRate && (
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-medium">Flow Rate:</span> {product.flowRate}
              </p>
            )}

            {/* Quantity */}
            <div className="flex items-center gap-3 mb-5">
              <p className="text-sm font-medium text-gray-700">Quantity</p>
              <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="px-3 py-2 text-gray-600 hover:bg-gray-50 text-lg leading-none">−</button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-14 text-center py-2 text-sm border-x border-gray-300 focus:outline-none"
                />
                <button onClick={() => setQuantity((q) => q + 1)} className="px-3 py-2 text-gray-600 hover:bg-gray-50 text-lg leading-none">+</button>
              </div>
              {product.inStock && (
                <span className="text-xs text-green-600 font-medium">{product.inStock} in stock</span>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 mb-6">
              <Link
                href="/cart"
                className="flex-1 flex items-center justify-center gap-2 border font-semibold py-3 rounded text-sm hover:bg-gray-50 transition-colors"
                style={{ borderColor: "#1C2B3A", color: "#1C2B3A" }}
              >
                <ShoppingCart size={16} /> Add to Cart
              </Link>
              <Link
                href="/checkout"
                className="flex-1 flex items-center justify-center gap-2 text-white font-semibold py-3 rounded text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#1C2B3A" }}
              >
                <Zap size={16} /> Buy Now
              </Link>
            </div>

            {/* Specs */}
            {product.specs && (
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Specifications</h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {Object.entries(product.specs).map(([k, v]) => (
                    <div key={k}>
                      <p className="text-xs text-gray-400">{k}</p>
                      <p className="text-sm font-medium text-gray-800">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12 border-t border-gray-200">
          <div className="flex gap-8 border-b border-gray-200 mb-6">
            {["description", "specifications", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-medium capitalize border-b-2 transition-colors ${activeTab === tab ? "border-gray-900 text-gray-900" : "border-transparent text-gray-500 hover:text-gray-700"}`}
              >
                {tab}
              </button>
            ))}
          </div>
          {activeTab === "description" && product.description && (
            <div className="max-w-3xl">
              {product.description.split("\n\n").map((para, i) => (
                <p key={i} className="text-sm text-gray-600 leading-relaxed mb-4">{para}</p>
              ))}
            </div>
          )}
          {activeTab === "specifications" && product.specs && (
            <div className="max-w-2xl grid grid-cols-2 gap-4">
              {Object.entries(product.specs).map(([k, v]) => (
                <div key={k} className="border-b border-gray-100 pb-3">
                  <p className="text-xs text-gray-400 uppercase tracking-wide">{k}</p>
                  <p className="text-sm font-medium text-gray-800">{v}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === "reviews" && (
            <p className="text-sm text-gray-500">No reviews yet.</p>
          )}
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1C2B3A" }}>Frequently Bought Together</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {related.map((rp) => (
                <ProductCard key={rp.id} product={rp} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Volume Discount Modal */}
      {showVolume && product.volumeDiscounts && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative">
            <button onClick={() => setShowVolume(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
            <h3 className="text-lg font-bold mb-1" style={{ color: "#1C2B3A" }}>Volume Pricing</h3>
            <p className="text-sm text-gray-500 mb-4">{product.name}</p>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="pb-2 text-left text-xs text-gray-500 font-medium">Qty</th>
                  <th className="pb-2 text-left text-xs text-gray-500 font-medium">Price/Unit</th>
                  <th className="pb-2 text-left text-xs text-gray-500 font-medium">Discount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2 text-gray-700">1–4</td>
                  <td className="py-2 font-medium">{formatPrice(product.price)}</td>
                  <td className="py-2 text-gray-400">—</td>
                </tr>
                {product.volumeDiscounts.map((d, i) => {
                  const nextMin = product.volumeDiscounts![i + 1]?.minQty;
                  const qtyLabel = nextMin ? `${d.minQty}–${nextMin - 1}` : `${d.minQty}+`;
                  return (
                    <tr key={d.minQty} className="border-b border-gray-100">
                      <td className="py-2 text-gray-700">{qtyLabel}</td>
                      <td className="py-2 font-medium">{formatPrice(d.pricePerUnit)}</td>
                      <td className="py-2 font-semibold" style={{ color: "#E8611A" }}>-{d.discount}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button
              onClick={() => setShowVolume(false)}
              className="mt-5 w-full py-2.5 rounded text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#1C2B3A" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}