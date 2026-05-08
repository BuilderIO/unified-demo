// Similar structure to the Shopify API client
let cachedToken: { value: string; expiresAt: number } | null = null;

// Function to get authentication token
async function getEmporixToken(config: typeof import('../../config/emporix').default) {
  // Check if we have a valid cached token
  if (cachedToken && cachedToken.expiresAt > Date.now()) {
    return cachedToken.value;
  }

  try {
    // Adjust the auth endpoint to use the tenant
    const response = await fetch(`${config.apiUrl}/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: config.clientId,
        // No client secret needed
        tenant: config.tenant,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to get Emporix token: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Cache the token with expiration
    cachedToken = {
      value: data.access_token,
      // Set expiry slightly before the actual expiry to be safe
      expiresAt: Date.now() + (data.expires_in * 1000) - 10000, 
    };
    
    return data.access_token;
  } catch (error) {
    console.error('Error getting Emproix token:', error);
    throw error;
  }
}

// Implement the AnonymousTokenHelper class as shown in the official client
class AnonymousTokenHelper {
  private tenant: string;
  private clientId: string;
  private cache: any;

  constructor(tenant: string, clientId: string) {
    this.tenant = tenant;
    this.clientId = clientId;
    this.cache = {};
  }

  async getAnonymousToken() {
    if (!this.cache['access_token']) {
      await this.authenticate();
    }
    if (this.cache['expires_at'] < Date.now()) {
      await this.authenticate();
    }
    return this.cache['access_token'];
  }

  clearCache() {
    this.cache = {};
  }

  async authenticate() {
    // Note the correct URL structure with query parameters
    const response = await fetch(
      `https://api.emporix.io/customerlogin/auth/anonymous/login?client_id=${this.clientId}&tenant=${this.tenant}`
    );
    const data = await response.json();
    data['expires_at'] = Date.now() + 1000 * data['expires_in'];
    this.cache = data;
  }
}

// Implement main product API functions
export async function getProduct(
  config: typeof import('../../config/emporix').default,
  productId: string
) {
  const tokenHelper = new AnonymousTokenHelper(config.tenant, config.clientId);
  
  try {
    const token = await tokenHelper.getAnonymousToken();
    
    const response = await fetch(
      `${config.apiUrl}/product/${config.tenant}/products/${productId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'X-Version': 'v2',
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      if (response.status === 401) {
        tokenHelper.clearCache();
      }
      
      // Keep the error logging for production troubleshooting
      console.error(`[Emporix API] Failed with status ${response.status}`);
      
      throw new Error(`Failed to fetch Emporix product: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error('[Emporix API] Error fetching product:', error);
    
    // Return a minimal valid product structure to prevent UI crashes
    return { 
      id: productId, 
      code: productId,
      name: `Product ${productId}`, 
      error: true,
      media: [], // Empty media array
      mixins: { } // Empty mixins object
    };
  }
}

export async function searchProducts(
  config: typeof import('../../config/emporix').default,
  searchQuery?: string
) {
  const tokenHelper = new AnonymousTokenHelper(config.tenant, config.clientId);
  
  try {
    const token = await tokenHelper.getAnonymousToken();
    
    // Build URL with correct search syntax
    let url = `${config.apiUrl}/product/${config.tenant}/products`;
    if (searchQuery) {
      url += `?q=name:~${encodeURIComponent(searchQuery)}`;
    }
    
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'X-Version': 'v2',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        tokenHelper.clearCache();
      }
      throw new Error(`Failed to search Emporix products: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error searching Emporix products:', error);
    throw error;
  }
} 