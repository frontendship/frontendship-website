import 'swiper/css';
import 'swiper/css/navigation';

import { ArrowLeft, ArrowRight } from 'react-feather';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Avatar from '@/components/Avatar';
import Quotes, { Quote } from '@/data/quotes';

const SliderNavigations = () => (
  <div className="mt-11 flex w-full justify-between text-gray-900 md:hidden">
    <button className="quote-prev-btn">
      <ArrowLeft />
    </button>
    <button className="quote-next-btn">
      <ArrowRight />
    </button>
  </div>
);

const QuoteItem: React.FC<{ quote: Quote }> = ({ quote }) => (
  <div className="flex flex-col items-center justify-center text-center">
    <p className="mb-8 text-3xl text-gray-900 md:text-5xl">{quote.content}</p>
    <Avatar size="2xl" src={quote.author.avatar} alt={quote.author.name} />
    <p className="mt-4 mb-1  text-lg text-gray-900">{quote.author.name}</p>
    <p className="text-gray-600">{quote.author.title}</p>
  </div>
);

const QuoteSlider = () => {
  return (
    <>
      <Swiper
        className="flex w-full"
        modules={[Navigation]}
        navigation={{ prevEl: '.quote-prev-btn', nextEl: '.quote-next-btn' }}
      >
        {Quotes.map(quote => (
          <SwiperSlide key={quote.id} className="w-full">
            <QuoteItem quote={quote} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderNavigations />
    </>
  );
};

export default QuoteSlider;
