"use client";

import { useCartStore } from '@/src/store/cartStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';

export function OrderSummary() {
  const { items, updateQuantity, removeItem, getTotalPrice, getTotalItems } = useCartStore();
  
  const subtotal = getTotalPrice();
  const shipping = subtotal > 100 ? 0 : 9.99; // Free shipping over $100
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary ({getTotalItems()} items)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Cart Items */}
        <div className="space-y-4 max-h-96 overflow-y-auto">
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
                  <p className="text-sm text-gray-600">Size: {item.size}</p>
                )}
                {item.color && (
                  <p className="text-sm text-gray-600">Color: {item.color}</p>
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
        
        {/* Order Totals */}
        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>
              {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
            </span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          
          <div className="border-t pt-2">
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        {/* Shipping Notice */}
        {shipping > 0 && (
          <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
            Add ${(100 - subtotal).toFixed(2)} more for free shipping!
          </div>
        )}
      </CardContent>
    </Card>
  );
}
