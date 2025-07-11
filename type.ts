// fetch data type define


export interface Dimensions {
    width: number;
    height: number;
    depth: number;
  }
  
  
  export interface Review {
    rating: number;
    comment: string;
    date: string; // ISO date string
    reviewerName: string;
    reviewerEmail: string;
  }
  
 
  export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    tags: string[];
    images: string[];
    reviews: Review[];
    quantity?:number;
  }
  
 
  export interface ProductListResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  }
  
  export interface StateType{
    shopcart:{
        cart:Product[];
        favorite:Product[];
        userInfor: unknown;
    }
  }
