import getSalesManagementAction from "@/action/getSalesManagement";
import type { SalesManagement } from "@/type/salesManagementType";
import { useEffect, useState } from "react";

export const useGetSalesManagement = () => {
  const [data, setData] = useState<SalesManagement[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSalesManagement = async () => {
    try {
      setIsLoading(true);
      const data = await getSalesManagementAction();
      setData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSalesManagement();
  }, []);

  return { data, isLoading };
};
