export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  price: number;
  originalPrice: number;
  image: string;
  images?: string[];
  badge?: string;
  description?: string;
  shortDescription?: string;
  specs?: Record<string, string>;
  features?: { icon: string; label: string; sublabel?: string }[];
  colors?: { name: string; hex: string }[];
  configurations?: string[];
  inStock?: number;
  compatibility?: string;
  flowRate?: string;
  volumeDiscounts?: VolumeDiscount[];
  relatedProducts?: string[];
  isNew?: boolean;
}

export interface VolumeDiscount {
  minQty: number;
  pricePerUnit: number;
  discount: number;
}

export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedConfiguration?: string;
  unitPrice: number;
  lineTotal: number;
  appliedDiscounts?: AppliedDiscount[];
}

export interface AppliedDiscount {
  code: string;
  amount: number;
  label: string;
}

export interface Cart {
  id: string;
  items: CartItem[];
  subtotal: number;
  totalSavings: number;
  shippingEstimate: number | null;
  taxEstimate: number | null;
  estimatedTotal: number;
  promoCodes: string[];
}

export interface Address {
  id: string;
  name: string;
  company?: string;
  division?: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  purchaseOrderNumber?: string;
  placedDate: string;
  status: string;
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: string;
  costCenter?: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  salesTax: number;
  totalSavings: number;
  total: number;
}

export interface OrderItem {
  productId: string;
  name: string;
  image: string;
  category: string;
  attributes: Record<string, string>;
  itemPrice: number;
  quantity: number;
  total: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  slug: string;
}

export interface PromoCode {
  code: string;
  discountType: "percentage" | "fixed";
  discountValue: number;
  label: string;
}

export interface FilterOption {
  label: string;
  value: string;
  checked: boolean;
}

export interface FilterGroup {
  id: string;
  label: string;
  options: FilterOption[];
  expanded: boolean;
}