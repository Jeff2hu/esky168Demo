import {
  Table as ShadTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";

interface TableProps<T> {
  data: T[];
  columns: {
    headerName: string;
    accessorKey: string;
    width?: string;
    align?: "left" | "center" | "right";
  }[];
  hoverable?: boolean;
  isLoading?: boolean;
}

export function Table<T>({
  data,
  columns,
  hoverable = true,
  isLoading = false,
}: TableProps<T>) {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-40">
        <Loader2 className="w-6 h-6 text-gray-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full overflow-auto">
      <ShadTable>
        <TableHeader>
          <TableRow className="bg-linear-to-r from-blue-500 to-indigo-500 border-b-2 border-blue-100">
            {columns.map((column) => (
              <TableHead
                key={column.accessorKey as string}
                className={`
                  px-6 py-4 font-semibold text-sm  text-white
                  ${column.align === "left" ? "text-left" : ""}
                  ${column.align === "center" ? "text-center" : ""}
                  ${column.align === "right" ? "text-right" : ""}
                  ${!column.align ? "text-left" : ""}
                `}
                style={{ width: column.width }}
              >
                {column.headerName}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-40 text-center text-gray-500"
              >
                <div className="flex flex-col items-center justify-center gap-3 py-8">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-600">
                    {t("COMMON.NO_DATA")}
                  </p>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            data.map((item, index) => (
              <TableRow
                key={index}
                className={`
                  border-b border-gray-100 last:border-0
                  ${
                    hoverable
                      ? "hover:bg-blue-50/50 transition-colors duration-150"
                      : ""
                  }
                `}
              >
                {columns.map((column) => (
                  <TableCell
                    key={column.accessorKey as string}
                    className={`
                      px-6 py-4 text-sm text-gray-900
                      ${column.align === "left" ? "text-left" : ""}
                      ${column.align === "center" ? "text-center" : ""}
                      ${
                        column.align === "right"
                          ? "text-right font-semibold"
                          : ""
                      }
                      ${!column.align ? "text-left" : ""}
                    `}
                  >
                    {item[column.accessorKey as keyof T] as string}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </ShadTable>
    </div>
  );
}

export default Table;
