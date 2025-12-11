import { useTranslation } from "react-i18next";

export const useTableColumns = () => {
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

  return { columns };
};
