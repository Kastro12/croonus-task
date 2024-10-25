
'use client'
import Navbar from '@/components/navbar';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { ViewAllCategory, MainBanner, NewIn, Footer, InstagramSection } from '@/sections';

export default function Home() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <ViewAllCategory />
      <NewIn />

      <section className='page-banner' style={{ margin: '80px 0' }}>
        <div className='container relative mx-auto px-4 py-3'>
          <div className='grid grid-cols-1 relative'>
            <div className='w-full lg:w-[70%] h-[490px] relative'>
              <Image
                src={'/banners/3.jpg'}
                fill={true}
                alt='3'
                className='object-cover'
                sizes='(max-width: 1024px) 100%, 70%'
              />
            </div>
            <div className='absolute flex w-full h-full items-center justify-end'>
              <div className='text-right m-3 lg:m-0' style={{ maxWidth: '610px' }}>
                <h2 className='uppercase text-4xl font-bold'>
                  Carefully created pieces for you to layer, style and mix.
                </h2>
                <p className='text-base font-medium mt-5 mb-5'>Ringz&Thingz brand.</p>
                <button
                  type='button'
                  className='leading-6 text-gray-900 bg-white border-2 border-gray-900 focus:outline-none py-2 uppercase text-xs font-medium hover:text-gray-700 hover:border-gray-500'
                  style={{ minWidth: '120px' }}
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='subscribe-banner' style={{ margin: '80px 0' }}>
        <div className='container relative mx-auto px-4 py-3'>
          <div className='relative w-full h-[300px]'>
            <div className='absolute right-0 w-full lg:w-[75%] h-full'>
              <Image
                src={'/banners/2.jpg'}
                fill={true}
                alt='Banner Image'
                className='object-cover'
                sizes='100%'
              />
            </div>

            <div className='absolute flex w-full h-full items-center justify-start'>
              <div className='text-left m-3 lg:m-0' style={{ maxWidth: '610px' }}>
                <div className='title relative flex flex-col lg:items-center justify-start lg:flex-row '>
                  <div className='relative h-[80px] w-[210px]'>
                    <Image
                      src={'/logo/ringz-thingz.png'}
                      alt='ringz thingz Logo'
                      fill={true}
                      sizes='100%'
                      className='object-contain'
                    />
                  </div>
                  <h2 className='uppercase text-4xl font-bold ml-2'>Newsletter</h2>
                </div>

                <p className='text-base font-medium mt-5 mb-5'>
                  Get the latest news from the Ringz&Tingz Online Store regarding new products,
                  exclusive specials, lifestyle and fashion trends.
                </p>
                <button
                  type='button'
                  className='leading-6 text-gray-900 bg-white border-2 border-gray-900 focus:outline-none py-2 uppercase text-xs font-medium hover:text-gray-700 hover:border-gray-500'
                  style={{ minWidth: '120px' }}
                >
                  Subscribe now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InstagramSection />
      <Footer />
    </>
  );
}
