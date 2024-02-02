import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export type TControlledTextFieldProps = {
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  className?: string;
};

const ControlledTextField = ({
  type = "text",
  name,
  label='Text Field',
  placeholder='Type here...',
  className,
  ...prop
}: TControlledTextFieldProps) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">{label}</Label>
      <Input
        className={cn("", className)}
        name={name}
        type={type}
        placeholder={placeholder}
        {...prop}
      />
    </div>
  );
};

export default ControlledTextField;
