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
      {/* Menggunakan font-sans sebagai pengganti font-league-spartan */}
      <div className=' text-3xl font-bold font-sans'>MicinTime</div>
      <nav className='flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 '>
        <a
          href='#'
          className='hover:text-accent transition-colors duration-200'
        >
          About
        </a>
        <a
          href='#'
          className='hover:text-accent transition-colors duration-200'
        >
          Kategori
        </a>
        <a
          href='#'
          className='hover:text-accent transition-colors duration-200'
        >
          Resep
        </a>
      </nav>
      <div className='text-center md:text-right'>
        <div className='flex justify-center md:justify-end gap-4 mt-2'>
          <InstagramLogoIcon />
          <GithubLogoIcon />
          <TiktokLogoIcon />
          <YoutubeLogoIcon />
          <XLogoIcon />
        </div>
        <p className='text-sm mb-2'>© 2025 kipilinyu. All right reserved</p>
        <p className='text-sm'>Support: kipilinyu@gmail.com</p>
      </div>
    </div>
  </footer>
);

export default Footer;
