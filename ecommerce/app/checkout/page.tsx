"use client";

import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useCartStore } from '@/src/store/cartStore';
import { CheckoutForm } from '@/src/components/Checkout/CheckoutForm';
import { OrderSummary } from '@/src/components/Checkout/OrderSummary';
import { Button } from '@/src/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Initialize Stripe (replace with your public key)
const getStripePromise = () => {
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const isDemoMode = !publishableKey || publishableKey.startsWith('pk_test_demo_') || publishableKey.includes('demo');

  if (isDemoMode) {
    console.log('Running in demo mode - Stripe will be simulated');
    return null;
  }

  if (!publishableKey) {
    console.warn('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY not configured');
    return null;
  }

  try {
    return loadStripe(publishableKey);
  } catch (error) {
    console.error('Failed to initialize Stripe:', error);
    return null;
  }
};

const stripePromise = getStripePromise();

export default function CheckoutPage() {
  const { items, getTotalPrice, getTotalItems } = useCartStore();
  const [clientSecret, setClientSecret] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [demoMode, setDemoMode] = useState(false);

  // Create payment intent when component mounts
  useEffect(() => {
    const createPaymentIntent = async () => {
      if (items.length === 0) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: Math.round(getTotalPrice() * 100), // Convert to cents
            currency: 'usd',
            items: items,
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Payment API error:', response.status, errorText);
          return;
        }

        const data = await response.json();
        if (data.error) {
          console.error('Payment configuration error:', data.error);
          // Still set loading to false so user can see the cart
        } else {
          setClientSecret(data.clientSecret);
          if (data.demoMode) {
            setDemoMode(true);
          }
        }
      } catch (error) {
        console.error('Error creating payment intent:', error);
      } finally {
        setLoading(false);
      }
    };

    createPaymentIntent();
  }, [items, getTotalPrice]);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-6">Add some items to your cart before checking out.</p>
          <Button asChild>
            <Link href="/">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  const appearance = {
    theme: 'stripe' as const,
    variables: {
      colorPrimary: '#0570de',
      colorBackground: '#ffffff',
      colorText: '#30313d',
      colorDanger: '#df1b41',
      fontFamily: 'Ideal Sans, system-ui, sans-serif',
      spacingUnit: '2px',
      borderRadius: '4px',
    },
  };

  const stripeOptions = {
    clientSecret,
    appearance,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button variant="ghost" asChild className="mr-4">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Shop
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Checkout</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="lg:order-2">
            <OrderSummary />
          </div>

          {/* Payment Form */}
          <div className="lg:order-1">
            {clientSecret && !demoMode && stripePromise ? (
              <Elements options={stripeOptions} stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            ) : demoMode ? (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">🎭 Demo Mode</h3>
                <p className="text-gray-600 mb-4">
                  This is a demonstration of the checkout flow. Payment processing is simulated.
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-medium mb-2">Demo Payment</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      In a real implementation, this would process the payment through Stripe.
                    </p>
                    <button
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                      onClick={() => window.location.href = '/checkout/success?demo=true'}
                    >
                      Complete Demo Payment
                    </button>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  To enable real payments, configure valid Stripe API keys in the environment variables.
                </p>
              </div>
            ) : (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">Payment Configuration Required</h3>
                <p className="text-gray-600 mb-4">
                  Payment processing is not fully configured. This is a demo checkout page.
                </p>
                <p className="text-sm text-gray-500">
                  To enable real payments, configure your Stripe API keys in the environment variables.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
