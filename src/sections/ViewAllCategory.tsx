import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { allCategories } from '@/api/constantsData';

const ViewAllCategory = () => {
  return (
    <section className='all-category' style={{ margin: '80px 0' }}>
      <div className='container mx-auto px-4 py-3'>
        <div className='inline-flex flex-col'>
          <h2 className='uppercase text-xl'>Shop by category</h2>
          <Link href={'/#'} className='uppercase text-sm text-red-800 text-right'>
            View all
          </Link>
        </div>
      </div>
      <div className='container mx-auto px-4 py-3'>
        <div className='block xl:hidden'>
          <Swiper spaceBetween={10} slidesPerView={1.5} pagination={{ clickable: true }}>
            {allCategories.map((category, index) => (
              <SwiperSlide key={index}>
                <div className='h-[300px] relative flex items-end justify-center cursor-pointer border-2 rounded'>
                  <Image
                    src={category.link}
                    alt={category.alt}
                    fill={true}
                    className='object-contain'
                    sizes='100%'
                  />
                  <p className='text-center relative uppercase z-10 text-lg'>{category.alt}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className='hidden xl:grid grid-cols-6 h-[400px] '>
          {allCategories.map((category, index) => {
            let wrappClass;
            switch (index) {
              case 0:
                wrappClass = 'col-span-2 row-span-2';
                break;
              case 1:
                wrappClass = 'col-span-2 row-span-2';
                break;
              case 2:
                wrappClass = 'col-span-1 row-span-1';
                break;
              case 3:
                wrappClass = 'col-span-1 row-span-1';
                break;
              case 4:
                wrappClass = 'col-span-2 row-span-1';
                break;
              default:
                break;
            }
            return (
              <div
                key={index}
                className={`${wrappClass} flex justify-center items-center text-black height-[400] relative hover:shadow-lg hover:z-20 cursor-pointer`}
              >
                <Image
                  src={category.link}
                  alt={category.alt}
                  fill={true}
                  className='object-contain'
                  sizes='100%'
                />
                <p className='text-center uppercase z-10 absolute bottom-3 right-5 text-sm'>
                  {category.alt}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ViewAllCategory;
