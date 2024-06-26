"use client"
import * as React from "react"
import Link from "next/link"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { AuthSlider } from "./AuthSlider"
import { CartSlider } from "./CartSlider"
import { SideNav } from "./SideNav"
import { BuilderContent } from '@builder.io/react';


export function Header({ headerContent }: any) {
  return (
    <BuilderContent model="header-links" content={headerContent}>
      {(data) => {
        return (  
          <header className="bg-secondary p-3 w-full flex flex-1 justify-between">
            <NavigationMenuItem className="flex md:hidden">
              <SideNav />
            </NavigationMenuItem>
            <Button variant="link" asChild>
              <Link href="/" passHref>
              <img
                  className="h-8"
                  src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fe6a94bfbccd24ec8b4db085cd475b7eb"
                  alt="Builder.io Logo"
                  loading="lazy"
                />
              </Link>
            </Button>
            <NavigationMenu className="hidden md:flex space-x-5">
              <NavigationMenuList className="justify-around w-full">
                {data?.headerLinks.map((item:any, index:number) => {
                  return(
                    <Button key={index} variant="link" className="text-md">
                      <Link href={item.path || '/'} legacyBehavior passHref >
                        {/* <NavigationMenuLink className={navigationMenuTriggerStyle()}> */}
                          <span className={item.highlight ? "text-rose-500" : ""}>{item.label}</span>
                        {/* </NavigationMenuLink> */}
                      </Link>
                    </Button>
                  )
                })}
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center">
              <CartSlider variant="black"/>
              <AuthSlider variant="black"/>
            </div>
          </header>
        )
      }}
    </BuilderContent>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
