// src/recipe-detail/[id]/page.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router'; // Pastikan dari 'react-router-dom'
import type { Recipe } from '../../types'; // Pastikan path ke types benar
import RecipesData from '../../data/food.json'; // Mengimpor data resep
import {
  CaretLeftIcon,
  ClockCounterClockwiseIcon,
  GlobeHemisphereEastIcon,
  UserIcon,
  ChefHatIcon,
  MoneyIcon,
} from '@phosphor-icons/react';
import { Button, Card, Divider } from '@heroui/react';
import { Link } from 'react-router';
import Navbar from '../../components/Navbar';

const RecipeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    if (id) {
      const foundRecipe = RecipesData.data.find((r) => r.id === id);

      if (foundRecipe) {
        setRecipe(foundRecipe);
      } else {
        setError('Resep tidak ditemukan.');
        // navigate('/404'); // Opsional: redirect ke halaman 404
      }
    } else {
      setError('ID resep tidak valid.');
      // navigate('/');
    }
    setLoading(false);
  }, [id]); // Hapus navigate dari dependency jika tidak melakukan redirect programatik di dalam useEffect

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-orange-50 font-quicksand'>
        Loading resep...
      </div>
    );
  }

  if (error) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center bg-orange-50 font-quicksand text-red-600'>
        <p className='text-xl'>{error}</p>
        <button
          onClick={() => navigate('/')}
          className='mt-4 px-6 py-2 bg-accent text-white rounded-full hover:bg-primary transition duration-300'
        >
          Kembali ke Halaman Utama
        </button>
      </div>
    );
  }

  if (!recipe) {
    return null;
  }

  return (
    <div className='min-h-screen flex flex-col items-center bg-orange-50 font-quicksand pb-16 px-20 pt-24'>
      {' '}
      {/* Added padding bottom */}
      {/* Tombol kembali - Fixed position agar selalu terlihat */}
      <button
        onClick={() => navigate(-1)}
        className='fixed top-24 left-8 z-40 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md text-gray-700 hover:bg-gray-200 transition flex items-center gap-2 cursor-pointer duration-300'
        aria-label='Kembali ke halaman sebelumnya'
      >
        <CaretLeftIcon size={20} /> Kembali
      </button>
      <Navbar />
      {/* Hero Section dengan Gambar dan Overlay */}
      <div className='w-full relative h-[450px] md:h-[550px] overflow-hidden rounded-3xl shadow-xl'>
        <img
          src={recipe.imageUrlLarge || recipe.image}
          alt={recipe.name}
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8'>
          <div className='text-white'>
            <p className='text-md md:text-lg font-semibold mb-2'>Ayo Masak</p>
            <h1 className='text-4xl font-bold font-sans'>{recipe.name}</h1>
          </div>
        </div>
      </div>
      {/* Info Cards Section */}
      <div className='w-full bg-white rounded-xl mt-10 flex justify-around gap-4 p-8'>
        {/* Prep Time Card */}
        <Card
          shadow='none'
          className='bg-white flex flex-row gap-3 items-center justify-center text-center rounded-xl'
        >
          <GlobeHemisphereEastIcon
            size={40}
            className='text-primary mb-2 bg-primary/30 rounded-full p-1.5'
          />
          <div className='flex flex-col items-start'>
            <p className='text-gray-500 font-medium'>Cuisine</p>
            <span className='font-semibold text-lg'>{recipe.cuisine}</span>
          </div>
        </Card>
        <Card
          shadow='none'
          className='bg-white flex flex-row gap-3 items-center justify-center text-center rounded-xl'
        >
          <MoneyIcon
            size={40}
            className='text-primary mb-2 bg-primary/30 rounded-full p-1.5'
          />
          <div className='flex flex-col items-start'>
            <p className='text-gray-500 font-medium'>Budget</p>
            <span className='font-semibold text-lg'>{recipe.totalBudget}</span>
          </div>
        </Card>
        <Card
          shadow='none'
          className='bg-white flex flex-row gap-3 items-center justify-center text-center rounded-xl'
        >
          <UserIcon
            size={40}
            className='text-primary mb-2 bg-primary/30 rounded-full p-1.5'
          />
          <div className='flex flex-col items-start'>
            <p className='text-gray-500 font-medium'>Serving</p>
            <span className='font-semibold text-lg'>{recipe.serving}</span>
          </div>
        </Card>
        <Card
          shadow='none'
          className='bg-white flex flex-row gap-3 items-center justify-center text-center rounded-xl'
        >
          <ClockCounterClockwiseIcon
            size={40}
            className='text-primary mb-2 bg-primary/30 rounded-full p-1.5'
          />
          <div className='flex flex-col items-start'>
            <p className='text-gray-500 font-medium'>Prep Time</p>
            <span className='font-semibold text-lg'>{recipe.prepTime}</span>
          </div>
        </Card>
        <Card
          shadow='none'
          className='bg-white flex flex-row gap-3 items-center justify-center text-center rounded-xl'
        >
          <ChefHatIcon
            size={40}
            className='text-primary mb-2 bg-primary/30 rounded-full p-1.5'
          />
          <div className='flex flex-col items-start'>
            <p className='text-gray-500 font-medium'>Cook Time</p>
            <span className='font-semibold text-lg'>{recipe.cookTime}</span>
          </div>
        </Card>
        <Card
          shadow='none'
          className='bg-white flex flex-row gap-3 items-center justify-center text-center rounded-xl'
        >
          <GlobeHemisphereEastIcon
            size={40}
            className='text-primary mb-2 bg-primary/30 rounded-full p-1.5'
          />
          <div className='flex flex-col items-start'>
            <p className='text-gray-500 font-medium'>Difficulty</p>
            <span className='font-semibold text-lg'>{recipe.difficulty}</span>
          </div>
        </Card>
      </div>
      {/* Main Content: Description and Two Columns */}
      <div className='w-full bg-white rounded-lg p-8 mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
        {/* Left Column (Description, Ingredients, Instructions) */}
        <div className='md:col-span-2 flex flex-col'>
          <h2 className='text-2xl md:text-3xl font-bold text-primary mb-4'>
            Deskripsi Resep
          </h2>
          <p className='text-gray-700 text-base md:text-lg mb-8 leading-relaxed'>
            {recipe.description}
          </p>
          <h2 className='text-2xl md:text-3xl font-bold text-primary mb-4'>
            Bahan-bahan:
          </h2>
          <ul className='list-disc list-inside text-gray-700 text-base md:text-lg mb-8 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4'>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <Divider className='my-6' /> {/* HeroUI Divider */}
          <h2 className='text-2xl md:text-3xl font-bold text-primary mb-4'>
            Langkah-langkah Memasak:
          </h2>
          <ul>
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className='mb-3'>
                <span className='font-bold text-primary mr-2'>{`${
                  index + 1
                }.`}</span>
                {instruction}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column (Nutritional Info & Call to Action) */}
        <div className='md:col-span-1 flex flex-col space-y-8'>
          {/* Nutritional Info Card */}
          <Card
            shadow='sm'
            className='bg-white p-6 rounded-xl border border-gray-200'
          >
            <h3 className='text-xl font-bold text-primary mb-4'>
              Informasi Nutrisi
            </h3>
            {/* Placeholder for actual nutritional data */}

            <ul className='text-gray-700 text-md space-y-2'>
              <li>
                <span className='font-semibold'>Kalori:</span>{' '}
                {recipe.nutritionalInfo?.calories}
              </li>
              <li>
                <span className='font-semibold'>Karbohidrat:</span>{' '}
                {recipe.nutritionalInfo?.carbohydrates}
              </li>
              <li>
                <span className='font-semibold'>Protein:</span>{' '}
                {recipe.nutritionalInfo?.protein}
              </li>
              <li>
                <span className='font-semibold'>Lemak:</span>{' '}
                {recipe.nutritionalInfo?.fat}
              </li>
              {/* Anda bisa menambahkan data nutrisi aktual jika ada di JSON */}
            </ul>
          </Card>

          {/* "Mau nyoba masak yang lain?" section */}
          <Card
            shadow='sm'
            className='bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center'
          >
            <h3 className='text-xl font-bold text-primary mb-4'>
              Mau nyoba masak yang lain?
            </h3>
            <p className='text-gray-700 mb-4'>
              Temukan inspirasi resep lainnya yang mudah dan hemat!
            </p>
            {/* Gunakan Link atau Button dari HeroUI yang mengarah ke halaman Recipes */}
            <Link to='/menu-list' className='w-full'>
              <Button
                color='primary'
                variant='solid'
                radius='full'
                className='bg-accent text-white w-full py-3'
              >
                Cari Resep Lainnya
              </Button>
            </Link>
          </Card>

          {/* Optional: CallToAction if it should be displayed here */}
          {/* <CallToAction /> */}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
