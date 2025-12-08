import BasicCard from "@/components/common/Card/BasicCard";
import { Table } from "@/components/common/Table/Table";
import TextField from "@/components/common/TextField/TextField";
import { useTranslation } from "react-i18next";

const SalesManagement = () => {
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      salesOrderNumber: "1234567890",
      salesOrderDate: "2025-01-01",
      customerOrderNumber: "1234567890",
      customerName: "John Doe",
      warehouseCode: "1234567890",
      salesTotal: "100000",
    },
    {
      id: 2,
      salesOrderNumber: "1234567890",
      salesOrderDate: "2025-01-01",
      customerOrderNumber: "1234567890",
      customerName: "John Doe",
      warehouseCode: "1234567890",
      salesTotal: "100000",
    },
  ];

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
    },
  ];

  return (
    <div className="flex-center w-full max-w-4xl mx-auto h-full md:p-8">
      <BasicCard className="w-full max-w-4xl mx-auto h-full rounded-none md:rounded-lg">
        <form className="flex flex-col gap-4 mb-6 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextField
              label={t("SALES_MANAGEMENT.SALES_ORDER_NUMBER")}
              id="salesOrderNumber"
              name="salesOrderNumber"
            />
            <TextField
              label={t("SALES_MANAGEMENT.SALES_ORDER_DATE")}
              id="salesOrderDate"
              name="salesOrderDate"
            />
            <TextField
              label={t("SALES_MANAGEMENT.CUSTOMER_ORDER_NUMBER")}
              id="customerOrderNumber"
              name="customerOrderNumber"
            />
            <TextField
              label={t("SALES_MANAGEMENT.CUSTOMER_NAME")}
              id="customerName"
              name="customerName"
            />
            <TextField
              label={t("SALES_MANAGEMENT.WAREHOUSE_CODE")}
              id="warehouseCode"
              name="warehouseCode"
            />
            <TextField
              label={t("SALES_MANAGEMENT.SALES_TOTAL")}
              id="salesTotal"
              name="salesTotal"
            />
          </div>
        </form>

        <Table data={data} columns={columns} />
      </BasicCard>
    </div>
  );
};

export default SalesManagement;
