import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/components/ui/ProductCard";
import { Tag, Zap, Clock } from "lucide-react";

const offers = [
  {
    id: "offer-1",
    type: "Volume Discount",
    badge: "Fleet Deal",
    title: "Agri T15 Sprayer — Fleet Pricing",
    description:
      "Purchase 5 or more units and unlock tiered volume discounts up to 35% off per unit. Perfect for large-scale agricultural operations.",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=700&q=80",
    productId: "agri-t15-sprayer",
    originalPrice: 40450,
    discountedPrice: 38430,
    discountLabel: "Save up to 35%",
    expiresIn: null,
    tiers: [
      { qty: "5–9 units", price: 38430, discount: "10% off" },
      { qty: "10–14 units", price: 36400, discount: "15% off" },
      { qty: "15–29 units", price: 34380, discount: "20% off" },
      { qty: "30–49 units", price: 32360, discount: "25% off" },
      { qty: "50+ units", price: 28315, discount: "35% off" },
    ],
    ctaLabel: "Shop Now",
    ctaHref: "/products/agri-t15-sprayer",
    badgeColor: "#1d4ed8",
    badgeBg: "#dbeafe",
  },
  {
    id: "offer-2",
    type: "Bundle",
    badge: "Bundle & Save",
    title: "Agri T15 Starter Bundle",
    description:
      "Get the Agri T15 Sprayer, Irrigation Attachment, and High-Capacity Spray Tank together. Save $4,500 off individual pricing.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&q=80",
    productId: "agri-t15-sprayer",
    originalPrice: 58783,
    discountedPrice: 54283,
    discountLabel: "Save $4,500",
    expiresIn: "48h",
    ctaLabel: "Shop Bundle",
    ctaHref: "/products/agri-t15-sprayer",
    badgeColor: "#15803d",
    badgeBg: "#dcfce7",
  },
  {
    id: "offer-3",
    type: "Clearance",
    badge: "Limited Stock",
    title: "FieldMapper H10 — Clearance Deal",
    description:
      "Only 3 units remaining at this price. Powerful field mapping drone with 4-hour flight time and 200 ha coverage.",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=700&q=80",
    productId: "fieldmapper-h10",
    originalPrice: 15000,
    discountedPrice: 11900,
    discountLabel: "Save $3,100",
    expiresIn: "24h",
    ctaLabel: "Buy Now",
    ctaHref: "/products/fieldmapper-h10",
    badgeColor: "#b91c1c",
    badgeBg: "#fee2e2",
  },
  {
    id: "offer-4",
    type: "Contract Pricing",
    badge: "Contract Rate",
    title: "AgriPro A6 — Contract Pricing Active",
    description:
      "Your current contract includes preferred pricing on all AgriPro A6 units. This rate is exclusive to AgriCo accounts.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=700&q=80",
    productId: "agripro-a6",
    originalPrice: 15000,
    discountedPrice: 10800,
    discountLabel: "Contract Rate",
    expiresIn: null,
    ctaLabel: "Shop Now",
    ctaHref: "/products/agripro-a6",
    badgeColor: "#a16207",
    badgeBg: "#fef9c3",
  },
  {
    id: "offer-5",
    type: "Seasonal",
    badge: "Spring Special",
    title: "Accessories & Parts — 20% Off",
    description:
      "Stock up for the season. All replacement kits, batteries, and attachments are 20% off this month only.",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=700&q=80",
    productId: null,
    originalPrice: null,
    discountedPrice: null,
    discountLabel: "20% Off All Accessories",
    expiresIn: "15d",
    ctaLabel: "Browse Accessories",
    ctaHref: "/industries/agriculture",
    badgeColor: "#E8611A",
    badgeBg: "#fff0e8",
  },
];

export default function OffersPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <nav className="text-xs text-gray-400 mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            {" / "}
            <span className="text-gray-600">Special Offers</span>
          </nav>
          <div className="flex items-center gap-3 mb-2">
            <Tag size={22} style={{ color: "#E8611A" }} />
            <h1 className="text-2xl font-bold" style={{ color: "#1C2B3A" }}>Special Offers</h1>
          </div>
          <p className="text-sm text-gray-500">
            Exclusive deals, volume pricing, and contract rates available to your account.
          </p>
        </div>

        {/* Offer Cards */}
        <div className="space-y-5">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative w-full md:w-64 h-48 md:h-auto flex-shrink-0">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover"
                  />
                  {offer.expiresIn && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      <Clock size={11} /> Expires in {offer.expiresIn}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded mb-2 inline-block"
                        style={{ backgroundColor: offer.badgeBg, color: offer.badgeColor }}
                      >
                        {offer.badge}
                      </span>
                      <h2 className="text-lg font-bold" style={{ color: "#1C2B3A" }}>
                        {offer.title}
                      </h2>
                    </div>
                    {offer.originalPrice && offer.discountedPrice && (
                      <div className="text-right flex-shrink-0">
                        <p className="text-xs text-gray-400 line-through">{formatPrice(offer.originalPrice)}</p>
                        <p className="text-xl font-bold" style={{ color: "#1C2B3A" }}>{formatPrice(offer.discountedPrice)}</p>
                        <span
                          className="text-xs font-semibold px-1.5 py-0.5 rounded"
                          style={{ backgroundColor: "#fff0e8", color: "#E8611A" }}
                        >
                          {offer.discountLabel}
                        </span>
                      </div>
                    )}
                    {!offer.originalPrice && (
                      <span
                        className="text-sm font-bold px-3 py-1.5 rounded flex-shrink-0"
                        style={{ backgroundColor: offer.badgeBg, color: offer.badgeColor }}
                      >
                        {offer.discountLabel}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-500 mb-4">{offer.description}</p>

                  {/* Volume tiers (if applicable) */}
                  {offer.tiers && (
                    <div className="overflow-x-auto mb-4">
                      <table className="text-xs w-full max-w-sm">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="pb-1.5 text-left text-gray-400 font-medium">Quantity</th>
                            <th className="pb-1.5 text-left text-gray-400 font-medium">Price/Unit</th>
                            <th className="pb-1.5 text-left text-gray-400 font-medium">Discount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {offer.tiers.map((tier) => (
                            <tr key={tier.qty} className="border-b border-gray-100">
                              <td className="py-1.5 text-gray-700">{tier.qty}</td>
                              <td className="py-1.5 font-medium text-gray-800">{formatPrice(tier.price)}</td>
                              <td className="py-1.5 font-semibold" style={{ color: "#E8611A" }}>{tier.discount}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  <Link
                    href={offer.ctaHref}
                    className="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#1C2B3A" }}
                  >
                    <Zap size={14} /> {offer.ctaLabel}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}