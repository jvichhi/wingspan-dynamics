import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "compact";
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: price % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(price);
}

export default function ProductCard({ product, variant = "default" }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
        {/* Image */}
        <div className="relative bg-gray-100 overflow-hidden" style={{ aspectRatio: "4/3" }}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          />
          {product.isNew && (
            <span
              className="absolute top-2 right-2 text-white text-xs font-semibold px-2 py-0.5 rounded"
              style={{ backgroundColor: "#E8611A" }}
            >
              New
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-3">
          <p className="text-xs text-gray-500 mb-1">{product.category}</p>
          <h3 className="text-sm font-semibold text-gray-900 leading-tight mb-2 line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}