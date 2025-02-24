export interface InventoryItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface CartItem {
  item: InventoryItem; 
  quantity: number
}