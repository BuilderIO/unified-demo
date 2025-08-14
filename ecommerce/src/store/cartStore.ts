import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
  color?: string;
  handle?: string;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  hasHydrated: boolean;
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setCartOpen: (open: boolean) => void;
  setHasHydrated: (state: boolean) => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [
        {
          id: 'checker-fleece',
          name: 'Checker Fleece',
          price: 92,
          quantity: 1,
          image: 'https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F8ce3d904a49f4e2f937ae836eb03904f',
          size: 'M',
          color: 'Soft Blue',
          handle: 'checker-fleece',
        },
        {
          id: 'fog-linen-jacket',
          name: 'Fog Linen Jacket',
          price: 134,
          quantity: 2,
          image: 'https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F846994000b344f70aa99ed4edf7b670b',
          size: 'L',
          color: 'Soft Blue',
          handle: 'fog-linen-jacket',
        },
        {
          id: 'angular-sunglasses',
          name: 'Angular Sunglasses',
          price: 31,
          quantity: 1,
          image: 'https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F355e4b1dcfe04b5081a3e5fd72cd8ee9',
          handle: 'angular-sunglasses',
        },
        {
          id: 'long-sleeve-cropped-sweater',
          name: 'Long Sleeve Cropped Sweater',
          price: 79,
          quantity: 1,
          image: 'https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2Fb76944e9131c4c939382227e9652b5be',
          size: 'S',
          color: 'Red',
          handle: 'long-sleeve-cropped-sweater',
        },
        {
          id: 'led-high-tops',
          name: 'LED High Tops',
          price: 80,
          quantity: 1,
          image: 'https://burst.shopifycdn.com/photos/putting-on-your-shoes_925x.jpg',
          size: '9',
          handle: 'led-high-tops',
        },
        {
          id: 'olive-green-jacket',
          name: 'Olive Green Jacket',
          price: 65,
          quantity: 1,
          image: 'https://burst.shopifycdn.com/photos/urban-fashion_925x.jpg',
          size: 'M',
          handle: 'olive-green-jacket',
        },
      ],
      isOpen: false,
      hasHydrated: false,

      setHasHydrated: (state) => {
        set((currentState) => {
          // If cart is empty after hydration, populate with demo data
          if (state && currentState.items.length === 0) {
            return {
              hasHydrated: state,
              items: [
                {
                  id: 'checker-fleece',
                  name: 'Checker Fleece',
                  price: 92,
                  quantity: 1,
                  image: 'https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F8ce3d904a49f4e2f937ae836eb03904f',
                  size: 'M',
                  color: 'Soft Blue',
                  handle: 'checker-fleece',
                },
                {
                  id: 'fog-linen-jacket',
                  name: 'Fog Linen Jacket',
                  price: 134,
                  quantity: 2,
                  image: 'https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F846994000b344f70aa99ed4edf7b670b',
                  size: 'L',
                  color: 'Soft Blue',
                  handle: 'fog-linen-jacket',
                },
                {
                  id: 'angular-sunglasses',
                  name: 'Angular Sunglasses',
                  price: 31,
                  quantity: 1,
                  image: 'https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F355e4b1dcfe04b5081a3e5fd72cd8ee9',
                  handle: 'angular-sunglasses',
                },
                {
                  id: 'long-sleeve-cropped-sweater',
                  name: 'Long Sleeve Cropped Sweater',
                  price: 79,
                  quantity: 1,
                  image: 'https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2Fb76944e9131c4c939382227e9652b5be',
                  size: 'S',
                  color: 'Red',
                  handle: 'long-sleeve-cropped-sweater',
                },
                {
                  id: 'led-high-tops',
                  name: 'LED High Tops',
                  price: 80,
                  quantity: 1,
                  image: 'https://burst.shopifycdn.com/photos/putting-on-your-shoes_925x.jpg',
                  size: '9',
                  handle: 'led-high-tops',
                },
                {
                  id: 'olive-green-jacket',
                  name: 'Olive Green Jacket',
                  price: 65,
                  quantity: 1,
                  image: 'https://burst.shopifycdn.com/photos/urban-fashion_925x.jpg',
                  size: 'M',
                  handle: 'olive-green-jacket',
                },
              ]
            }
          }
          return {
            hasHydrated: state
          }
        })
      },

      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find(
            (cartItem) => 
              cartItem.id === item.id && 
              cartItem.size === item.size && 
              cartItem.color === item.color
          );
          
          if (existingItem) {
            return {
              items: state.items.map((cartItem) =>
                cartItem.id === existingItem.id &&
                cartItem.size === existingItem.size &&
                cartItem.color === existingItem.color
                  ? { ...cartItem, quantity: cartItem.quantity + (item.quantity || 1) }
                  : cartItem
              ),
            };
          }
          
          return {
            items: [...state.items, { ...item, quantity: item.quantity || 1 }],
          };
        }),
        
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
        
      updateQuantity: (id, quantity) =>
        set((state) => ({
          items: quantity <= 0 
            ? state.items.filter((item) => item.id !== id)
            : state.items.map((item) =>
                item.id === id ? { ...item, quantity } : item
              ),
        })),
        
      clearCart: () => set({ items: [] }),
      
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      
      setCartOpen: (open) => set({ isOpen: open }),
      
      getTotalPrice: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
      
      getTotalItems: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: 'cart-storage',
      partialize: (state) => ({ items: state.items }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setHasHydrated(true)
        }
      },
    }
  )
);
