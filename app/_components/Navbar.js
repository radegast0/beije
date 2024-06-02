import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const navLists = [
    { name: "Ürünler", href: "/", alert: true }, //conditionally render alert
    { name: "Biz Kimiz?", href: "/", alert: false },
    { name: "Bağış Kültürü", href: "/" },
    { name: "Regl Testi!", href: "/quiz" },
    { name: "Kendi Paketini Oluştur", href: "/custom-packet" },
  ];
  return (
    <nav className="mx-auto flex w-full max-w-[1150px] items-end px-8 py-5">
      <Link href="/" className="text-[1.375rem] font-bold text-orange-600">
        beije.
      </Link>
      <div className="ml-12 flex grow justify-center justify-items-end gap-8 text-dark max-small:hidden">
        {navLists.map((nav) => (
          <div className="relative" key={nav.name}>
            <Link
              className="mt-auto cursor-pointer text-nowrap border-b-[1px] border-transparent transition-all hover:border-dark"
              href={nav.href}
            >
              {nav.name}
            </Link>
            {nav.alert && (
              <span className="animate-blink absolute left-0 top-0 -ml-[10px] -mt-[10px] h-3 w-3 rounded-full bg-red-600"></span>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-4 max-small:flex-1 max-small:justify-end">
        <svg
          className="cursor-pointer"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <path
            d="M2 2h1.306c.246 0 .37 0 .468.045a.5.5 0 0 1 .213.185c.059.092.076.213.111.457L4.571 6m0 0 1.052 7.731c.134.982.2 1.472.435 1.841a2 2 0 0 0 .853.745c.398.183.893.183 1.883.183h8.558c.942 0 1.414 0 1.799-.17a2 2 0 0 0 .841-.696c.239-.346.327-.81.503-1.735l1.324-6.95c.062-.325.093-.488.048-.615a.5.5 0 0 0-.22-.266C21.532 6 21.366 6 21.034 6H4.571ZM10 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            stroke="#343131"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <svg
          className="cursor-pointer"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <path
            d="M20 21c0-1.396 0-2.093-.172-2.661a4 4 0 0 0-2.667-2.667c-.568-.172-1.265-.172-2.661-.172h-5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C4 18.907 4 19.604 4 21M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
            stroke="#343131"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <DropdownMenu className="">
          <DropdownMenuTrigger className="relative block small:hidden">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M3 12h18M3 6h18M3 18h18"
                stroke="#343131"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="animate-blink absolute left-0 top-0 -ml-[10px] -mt-[10px] h-3 w-3 rounded-full bg-red-600"></span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-screen">
            <div className="flex flex-col gap-6 p-8">
              {navLists.map((nav) => (
                <Link key={nav.name} href={nav.href}>
                  <div className="relative flex flex-row justify-between">
                    <span
                      className="mt-auto text-nowrap border-b-[1px] border-transparent transition-all hover:border-dark"
                      href={nav.href}
                    >
                      {nav.name}
                    </span>
                    &#8250;
                    {nav.alert && (
                      <span className="animate-blink absolute left-0 top-0 -ml-[10px] -mt-[10px] h-3 w-3 rounded-full bg-red-600"></span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
