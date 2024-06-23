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
import { SideNav } from "./SideNav"

export function Header({ headerContent }: any) {
  console.log('HEADER CONTENT:', headerContent)
  return (
    <div className="bg-secondary p-3 w-full flex flex-1 justify-between">
      <NavigationMenuItem className="flex md:hidden">
        <SideNav />
      </NavigationMenuItem>
      <Button variant="link">
        <img
          className="h-8"
          src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F160d3724e72b4f88af781e0887df5601"
          alt="Builder.io Logo"
          loading="lazy"
        />
      </Button>
      <NavigationMenu className="hidden md:flex space-x-5">
        <NavigationMenuList className="justify-around w-full">
          {headerContent?.headerLinks.map((item:any) => {
            return(
              <NavigationMenuItem>
                <Link href={item.slug || '/'} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )
          })}
        </NavigationMenuList>
      </NavigationMenu>
      <AuthSlider />
    </div>
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
