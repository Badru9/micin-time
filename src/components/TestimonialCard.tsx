import type React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  imageUrl,
}) => {
  return (
    <div className='flex items-center font-quicksand justify-center p-8 py-20 bg-gray-100 w-full gap-12'>
      <img
        src={imageUrl}
        alt={author}
        className='object-cover w-1/2 lg:w-1/4'
      />
      <div className='text-center md:text-left w-1/2 flex flex-col gap-10'>
        <p className='text-3xl font-medium text-gray-800 mb-4 italic'>
          "{quote}"
        </p>
        <p className='text-3xl font-bold italic text-black'>- {author}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
