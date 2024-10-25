import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { allCategories } from '@/api/constantsData';
import { Scrollbar } from 'swiper';


const InstagramSection = () => {
  return (
    <section className='instagram-section' style={{ margin: '80px 0' }}>
      <div className='container mx-auto px-4 py-3'>
        <div className='grid grid-cols-1 xl:grid-cols-5'>
          <div className='col-span-3'>
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
                  slidesPerView: 3,
                },
              }}
              className='instagramSectionSwiper'
            >
              {allCategories.map((category) => (
                <SwiperSlide key={category.id} className='h-[260px] lg:h-[200px] cursor-pointer'>
                  <div className='text-center py-2 px-5 h-[260px] lg:h-[200px] relative'>
                    <Image
                      src={category.link}
                      alt={category.alt}
                      fill={true}
                      className='object-cover'
                      sizes='100%'
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='col-span-2 flex flex-col items-center justify-center'>
            <div className='mb-6 mt-6 xl:mb-0 xl:mt-0'>
              <h2 className='uppercase text-2xl font-bold'>Be our instagram follower</h2>
              <p className='text-base font-medium mt-2 mb-3'>
                Our latest posts.
                <br />
                Profile: @ringz&tingz
              </p>
              <button
                type='button'
                className='leading-6 text-gray-900 bg-white border-2 border-gray-900 focus:outline-none px-2 py-2 uppercase text-xs font-medium hover:text-gray-700 hover:border-gray-500'
                style={{ minWidth: '120px' }}
              >
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
