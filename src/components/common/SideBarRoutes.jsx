import { List } from "lucide-react";
import React from "react";
import SideBarItem from "./SideBarItem";

const routes = [
  {
    icon: List,
    label: "Dashboard",
    href: "/dashboard",
  },
];

const SideBarRoutes = () => {
  return (
    <div className="flex flex-col w-full">
      {routes.map(({ label, icon, href }) => (
        <SideBarItem key={href} label={label} icon={icon} href={href} />
      ))}
    </div>
  );
};

export default SideBarRoutes;
