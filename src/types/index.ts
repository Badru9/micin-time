export interface ResponseTypes {
  success: boolean;
  message: string;
  data: Recipe[];
}

export interface Recipe {
  id: string;
  name: string;
  image: string;
  imageUrlLarge?: string;
  description: string;
  prepTime: string;
  ingredients: string[];
  totalBudget: number;
  instructions: Array<string>;
  cuisine?: string;
  serving?: string;
  difficulty?: string;
  cookTime?: string;
  nutritionalInfo?: {
    calories: string;
    carbohydrates: string;
    protein: string;
    fat: string;
  };
}
