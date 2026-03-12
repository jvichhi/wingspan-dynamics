export interface OrderLineItem {
  id: string;
  name: string;
  image: string;
  attributes: { label: string; value: string }[];
  unitPrice: number;
  qty: number;
}

export interface OrderGroup {
  status: "Processing" | "Shipped" | "Delivered" | "Cancelled";
  dateLabel: string;
  items: OrderLineItem[];
}

export interface DirOrder {
  id: string; // numeric, used in URL
  displayId: string; // "#5432000128"
  poNumber: string;
  placedDate: string;
  paymentMethod: string;
  costCenter: string;
  status: string;
  statusColor: string;
  delivery: string | null;
  deliveryNote: string | null;
  listImage: string;
  listProduct: string;
  listQty: number;
  source: string;
  groups: OrderGroup[];
  shippedTo: {
    partner: string;
    address1: string;
    address2: string;
    cityStateZip: string;
    phone: string;
  };
  billedTo: {
    name: string;
    company: string;
    address1: string;
    address2: string;
    cityStateZip: string;
    phone: string;
  };
  subtotal: number;
  shipping: number;
  tax: number;
  savings: number;
  total: number;
}

export const dirOrders: DirOrder[] = [
  {
    id: "5432000128",
    displayId: "#5432000128",
    poNumber: "PO-2025-00441",
    placedDate: "January 22, 2025",
    paymentMethod: "Net 30 Account",
    costCenter: "AGRI-OPS-001",
    status: "Shipped",
    statusColor: "text-blue-600",
    delivery: "In Transit",
    deliveryNote: "First expected delivery: Jan 25, 2025",
    listImage: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=120&q=80",
    listProduct: "SKYSTREAM Pro System 16 + Accessories",
    listQty: 3,
    source: "Purchased Online",
    groups: [
      {
        status: "Shipped",
        dateLabel: "Shipped on: Jan 23, 2025",
        items: [
          {
            id: "li-001",
            name: "SKYSTREAM Pro 16 Complete System",
            image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=120&q=80",
            attributes: [
              { label: "Color", value: "Midnight Black" },
              { label: "Camera", value: "4K HDR + Multispectral" },
            ],
            unitPrice: 4700.0,
            qty: 3,
          },
        ],
      },
      {
        status: "Processing",
        dateLabel: "Placed on: Jan 22, 2025",
        items: [
          {
            id: "li-002",
            name: "HD Payload Camera Module",
            image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=120&q=80",
            attributes: [
              { label: "Compatibility", value: "SKYSTREAM Pro Series" },
              { label: "Resolution", value: "48MP / 4K Video" },
            ],
            unitPrice: 300.0,
            qty: 3,
          },
        ],
      },
    ],
    shippedTo: {
      partner: "<Business Partner>",
      address1: "742 Evergreen Commerce Blvd",
      address2: "Suite 310",
      cityStateZip: "Austin, TX 78758",
      phone: "(512) 555-0184",
    },
    billedTo: {
      name: "Alex Carter",
      company: "Northway Digital Services Inc.",
      address1: "1890 Meridian Park Drive",
      address2: "Floor 5, Office 503",
      cityStateZip: "Denver, CO 80202",
      phone: "(303) 555-0427",
    },
    subtotal: 15000.0,
    shipping: 0.0,
    tax: 1500.0,
    savings: 250.0,
    total: 16250.0,
  },
  {
    id: "5432000127",
    displayId: "#5432000127",
    poNumber: "PO-2025-00438",
    placedDate: "January 18, 2025",
    paymentMethod: "Net 30 Account",
    costCenter: "AGRI-OPS-001",
    status: "In Progress",
    statusColor: "text-orange-500",
    delivery: null,
    deliveryNote: null,
    listImage: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=120&q=80",
    listProduct: "SkyFlow Ranger 2000 - Commercial Unit",
    listQty: 1,
    source: "Purchased Online",
    groups: [
      {
        status: "Processing",
        dateLabel: "Placed on: Jan 18, 2025",
        items: [
          {
            id: "li-003",
            name: "SkyFlow Ranger 2000 Commercial Unit",
            image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=120&q=80",
            attributes: [
              { label: "Color", value: "Tactical Gray" },
              { label: "Configuration", value: "Long-Range Enterprise" },
            ],
            unitPrice: 21500.0,
            qty: 1,
          },
          {
            id: "li-004",
            name: "Enterprise Sensor Package",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=120&q=80",
            attributes: [
              { label: "Type", value: "Multi-spectral + LiDAR" },
              { label: "Compatibility", value: "SkyFlow Ranger Series" },
            ],
            unitPrice: 1200.0,
            qty: 1,
          },
          {
            id: "li-005",
            name: "RC-2000 Ground Control Station",
            image: "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=120&q=80",
            attributes: [
              { label: "Compatibility", value: "SkyFlow Ranger Series" },
              { label: "Display", value: "10.1″ HD Touchscreen" },
            ],
            unitPrice: 800.0,
            qty: 1,
          },
        ],
      },
    ],
    shippedTo: {
      partner: "<Business Partner>",
      address1: "742 Evergreen Commerce Blvd",
      address2: "Suite 310",
      cityStateZip: "Austin, TX 78758",
      phone: "(512) 555-0184",
    },
    billedTo: {
      name: "Alex Carter",
      company: "Northway Digital Services Inc.",
      address1: "1890 Meridian Park Drive",
      address2: "Floor 5, Office 503",
      cityStateZip: "Denver, CO 80202",
      phone: "(303) 555-0427",
    },
    subtotal: 23500.0,
    shipping: 0.0,
    tax: 2350.0,
    savings: 950.0,
    total: 24900.0,
  },
  {
    id: "5432000126",
    displayId: "#5432000126",
    poNumber: "PO-2025-00412",
    placedDate: "January 10, 2025",
    paymentMethod: "Net 30 Account",
    costCenter: "AGRI-OPS-002",
    status: "Delivered",
    statusColor: "text-gray-400",
    delivery: null,
    deliveryNote: null,
    listImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=120&q=80",
    listProduct: "Precision Elite Package + Flight Controller",
    listQty: 2,
    source: "Purchased Online",
    groups: [
      {
        status: "Delivered",
        dateLabel: "Delivered on: Jan 13, 2025",
        items: [
          {
            id: "li-006",
            name: "Precision Elite Drone",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=120&q=80",
            attributes: [
              { label: "Color", value: "Matte White" },
              { label: "Camera", value: "RGB Triple Array" },
            ],
            unitPrice: 3500.0,
            qty: 2,
          },
          {
            id: "li-007",
            name: "Precision Flight Controller Pro",
            image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=120&q=80",
            attributes: [
              { label: "Compatibility", value: "Precision Elite Series" },
              { label: "Display", value: "7\" HD Touchscreen" },
            ],
            unitPrice: 500.0,
            qty: 2,
          },
        ],
      },
    ],
    shippedTo: {
      partner: "<Business Partner>",
      address1: "742 Evergreen Commerce Blvd",
      address2: "Suite 310",
      cityStateZip: "Austin, TX 78758",
      phone: "(512) 555-0184",
    },
    billedTo: {
      name: "Alex Carter",
      company: "Northway Digital Services Inc.",
      address1: "1890 Meridian Park Drive",
      address2: "Floor 5, Office 503",
      cityStateZip: "Denver, CO 80202",
      phone: "(303) 555-0427",
    },
    subtotal: 8000.0,
    shipping: 0.0,
    tax: 800.0,
    savings: 50.0,
    total: 8750.0,
  },
  {
    id: "5432789126",
    displayId: "#5432789126",
    poNumber: "PO-2025-00398",
    placedDate: "January 5, 2025",
    paymentMethod: "Net 30 Account",
    costCenter: "SEC-OPS-007",
    status: "Delivered",
    statusColor: "text-gray-400",
    delivery: null,
    deliveryNote: null,
    listImage: "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=120&q=80",
    listProduct: "AirPatrol X8 Surveillance Bundle",
    listQty: 4,
    source: "Purchased Online",
    groups: [
      {
        status: "Delivered",
        dateLabel: "Delivered on: Jan 8, 2025",
        items: [
          {
            id: "li-008",
            name: "AirPatrol X8 Surveillance Drone",
            image: "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=120&q=80",
            attributes: [
              { label: "Color", value: "Stealth Black" },
              { label: "Camera", value: "Dual Thermal + 4K HD" },
            ],
            unitPrice: 6900.0,
            qty: 4,
          },
          {
            id: "li-009",
            name: "Thermal/IR Imaging Module",
            image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=120&q=80",
            attributes: [
              { label: "Resolution", value: "640×512 IR" },
              { label: "Range", value: "~200m detection" },
            ],
            unitPrice: 300.0,
            qty: 4,
          },
        ],
      },
    ],
    shippedTo: {
      partner: "<Business Partner>",
      address1: "742 Evergreen Commerce Blvd",
      address2: "Suite 310",
      cityStateZip: "Austin, TX 78758",
      phone: "(512) 555-0184",
    },
    billedTo: {
      name: "Alex Carter",
      company: "Northway Digital Services Inc.",
      address1: "1890 Meridian Park Drive",
      address2: "Floor 5, Office 503",
      cityStateZip: "Denver, CO 80202",
      phone: "(303) 555-0427",
    },
    subtotal: 28800.0,
    shipping: 0.0,
    tax: 2880.0,
    savings: 480.0,
    total: 31200.0,
  },
  {
    id: "5432000125",
    displayId: "#5432000125",
    poNumber: "PO-2024-01892",
    placedDate: "December 28, 2024",
    paymentMethod: "Net 30 Account",
    costCenter: "IND-OPS-003",
    status: "Delivered",
    statusColor: "text-gray-400",
    delivery: null,
    deliveryNote: null,
    listImage: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=120&q=80",
    listProduct: "SkyStream Industrial 5000 Fleet Kit",
    listQty: 2,
    source: "Purchased Online",
    groups: [
      {
        status: "Delivered",
        dateLabel: "Delivered on: Jan 2, 2025",
        items: [
          {
            id: "li-010",
            name: "SkyStream Industrial 5000 Drone",
            image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=120&q=80",
            attributes: [
              { label: "Configuration", value: "Heavy Lift + Precision" },
              { label: "Max Payload", value: "15 kg" },
            ],
            unitPrice: 17500.0,
            qty: 2,
          },
          {
            id: "li-011",
            name: "Industrial Sensor Suite",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=120&q=80",
            attributes: [
              { label: "Type", value: "LiDAR + Multispectral + Gas" },
              { label: "Compatibility", value: "Industrial 5000 Series" },
            ],
            unitPrice: 1750.0,
            qty: 2,
          },
          {
            id: "li-012",
            name: "Fleet Management Software License (1yr)",
            image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=120&q=80",
            attributes: [
              { label: "Plan", value: "Enterprise" },
              { label: "Cloud Integration", value: "Included" },
            ],
            unitPrice: 500.0,
            qty: 2,
          },
        ],
      },
    ],
    shippedTo: {
      partner: "<Business Partner>",
      address1: "742 Evergreen Commerce Blvd",
      address2: "Suite 310",
      cityStateZip: "Austin, TX 78758",
      phone: "(512) 555-0184",
    },
    billedTo: {
      name: "Alex Carter",
      company: "Northway Digital Services Inc.",
      address1: "1890 Meridian Park Drive",
      address2: "Floor 5, Office 503",
      cityStateZip: "Denver, CO 80202",
      phone: "(303) 555-0427",
    },
    subtotal: 39500.0,
    shipping: 0.0,
    tax: 3950.0,
    savings: 950.0,
    total: 42500.0,
  },
];