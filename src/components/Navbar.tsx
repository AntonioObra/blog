"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";

import { Links, SocialLinks } from "@/config/header";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";
import ModeToggle from "@/components/ModeToggle";

const Navbar = () => {
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-6 left-0 right-0 z-50 container">
      <nav className="p-4 border-2 rounded-lg flex justify-between backdrop-blur-2xl bg-white/60 dark:bg-black/60">
        {/* Links */}
        <div className="flex gap-4">
          {Links.map(({ icon: Icon, ...link }) => (
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                buttonVariants({
                  variant: pathname == link.path ? "secondary" : "ghost",
                }),
                link.path != "/" && "hidden lg:inline-flex"
              )}
            >
              <Icon className="mr-2 h-4 w-4" />
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Links Desktop*/}
        <div className="gap-4 hidden lg:flex items-center">
          {SocialLinks.map(({ icon: Icon, ...link }) => (
            <Link
              key={link.link}
              href={link.link}
              className={buttonVariants({ variant: "ghost", size: "icon" })}
              target="_blank"
              title={link.name}
            >
              <Icon className=" h-4 w-4" />
            </Link>
          ))}
          <ModeToggle />
          <Link
            href="https://obradovic.dev"
            className={buttonVariants({ variant: "default" })}
            target="_blank"
          >
            portfolio
          </Link>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="flex lg:hidden">
          <button
            className={buttonVariants({ variant: "default", size: "icon" })}
            aria-label="Open Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Icons.menu />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 container w-full backdrop-blur-2xl bg-black/60 flex-col items-center justify-center gap-8 z-50 ${
          isMobileMenuOpen ? "flex" : "hidden"
        } lg:hidden`}
      >
        {/* Links */}
        <div className="flex flex-col gap-4">
          {Links.map(({ icon: Icon, ...link }) => (
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                buttonVariants({
                  variant: pathname == link.path ? "secondary" : "ghost",
                  size: "lg",
                })
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Icon className="mr-2 h-4 w-4" />
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Links Mobile */}
        <div className="flex flex-wrap gap-4">
          {SocialLinks.map(({ icon: Icon, ...link }) => (
            <Link
              key={link.link}
              href={link.link}
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
              })}
              target="_blank"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Icon className=" h-4 w-4" />
            </Link>
          ))}
          <Link
            href="https://obradovic.dev"
            className={buttonVariants({ variant: "default", size: "lg" })}
            target="_blank"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            portfolio
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            className={buttonVariants({ variant: "default", size: "lg" })}
            aria-label="Open Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Icons.close className="mr-4 h-5 w-5" />
            Close Menu
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
