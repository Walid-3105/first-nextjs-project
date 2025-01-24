"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

const Navbar = () => {
  const { user, isAuthenticated } = useKindeBrowserClient();

  return (
    <nav className="bg-white shadow-md py-4 px-10 lg:px-16 flex justify-between items-center">
      <div className="font-bold text-sm lg:text-lg">
        <Link href="/">Blog</Link>
      </div>
      <div className="flex gap-2 text-sm lg:text-lg font-semibold items-center">
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
      </div>
      <div className="space-x-4">
        {isAuthenticated ? (
          <>
            <span>Hello, {user.family_name}</span>
            <Link
              href={"/api/auth/logout"}
              className="font-bold text-sm lg:text-lg"
            >
              LogOut
            </Link>
          </>
        ) : (
          <>
            <Link
              href={"/api/auth/login"}
              className="font-bold text-sm lg:text-lg"
            >
              LOGIN
            </Link>
            <Link
              href={"/api/auth/register"}
              className="font-bold text-sm lg:text-lg"
            ></Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
