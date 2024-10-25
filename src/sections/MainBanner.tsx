import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { get } from '@/api/api';
import Loading from '@/components/loading';
import ErrorAlert from '@/components/errorAlert';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

type Banner = {
  id: number;
  name: string;
  type: 'video' | 'image';
  video_url: string | null;
  video_provider: string | null;
  title: string | null;
  subtitle: string | null;
  text: string | null;
  button: string | null;
  url: string | null;
  target: string | null;
  priority: number;
  duration: number;
  width: number;
  height: number;
  image: string;
  file: string;
};

const fetchBanners = async () => {
  const data = await get('/banners/index_slider');
  return data;
};

const MainBanner = () => {
  const {
    data: banners,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['banners'],
    queryFn: fetchBanners,
  });

  if (isLoading) return <Loading />;
  if (error) return <ErrorAlert message='Error loading banners. Please try again.' />;

  return (
    <section className='main-banner'>
      <div className='container mx-auto px-4 py-3'>
        <p
          className='text-center text-xs sm:text-sm uppercase w-full relative text-white bg-black py-1'
          style={{ zIndex: '1' }}
        >
          Get your discount coupon -10% for nex orders
        </p>
        <Swiper
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
          className='w-full relative h-[560px]'
        >
          {banners.payload.map((banner: Banner, index: number) => (
            <SwiperSlide key={index} className='relative h-full'>
              <Image
                src={banner.image}
                fill={true}
                alt={`Banner ${index + 1}`}
                style={{ objectFit: 'cover' }}
                priority={index == 0 ? true : false}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <Image src={'/banners/1.jpg'} fill={true} alt='1' style={{ objectFit: 'cover' }} /> */}
      </div>
    </section>
  );
};

export default MainBanner;
