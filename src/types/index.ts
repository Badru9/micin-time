export interface ResponseTypes {
  success: boolean;
  message: string;
  data: Recipe[];
}

export interface Recipe {
  id: string;
  name: string;
  image: string;
  description: string;
  prepTime: string;
  ingredients: string[];
  totalBudget: number;
  instructions: Array<string>;
}
