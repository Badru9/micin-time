import { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import RecipesData from '../data/food.json';
import { Button } from '@heroui/react';
import { useDebounce } from 'use-debounce';
const mainBackground = '/main-bg.png';

function MenuListPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedQuery] = useDebounce(searchQuery, 500); // Menggunakan debounce 500ms
  const [activeFilter, setActiveFilter] = useState<string>('Semua');

  const allRecipes = RecipesData.data;

  // Filter resep berdasarkan query pencarian dan filter aktif
  const filteredRecipes = allRecipes.filter((recipe) => {
    const matchesSearch =
      recipe.name.toLowerCase().includes(debouncedQuery.toLowerCase()) || // Gunakan debouncedQuery
      recipe.description.toLowerCase().includes(debouncedQuery.toLowerCase());

    if (activeFilter === 'Semua') {
      return matchesSearch;
    } else if (activeFilter === 'Pake 3 Bahan') {
      return matchesSearch && recipe.ingredients.length <= 3;
    } else if (activeFilter === 'Budget 10 Ribuan') {
      return matchesSearch && recipe.totalBudget <= 10000;
    } else if (activeFilter === 'Under 10 Menit') {
      const prepTimeValue = parseInt(recipe.prepTime.split(' ')[0]);
      return matchesSearch && prepTimeValue <= 10;
    }
    return matchesSearch;
  });

  return (
    <div className='flex min-h-screen flex-col w-full bg-orange-50 relative overflow-hidden font-inter'>
      {/* Background utama - Jika ini hanya untuk halaman ini */}
      <img
        src={mainBackground}
        alt='main-background'
        className='w-full h-[550px] object-cover absolute top-0 left-0 z-0 opacity-80'
      />

      {/* Konten utama halaman menu list */}
      <div className='flex flex-col items-center mt-5 z-20 pt-20 px-4 md:px-8 lg:px-16'>
        {/* Search Input */}
        <div className='w-full max-w-xl relative mb-10'>
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
        <div className='font-sans font-bold text-primary text-5xl md:text-7xl text-center mt-10'>
          <h1>Gausah Masterchef,</h1>
          <h1>
            Masaknya <span className='text-accent'>MicinTime</span> aja
          </h1>
        </div>

        {/* Info Box */}
        <div className='bg-accent text-white w-full max-w-xl md:max-w-3xl lg:max-w-4xl p-8 flex items-center justify-center rounded-4xl shadow-xl mt-16 md:mt-24'>
          <h3 className='text-2xl md:text-3xl lg:text-[40px] font-bold font-sans text-center'>
            MicinTime tahu kamu laper? Filter, cari, dan masak hidangan
            MicinTime yuk!
          </h3>
        </div>

        {/* Filter Buttons */}
        <div className='w-full my-10 max-w-4xl flex justify-center flex-wrap gap-4 mb-16'>
          <Button
            onPress={() => setActiveFilter('Semua')}
            color={activeFilter === 'Semua' ? 'primary' : 'default'}
            className={
              activeFilter === 'Semua'
                ? 'bg-accent text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }
            radius='full'
            size='lg'
            variant='solid'
          >
            Semua
          </Button>
          <Button
            onPress={() => setActiveFilter('Pake 3 Bahan')}
            color={activeFilter === 'Pake 3 Bahan' ? 'primary' : 'default'}
            className={
              activeFilter === 'Pake 3 Bahan'
                ? 'bg-accent text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }
            radius='full'
            size='lg'
            variant='solid'
          >
            Pake 3 Bahan
          </Button>
          <Button
            onPress={() => setActiveFilter('Budget 10 Ribuan')}
            color={activeFilter === 'Budget 10 Ribuan' ? 'primary' : 'default'}
            className={
              activeFilter === 'Budget 10 Ribuan'
                ? 'bg-accent text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }
            radius='full'
            size='lg'
            variant='solid'
          >
            Budget 10 Ribuan
          </Button>
          <Button
            onPress={() => setActiveFilter('Under 10 Menit')}
            color={activeFilter === 'Under 10 Menit' ? 'primary' : 'default'}
            className={
              activeFilter === 'Under 10 Menit'
                ? 'bg-accent text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }
            radius='full'
            size='lg'
            variant='solid'
          >
            Under 10 Menit
          </Button>
        </div>

        {/* Resep List Section (Grid Penuh) */}
        <div
          id='recipe-list-section'
          // Menggunakan grid untuk layout responsif
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-16 px-4 md:px-8'
        >
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              // Hapus wrapper div dengan flex-shrink-0 dan snap-start
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <div className='col-span-full text-center text-gray-700 text-lg py-10'>
              <p>
                {searchQuery.trim() === '' && activeFilter === 'Semua'
                  ? 'Tidak ada resep yang tersedia.'
                  : `Tidak ada resep yang ditemukan untuk "${searchQuery}" dengan filter "${activeFilter}".`}
              </p>
            </div>
          )}
        </div>
      </div>
      {/* Catatan: CallToAction, TestimonialCard, dan Footer harus dipindahkan ke App.tsx
          atau layout global jika memang ingin selalu ada di setiap halaman,
          atau di sini jika hanya muncul di MenuListPage.
          Berdasarkan request sebelumnya, mereka akan berada di App.tsx sebagai layout.
      */}
      {/* Jika CallToAction dan TestimonialCard hanya ada di MenuListPage: */}
      {/* <CallToAction />
      <TestimonialCard
          quote='...'
          author='...'
          imageUrl='...'
      /> */}
    </div>
  );
}

export default MenuListPage;
