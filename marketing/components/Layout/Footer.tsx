/**
 * This code was generated by Builder.io.
 */
"use client";
import React from "react";
import { Button } from "../ui/button";
import { AuthSlider } from "./AuthSlider";
import { CartSlider } from "./CartSlider";

type NavItemProps = {
  text: string;
  isHighlighted?: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ text, isHighlighted }) => (
  <div className={isHighlighted ? "text-rose-500" : "text-white"}>{text}</div>
);

type SignInButtonProps = {
  text: string;
};

const SignInButton: React.FC<SignInButtonProps> = ({ text }) => (
  <Button variant="secondary" className="bg-white text-black">
    {text}
  </Button>
);

const Footer: React.FC = () => {
  const navItems = [
    "WOMEN",
    "MEN",
    "COLLECTIONS",
    "SHOP ALL",
    { text: "SALE", isHighlighted: true },
  ];

  return (
    <footer className="flex justify-center items-center px-16 py-20 mt-20 bg-neutral-800 max-md:px-5">
      <div className="flex flex-col mt-5 w-full max-w-[1209px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full text-base font-semibold tracking-[3.15px] max-md:flex-wrap max-md:max-w-full">
          <nav className="flex gap-5 justify-between my-auto max-md:flex-wrap">
            {navItems.map((item, index) =>
              typeof item === "string" ? (
                <NavItem key={index} text={item} />
              ) : (
                <NavItem
                  key={index}
                  text={item.text}
                  isHighlighted={item.isHighlighted}
                />
              )
            )}
          </nav>
          <div className="flex items-center">
            <CartSlider variant="white" />
            <AuthSlider variant="white" />
          </div>
        </div>
        <p className="mt-8 text-lg text-zinc-400 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          posuere erat a ante vestibulum, in volutpat ligula elementum.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
