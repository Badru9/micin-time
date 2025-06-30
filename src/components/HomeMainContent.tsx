// src/pages/HomePageContent.tsx
import { useCallback, useEffect, useState } from 'react';
import type { Recipe } from '../types'; // Sesuaikan path
import RecipeCard from '../components/RecipeCard'; // Sesuaikan path
import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import RecipesData from '../data/food.json'; // Ini adalah sumber data asli
import { useDebounce } from 'use-debounce';

const mainBackground = '/main-bg.png'; // Background ini akan digunakan di sini

function HomePageContent() {
  // Hanya menampilkan sebagian kecil resep untuk homepage (misal 5-10 resep pertama)
  const [recipesForHome, setRecipesForHome] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedQuery] = useDebounce(searchQuery, 1000); // Debounce untuk pencarian

  const allRecipes = RecipesData.data; // Data lengkap dari JSON

  const fetchHomePageRecipes = useCallback(() => {
    // Ambil beberapa resep pertama untuk ditampilkan di halaman utama
    // Anda bisa memodifikasi logika ini, misalnya hanya mengambil resep rating tertinggi, dll.
    setRecipesForHome(allRecipes.slice(0, 10)); // Contoh: tampilkan 10 resep pertama
  }, [allRecipes]);

  useEffect(() => {
    fetchHomePageRecipes();
  }, [fetchHomePageRecipes]);

  // Filter resep yang ditampilkan di homepage berdasarkan query pencarian
  // Note: Filter ini hanya berlaku untuk resep yang sudah dipilih untuk ditampilkan di homepage (recipesForHome)
  const filteredHomePageRecipes = recipesForHome.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <div className='flex flex-col items-center pb-16'>
      {' '}
      {/* Padding bottom untuk konten sebelum footer */}
      {/* Background utama */}
      <img
        src={mainBackground}
        alt='main-background'
        className='w-full h-[460px] object-cover absolute top-0 left-0 z-0 opacity-80'
      />
      {/* Konten halaman utama */}
      <div className='flex flex-col items-center w-full z-20 px-16'>
        {/* Search Input */}
        <div className='w-full max-w-xl relative mt-10 md:mt-16'>
          {' '}
          {/* Adjust top margin */}
          <input
            type='text'
            placeholder='Apa yang ada di kulkasmu?'
            className='w-full pl-12 pr-4 py-3 rounded-full border-accent border-4 bg-white/90 shadow-md focus:outline-none focus:ring-2 focus:ring-accent text-lg text-gray-700'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <MagnifyingGlassIcon className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl' />
        </div>

        {/* Headline Section */}
        <div className='font-sans font-bold text-primary text-4xl text-center mt-10'>
          <h1>Gausah Masterchef,</h1>
          <h1>
            Masaknya <span className='text-accent'>MicinTime</span> aja
          </h1>
        </div>

        {/* CTA 1 (Info Box dari screenshot homepage) */}
        <div className='bg-accent text-white w-full max-w-xl p-6 flex items-center justify-center rounded-3xl shadow-xl mt-16 font-quicksand font-semibold text-center'>
          <h3 className='text-2xl font-bold font-sans text-center'>
            Dapur kosan sepi ide? Cuss cari resep di sini!
          </h3>
        </div>

        <div
          id='recipes'
          className='flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-full px-4 py-4 gap-8 my-16 hide-scrollbar'
          // Catatan: Pastikan kelas hide-scrollbar ada di global CSS Anda jika ingin menyembunyikannya
        >
          {filteredHomePageRecipes.length > 0 ? (
            filteredHomePageRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className='flex-shrink-0 w-[calc(100vw/1.2)] sm:w-[calc(100vw/2.5)] md:w-[calc(100vw/3.5)] lg:w-[320px] snap-start'
              >
                <RecipeCard recipe={recipe} />
              </div>
            ))
          ) : (
            <p className='flex-shrink-0 w-full text-center text-gray-700 text-lg'>
              {debouncedQuery.trim() === ''
                ? 'Tidak ada resep pilihan yang tersedia.'
                : `Tidak ada resep pilihan yang ditemukan untuk "${debouncedQuery}".`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePageContent;
