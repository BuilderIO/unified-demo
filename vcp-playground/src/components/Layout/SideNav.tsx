"use client"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"


export function SideNav() {
  return (

    <Sheet key="side">
        <SheetTrigger className="p-0 "asChild>
        <Button variant="link" >
            <RxHamburgerMenu className="h-6 w-6"/>
        </Button>
        </SheetTrigger>
        <SheetContent side="left">
        <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
            Make changes to your profile here. Click save when you&rsquore done.
            </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-left">
                Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left">
                Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
        </div>
        <SheetFooter>
            <SheetClose asChild>
            <Button type="submit">Save changes</Button>
            </SheetClose>
        </SheetFooter>
        </SheetContent>
    </Sheet>
  )
}
