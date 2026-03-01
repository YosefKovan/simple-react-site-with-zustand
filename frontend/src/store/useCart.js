import { create } from "zustand";

const useCart = create((set)=>({
    items : [],
    addItem : (item)=>set((state)=>({items : [...state.items, item]})),
}))