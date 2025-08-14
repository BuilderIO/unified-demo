import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const isDemoMode = !stripeSecretKey || stripeSecretKey.startsWith('sk_test_demo_') || stripeSecretKey.includes('demo');

if (isDemoMode) {
  console.log('Running in demo mode - Stripe payments will be simulated');
}

let stripe: Stripe | null = null;
if (stripeSecretKey && !isDemoMode) {
  try {
    stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2024-12-18.acacia',
    });
  } catch (error) {
    console.error('Failed to initialize Stripe:', error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = 'usd', items } = await request.json();

    // Validate the request
    if (!amount || amount < 50) { // Minimum 50 cents
      return NextResponse.json(
        { error: 'Amount must be at least 50 cents' },
        { status: 400 }
      );
    }

    // Demo mode - return a fake client secret for testing
    if (isDemoMode) {
      console.log('Demo mode: Creating fake payment intent for amount:', amount);
      return NextResponse.json({
        clientSecret: 'pi_demo_1234567890_secret_demo123',
        demoMode: true,
      });
    }

    // Real Stripe mode
    if (!stripe) {
      return NextResponse.json(
        { error: 'Payment processing is not configured. Please add valid Stripe API keys.' },
        { status: 503 }
      );
    }

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount),
      currency,
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        items: JSON.stringify(items?.map((item: any) => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })) || []),
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);

    // If Stripe error, fall back to demo mode
    if (error instanceof Error && error.message.includes('Invalid API Key')) {
      console.log('Invalid Stripe key detected, falling back to demo mode');
      return NextResponse.json({
        clientSecret: 'pi_demo_1234567890_secret_demo123',
        demoMode: true,
      });
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
