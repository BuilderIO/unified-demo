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
import styles from './header.module.css'
import Image from 'next/image';


export function Header({ headerContent }: any) {
  return (
    <BuilderContent model="header-links" content={headerContent}>
      {(data) => (  
          <header className={styles.header}>
            <div className={styles.container}>

            <NavigationMenuItem className="flex md:hidden">
              <SideNav />
            </NavigationMenuItem>
            <Button variant="link" asChild className={styles.mainLink}>
              <Link href="/" passHref>
                <Image src={'/shopaholic.svg'} alt='Shopaholic' width="160" height="30" className={styles.logo}/>
              </Link>
            </Button>
            <NavigationMenu className="hidden md:flex space-x-5">
              <NavigationMenuList className={styles.nav}>
                {data?.headerLinks.map((item:any, index:number) => {
                  return(
                      <Link href={item.path || '/'} legacyBehavior passHref key={index}>
                        {/* <NavigationMenuLink className={navigationMenuTriggerStyle()}> */}
                          <span className={styles.navLink + " " + (item.highlight ? styles.highlight : "")}>{item.label}</span>
                        {/* </NavigationMenuLink> */}
                      </Link>
                  )
                })}
              </NavigationMenuList>
            </NavigationMenu>
            <div className={styles.actions}>
              <CartSlider variant="black"/>
              <div className="hidden md:flex">
                <AuthSlider variant="black"/>
              </div>
              
            </div>
            </div>
          </header>
        )
      }
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
          <div className="text-sm font-light leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
