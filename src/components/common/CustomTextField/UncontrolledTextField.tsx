import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export type TUncontrolledTextFieldProps = {
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  className?: string;
};

const UncontrolledTextField = ({
  type = "text",
  name,
  label='Text Field',
  placeholder='Type here...',
  className,
  ...prop
}: TUncontrolledTextFieldProps) => {
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

export default UncontrolledTextField;
