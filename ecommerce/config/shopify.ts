import { Config } from 'shopify-buy'

if (!process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN) {
    throw new Error('Missing required environment variable SHOPIFY_STORE_DOMAIN')
  }
  if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN) {
    throw new Error(
      'Missing required environment variable SHOPIFY_STOREFRONT_API_TOKEN'
    )
  } 
 const shopifyConfig: Config = {
    domain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || '',
    storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN || '',
    apiVersion: '2024-01'
  }

  export default shopifyConfig;