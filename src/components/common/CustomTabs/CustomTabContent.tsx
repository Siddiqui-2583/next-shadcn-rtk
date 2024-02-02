import { TabsContent } from '@/components/ui/tabs'
import { ReactNode } from 'react';

type TCustomTabContentProps = {
    value:string;
    children: ReactNode;
}

export default function CustomTabContent({value,children}:TCustomTabContentProps) {
  return (
    <TabsContent value={value}>{children}</TabsContent>
  )
}
