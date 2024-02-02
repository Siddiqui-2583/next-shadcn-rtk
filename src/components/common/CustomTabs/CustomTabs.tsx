import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs";

type TTab = {
  label: string;
  value: string;
};

type TCustomTabsProps = {
  defaultTab?: string;
  tabs: TTab[];
  className?: string;
  onValueChange: (value: string) => void;
};

export default function CustomTabs({
  defaultTab,
  tabs,
  className,
  onValueChange,
}: TCustomTabsProps) {
  return (
    <Tabs
      defaultValue={defaultTab}
      className={className}
      onValueChange={onValueChange}
    >
      <TabsList className="">
        {tabs.map((item: TTab, index: number) => (
          <TabsTrigger key={index} value={item.value}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
