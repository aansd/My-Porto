"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "Resume",
        path: "/resume",
    },
    {
        name: "Work",
        path: "/work",
    },
    {
        name: "Contact",
        path: "/contact",
    },
]
const MobileNav = () => {
    const patchname = usePathname();
  return <Sheet>
    <SheetTrigger className="flex justify-center ">
    <CiMenuFries/>
    </SheetTrigger>
    <SheetContent className="flex flex-col">
        <VisuallyHidden>
          <SheetTitle>Mobile Navigation</SheetTitle>
          <SheetDescription>Use this menu to navigate the website.</SheetDescription>
        </VisuallyHidden>
        <div className="mt-32 mb-40 text-center text-2xl">
            <Link href="/">
            <h1 className="text-4xl font-semibold">Sep<span className="text-accent">.</span></h1>
            </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => {
                return <Link 
                    href={link.path}
                    key={index}
                    className={`${link.path === patchname && "text-accent border-b-2 border-accent"}
                    text-xl capitalize hover:text-accent transition-all`}>{link.name}</Link>
            })}
        </nav>
    </SheetContent>
    </Sheet>
}

export default MobileNav