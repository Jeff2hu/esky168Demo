import BasicCard from "@/components/common/Card/BasicCard";
import TextField from "@/components/common/TextField/TextField";
import Button from "@/components/common/Button/Button";
import { Search, RotateCcw } from "lucide-react";
import { useTranslation } from "react-i18next";

const SearchFilter = () => {
  const { t } = useTranslation();

  return (
    <BasicCard className="backdrop-blur-sm bg-white/90 border-0 shadow-lg">
      <form className="p-0 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextField
            label={t("SALES_MANAGEMENT.SALES_ORDER_NUMBER")}
            id="salesOrderNumber"
            name="salesOrderNumber"
            placeholder={t("SALES_MANAGEMENT.SALES_ORDER_NUMBER_PLACEHOLDER")}
          />
          <TextField
            label={t("SALES_MANAGEMENT.SALES_ORDER_DATE")}
            id="salesOrderDate"
            name="salesOrderDate"
            type="date"
          />
          <TextField
            label={t("SALES_MANAGEMENT.CUSTOMER_ORDER_NUMBER")}
            id="customerOrderNumber"
            name="customerOrderNumber"
            placeholder={t(
              "SALES_MANAGEMENT.CUSTOMER_ORDER_NUMBER_PLACEHOLDER"
            )}
          />
          <TextField
            label={t("SALES_MANAGEMENT.CUSTOMER_NAME")}
            id="customerName"
            name="customerName"
            placeholder={t("SALES_MANAGEMENT.CUSTOMER_NAME_PLACEHOLDER")}
          />
          <TextField
            label={t("SALES_MANAGEMENT.WAREHOUSE_CODE")}
            id="warehouseCode"
            name="warehouseCode"
            placeholder={t("SALES_MANAGEMENT.WAREHOUSE_CODE_PLACEHOLDER")}
          />
          <TextField
            label={t("SALES_MANAGEMENT.SALES_TOTAL")}
            id="salesTotal"
            name="salesTotal"
            placeholder={t("SALES_MANAGEMENT.SALES_TOTAL_PLACEHOLDER")}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-3 mt-6 pt-6 border-t border-gray-100">
          <Button
            type="submit"
            className="gradient-brand-button hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all duration-200 gap-2 flex-1 sm:flex-initial"
          >
            <Search className="w-4 h-4" />
            {t("SALES_MANAGEMENT.SEARCH_BUTTON")}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="bg-white hover:bg-gray-50 border-gray-300 text-gray-700 shadow-sm hover:shadow-md transition-all duration-200 gap-2 flex-1 sm:flex-initial"
          >
            <RotateCcw className="w-4 h-4" />
            {t("SALES_MANAGEMENT.RESET_BUTTON")}
          </Button>
        </div>
      </form>
    </BasicCard>
  );
};

export default SearchFilter;
