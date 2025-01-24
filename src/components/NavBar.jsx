"use client";

import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

const Navbar = () => {
  const { user, isAuthenticated } = useKindeBrowserClient();

  return (
    <nav className="bg-white shadow-md py-4 px-10 lg:px-16 flex justify-between items-center">
      <div className="font-bold text-sm lg:text-lg">
        <Link href="/">Blogs</Link>
      </div>
      <div className="flex gap-2 text-sm lg:text-lg font-semibold items-center">
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
      </div>
      <div className="space-x-4">
        {isAuthenticated ? (
          <>
            <span>Hello, {user.family_name}</span>
            <LogoutLink className="font-bold text-sm lg:text-lg">
              LogOut
            </LogoutLink>
          </>
        ) : (
          <>
            <LoginLink className="font-bold text-sm lg:text-lg">
              LOGIN
            </LoginLink>
            <RegisterLink className="font-bold text-sm lg:text-lg">
              REGISTER
            </RegisterLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
