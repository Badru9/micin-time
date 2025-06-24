const CallToAction = () => {
  return (
    <div
      className={`flex font-inter items-center justify-center bg-accent pl-8 w-full md:flex-row`}
    >
      <div className={`flex flex-col gap-4 text-white w-1/2`}>
        <h3 className='text-5xl text-white md:text-4xl italic font-bold font-sans mb-2'>
          "MASAK APA YANG ADA DI KULKAS?{' '}
          <span className='text-primary'>MICINTIME</span> AJARIN CARANYA!"
        </h3>
        <p className='text-3xl md:text-xl font-medium text-white mb-6'>
          Gak perlu belanja mahal! Cuma modal telur, mie, sama sambel? Kita
          bikinin resepnya.{' '}
          <span className='text-primary italic font-bold'>Dijamin kenyang</span>
          , dompet aman!
        </p>
        <button className='bg-primary text-white px-8 py-3 w-fit italic font-bold rounded-full text-lg hover:bg-opacity-90 transition-colors duration-300 shadow-md'>
          BUKA RESEP GRATIS
        </button>
      </div>
      <img
        src={'/blob.png'}
        alt='Call to Action Image'
        className='object-cover w-1/2 lg:w-1/3'
      />
    </div>
  );
};

export default CallToAction;
