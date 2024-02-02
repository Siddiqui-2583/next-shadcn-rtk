import { TRouteItem, TPathItem } from "@/types/global";


export const routeGenerator = (items: TPathItem[]) => {
  const routes = items.reduce((acc: TRouteItem[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }

    return acc;
  }, []);

  return routes;
};
