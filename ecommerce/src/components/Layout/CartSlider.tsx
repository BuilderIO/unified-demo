"use client"
import { IoCartOutline } from 'react-icons/io5'
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
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

type CartSliderProps = {
    variant: 'white' | 'black';
  };
  
  export const CartSlider: React.FC<CartSliderProps> = ({ variant }) => {
  return (
    <Sheet key="side">
        <SheetTrigger asChild>
        <Button variant="link" >
            <IoCartOutline className={`h-6 w-6 text-${variant}`}/>
        </Button>
        </SheetTrigger>
        <SheetContent side="right">
        <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
            Make changes to your profile here. Click save when you&rsquore done.
            </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
                Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
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
