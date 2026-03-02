import { create } from "zustand";


const useCart = create((set, get) => ({
  items: [],
  addItem: (item) => {
    if (!get().items.find((currentItem)=>currentItem.id === item.id)) {
      set((state) => ({ items: [...state.items, item] }));
    }
  },
  removeItem : (item)=>{
    set((state)=>({items : state.items.filter((curItem)=>String(curItem.id) !== String(item.id))}))
  },
  clearItems : ()=> set({items : []})
}));

export default useCart;
