export interface Order {
  id: string;
  userId: string;
  createdAt: string;
  productName: string;
  price: string;
  paid: boolean;
  productType: string;
}
