import { Input as ShadInput } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export type InputProps = React.ComponentProps<"input"> & {
  isError?: boolean;
};

const Input = ({ className, isError, ...props }: InputProps) => {
  return (
    <ShadInput
      {...props}
      className={cn(className, isError && "border-red-500")}
    />
  );
};

export default Input;
