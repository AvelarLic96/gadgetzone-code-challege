export interface IProducts {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

export type Products = {
  products: IProducts[] | undefined
}

export type Product = {
  product: IProducts | undefined
}
