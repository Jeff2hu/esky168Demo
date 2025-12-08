import Input, { type InputProps } from "@/components/common/Input/Input";
import { cn } from "@/lib/utils";

interface TextFieldProps extends InputProps {
  containerClassName?: string;
  label: string;
}

const TextField = ({ label, containerClassName, ...props }: TextFieldProps) => {
  return (
    <div className={cn("flex items-center gap-2", containerClassName)}>
      <label htmlFor={props.id} className="text-lg font-medium min-w-16">
        {label}
      </label>
      <div className="flex-1">
        <Input {...props} />
      </div>
    </div>
  );
};

export default TextField;
