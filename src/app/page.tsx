import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ui/ProductCard";
import { getFeaturedProducts, getBestSellers } from "@/lib/mock-data/products";
import { ChevronRight, ChevronLeft, Tag, Truck, HeadphonesIcon, ArrowRight } from "lucide-react";

const categories = [
  { name: "Drones", image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=120&q=80", href: "/industries/agriculture" },
  { name: "Attachments", image: "https://images.unsplash.com/photo-1581093804475-577d72e35a2f?w=120&q=80", href: "/industries/agriculture" },
  { name: "Batteries", image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=120&q=80", href: "/industries/agriculture" },
  { name: "Sensors", image: "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=120&q=80", href: "/industries/agriculture" },
  { name: "Replacements", image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=120&q=80", href: "/industries/agriculture" },
  { name: "Remotes", image: "https://images.unsplash.com/photo-1596566791891-695c72c98ce0?w=120&q=80", href: "/industries/agriculture" },
  { name: "Cameras", image: "https://images.unsplash.com/photo-1589872307379-0ffdf9a34b8f?w=120&q=80", href: "/industries/agriculture" },
  { name: "Cargo containers", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=120&q=80", href: "/industries/agriculture" },
];

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const bestSellers = getBestSellers();

  return (
    <div>
      {/* B2B Welcome Banner */}
      <div className="text-white py-4 px-8" style={{ backgroundColor: "#2a3f56" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold">Welcome, John</h2>
            <p className="text-sm text-gray-300">
              Centralized access to your orders, contracts, and billing information.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/order-confirmation/ord-0000000001"
              className="flex items-center gap-2 bg-white bg-opacity-10 hover:bg-opacity-20 border border-white border-opacity-30 px-4 py-2 rounded text-sm font-medium transition-colors"
            >
              <span>📋</span> Orders
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 bg-white bg-opacity-10 hover:bg-opacity-20 border border-white border-opacity-30 px-4 py-2 rounded text-sm font-medium transition-colors"
            >
              <span>🧾</span> Invoices
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 bg-white bg-opacity-10 hover:bg-opacity-20 border border-white border-opacity-30 px-4 py-2 rounded text-sm font-medium transition-colors"
            >
              <span>📄</span> Contracts
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 bg-white bg-opacity-10 hover:bg-opacity-20 border border-white border-opacity-30 px-4 py-2 rounded text-sm font-medium transition-colors"
            >
              <span>🏢</span> B2B Account Center
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ color: "#1C2B3A" }}>
                Drones &amp; Fleet Management for your business
              </h1>
              <p className="text-gray-500 text-base mb-6">
                Drones, replacement parts, and accessories built for reliability, performance, and scale.
              </p>
              <div className="flex gap-3">
                <button className="opacity-60 hover:opacity-100 border border-gray-400 rounded-full w-9 h-9 flex items-center justify-center">
                  <ChevronLeft size={18} />
                </button>
                <button
                  className="hover:opacity-90 border rounded-full w-9 h-9 flex items-center justify-center text-white"
                  style={{ backgroundColor: "#1C2B3A", borderColor: "#1C2B3A" }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Right: Hero image + promo card */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80"
                  alt="Agri T15 Sprayer drone in field"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay card */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-8"
                >
                  <div className="inline-flex items-center gap-2 bg-white text-xs font-medium px-2 py-1 rounded mb-3 w-fit">
                    🚚 Same-Day Shipping Available
                  </div>
                  <h2 className="text-white text-2xl font-bold leading-tight mb-3">
                    Fast replacement parts<br />for your drones
                  </h2>
                  <div className="flex flex-wrap gap-3 text-white text-xs mb-4">
                    <span>✅ Quick Turnaround</span>
                    <span>✅ Same-Day Dispatch</span>
                    <span>✅ OEM Quality Parts</span>
                  </div>
                  <Link
                    href="/industries/agriculture"
                    className="inline-block bg-white text-gray-900 px-5 py-2 rounded font-semibold text-sm hover:bg-gray-100 transition-colors w-fit"
                  >
                    Explore Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Icons Row */}
      <section className="border-t border-b border-gray-200 py-6 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="flex flex-col items-center gap-2 flex-shrink-0 group"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 group-hover:border-orange-400 transition-colors">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="text-xs text-gray-600 text-center whitespace-nowrap group-hover:text-orange-500 transition-colors">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Additions */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8 items-start">
            {/* Left text */}
            <div>
              <h2 className="text-3xl font-bold mb-3" style={{ color: "#1C2B3A" }}>
                Latest Additions
              </h2>
              <p className="text-sm text-gray-500 mb-5">
                Stay ahead with our newest drones, tools, and modules built for demanding industrial
                applications.
              </p>
              <Link
                href="/industries/agriculture"
                className="inline-flex items-center gap-2 text-sm font-semibold border border-gray-900 px-4 py-2 rounded hover:bg-gray-900 hover:text-white transition-colors"
                style={{ color: "#1C2B3A" }}
              >
                Discover the Collection <ArrowRight size={14} />
              </Link>
            </div>

            {/* Product cards */}
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Help Banner */}
      <section className="relative py-16 overflow-hidden" style={{ backgroundColor: "#1C2B3A" }}>
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <p className="text-sm text-gray-300 mb-1">Have a question or need assistance?</p>
            <h2 className="text-3xl font-bold">We are here to help</h2>
          </div>
          <Link
            href="#"
            className="bg-white text-gray-900 px-6 py-3 rounded font-semibold text-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* Tailored to Operations */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
            Multiple Variants, Since 1974
          </p>
          <h2 className="text-3xl font-bold mb-8" style={{ color: "#1C2B3A" }}>
            Tailored to your Operations.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
              <div className="relative h-56">
                <Image
                  src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=700&q=80"
                  alt="Agri T15 Sprayer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1C2B3A" }}>
                  Agri T15 Sprayer — Advanced Field Monitoring
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Designed to help farmers monitor crops, optimize yields, and make data-driven
                  decisions—fast, efficient, and reliable.
                </p>
                <Link
                  href="/products/agri-t15-sprayer"
                  className="inline-flex items-center gap-2 text-sm font-semibold border rounded px-4 py-2 hover:bg-gray-900 hover:text-white transition-colors"
                  style={{ borderColor: "#1C2B3A", color: "#1C2B3A" }}
                >
                  Discover Agri T15 All <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
              <div className="relative h-56">
                <Image
                  src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=700&q=80"
                  alt="AirParcel C12"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1C2B3A" }}>
                  AirParcel C12 — Efficient deliveries
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Built to transport medium-sized packages quickly and safely across urban and
                  industrial environments.
                </p>
                <Link
                  href="/products/airparcel-c12"
                  className="inline-flex items-center gap-2 text-sm font-semibold border rounded px-4 py-2 hover:bg-gray-900 hover:text-white transition-colors"
                  style={{ borderColor: "#1C2B3A", color: "#1C2B3A" }}
                >
                  Discover AirParcel C12 <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#f0f4f8" }}
              >
                <Tag size={22} style={{ color: "#1C2B3A" }} />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1" style={{ color: "#1C2B3A" }}>
                  Great Prices
                </h4>
                <p className="text-sm text-gray-500">
                  Affordable prices without cutting corners.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#f0f4f8" }}
              >
                <Truck size={22} style={{ color: "#1C2B3A" }} />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1" style={{ color: "#1C2B3A" }}>
                  Same day shipment
                </h4>
                <p className="text-sm text-gray-500">
                  Order by 6pm and get it ship the same day.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#f0f4f8" }}
              >
                <HeadphonesIcon size={22} style={{ color: "#1C2B3A" }} />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1" style={{ color: "#1C2B3A" }}>
                  Here for you
                </h4>
                <p className="text-sm text-gray-500">
                  Premium customer service after and before you buy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Selling Equipment */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: "#1C2B3A" }}>
            Our Best Selling Equipment
          </h2>
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {bestSellers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {/* Carousel arrows */}
            <button className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:shadow-md transition-shadow hidden md:flex">
              <ChevronLeft size={18} />
            </button>
            <button className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:shadow-md transition-shadow hidden md:flex">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}