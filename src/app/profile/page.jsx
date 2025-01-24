"use client";
import { LoginLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { BallTriangle } from "react-loader-spinner";

const page = () => {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  if (isLoading) {
    return (
      <div className="text-center items-center flex justify-center h-screen">
        <BallTriangle></BallTriangle>
      </div>
    );
  }
  return (
    <div>
      <div>
        {isAuthenticated ? (
          <>
            <div className="card mt-28 flex justify-center items-center mx-auto w-96 shadow-xl text-black border">
              <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl">Profile</h2>
                <p className="text-2xl">Welcome to your profile</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="card mt-28 flex justify-center items-center mx-auto w-96 shadow-xl text-black">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Profile</h2>
                <p>This page is Protected.</p>
                <div className="card-actions justify-end">
                  <LoginLink>
                    <button className="btn btn-primary">Login</button>
                  </LoginLink>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default page;
