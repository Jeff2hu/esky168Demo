import { cn } from "@/lib/utils";
import { FileX } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

interface FallbackListProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor?: (item: T, index: number) => string | number;
  gridClassName?: string;
  emptyMessage?: string;
  emptyIcon?: React.ComponentType<{ className?: string }>;
}

function FallbackList<T>({
  data,
  renderItem,
  keyExtractor = (_, index) => index,
  gridClassName,
  emptyMessage = "COMMON.NO_DATA",
  emptyIcon: EmptyIcon = FileX,
}: FallbackListProps<T>) {
  const { t } = useTranslation();

  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
          <EmptyIcon className="w-8 h-8 text-gray-400" />
        </div>
        <p className="text-sm font-medium text-gray-600">{t(emptyMessage)}</p>
      </div>
    );
  }

  return (
    <div className={cn("grid grid-cols-1 gap-4", gridClassName)}>
      {data.map((item, index) => (
        <React.Fragment key={keyExtractor(item, index)}>
          {renderItem(item, index)}
        </React.Fragment>
      ))}
    </div>
  );
}

export default FallbackList;
