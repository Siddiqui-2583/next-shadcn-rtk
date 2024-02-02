import { InputProps } from "@/components/ui/input";
import ControlledTextField, {
  TControlledTextFieldProps,
} from "./ControlledTextField";
import UncontrolledTextField from "./UncontrolledTextField";

type TCustomTextFieldProps = {
  isControlled?: boolean;
} & TControlledTextFieldProps & InputProps;

export default function CustomTextField({
  isControlled = false,...prop
}: TCustomTextFieldProps) {
  if (isControlled) return <ControlledTextField {...prop} />;
  else return <UncontrolledTextField {...prop} />;
}
