import { useCallback, useEffect, useState } from 'react';
import TestimonialCard from './components/TestimonialCard';
import type { Recipe } from './types';
import RecipeCard from './components/RecipeCard';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import Recipes from './data/food.json';
import { useDebounce } from 'use-debounce';

const mainBackground = '/main-bg.png';

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedQuery] = useDebounce(searchQuery, 1000);

  const fetchRecipes = useCallback(async () => {
    try {
      setRecipes(Recipes.data);
    } catch (error) {
      console.error('Failed to fetch recipes:', error);
      // Handle error, misalnya tampilkan pesan kepada user
    }
  }, []);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  // Filter resep berdasarkan query pencarian
  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <main className='flex min-h-screen flex-col w-full bg-orange-50 relative overflow-hidden font-inter'>
      {/* Background utama */}
      <img
        src={mainBackground}
        alt='main-background'
        className='w-full h-[550px] object-cover absolute top-0 left-0 z-0 opacity-80' // Adjust opacity for better text readability
      />

      {/* Konten utama */}
      <div className='flex flex-col items-center mt-5 z-20 pt-20'>
        {/* Add padding-top to avoid content overlap with fixed background */}
        {/* Search Input - Diganti dengan input HTML biasa */}
        <div className='w-full max-w-xl relative'>
          <input
            type='text'
            placeholder='Apa yang ada di kulkasmu?'
            className='w-full pl-12 pr-4 py-3 rounded-full border-accent border-4 bg-white/90 shadow-md focus:outline-none focus:ring-2 focus:ring-accent text-lg text-gray-700'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* Ikon Kaca Pembesar - Diganti dengan SVG inline */}
          <MagnifyingGlassIcon className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500' />
        </div>
        {/* Headline Section */}
        <div className='font-sans font-bold text-primary text-5xl md:text-7xl text-center mt-10'>
          <h1>Gausah Masterchef,</h1>
          <h1>
            Masaknya <span className='text-accent'>MicinTime</span> aja
          </h1>
        </div>
        {/* CTA 1 */}
        <div className='bg-accent text-white w-full max-w-xl md:max-w-3xl lg:max-w-4xl p-8 flex items-center justify-center rounded-4xl shadow-xl mt-16 md:mt-24'>
          {/* Menggunakan font-sans sebagai pengganti font-league-spartan */}
          <h3 className='text-2xl md:text-3xl lg:text-[40px] font-bold font-sans text-center'>
            Dapur kosan sepi ide? Cuss cari resep di sini!
          </h3>
        </div>
        <div
          id='recipe'
          className='flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-full px-8 py-4 gap-8 my-16 hide-scrollbar'
        >
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <div key={recipe.id} className='min-w-[300px] snap-center'>
                <RecipeCard recipe={recipe} />
              </div>
            ))
          ) : (
            <p className='flex-shrink-0 w-full text-center text-gray-700 text-lg'>
              {debouncedQuery.trim() === ''
                ? 'Tidak ada resep yang tersedia.'
                : `Tidak ada resep yang ditemukan untuk "${debouncedQuery}".`}
            </p>
          )}
        </div>

        <CallToAction />
        <TestimonialCard
          quote='Dulu aku cuma bisa indomie + telur. Sekalinya masak nasi goreng gosong. Eh semenjak pake MicinTime, jadilah Chef Arnold anak kos!'
          author='Escoffier, Chef'
          imageUrl='/chef.png'
        />
      </div>

      <Footer />
    </main>
  );
}

export default App;
