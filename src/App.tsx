// src/App.tsx
import { Outlet } from 'react-router';
import Footer from './components/Footer';
import Navbar from './components/Navbar'; // Import Navbar yang baru dibuat
import CallToAction from './components/CallToAction';
import TestimonialCard from './components/TestimonialCard';

function App() {
  return (
    <div className='flex min-h-screen flex-col w-full bg-orange-50 relative font-quicksand'>
      <Navbar isMainPage={true} />

      <div className='flex-grow mt-10'>
        <Outlet />
      </div>

      <CallToAction />
      <TestimonialCard
        quote='Dulu aku cuma bisa indomie + telur. Sekalinya masak nasi goreng gosong. Eh semenjak pake MicinTime, jadilah Chef Arnold anak kos!'
        author='Escoffier, Chef'
        imageUrl='/chef.png'
      />
      <Footer />
    </div>
  );
}

export default App;
