import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import { list } from '@/api/api';
import { useQuery } from '@tanstack/react-query';
import Loading from '@/components/loading';
import ErrorAlert from '@/components/errorAlert';

const fetchProducts = async () => {
  const data = await list('/products/section/list/recommendation');
  return data;
};

const NewIn = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['recommendedProducts'],
    queryFn: fetchProducts,
  });
  if (isLoading) return <Loading />;
  if (error) return <ErrorAlert message='Error loading products. Please try again.' />;

  return (
    <section className='new-in' style={{ margin: '80px 0' }}>
      <div className='container mx-auto px-4 py-3'>
        <div className='grid grid-cols-1 xl:grid-cols-5'>
          <div className='col-span-1 flex flex-col items-center justify-center'>
            <div className='mb-6 xl:mb-0'>
              <h2 className='uppercase text-4xl font-bold'>New in</h2>
              <p className='text-base font-medium mt-2 mb-3'>Explore new collection.</p>
              <button
                type='button'
                className='leading-6 text-gray-900 bg-white border-2 border-gray-900 focus:outline-none px-2 py-2 uppercase text-xs font-medium hover:text-gray-700 hover:border-gray-500'
                style={{ minWidth: '120px' }}
              >
                See all products
              </button>
            </div>
          </div>
          <div className='col-span-4'>
            <Swiper
              spaceBetween={10}
              slidesPerGroup={1}
              freeMode={true}
              scrollbar={{ draggable: true }}
              modules={[Scrollbar]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className='newInSwiper'
            >
              {products.payload.items.map((item: any) => (
                <SwiperSlide key={item.id} className='h-[260px] lg:h-[200px] cursor-pointer mb-8'>
                  <div className='text-center py-2 px-5 h-[260px] lg:h-[200px] relative'>
                    <Image
                      src={item.image[0]}
                      alt={item.slug}
                      fill={true}
                      className='object-cover'
                      sizes='100%'
                    />
                  </div>
                  <label className='uppercase text-xs text-red-800'>
                    {item.categories[0]?.name}
                  </label>
                  <p className='uppercase text-sm font-medium mt-1 mb-1'>
                    {item.categories[0]?.name}
                  </p>
                  <p className='text-sm font-bold'>
                    {item.price.price.discout != null ? (
                      <>
                        <span className='line-through mr-3'>{item.price.price.original}$</span>{' '}
                        <span>{item.price.price.discout}$</span>
                      </>
                    ) : (
                      <span>{item.price.price.original}$</span>
                    )}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewIn;
