"use client"
import { useEffect } from 'react'
import { ShoppingCart } from 'lucide-react'
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Minus, Plus, Trash2 } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"
import { useCartStore } from '@/src/store/cartStore'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

type CartSliderProps = {
    variant: 'white' | 'black';
  };

  export const CartSlider: React.FC<CartSliderProps> = ({ variant }) => {
  const {
    items,
    isOpen,
    hasHydrated,
    setCartOpen,
    removeItem,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    setHasHydrated
  } = useCartStore();
  const router = useRouter();

  useEffect(() => {
    setHasHydrated(true)
  }, [setHasHydrated])

  const handleCheckout = () => {
    setCartOpen(false);
    router.push('/checkout');
  };

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <Sheet open={isOpen} onOpenChange={setCartOpen}>
        <SheetTrigger asChild>
        <Button variant="link" className="flex items-center gap-1">
            {totalItems > 0 && (
              <Badge
                variant="destructive"
                className="h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs"
              >
                {totalItems}
              </Badge>
            )}
            <ShoppingCart className={`h-6 w-6 text-${variant}`}/>
        </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[400px] sm:w-[540px]">
        <SheetHeader>
            <SheetTitle>Shopping Cart ({totalItems} items)</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingCart className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <Button onClick={() => setCartOpen(false)}>
                  Continue Shopping
                </Button>
              </div>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto py-4">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-4 p-4 border rounded-lg">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2">{item.name}</h4>
                        {item.size && (
                          <p className="text-xs text-gray-600">Size: {item.size}</p>
                        )}
                        {item.color && (
                          <p className="text-xs text-gray-600">Color: {item.color}</p>
                        )}
                        <p className="font-semibold text-sm">${item.price.toFixed(2)}</p>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="h-6 w-6 p-0"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>

                        <div className="flex items-center gap-1">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-6 w-6 p-0"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>

                          <span className="min-w-[2rem] text-center text-sm">
                            {item.quantity}
                          </span>

                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-6 w-6 p-0"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cart Footer */}
              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <div className="space-y-2">
                  <Button
                    onClick={handleCheckout}
                    className="w-full"
                    size="lg"
                  >
                    Proceed to Checkout
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setCartOpen(false)}
                    className="w-full"
                  >
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
        </SheetContent>
    </Sheet>
  )
}
