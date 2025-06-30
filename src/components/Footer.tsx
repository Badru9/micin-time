import { Link } from '@heroui/react';
import {
  GithubLogoIcon,
  InstagramLogoIcon,
  TiktokLogoIcon,
  XLogoIcon,
  YoutubeLogoIcon,
} from '@phosphor-icons/react';

/**
 * Komponen Footer untuk bagian bawah halaman.
 * @returns {JSX.Element} Elemen JSX untuk footer.
 */
const Footer: React.FC = () => (
  <footer className='bg-accent text-white py-10'>
    <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
      <div className=' text-3xl font-bold font-sans'>MicinTime</div>
      <nav className='flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 '>
        <Link isBlock color='primary' className='italic' href='#about'>
          About
        </Link>

        {/* <Link isBlock color='primary' className='italic' href='#category'>
          Kategori
        </Link> */}

        <Link isBlock color='primary' className='italic' href='#recipe'>
          Resep
        </Link>
      </nav>
      <div className='text-center md:text-right'>
        <div className='flex justify-center md:justify-end gap-4 my-4'>
          <InstagramLogoIcon size={24} />
          <GithubLogoIcon size={24} />
          <TiktokLogoIcon size={24} />
          <YoutubeLogoIcon size={24} />
          <XLogoIcon size={24} />
        </div>
        {/* <p className='text-sm mb-2'>© 2025 kipilinyu. All right reserved</p>
        <p className='text-sm'>Support: kipilinyu@gmail.com</p> */}
      </div>
    </div>
  </footer>
);

export default Footer;
