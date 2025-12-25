"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0b]/80 backdrop-blur-md supports-backdrop-filter:bg-[#0a0a0b]/60">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-32 h-10 overflow-hidden rounded-xl border border-white/10 group-hover:border-blue-500/50 transition-colors">
            <Image
              src="/logo.png"
              alt="RJRTEL Logo"
              width={80}
              height={80}
              className="object-contain w-full h-full"
            />
          </div>
          <span className="text-xl font-bold tracking-wider text-white group-hover:text-blue-400 transition-colors">
            RJR<span className="text-blue-500">TEL</span>
          </span>
        </Link>

        {/* Desktop Navigation Placeholder */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <button
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-white transition-colors cursor-pointer"
          >
            Our Solutions
          </button>
          <button
            onClick={() =>
              document
                .getElementById("global-reach")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-white transition-colors cursor-pointer"
          >
            Global Network
          </button>
          <button
            onClick={() =>
              document
                .getElementById("evolution")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-white transition-colors cursor-pointer"
          >
            Evolution
          </button>
          <Button
            variant="outline"
            className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 rounded-full px-6 cursor-pointer"
            onClick={() =>
              document
                .getElementById("footer")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Us
          </Button>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden p-2 text-slate-400 hover:text-white">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] border-white/10 bg-[#0a0a0b]/95 backdrop-blur-xl"
          >
            <SheetHeader>
              <SheetTitle className="text-left text-white font-bold text-xl">
                Menu
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 mt-10 px-4">
              <button
                onClick={() => {
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
                className="text-lg font-medium text-slate-400 hover:text-white text-left transition-colors"
              >
                Our Solutions
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("global-reach")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
                className="text-lg font-medium text-slate-400 hover:text-white text-left transition-colors"
              >
                Global Network
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("evolution")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
                className="text-lg font-medium text-slate-400 hover:text-white text-left transition-colors"
              >
                Evolution
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("footer")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
                className="text-lg font-medium text-slate-400 hover:text-white text-left transition-colors"
              >
                Contact Us
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
