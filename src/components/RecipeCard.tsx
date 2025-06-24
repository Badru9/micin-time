import type { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => (
  <div className='bg-white rounded-2xl p-4 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1'>
    <img
      src={recipe.image}
      alt={recipe.name}
      className='w-32 h-32 rounded-full object-cover mb-4 border-2 border-primary'
    />
    <h3 className='font-bold text-lg text-primary text-center mb-2'>
      {recipe.name}
    </h3>
    <p className='text-gray-600 text-sm text-center mb-4 min-h-[60px]'>
      {recipe.description}
    </p>
    <p className='text-sm font-semibold text-accent'>{recipe.prepTime}</p>
  </div>
);

export default RecipeCard;
