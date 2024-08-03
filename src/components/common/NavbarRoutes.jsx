import React, { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { fetchUserAttributes, signOut } from "aws-amplify/auth";
import AvatarUser from "./AvatarUser";

const NavbarRoutes = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Function to handle user sign-out
  const handleSignOut = async () => {
    try {
      await signOut({ global: true }); // Sign out the user globally
      navigate("/");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  // useEffect hook to fetch user attributes when the component mounts
  useEffect(() => {
    const handleFetchUserAttributes = async () => {
      try {
        const userAttributes = await fetchUserAttributes(); // Fetch user attributes from AWS Amplify
        setEmail(userAttributes.email); // Set the email state with the fetched email
      } catch (error) {
        console.log("error: ", error);
      }
    };
    handleFetchUserAttributes();
  }, []);

  return (
    <>
      <div className="flex gap-x-2 ml-auto">
        {/* Sign-out button */}
        <Button size="sm" variant="ghost" onClick={handleSignOut}>
          <LogOut className="h-4 w-4 mr-2" /> {/* LogOut icon */}
          Exit
        </Button>
        {/* User avatar with email */}
        <AvatarUser email={email} />
      </div>
    </>
  );
};

export default NavbarRoutes;
