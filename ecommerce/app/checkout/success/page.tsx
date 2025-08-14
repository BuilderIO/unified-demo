"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { CheckCircle, Package, Truck } from 'lucide-react';

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const [paymentStatus, setPaymentStatus] = useState<'loading' | 'succeeded' | 'failed'>('loading');
  const [orderNumber] = useState(() => Math.random().toString(36).substring(2, 15).toUpperCase());
  
  useEffect(() => {
    const paymentIntentId = searchParams.get('payment_intent');
    const redirectStatus = searchParams.get('redirect_status');
    
    if (redirectStatus === 'succeeded') {
      setPaymentStatus('succeeded');
    } else if (redirectStatus === 'failed') {
      setPaymentStatus('failed');
    } else if (paymentIntentId) {
      // Verify payment status with your backend if needed
      setPaymentStatus('succeeded');
    } else {
      setPaymentStatus('failed');
    }
  }, [searchParams]);

  if (paymentStatus === 'loading') {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  if (paymentStatus === 'failed') {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto text-center">
          <div className="text-red-500 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-4">Payment Failed</h1>
          <p className="text-gray-600 mb-6">
            Your payment could not be processed. Please try again or contact support.
          </p>
          <div className="space-y-2">
            <Button asChild className="w-full">
              <Link href="/checkout">Try Again</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link href="/">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="text-green-500 mb-4">
            <CheckCircle className="w-16 h-16 mx-auto" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-gray-600">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
        </div>

        {/* Order Details */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Order Number:</span>
                <p className="text-gray-600">#{orderNumber}</p>
              </div>
              <div>
                <span className="font-medium">Order Date:</span>
                <p className="text-gray-600">{new Date().toLocaleDateString()}</p>
              </div>
              <div>
                <span className="font-medium">Payment Method:</span>
                <p className="text-gray-600">Card ending in ****</p>
              </div>
              <div>
                <span className="font-medium">Status:</span>
                <p className="text-green-600 font-medium">Confirmed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What's Next */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What's Next?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-blue-500 mt-1">
                  <Package className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Order Processing</h4>
                  <p className="text-sm text-gray-600">
                    We're preparing your order for shipment. You'll receive an email confirmation shortly.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-blue-500 mt-1">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Shipping Updates</h4>
                  <p className="text-sm text-gray-600">
                    You'll receive tracking information once your order ships (typically 1-2 business days).
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">Continue Shopping</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/account/orders">View Order History</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
