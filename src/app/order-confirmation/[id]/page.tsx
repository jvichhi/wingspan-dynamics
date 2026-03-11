import Image from "next/image";
import Link from "next/link";
import { mockOrders } from "@/lib/mock-data/orders";
import { formatPrice } from "@/components/ui/ProductCard";
import { CheckCircle, Package, Truck, FileText } from "lucide-react";

export default async function OrderConfirmationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const order = mockOrders.find((o) => o.id === id) || mockOrders[0];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-10">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle size={56} style={{ color: "#22c55e" }} />
          </div>
          <h1 className="text-3xl font-bold mb-2" style={{ color: "#1C2B3A" }}>
            Order Confirmed!
          </h1>
          <p className="text-gray-500 text-sm mb-1">
            Thank you, {order.shippingAddress.name.split(" ")[1]}! Your order has been placed.
          </p>
          <p className="text-gray-500 text-sm">
            A confirmation email has been sent to your registered address.
          </p>
        </div>

        {/* Order Summary Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 pb-5 border-b border-gray-200">
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Order Number</p>
              <p className="text-lg font-bold" style={{ color: "#1C2B3A" }}>#{order.orderNumber}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Purchase Order</p>
              <p className="text-sm font-semibold text-gray-700">{order.purchaseOrderNumber}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Placed</p>
              <p className="text-sm font-semibold text-gray-700">{order.placedDate}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Status</p>
              <span
                className="text-xs font-semibold px-2 py-1 rounded"
                style={{ backgroundColor: "#dbeafe", color: "#1d4ed8" }}
              >
                {order.status}
              </span>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Payment</p>
              <p className="text-sm font-semibold text-gray-700">{order.paymentMethod}</p>
            </div>
          </div>

          {/* Items */}
          <div className="space-y-4 mb-5">
            {order.items.map((item) => (
              <div key={item.productId} className="flex gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 mb-0.5">{item.category}</p>
                  <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                  {item.attributes && (
                    <div className="flex flex-wrap gap-2 mt-1">
                      {Object.entries(item.attributes).map(([k, v]) => (
                        <span key={k} className="text-xs text-gray-500">{k}: {v}</span>
                      ))}
                    </div>
                  )}
                  <p className="text-xs text-gray-500 mt-1">Qty: {item.quantity} × {formatPrice(item.itemPrice)}</p>
                </div>
                <p className="text-sm font-bold flex-shrink-0" style={{ color: "#1C2B3A" }}>
                  {formatPrice(item.total)}
                </p>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="border-t border-gray-200 pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span>{formatPrice(order.subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Shipping</span>
              <span className="text-green-600">FREE</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Sales Tax</span>
              <span>{formatPrice(order.salesTax)}</span>
            </div>
            {order.totalSavings > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-500">Total Savings</span>
                <span className="text-green-600">-{formatPrice(order.totalSavings)}</span>
              </div>
            )}
            <div className="flex justify-between border-t border-gray-200 pt-3">
              <span className="font-bold">Total</span>
              <span className="font-bold text-base" style={{ color: "#1C2B3A" }}>
                {formatPrice(order.total)}
              </span>
            </div>
          </div>
        </div>

        {/* Shipping + Billing */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Truck size={16} /> Shipping Address
            </h3>
            <p className="text-sm text-gray-700 font-medium">{order.shippingAddress.name}</p>
            <p className="text-xs text-gray-500">{order.shippingAddress.company}</p>
            <p className="text-xs text-gray-500">{order.shippingAddress.division}</p>
            <p className="text-xs text-gray-500">{order.shippingAddress.street}</p>
            <p className="text-xs text-gray-500">
              {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}
            </p>
            <p className="text-xs text-gray-500">{order.shippingAddress.phone}</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <FileText size={16} /> Billing Address
            </h3>
            <p className="text-sm text-gray-700 font-medium">{order.billingAddress.name}</p>
            <p className="text-xs text-gray-500">{order.billingAddress.company}</p>
            <p className="text-xs text-gray-500">{order.billingAddress.division}</p>
            <p className="text-xs text-gray-500">{order.billingAddress.street}</p>
            <p className="text-xs text-gray-500">
              {order.billingAddress.city}, {order.billingAddress.state} {order.billingAddress.zip}
            </p>
            <p className="text-xs text-gray-500">{order.billingAddress.phone}</p>
          </div>
        </div>

        {/* Tracking / Status Steps */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-5">
          <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <Package size={16} /> Order Status
          </h3>
          <div className="flex items-start gap-0">
            {[
              { label: "Order\nReceived", done: true },
              { label: "Processing", done: false },
              { label: "Shipped", done: false },
              { label: "Out for\nDelivery", done: false },
              { label: "Delivered", done: false },
            ].map((step, i, arr) => (
              <div key={step.label} className="flex-1 flex flex-col items-center relative">
                {i < arr.length - 1 && (
                  <div
                    className="absolute top-3.5 left-1/2 w-full h-0.5"
                    style={{ backgroundColor: step.done ? "#1C2B3A" : "#e5e7eb" }}
                  />
                )}
                <div
                  className="w-7 h-7 rounded-full border-2 flex items-center justify-center z-10 text-xs"
                  style={
                    step.done
                      ? { backgroundColor: "#1C2B3A", borderColor: "#1C2B3A", color: "white" }
                      : { backgroundColor: "white", borderColor: "#d1d5db", color: "#9ca3af" }
                  }
                >
                  {step.done ? "✓" : i + 1}
                </div>
                <p className="text-xs text-center mt-2 text-gray-500 whitespace-pre-line leading-tight">
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-2.5 rounded border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Continue Shopping
          </Link>
          <Link
            href="/industries/agriculture"
            className="px-6 py-2.5 rounded text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#1C2B3A" }}
          >
            Browse More Products
          </Link>
        </div>
      </div>
    </div>
  );
}