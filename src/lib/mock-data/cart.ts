import { Cart } from "@/lib/types";
import { getProductById } from "./products";

const agriT15 = getProductById("agri-t15-sprayer")!;
const irrigationAttachment = getProductById("agri-t15-irrigation-attachment")!;
const ertcController = getProductById("ertc-700-controller-dual")!;

export const mockCart: Cart = {
  id: "1352334",
  items: [
    {
      productId: "agri-t15-sprayer",
      product: agriT15,
      quantity: 5,
      selectedColor: "Black",
      selectedConfiguration: "Multispectral + RGB",
      unitPrice: agriT15.price,
      lineTotal: agriT15.price * 5,
      appliedDiscounts: [],
    },
    {
      productId: "agri-t15-irrigation-attachment",
      product: irrigationAttachment,
      quantity: 5,
      unitPrice: irrigationAttachment.price,
      lineTotal: irrigationAttachment.price * 5,
      appliedDiscounts: [
        { code: "Welcome10", amount: 4.35, label: "Welcome10" },
        { code: "EXTRAS", amount: 2.17, label: "EXTRAS" },
        { code: "Clearance", amount: 5.0, label: "Clearance" },
      ],
    },
    {
      productId: "ertc-700-controller-dual",
      product: ertcController,
      quantity: 10,
      unitPrice: ertcController.price,
      lineTotal: ertcController.price * 10,
      appliedDiscounts: [],
    },
  ],
  subtotal: 43683.5,
  totalSavings: 11.52,
  shippingEstimate: null,
  taxEstimate: null,
  estimatedTotal: 43671.98,
  promoCodes: ["Welcome10", "EXTRAS", "Clearance"],
};