import Input, { type InputProps } from "@/components/common/Input/Input";
import { cn } from "@/lib/utils";

interface TextFieldProps extends InputProps {
  containerClassName?: string;
  label: string;
}

const TextField = ({ label, containerClassName, ...props }: TextFieldProps) => {
  return (
    <div className={cn("flex flex-col gap-2", containerClassName)}>
      <label
        htmlFor={props.id}
        className="text-sm font-medium text-gray-700 ml-1"
      >
        {label}
      </label>
      <div className="w-full">
        <Input {...props} />
      </div>
    </div>
  );
};

export default TextField;
