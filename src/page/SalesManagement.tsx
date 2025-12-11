import Header from "@/components/common/Header/Header";
import { Table } from "@/components/common/Table/Table";
import Title from "@/components/common/Title/Title";
import { useGetSalesManagement } from "@/components/page/SalesManagement/hooks/useGetSalesManagement";
import { useTableColumns } from "@/components/page/SalesManagement/hooks/useTableColumns";
import SearchFilter from "@/components/page/SalesManagement/SearchFilter";
import { ShoppingCart } from "lucide-react";

const SalesManagement = () => {
  const { columns } = useTableColumns();
  const { data, isLoading } = useGetSalesManagement();

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
              <Table data={data} columns={columns} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesManagement;
