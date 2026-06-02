// models/product.model.ts

export interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  export interface Category {
    id: number;
    name: string;
    products: Product[];
  }
  
  export interface ProductResponse {
    categories: Category[];
  }