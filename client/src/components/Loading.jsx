import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext.jsx";
import { useLocation } from "react-router-dom";

const Loading = () => {
  const { navigate } = useAppContext();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const nextUrl = query.get("next");

  useEffect(() => {
    if (nextUrl) {
      const timeout = setTimeout(() => {
        navigate(`/${nextUrl}`);
      }, 5000);
      return () => clearTimeout(timeout); // cleanup
    }
  }, [nextUrl]);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-lime-200 rounded-full"></div>
        <div className="w-20 h-20 border-4 border-lime-700 border-t-4 animate-spin rounded-full absolute left-0 top-0"></div>
      </div>

      <div className="relative">
        <div className="w-10 h-10 border-4 border-lime-200 rounded-full"></div>
        <div className="w-10 h-10 border-4 border-lime-700 border-t-4 animate-spin rounded-full absolute left-0 top-0"></div>
      </div>

      <div className="relative">
        <div className="w-5 h-5 border-4 border-lime-200 rounded-full"></div>
        <div className="w-5 h-5 border-4 border-lime-700 border-t-4 animate-spin rounded-full absolute left-0 top-0"></div>
      </div>

      <p className="text-gray-500 text-xl">Redirecting to your orders...</p>
    </div>
  );
};

export default Loading;
