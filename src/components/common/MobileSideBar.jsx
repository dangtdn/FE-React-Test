import { Menu } from "lucide-react";
import React from "react";
import SideBar from "./SideBar";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SideBar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
