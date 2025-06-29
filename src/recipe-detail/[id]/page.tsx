// src/recipe-detail/[id]/page.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router'; // Import useNavigate
import type { Recipe } from '../../types'; // Pastikan path ke types benar
import RecipesData from '../../data/food.json'; // Mengimpor data resep
import { CaretLeftIcon } from '@phosphor-icons/react';

const RecipeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Mendapatkan parameter 'id' dari URL
  const navigate = useNavigate(); // Untuk navigasi programatik
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    if (id) {
      // Dalam aplikasi nyata, Anda akan fetch data dari API di sini
      // Untuk contoh ini, kita cari di data JSON lokal
      const foundRecipe = RecipesData.data.find((r) => r.id === id); // Pastikan r.id bertipe string atau konversi id ke tipe yang sama

      if (foundRecipe) {
        setRecipe(foundRecipe);
      } else {
        setError('Resep tidak ditemukan.');
        // Opsional: Redirect ke halaman 404 atau halaman daftar resep
        // navigate('/404');
      }
    } else {
      setError('ID resep tidak valid.');
      // navigate('/'); // Kembali ke halaman utama jika ID tidak ada
    }
    setLoading(false);
  }, [id, navigate]); // Tambahkan navigate ke dependency array

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-orange-50 font-inter'>
        Loading resep...
      </div>
    );
  }

  if (error) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center bg-orange-50 font-inter text-red-600'>
        <p>{error}</p>
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
    return null; // Atau tampilkan sesuatu yang lain jika recipe masih null tapi tidak ada error
  }

  return (
    <div className='min-h-screen flex flex-col items-center bg-orange-50 font-inter p-8'>
      <div className='w-full max-w-4xl bg-white rounded-lg shadow-xl p-8 mt-10'>
        <button
          onClick={() => navigate(-1)} // Kembali ke halaman sebelumnya
          className='mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition flex items-center gap-2 cursor-pointer duration-300'
        >
          <CaretLeftIcon /> Kembali
        </button>
        <img
          src={recipe.image}
          alt={recipe.name}
          className='w-full h-80 object-cover rounded-lg mb-6'
        />
        <h1 className='text-4xl font-bold text-primary mb-4'>{recipe.name}</h1>
        <p className='text-gray-700 text-lg mb-6'>{recipe.description}</p>

        <h2 className='text-2xl font-semibold text-primary mb-3'>
          Bahan-bahan:
        </h2>
        <ul className='list-disc list-inside text-gray-700 mb-6'>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2 className='text-2xl font-semibold text-primary mb-3'>
          Langkah-langkah:
        </h2>
        <ol className='list-decimal list-inside text-gray-700'>
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className='mb-2'>
              {instruction}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
