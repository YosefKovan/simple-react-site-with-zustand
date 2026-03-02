import { create } from "zustand";

const useCart = create((set, get) => ({
  items: [],
  addItem: (id) => {
    if (!get().items.includes(id)) {
      set((state) => ({ items: [...state.items, id] }));
    }
  },
}));

export default useCart;
