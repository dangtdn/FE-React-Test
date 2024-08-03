import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const AvatarUser = ({ email }) => {
  return (
    <button type="button" className="flex items-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="pl-3">{email}</span>
    </button>
  );
};

export default AvatarUser;
