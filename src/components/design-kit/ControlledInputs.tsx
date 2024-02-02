import { TEvent } from "@/types/global";
import { useEffect, useState } from "react";
import CustomTextField from "../common/CustomTextField/CustomTextField";

export default function ControlledInputs() {
  const [textField, setTextField] = useState<string>();
  useEffect(() => {
    console.log({ textField });
  }, [textField]);
  return (
    <div className="flex flex-col gap-4 p-10">
      <h1 className="text-3xl font-bold underline">Controlled Inputs</h1>
      <CustomTextField
        label="Controlled Text"
        onChange={(event: TEvent) => setTextField(event.target.value)}
      />
    </div>
  );
}
