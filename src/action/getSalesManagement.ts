import type { SalesManagement } from "@/type/salesManagementType";

const data = [
  {
    id: 1,
    salesOrderNumber: "SO-2025-0001",
    salesOrderDate: "2025-01-15",
    customerOrderNumber: "PO-2025-0123",
    customerName: "王小明",
    warehouseCode: "WH-001",
    salesTotal: "NT$ 125,000",
  },
  {
    id: 2,
    salesOrderNumber: "SO-2025-0002",
    salesOrderDate: "2025-01-16",
    customerOrderNumber: "PO-2025-0124",
    customerName: "李大華",
    warehouseCode: "WH-002",
    salesTotal: "NT$ 89,500",
  },
  {
    id: 3,
    salesOrderNumber: "SO-2025-0003",
    salesOrderDate: "2025-01-17",
    customerOrderNumber: "PO-2025-0125",
    customerName: "John Doe",
    warehouseCode: "WH-001",
    salesTotal: "NT$ 256,800",
  },
];

const getSalesManagementAction = async (): Promise<SalesManagement[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export default getSalesManagementAction;
