import Link from "next/link";
import React from "react";

export default function LogoPill() {
  return (
    <Link
      href="/"
      className="text-white text-2xl font-poppins font-extrabold inline-block mr-2 tracking-widest bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-500 rounded-xl py-2 px-4"
    >
      <span>Muhammad Waseem</span>
    </Link>
  );
}
