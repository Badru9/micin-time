import { Divider } from '@heroui/react';
import type { Recipe } from '../types';
import { currencyFormat } from '../utils/currencyFormat';
import { Link } from 'react-router';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <Link
      to={`/recipe-detail/${recipe.id}`}
      className='bg-white rounded-2xl p-4 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 relative pt-20 mt-20'
    >
      <img
        src={recipe.image}
        alt={recipe.name}
        className='w-32 h-32 rounded-full object-cover border-2 border-primary absolute -top-16'
      />
      <h3 className='font-bold text-lg text-primary text-center mb-2'>
        {recipe.name}
      </h3>
      <p className='text-gray-600 text-sm text-center mb-4 min-h-[60px]'>
        {recipe.description}
      </p>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-sm font-semibold text-accent'>
          {currencyFormat(recipe.totalBudget)}
        </p>
        <Divider orientation='vertical' />
        <p className='text-sm font-semibold text-accent'>{recipe.prepTime}</p>
      </div>
    </Link>
  );
};

export default RecipeCard;
