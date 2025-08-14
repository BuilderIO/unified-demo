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
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setCartOpen: (open: boolean) => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      
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
    }
  )
);
