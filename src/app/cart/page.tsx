"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { mockCart } from "@/lib/mock-data/cart";
import { formatPrice } from "@/components/ui/ProductCard";
import { Trash2, Tag, ChevronRight, ShoppingCart } from "lucide-react";

export default function CartPage() {
  const [items, setItems] = useState(mockCart.items);
  const [promoInput, setPromoInput] = useState("");
  const [appliedCodes, setAppliedCodes] = useState(mockCart.promoCodes);

  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const savings = items.reduce(
    (sum, item) => sum + (item.appliedDiscounts?.reduce((s, d) => s + d.amount, 0) || 0),
    0
  );

  const updateQty = (productId: string, qty: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.productId === productId ? { ...item, quantity: Math.max(1, qty) } : item
      )
    );
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.productId !== productId));
  };

  const applyPromo = () => {
    if (promoInput && !appliedCodes.includes(promoInput)) {
      setAppliedCodes((prev) => [...prev, promoInput]);
      setPromoInput("");
    }
  };

  const removePromo = (code: string) => {
    setAppliedCodes((prev) => prev.filter((c) => c !== code));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <ShoppingCart size={22} style={{ color: "#1C2B3A" }} />
          <h1 className="text-2xl font-bold" style={{ color: "#1C2B3A" }}>
            Cart #{mockCart.id}
          </h1>
          <span className="text-sm text-gray-400">{items.length} items</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.productId} className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex gap-4">
                  {/* Image */}
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">{item.product.category}</p>
                        <Link
                          href={`/products/${item.productId}`}
                          className="text-sm font-semibold text-gray-900 hover:underline leading-tight"
                        >
                          {item.product.name}
                        </Link>
                        {item.selectedColor && (
                          <p className="text-xs text-gray-500 mt-1">Color: {item.selectedColor}</p>
                        )}
                        {item.selectedConfiguration && (
                          <p className="text-xs text-gray-500">Config: {item.selectedConfiguration}</p>
                        )}
                        {item.product.compatibility && (
                          <p className="text-xs text-gray-500">
                            Compatibility: {item.product.compatibility}
                          </p>
                        )}
                        {item.product.flowRate && (
                          <p className="text-xs text-gray-500">
                            Flow Rate: {item.product.flowRate}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.productId)}
                        className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    {/* Discounts applied */}
                    {item.appliedDiscounts && item.appliedDiscounts.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {item.appliedDiscounts.map((d) => (
                          <span
                            key={d.code}
                            className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: "#fff0e8", color: "#E8611A" }}
                          >
                            <Tag size={10} />
                            {d.label}: -${d.amount.toFixed(2)}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Qty + Price */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                        <button
                          onClick={() => updateQty(item.productId, item.quantity - 1)}
                          className="px-2.5 py-1 text-gray-600 hover:bg-gray-50 text-base leading-none"
                        >
                          −
                        </button>
                        <span className="px-3 py-1 text-sm border-x border-gray-300">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQty(item.productId, item.quantity + 1)}
                          className="px-2.5 py-1 text-gray-600 hover:bg-gray-50 text-base leading-none"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-base font-bold" style={{ color: "#1C2B3A" }}>
                          {formatPrice(item.unitPrice * item.quantity)}
                        </p>
                        <p className="text-xs text-gray-400">
                          {formatPrice(item.unitPrice)} each
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Promo Codes */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Tag size={16} /> Promo Codes
              </h3>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  placeholder="Enter promo code"
                  className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
                />
                <button
                  onClick={applyPromo}
                  className="px-4 py-2 rounded text-sm font-medium text-white hover:opacity-90"
                  style={{ backgroundColor: "#1C2B3A" }}
                >
                  Apply
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {appliedCodes.map((code) => (
                  <span
                    key={code}
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border"
                    style={{ borderColor: "#E8611A", color: "#E8611A" }}
                  >
                    {code}
                    <button
                      onClick={() => removePromo(code)}
                      className="hover:opacity-70"
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 p-5 sticky top-28">
              <h3 className="text-base font-bold mb-4" style={{ color: "#1C2B3A" }}>
                Order Summary
              </h3>

              <div className="space-y-3 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal ({items.length} items)</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                {savings > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Discounts</span>
                    <span className="font-medium text-green-600">-{formatPrice(savings)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping</span>
                  <span className="text-gray-400 text-xs">Calculated at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Tax</span>
                  <span className="text-gray-400 text-xs">Calculated at checkout</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-5">
                <div className="flex justify-between">
                  <span className="font-bold text-sm">Estimated Total</span>
                  <span className="font-bold text-base" style={{ color: "#1C2B3A" }}>
                    {formatPrice(subtotal - savings)}
                  </span>
                </div>
                {savings > 0 && (
                  <p className="text-xs text-green-600 mt-1 text-right">
                    You save {formatPrice(savings)}!
                  </p>
                )}
              </div>

              <Link
                href="/checkout"
                className="w-full flex items-center justify-center gap-2 text-white font-semibold py-3 rounded text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#1C2B3A" }}
              >
                Proceed to Checkout <ChevronRight size={16} />
              </Link>

              <Link
                href="/industries/agriculture"
                className="w-full flex items-center justify-center mt-3 text-sm text-gray-500 hover:text-gray-700 underline"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}