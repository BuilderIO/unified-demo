'use client'
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose, DialogPortal, DialogOverlay } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import NextImage from "next/image";

type DiscountItem = {
  label: string;
  icon?: string;
  iconAlt?: string;
};

type UpsellPopupProps = {
  title: string;
  discounts: DiscountItem[];
  imageSrc: string;
  imageAlt: string;
  subTitle: string;
  delay?: number; // Delay in milliseconds
  discountLabel: string;
};

const UpsellPopup: React.FC<UpsellPopupProps> = ({ title, subTitle, discounts = [], imageSrc, imageAlt, delay = 0, discountLabel }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/50" />
        <DialogContent className="fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-center text-3xl font-semibold text-gray-800">
              {title}
            </DialogTitle>
            <DialogDescription className="text-center text-lg font-medium text-gray-600 mt-2">
              {subTitle}
            </DialogDescription>
          </DialogHeader>
          <div className="text-center mt-4 mb-6 text-gray-500">{discountLabel}</div>
          <div className="grid gap-4">
            {discounts.map((discount, index) => (
              <Button key={index} className="bg-red-600 text-white w-full py-2 rounded-lg text-lg flex items-center justify-center hover:bg-red-700">
                {discount.label}
                {discount.icon && (
                  <NextImage
                    src={discount.icon}
                    alt={discount.iconAlt || ''}
                    width={30}
                    height={30}
                    className="ml-2"
                  />
                )}
              </Button>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button variant="link" className="text-gray-500 hover:underline" onClick={() => setIsOpen(false)}>No thanks, I&apos;ll pay full-price</Button>
          </div>
          <div className="flex justify-center mt-4">
            <NextImage src={imageSrc} alt={imageAlt} className="h-13 w-13" width={100} height={100} /> {/* Generic image */}
          </div>
          <DialogClose asChild>
          </DialogClose>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default UpsellPopup;