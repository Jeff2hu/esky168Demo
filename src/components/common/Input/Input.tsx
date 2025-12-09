import { Input as ShadInput } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export type InputProps = React.ComponentProps<"input"> & {
  isError?: boolean;
};

const Input = ({ className, isError, ...props }: InputProps) => {
  return (
    <ShadInput
      {...props}
      className={cn(
        "h-12 px-4 transition-all duration-200 border border-gray-200/50 focus:border-blue-500 focus:ring-1 focus:ring-blue-100",
        isError && "border-red-500 focus:border-red-500 focus:ring-red-100",
        className
      )}
    />
  );
};

export default Input;
