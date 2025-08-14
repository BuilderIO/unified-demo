"use client";

import { useState, FormEvent } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useCartStore } from '@/src/store/cartStore';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { useRouter } from 'next/navigation';

export function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const { clearCart } = useCartStore();
  
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  
  // Customer information
  const [customerInfo, setCustomerInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'US',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    if (!stripe || !elements) {
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/checkout/success`,
          payment_method_data: {
            billing_details: {
              name: `${customerInfo.firstName} ${customerInfo.lastName}`,
              email: customerInfo.email,
              address: {
                line1: customerInfo.address,
                city: customerInfo.city,
                state: customerInfo.state,
                postal_code: customerInfo.postalCode,
                country: customerInfo.country,
              },
            },
          },
        },
      });

      if (error) {
        setErrorMessage(error.message || 'An unexpected error occurred.');
      } else {
        // Payment succeeded, clear cart
        clearCart();
      }
    } catch (err) {
      setErrorMessage('An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Customer Information */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={customerInfo.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={customerInfo.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={customerInfo.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Shipping Address */}
      <Card>
        <CardHeader>
          <CardTitle>Shipping Address</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="address">Street Address</Label>
            <Input
              id="address"
              name="address"
              value={customerInfo.address}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                value={customerInfo.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                name="state"
                value={customerInfo.state}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="postalCode">Postal Code</Label>
              <Input
                id="postalCode"
                name="postalCode"
                value={customerInfo.postalCode}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                name="country"
                value={customerInfo.country}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Information */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <PaymentElement />
            </div>
            
            {errorMessage && (
              <div className="text-red-600 text-sm mb-4">{errorMessage}</div>
            )}
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={!stripe || isLoading}
            >
              {isLoading ? 'Processing...' : 'Complete Payment'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
