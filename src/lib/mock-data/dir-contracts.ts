export interface ContractItem {
  position: string;
  material: string;
  description: string;
  targetQty: number;
  unit: string;
  netPrice: number;
  currency: string;
  totalValue: number;
}

export interface PricingCondition {
  condType: string;
  description: string;
  rate: string;
  currency: string;
  value: number;
}

export interface DirContract {
  id: string; // "CTR-2025-0042" — used in URL slug
  sapNumber: string; // "40001242"
  type: string; // "WK"
  typeName: string; // "Value Contract (WK)"
  title: string;
  customer: string;
  customerId: string;
  start: string;
  end: string;
  value: number;
  currency: string;
  status: string;
  approvalStatus: string;
  overallStatus: string;
  blockingStatus: string;
  // Contract Data
  customerGroup: string;
  customerReference: string;
  shippingConditions: string;
  documentDate: string;
  orderReason: string;
  // Ship-to Party
  shipToParty: string;
  shipToPartyId: string;
  shipToAddress: string;
  // Terms
  incoterms: string;
  incotermsVersion: string;
  incotermsLocation1: string;
  pricingDate: string;
  billingDate: string;
  pricingProcedure: string;
  // Org data
  salesOrganization: string;
  distributionChannel: string;
  division: string;
  // Admin
  createdBy: string;
  createdOn: string;
  changedBy: string;
  changedOn: string;
  // Items
  items: ContractItem[];
  // Pricing
  pricingConditions: PricingCondition[];
}

export const dirContracts: DirContract[] = [
  {
    id: "CTR-2025-0042",
    sapNumber: "40001242",
    type: "WK",
    typeName: "Value Contract (WK)",
    title: "Enterprise Fleet Supply Agreement",
    customer: "AeroLogistics International",
    customerId: "10200042",
    start: "Jan 1, 2025",
    end: "Dec 31, 2025",
    value: 248000.0,
    currency: "USD",
    status: "Active",
    approvalStatus: "Approved",
    overallStatus: "Open",
    blockingStatus: "Not Blocked",
    customerGroup: "Enterprise Accounts (01)",
    customerReference: "ALI-2025-ENT",
    shippingConditions: "Standard (01)",
    documentDate: "12/15/2024",
    orderReason: "Annual Fleet Expansion (005)",
    shipToParty: "AeroLogistics International – Operations",
    shipToPartyId: "10200043",
    shipToAddress: "4800 Commerce Gateway Dr, Suite 200, Houston, TX 77032",
    incoterms: "Delivered at Place (DAP)",
    incotermsVersion: "Incoterms 2020",
    incotermsLocation1: "Houston, TX",
    pricingDate: "01/01/2025",
    billingDate: "01/01/2025",
    pricingProcedure: "Standard B2B (RVAA01)",
    salesOrganization: "Wingspan US Sales Org (1010)",
    distributionChannel: "Direct Sales (10)",
    division: "Drone Systems (20)",
    createdBy: "Sarah Mitchell (WD9980000021)",
    createdOn: "12/15/2024, 09:42:11",
    changedBy: "Sarah Mitchell (WD9980000021)",
    changedOn: "01/03/2025, 14:17:05",
    items: [
      { position: "10", material: "WD-5000", description: "SkyStream Industrial 5000 Drone", targetQty: 10, unit: "EA", netPrice: 17500.0, currency: "USD", totalValue: 175000.0 },
      { position: "20", material: "WD-SENS-IND", description: "Industrial Sensor Suite", targetQty: 10, unit: "EA", netPrice: 1750.0, currency: "USD", totalValue: 17500.0 },
      { position: "30", material: "WD-SW-ENT", description: "Fleet Management Software – Enterprise (1yr)", targetQty: 10, unit: "LIC", netPrice: 500.0, currency: "USD", totalValue: 5000.0 },
      { position: "40", material: "WD-MAINT-Y1", description: "Year 1 Maintenance & Support Package", targetQty: 1, unit: "LT", netPrice: 50500.0, currency: "USD", totalValue: 50500.0 },
    ],
    pricingConditions: [
      { condType: "PR00", description: "Base Price", rate: "—", currency: "USD", value: 248000.0 },
      { condType: "K007", description: "Customer Discount", rate: "0.00%", currency: "USD", value: 0.0 },
      { condType: "MWST", description: "Output Tax", rate: "0.00%", currency: "USD", value: 0.0 },
      { condType: "SKTO", description: "Cash Discount", rate: "2.00%", currency: "USD", value: -4960.0 },
    ],
  },
  {
    id: "CTR-2025-0039",
    sapNumber: "40001239",
    type: "SC",
    typeName: "Service Contract (SC)",
    title: "Annual Maintenance & Support Contract",
    customer: "SkyInspect Solutions Inc.",
    customerId: "10200039",
    start: "Mar 1, 2025",
    end: "Feb 28, 2026",
    value: 45000.0,
    currency: "USD",
    status: "Active",
    approvalStatus: "Approved",
    overallStatus: "Open",
    blockingStatus: "Not Blocked",
    customerGroup: "Commercial Accounts (02)",
    customerReference: "SKYINSP-MAINT-25",
    shippingConditions: "Standard (01)",
    documentDate: "02/10/2025",
    orderReason: "Service Agreement Renewal (010)",
    shipToParty: "SkyInspect Solutions Inc. – HQ",
    shipToPartyId: "10200040",
    shipToAddress: "2201 Technology Pkwy, Floor 3, Atlanta, GA 30339",
    incoterms: "Ex Works (EXW)",
    incotermsVersion: "Incoterms 2020",
    incotermsLocation1: "Atlanta, GA",
    pricingDate: "03/01/2025",
    billingDate: "03/01/2025",
    pricingProcedure: "Service Pricing (RVSA01)",
    salesOrganization: "Wingspan US Sales Org (1010)",
    distributionChannel: "Service Channel (20)",
    division: "Service & Support (30)",
    createdBy: "Daniel Reeves (WD9980000047)",
    createdOn: "02/10/2025, 11:05:33",
    changedBy: "Daniel Reeves (WD9980000047)",
    changedOn: "02/28/2025, 16:22:00",
    items: [
      { position: "10", material: "WD-SVC-PM", description: "Preventive Maintenance Visit (Quarterly)", targetQty: 4, unit: "SRV", netPrice: 5000.0, currency: "USD", totalValue: 20000.0 },
      { position: "20", material: "WD-SVC-REPAIR", description: "On-Site Repair & Diagnostics", targetQty: 10, unit: "SRV", netPrice: 1500.0, currency: "USD", totalValue: 15000.0 },
      { position: "30", material: "WD-SVC-SW-UPD", description: "Software Updates & Firmware Upgrades", targetQty: 1, unit: "LT", netPrice: 10000.0, currency: "USD", totalValue: 10000.0 },
    ],
    pricingConditions: [
      { condType: "PR00", description: "Base Price", rate: "—", currency: "USD", value: 45000.0 },
      { condType: "K005", description: "Renewal Discount", rate: "5.00%", currency: "USD", value: -2250.0 },
      { condType: "MWST", description: "Output Tax", rate: "0.00%", currency: "USD", value: 0.0 },
    ],
  },
  {
    id: "CTR-2025-0031",
    sapNumber: "40001231",
    type: "CQ",
    typeName: "Quantity Contract (CQ)",
    title: "Drone Surveillance Services Agreement",
    customer: "Federal Infrastructure Bureau",
    customerId: "10200031",
    start: "Jun 1, 2025",
    end: "May 31, 2026",
    value: 120000.0,
    currency: "USD",
    status: "Pending Signature",
    approvalStatus: "Pending",
    overallStatus: "Open",
    blockingStatus: "Not Blocked",
    customerGroup: "Government Accounts (05)",
    customerReference: "FIB-SURV-2025-Q2",
    shippingConditions: "Government Freight (05)",
    documentDate: "05/01/2025",
    orderReason: "Government Procurement (020)",
    shipToParty: "Federal Infrastructure Bureau – Field Ops",
    shipToPartyId: "10200032",
    shipToAddress: "1600 Pennsylvania Ave NW, Washington, DC 20500",
    incoterms: "Delivered Duty Paid (DDP)",
    incotermsVersion: "Incoterms 2020",
    incotermsLocation1: "Washington, DC",
    pricingDate: "06/01/2025",
    billingDate: "06/01/2025",
    pricingProcedure: "Government Pricing (RVGOV1)",
    salesOrganization: "Wingspan US Sales Org (1010)",
    distributionChannel: "Government Channel (30)",
    division: "Drone Systems (20)",
    createdBy: "Monica Chen (WD9980000062)",
    createdOn: "05/01/2025, 14:30:00",
    changedBy: "Monica Chen (WD9980000062)",
    changedOn: "05/15/2025, 10:00:00",
    items: [
      { position: "10", material: "WD-X8-SURV", description: "AirPatrol X8 Surveillance Drone", targetQty: 12, unit: "EA", netPrice: 7500.0, currency: "USD", totalValue: 90000.0 },
      { position: "20", material: "WD-CAM-THERM", description: "Thermal Imaging Module 640×512", targetQty: 12, unit: "EA", netPrice: 2500.0, currency: "USD", totalValue: 30000.0 },
    ],
    pricingConditions: [
      { condType: "PR00", description: "Base Price", rate: "—", currency: "USD", value: 120000.0 },
      { condType: "K008", description: "Government Discount", rate: "3.00%", currency: "USD", value: -3600.0 },
      { condType: "MWST", description: "Output Tax (Exempt)", rate: "0.00%", currency: "USD", value: 0.0 },
    ],
  },
  {
    id: "CTR-2024-0088",
    sapNumber: "40000388",
    type: "MK",
    typeName: "Master Contract (MK)",
    title: "Fleet Replacement Program – Phase 2",
    customer: "Industrial Patrol Systems",
    customerId: "10200088",
    start: "Sep 1, 2024",
    end: "Aug 31, 2025",
    value: 310000.0,
    currency: "USD",
    status: "Expiring Soon",
    approvalStatus: "Approved",
    overallStatus: "Open",
    blockingStatus: "Not Blocked",
    customerGroup: "Enterprise Accounts (01)",
    customerReference: "IPS-FLEET-P2-2024",
    shippingConditions: "Standard (01)",
    documentDate: "08/15/2024",
    orderReason: "Fleet Replacement (030)",
    shipToParty: "Industrial Patrol Systems – Depot",
    shipToPartyId: "10200089",
    shipToAddress: "9100 Industrial Way, Building C, Dallas, TX 75247",
    incoterms: "Free on Board (FOB)",
    incotermsVersion: "Incoterms 2020",
    incotermsLocation1: "Dallas, TX",
    pricingDate: "09/01/2024",
    billingDate: "09/01/2024",
    pricingProcedure: "Standard B2B (RVAA01)",
    salesOrganization: "Wingspan US Sales Org (1010)",
    distributionChannel: "Direct Sales (10)",
    division: "Drone Systems (20)",
    createdBy: "James Okafor (WD9980000015)",
    createdOn: "08/15/2024, 08:55:42",
    changedBy: "Sarah Mitchell (WD9980000021)",
    changedOn: "03/02/2025, 09:10:18",
    items: [
      { position: "10", material: "WD-PRO16", description: "SKYSTREAM Pro 16 Complete System", targetQty: 20, unit: "EA", netPrice: 4700.0, currency: "USD", totalValue: 94000.0 },
      { position: "20", material: "WD-PRO16-ACC", description: "SKYSTREAM Pro 16 Accessory Kit", targetQty: 20, unit: "ST", netPrice: 300.0, currency: "USD", totalValue: 6000.0 },
      { position: "30", material: "WD-RANGER2000", description: "SkyFlow Ranger 2000 Commercial Unit", targetQty: 6, unit: "EA", netPrice: 21500.0, currency: "USD", totalValue: 129000.0 },
      { position: "40", material: "WD-MAINT-FLEET", description: "Annual Fleet Maintenance Package", targetQty: 1, unit: "LT", netPrice: 81000.0, currency: "USD", totalValue: 81000.0 },
    ],
    pricingConditions: [
      { condType: "PR00", description: "Base Price", rate: "—", currency: "USD", value: 310000.0 },
      { condType: "K007", description: "Volume Discount", rate: "2.50%", currency: "USD", value: -7750.0 },
      { condType: "MWST", description: "Output Tax", rate: "0.00%", currency: "USD", value: 0.0 },
    ],
  },
  {
    id: "CTR-2024-0055",
    sapNumber: "40000255",
    type: "CQ",
    typeName: "Quantity Contract (CQ)",
    title: "Standard Supply & Distribution Contract",
    customer: "Northern Grid Authority",
    customerId: "10200055",
    start: "Jan 1, 2024",
    end: "Dec 31, 2024",
    value: 89500.0,
    currency: "USD",
    status: "Expired",
    approvalStatus: "Approved",
    overallStatus: "Closed",
    blockingStatus: "Not Blocked",
    customerGroup: "Utility Accounts (03)",
    customerReference: "NGA-SUPPLY-2024",
    shippingConditions: "Standard (01)",
    documentDate: "12/10/2023",
    orderReason: "Annual Supply Renewal (001)",
    shipToParty: "Northern Grid Authority – Operations",
    shipToPartyId: "10200056",
    shipToAddress: "3300 Power Grid Ave, Minneapolis, MN 55401",
    incoterms: "Ex Works (EXW)",
    incotermsVersion: "Incoterms 2020",
    incotermsLocation1: "Minneapolis, MN",
    pricingDate: "01/01/2024",
    billingDate: "01/01/2024",
    pricingProcedure: "Standard B2B (RVAA01)",
    salesOrganization: "Wingspan US Sales Org (1010)",
    distributionChannel: "Direct Sales (10)",
    division: "Drone Systems (20)",
    createdBy: "James Okafor (WD9980000015)",
    createdOn: "12/10/2023, 13:00:00",
    changedBy: "James Okafor (WD9980000015)",
    changedOn: "01/05/2024, 10:45:22",
    items: [
      { position: "10", material: "WD-X8-SURV", description: "AirPatrol X8 Surveillance Drone", targetQty: 10, unit: "EA", netPrice: 6900.0, currency: "USD", totalValue: 69000.0 },
      { position: "20", material: "WD-CAM-THERM", description: "Thermal Imaging Module 640×512", targetQty: 10, unit: "EA", netPrice: 1500.0, currency: "USD", totalValue: 15000.0 },
      { position: "30", material: "WD-BATT-X8", description: "High-Capacity Battery Pack (X8 Series)", targetQty: 20, unit: "EA", netPrice: 275.0, currency: "USD", totalValue: 5500.0 },
    ],
    pricingConditions: [
      { condType: "PR00", description: "Base Price", rate: "—", currency: "USD", value: 89500.0 },
      { condType: "K007", description: "Customer Discount", rate: "1.50%", currency: "USD", value: -1342.5 },
      { condType: "MWST", description: "Output Tax", rate: "0.00%", currency: "USD", value: 0.0 },
    ],
  },
];