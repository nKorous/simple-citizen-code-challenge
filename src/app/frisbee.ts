type FrisbeeCategory = "distance" | "fairway" | "midrange" | "putter";

export interface Frisbee {
    id: number;
    name: string;
    description: string;
    speed: number;
    glide: number;
    turn: number;
    fade: number;
    rating: number;
    category: FrisbeeCategory
    image: string;
    price: number;
  }

  export interface SortedFrisbee {
    category: FrisbeeCategory,
    frisbees: Frisbee[]
  }

  