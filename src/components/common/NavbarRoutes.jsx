import React, { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { fetchUserAttributes, signOut } from "aws-amplify/auth";
import AvatarUser from "./AvatarUser";

const NavbarRoutes = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut({ global: true });
      navigate("/");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  useEffect(() => {
    const handleFetchUserAttributes = async () => {
      try {
        const userAttributes = await fetchUserAttributes();
        setEmail(userAttributes.email);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    handleFetchUserAttributes();
  }, []);

  return (
    <>
      <div className="flex gap-x-2 ml-auto">
        <Button size="sm" variant="ghost" onClick={handleSignOut}>
          <LogOut className="h-4 w-4 mr-2" />
          Exit
        </Button>
        <AvatarUser email={email} />
      </div>
    </>
  );
};

export default NavbarRoutes;
