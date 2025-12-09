import { Table } from "@/components/common/Table/Table";
import Title from "@/components/page/Home/Title/Title";
import { useTranslation } from "react-i18next";
import { ShoppingCart } from "lucide-react";
import Header from "@/components/common/Header/Header";
import SearchFilter from "@/components/page/SalesManagement/SearchFilter";

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

const SalesManagement = () => {
  const { t } = useTranslation();

  const columns = [
    {
      headerName: t("SALES_MANAGEMENT.SALES_ORDER_NUMBER"),
      accessorKey: "salesOrderNumber",
    },
    {
      headerName: t("SALES_MANAGEMENT.SALES_ORDER_DATE"),
      accessorKey: "salesOrderDate",
    },
    {
      headerName: t("SALES_MANAGEMENT.CUSTOMER_ORDER_NUMBER"),
      accessorKey: "customerOrderNumber",
    },
    {
      headerName: t("SALES_MANAGEMENT.CUSTOMER_NAME"),
      accessorKey: "customerName",
    },
    {
      headerName: t("SALES_MANAGEMENT.WAREHOUSE_CODE"),
      accessorKey: "warehouseCode",
    },
    {
      headerName: t("SALES_MANAGEMENT.SALES_TOTAL"),
      accessorKey: "salesTotal",
      align: "right" as const,
    },
  ];

  return (
    <div className="relative min-h-full overflow-hidden">
      <div className="relative p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500">
          <Header
            title="SALES_MANAGEMENT.TITLE"
            description="SALES_MANAGEMENT.DESCRIPTION"
            icon={ShoppingCart}
          />

          <div className="space-y-3">
            <Title title="SALES_MANAGEMENT.SEARCH_FILTERS" />
            <SearchFilter />
          </div>

          <div className="space-y-3">
            <Title title="SALES_MANAGEMENT.SEARCH_RESULTS" />
            <div className="backdrop-blur-sm bg-white/90 rounded-2xl shadow-lg border-0 overflow-hidden">
              <Table data={data} columns={columns} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesManagement;
