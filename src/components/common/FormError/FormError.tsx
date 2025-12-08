import { cn } from "@/lib/utils";
import { ErrorMessage } from "@hookform/error-message";
import type { FieldErrors } from "react-hook-form";

interface Props {
  errors: FieldErrors;
  name: string;
  className?: string;
  helperText?: string;
}

export default function FormError({
  name,
  errors,
  helperText,
  className,
}: Props) {
  const hasError = errors[name]?.message;

  if (!hasError && !helperText) {
    return null;
  }

  return (
    <div className={cn("pt-1", className)}>
      {errors[name]?.message ? (
        <ErrorMessage
          key={name}
          name={name}
          errors={errors}
          render={({ message }) => (
            <p className="text-sm text-red-500">{message}</p>
          )}
        />
      ) : (
        <p className="text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
}
