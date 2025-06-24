import { useCallback, useEffect, useState } from 'react';
import TestimonialCard from './components/TestimonialCard';
import type { Recipe } from './types';
import RecipeCard from './components/RecipeCard';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

// Dummy data untuk resep
const dummyRecipes = [
  {
    id: '1',
    name: 'Telur Dadar Micin',
    image: 'https://placehold.co/150x150/F2BE22/FFF?text=Telur%20Dadar',
    description:
      'Telur dadar gurih ala anak kos, dengan tekstur renyah di permukaan crispy golden!',
    prepTime: '8 Menit',
  },
  {
    id: '2',
    name: 'Indomie Telur Kribo',
    image: 'https://placehold.co/150x150/F2BE22/FFF?text=Indomie%20Kribo',
    description:
      'Indomie goreng dicampur telur, jadinya kribo kayak rambut gimbal!',
    prepTime: '10 Menit',
  },
  {
    id: '3',
    name: 'Sandwich Telur Mayo',
    image: 'https://placehold.co/150x150/F2BE22/FFF?text=Sandwich',
    description:
      'Telur rebus dihancur + mayo + lada, digigit di roti tawar. Sarapan enak!',
    prepTime: '7 Menit',
  },
  {
    id: '4',
    name: 'Nasi Goreng Simpel',
    image: 'https://placehold.co/150x150/F2BE22/FFF?text=Nasi%20Goreng',
    description: 'Nasi goreng simpel dan cepat saji, cocok untuk perut lapar.',
    prepTime: '15 Menit',
  },
];

// Dummy data untuk background, karena /main-bg.png tidak tersedia.
// Anda bisa menggantinya dengan URL gambar yang sebenarnya.
const mainBackground = '/main-bg.png';
const kitchenBackground = '/blob.png';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => (
  <div className='text-center'>
    {/* Menggunakan font-sans sebagai pengganti font-league-spartan */}
    <h2 className='font-sans font-bold text-primary text-5xl md:text-6xl lg:text-7xl mb-4'>
      {title}
    </h2>
    <p className='font-sans font-bold text-accent text-3xl md:text-4xl lg:text-5xl'>
      {subtitle}
    </p>
  </div>
);

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Callback untuk mengambil resep. Menggunakan useCallback untuk stabilitas fungsi.
  const fetchRecipes = useCallback(async () => {
    try {
      // Menggunakan dummy data lokal daripada API eksternal untuk demo.
      // Jika ingin menggunakan API dummyjson, aktifkan kembali kode di bawah ini.
      // const result = await fetch('https://dummyjson.com/recipes');
      // const response = await result.json();
      // setRecipes(response.recipes || []);

      setRecipes(dummyRecipes); // Menggunakan dummy data lokal
    } catch (error) {
      console.error('Failed to fetch recipes:', error);
      // Handle error, misalnya tampilkan pesan kepada user
    }
  }, []);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]); // Dependency array memastikan ini berjalan sekali saat komponen mount

  // Filter resep berdasarkan query pencarian
  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
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
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-16 px-8'>
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <p className='col-span-full text-center text-gray-700 text-lg'>
              Tidak ada resep yang ditemukan.
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
