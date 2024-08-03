import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "../../lib/utils";

const SideBarItem = ({ icon: Icon, label, href }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.split("/").at(-1); // Get the last part of the pathname

  // Determine if the sidebar item is active
  const isActive =
    (pathname === "dashboard" && href === "/dashboard") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  // Function to handle click and navigate to the specified href
  const onClick = () => {
    navigate(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive &&
          "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn("text-slate-500", isActive && "text-sky-700")}
        />
        {label}
      </div>
    </button>
  );
};

export default SideBarItem;
