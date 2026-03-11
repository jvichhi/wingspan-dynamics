"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { mockCart } from "@/lib/mock-data/cart";
import { savedAddresses, savedPaymentMethods } from "@/lib/mock-data/orders";
import { formatPrice } from "@/components/ui/ProductCard";
import { ChevronDown, Check, CreditCard, ChevronRight } from "lucide-react";

const steps = ["Shipping", "Payment", "Review"];

export default function CheckoutPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState(savedAddresses[0].id);
  const [selectedPayment, setSelectedPayment] = useState(savedPaymentMethods[0].id);
  const [poNumber, setPoNumber] = useState("0000076541");
  const [costCenter, setCostCenter] = useState("Cost Center");
  const [notes, setNotes] = useState("");

  const subtotal = mockCart.subtotal;
  const savings = mockCart.totalSavings;
  const shipping = 0;
  const taxRate = 0.1;
  const tax = (subtotal - savings) * taxRate;
  const total = subtotal - savings + shipping + tax;

  const address = savedAddresses.find((a) => a.id === selectedAddress)!;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <nav className="text-xs text-gray-400 mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            {" / "}
            <Link href="/cart" className="hover:underline">Cart</Link>
            {" / "}
            <span className="text-gray-600">Checkout</span>
          </nav>
          <h1 className="text-2xl font-bold" style={{ color: "#1C2B3A" }}>Checkout</h1>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center gap-0 mb-8">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center">
              <button
                onClick={() => i <= step && setStep(i)}
                className="flex items-center gap-2"
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors"
                  style={
                    i < step
                      ? { backgroundColor: "#1C2B3A", borderColor: "#1C2B3A", color: "white" }
                      : i === step
                      ? { backgroundColor: "#E8611A", borderColor: "#E8611A", color: "white" }
                      : { backgroundColor: "white", borderColor: "#d1d5db", color: "#9ca3af" }
                  }
                >
                  {i < step ? <Check size={12} /> : i + 1}
                </div>
                <span
                  className="text-sm font-medium"
                  style={{ color: i === step ? "#E8611A" : i < step ? "#1C2B3A" : "#9ca3af" }}
                >
                  {s}
                </span>
              </button>
              {i < steps.length - 1 && (
                <div className="w-12 h-px mx-3" style={{ backgroundColor: i < step ? "#1C2B3A" : "#d1d5db" }} />
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: Step Content */}
          <div className="lg:col-span-2">
            {/* STEP 0: Shipping */}
            {step === 0 && (
              <div className="space-y-4">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h2 className="text-base font-bold mb-4" style={{ color: "#1C2B3A" }}>
                    Shipping Address
                  </h2>
                  <div className="space-y-3">
                    {savedAddresses.map((addr) => (
                      <label
                        key={addr.id}
                        className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-colors ${selectedAddress === addr.id ? "border-gray-900" : "border-gray-200 hover:border-gray-300"}`}
                      >
                        <input
                          type="radio"
                          name="address"
                          value={addr.id}
                          checked={selectedAddress === addr.id}
                          onChange={() => setSelectedAddress(addr.id)}
                          className="mt-0.5"
                          style={{ accentColor: "#1C2B3A" }}
                        />
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{addr.name}</p>
                          <p className="text-xs text-gray-500">{addr.division}</p>
                          <p className="text-xs text-gray-500">{addr.street}</p>
                          <p className="text-xs text-gray-500">{addr.city}, {addr.state} {addr.zip}</p>
                          <p className="text-xs text-gray-500">{addr.phone}</p>
                        </div>
                      </label>
                    ))}
                    <button className="text-sm font-medium underline" style={{ color: "#E8611A" }}>
                      + Add new address
                    </button>
                  </div>
                </div>

                {/* PO Number + Cost Center */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h2 className="text-base font-bold mb-4" style={{ color: "#1C2B3A" }}>
                    Order Details
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Purchase Order Number</label>
                      <input
                        type="text"
                        value={poNumber}
                        onChange={(e) => setPoNumber(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Cost Center</label>
                      <input
                        type="text"
                        value={costCenter}
                        onChange={(e) => setCostCenter(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-medium text-gray-700 mb-1">Order Notes (optional)</label>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        rows={3}
                        placeholder="Any special instructions..."
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-500 resize-none"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setStep(1)}
                  className="w-full flex items-center justify-center gap-2 text-white font-semibold py-3 rounded text-sm hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#1C2B3A" }}
                >
                  Continue to Payment <ChevronRight size={16} />
                </button>
              </div>
            )}

            {/* STEP 1: Payment */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h2 className="text-base font-bold mb-4" style={{ color: "#1C2B3A" }}>
                    Payment Method
                  </h2>
                  <div className="space-y-3">
                    {/* Account option */}
                    <label className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer ${selectedPayment === "account" ? "border-gray-900" : "border-gray-200"}`}>
                      <input
                        type="radio"
                        name="payment"
                        value="account"
                        checked={selectedPayment === "account"}
                        onChange={() => setSelectedPayment("account")}
                        style={{ accentColor: "#1C2B3A" }}
                      />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">Account (Net 30)</p>
                        <p className="text-xs text-gray-500">Pay on account — invoiced upon shipment</p>
                      </div>
                    </label>

                    {/* Card option */}
                    {savedPaymentMethods.map((pm) => (
                      <label
                        key={pm.id}
                        className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer ${selectedPayment === pm.id ? "border-gray-900" : "border-gray-200"}`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={pm.id}
                          checked={selectedPayment === pm.id}
                          onChange={() => setSelectedPayment(pm.id)}
                          style={{ accentColor: "#1C2B3A" }}
                        />
                        <CreditCard size={18} className="text-gray-500" />
                        <div>
                          <p className="text-sm font-semibold text-gray-800">
                            {pm.label} ending in {pm.last4}
                          </p>
                          <p className="text-xs text-gray-500">Expires {pm.expires}</p>
                        </div>
                      </label>
                    ))}

                    <button className="text-sm font-medium underline" style={{ color: "#E8611A" }}>
                      + Add new payment method
                    </button>
                  </div>
                </div>

                {/* Billing address */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h2 className="text-base font-bold mb-3" style={{ color: "#1C2B3A" }}>
                    Billing Address
                  </h2>
                  <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                    <input type="checkbox" defaultChecked style={{ accentColor: "#1C2B3A" }} />
                    Same as shipping address
                  </label>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(0)}
                    className="flex-1 py-3 rounded border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 flex items-center justify-center gap-2 text-white font-semibold py-3 rounded text-sm hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#1C2B3A" }}
                  >
                    Review Order <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Review */}
            {step === 2 && (
              <div className="space-y-4">
                {/* Items review */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h2 className="text-base font-bold mb-4" style={{ color: "#1C2B3A" }}>
                    Review Items
                  </h2>
                  <div className="space-y-4">
                    {mockCart.items.map((item) => (
                      <div key={item.productId} className="flex gap-3 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                          <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900">{item.product.name}</p>
                          <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                        </div>
                        <p className="text-sm font-bold" style={{ color: "#1C2B3A" }}>
                          {formatPrice(item.unitPrice * item.quantity)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shipping + Payment summary */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Ship To</h3>
                    <p className="text-xs text-gray-600">{address.name}</p>
                    <p className="text-xs text-gray-500">{address.division}</p>
                    <p className="text-xs text-gray-500">{address.street}</p>
                    <p className="text-xs text-gray-500">{address.city}, {address.state} {address.zip}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Payment</h3>
                    <p className="text-xs text-gray-600">
                      {selectedPayment === "account" ? "Account (Net 30)" : `Visa ending in ${savedPaymentMethods[0].last4}`}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">PO: {poNumber}</p>
                    <p className="text-xs text-gray-500">Cost Center: {costCenter}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 rounded border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => router.push("/order-confirmation/ord-0000000001")}
                    className="flex-1 flex items-center justify-center gap-2 text-white font-semibold py-3 rounded text-sm hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#E8611A" }}
                  >
                    Place Order <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right: Order Summary */}
          <div>
            <div className="bg-white rounded-xl border border-gray-200 p-5 sticky top-28">
              <h3 className="text-base font-bold mb-4" style={{ color: "#1C2B3A" }}>
                Order Summary
              </h3>

              {/* Mini cart */}
              <div className="space-y-3 mb-4">
                {mockCart.items.map((item) => (
                  <div key={item.productId} className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded overflow-hidden bg-gray-100 flex-shrink-0">
                      <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-800 truncate">{item.product.name}</p>
                      <p className="text-xs text-gray-400">× {item.quantity}</p>
                    </div>
                    <p className="text-xs font-bold text-gray-800 flex-shrink-0">
                      {formatPrice(item.unitPrice * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Discounts</span>
                  <span className="text-green-600">-{formatPrice(savings)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Sales Tax (10%)</span>
                  <span>{formatPrice(tax)}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="font-bold text-sm">Total</span>
                  <span className="font-bold text-base" style={{ color: "#1C2B3A" }}>
                    {formatPrice(total)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}