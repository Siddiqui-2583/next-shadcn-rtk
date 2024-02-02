import { Outlet, useNavigate } from "react-router-dom";
import CustomTabs from "../CustomTabs/CustomTabs";
import { menuTabs } from "@/config/layout.config";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl w-full p-10">
      <CustomTabs
        defaultTab="controlled-inputs"
        tabs={menuTabs}
        onValueChange={(value) => {
          navigate(`/design-kit/${value}`);
        }}
      />
      <Outlet />
    </div>
  );
}
