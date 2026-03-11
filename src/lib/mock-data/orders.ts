import { Order } from "@/lib/types";

export const mockOrders: Order[] = [
  {
    id: "ord-0000000001",
    orderNumber: "0000000001",
    purchaseOrderNumber: "0000076541",
    placedDate: "March 8, 2026",
    status: "Order Received",
    shippingAddress: {
      id: "addr-1",
      name: "Mr. John Whitfield",
      company: "AgriCo",
      division: "AgriCo Procurement Division",
      street: "4587 Cropview Lane",
      city: "Modesto",
      state: "CA",
      zip: "95358",
      phone: "(209) 555-0172",
    },
    billingAddress: {
      id: "addr-1",
      name: "Mr. John Whitfield",
      company: "AgriCo",
      division: "AgriCo Procurement Division",
      street: "4587 Cropview Lane",
      city: "Modesto",
      state: "CA",
      zip: "95358",
      phone: "(209) 555-0173",
    },
    paymentMethod: "Account",
    costCenter: "Cost Center",
    items: [
      {
        productId: "agri-t15-sprayer",
        name: "Agri T15 Sprayer",
        image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=200&q=80",
        category: "Drones",
        attributes: {
          Color: "Black",
          Camera: "Multispectral + RGB",
        },
        itemPrice: 2500.0,
        quantity: 5,
        total: 7500.0,
      },
      {
        productId: "agri-t15-irrigation-attachment",
        name: "Agri T15 Irrigation attachment",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&q=80",
        category: "Accessories",
        attributes: {
          Compatibility: "AgriScout A6 Series",
          "Flow Rate": "~1.5–3L/min (adjustable)",
        },
        itemPrice: 2500.0,
        quantity: 5,
        total: 31.98,
      },
      {
        productId: "ertc-700-controller-dual",
        name: "ERTC-700 controller Dual with touchscreen",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&q=80",
        category: "Controllers",
        attributes: {
          Compatibility: "AgriScout A6 Series",
        },
        itemPrice: 2500.0,
        quantity: 10,
        total: 190.0,
      },
    ],
    subtotal: 138415.22,
    shipping: 0,
    salesTax: 13841.52,
    totalSavings: 3400.9,
    total: 152256.74,
  },
];

export const savedAddresses = [
  {
    id: "addr-1",
    name: "Mr. John Whitfield, AgriCo Regional Buyer",
    division: "AgriCo Procurement Division",
    street: "4587 Cropview Lane",
    city: "Modesto",
    state: "CA",
    zip: "95358",
    phone: "(209) 555-0172",
  },
  {
    id: "addr-2",
    name: "Mr. John Whitfield, AgriCo Regional Buyer",
    division: "AgriCo Procurement Division",
    street: "1128 Harvest Ridge Road",
    city: "Fargo",
    state: "ND",
    zip: "58103",
    phone: "(701) 555-0264",
  },
];

export const savedPaymentMethods = [
  {
    id: "pay-1",
    type: "visa",
    last4: "3015",
    expires: "1/25",
    label: "Visa Card",
  },
];