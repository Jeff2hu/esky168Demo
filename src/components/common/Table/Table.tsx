// src/components/common/Table/Table.tsx
import {
  Table as ShadTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
}

export function Table<T>({ data, columns, hoverable = true }: TableProps<T>) {
  const { t } = useTranslation();

  return (
    <div className="w-full overflow-auto rounded-lg border border-gray-200 bg-white shadow-sm">
      <ShadTable>
        {/* 表头 */}
        <TableHeader>
          <TableRow className="bg-gray-50 hover:bg-gray-50">
            {columns.map((column) => (
              <TableHead
                key={column.accessorKey as string}
                className={`
                  px-6 py-4 font-semibold text-gray-700 text-sm
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
                className="h-32 text-center text-gray-500"
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <svg
                    className="w-12 h-12 text-gray-300"
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
                  <p className="text-sm">{t("COMMON.NO_DATA")}</p>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            data.map((item, index) => (
              <TableRow
                key={index}
                className={`
                  border-b border-gray-100 last:border-0
                  ${hoverable ? "hover:bg-gray-100 transition-colors" : ""}
                `}
              >
                {columns.map((column) => (
                  <TableCell
                    key={column.accessorKey as string}
                    className={`
                      px-6 py-4 text-sm text-gray-900
                      ${column.align === "left" ? "text-left" : ""}
                      ${column.align === "center" ? "text-center" : ""}
                      ${column.align === "right" ? "text-right" : ""}
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
