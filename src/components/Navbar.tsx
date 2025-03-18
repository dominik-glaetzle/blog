"use client";
import React, { useState } from "react";
import Link from "next/link";
import { DarkModeToggle } from "./DarkModeToggle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 flex items-center justify-between bg-white dark:bg-gray-900">
      <Link className="text-2xl font-bold text-black dark:text-white" href="/">
        Dominik Glätzle
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-4">
        <Link
          href="/"
          className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
        >
          Blog
        </Link>
        <Link
          href="/"
          className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
        >
          Projects
        </Link>
        <Link
          href="/"
          className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
        >
          About
        </Link>
        <Link
          href="/"
          className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
        >
          Newsletter
        </Link>
        <DarkModeToggle />
      </div>

      {/* mobile nav */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-md focus:outline-none"
      >
        {/* Burger-Icon */}
        <svg
          className="w-6 h-6 text-black dark:text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden">
          <div className="flex flex-col items-center gap-4 p-4">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              Blog
            </Link>
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              Projects
            </Link>
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              About
            </Link>
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              Newsletter
            </Link>
            <DarkModeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};
