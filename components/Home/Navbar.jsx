"use client";
import { useState } from "react";
import Image from "next/image";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "@/public/assets/shamsLogo.svg";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showNav = () => setOpen(!open);

  return (
    <header className=" py-8 bg-background fixed top-0 shadow w-full z-[100]">
      <section className="w-11/12 mx-auto flex justify-between items-center">
        <Link href="/" className="no-underline">
          <div className=" flex items-center gap-4 w-[20%]">
            <Image src={logo} alt="logo" />
            <p className="font-medium text-slate">Shamzbridge</p>
          </div>
        </Link>
        <div className="md:flex gap-7 hidden justify-between items-center top-0 w-1/2">
          <nav className="flex justify-between gap-12">
            <Link href="#about" className="no-underline">
              <h6 className="font-medium text-slate">About</h6>
            </Link>
            <Link href="#service" className="no-underline">
              <h6 className="font-medium text-[#4F4F4F]">Services</h6>
            </Link>
          </nav>
          <div>
            <Link href="#footer">
              <button className="bg-button rounded-3xl py-3 px-6 text-white">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        {!open ? (
          <button className="md:hidden cursor-pointer" onClick={showNav}>
            <FaBars height={15} />
          </button>
        ) : (
          <button className="md:hidden cursor-pointer" onClick={showNav}>
            <FaTimes />
          </button>
        )}

        {open && (
          <div
            className="flex flex-col justify-center mx-auto left-0 right-0 items-center w-[100%] absolute top-[100%] bg-background p-8 border-2 border-[#05CE9126]"
            style={{
              transform: open ? "translateY(0)" : "translateY(100%)",
              transition: "transform 0.95s ease-in-out",
            }}
          >
            <nav className="flex flex-col gap-14 justify-between items-center w-full mb-[50px]">
              <Link href="#about" className="no-underline" onClick={showNav}>
                <h6 className="font-medium text-text-slate">About</h6>
              </Link>
              <Link href="#service" className="no-underline" onClick={showNav}>
                <h6 className="font-medium text-text-slate">Services</h6>
              </Link>
            </nav>
            <div className="flex flex-col items-center gap-6 justify-between w-full">
              <Link href="#footer" className="no-underline" onClick={showNav}>
                <button className="bg-button rounded-3xl py-3 px-6 text-white">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        )}
      </section>
    </header>
  );
};

export default Navbar;
