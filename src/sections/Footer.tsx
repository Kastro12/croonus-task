import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className='container relative mx-auto px-4 py-3 mt-12'>
        <div className='grid grid-cols-1 lg:grid-cols-6'>
          <div className='col-span-3 flex justify-center xl:justify-start'>
            <div className='relative w-[300px] h-[140px] xl:w-[490px] xl:h-[160px]  mb-6'>
              <Image
                src={'/logo/ringz-thingz.png'}
                alt='ringz thingz Logo'
                fill={true}
                className='object-contain'
                sizes='100%'
              />
              <div className='w-[300px] xl:w-[460px] absolute flex -bottom-5 justify-center xl:justify-end xl:bottom-0'>
                <Link href={'#'} className='p-1.5 border-2 rounded border-gray-300'>
                  <Image src={'/icons/instagram.png'} alt='instagram icon' width={28} height={28} />
                </Link>
                <Link href={'#'} className='p-1.5 border-2 rounded border-gray-300 ml-4'>
                  <Image src={'/icons/youtube.png'} alt='youtube icon' width={28} height={28} />
                </Link>
                <Link href={'#'} className='p-1.5 border-2 rounded border-gray-300 ml-4'>
                  <Image src={'/icons/facebook.png'} alt='facebook icon' width={28} height={28} />
                </Link>
                <Link href={'#'} className='p-1.5 border-2 rounded border-gray-300 ml-4'>
                  <Image src={'/icons/tik-tok.png'} alt='tik-tok icon' width={28} height={28} />
                </Link>
              </div>
            </div>
          </div>
          <div className='col-span-3 lg:col-span-1'>
            <h2 className='uppercase text-xl mt-5 mb-5'>Contact</h2>
            <ul className='text-gray-700'>
              <li>
                <Link href={'#'}>Custom Care</Link>
              </li>
              <li>
                <Link href={'#'}>WhatsApp**</Link>
              </li>
              <li>
                <Link href={'#'}>Email us</Link>
              </li>
              <li>
                <Link href={'#'}>Store Locator</Link>
              </li>
            </ul>
          </div>
          <div className='col-span-3 lg:col-span-1'>
            <h2 className='uppercase text-xl mt-5 mb-5'>Services</h2>
            <ul className='text-gray-700'>
              <li>
                <Link href={'#'}>Express delivery</Link>
              </li>
              <li>
                <Link href={'#'}>How to Return</Link>
              </li>
              <li>
                <Link href={'#'}>Return Label</Link>
              </li>
            </ul>
          </div>
          <div className='col-span-3 lg:col-span-1'>
            <h2 className='uppercase text-xl mt-5 mb-5'>Our company</h2>
            <ul className='text-gray-700'>
              <li>
                <Link href={'#'}>Careers</Link>
              </li>
              <li>
                <Link href={'#'}>Investor Relations</Link>
              </li>
              <li>
                <Link href={'#'}>Sustainability</Link>
              </li>
              <li>
                <Link href={'#'}>Press</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t-4 border-gray-200 border-b-4 w-full flex mt-10 mb-0'>
          <div className='w-full xl:w-[75%] my-2 mx-auto flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-around'>
            <Link href={'#'} className='uppercase sm:w-1/3 lg:w-auto text-center my-3'>
              Faq
            </Link>
            <Link href={'#'} className='uppercase sm:w-1/3 lg:w-auto text-center my-3'>
              Help & contact
            </Link>
            <Link href={'#'} className='uppercase sm:w-1/3 lg:w-auto text-center my-3'>
              Privacy statement
            </Link>
            <Link href={'#'} className='uppercase sm:w-1/3 lg:w-auto text-center my-3'>
              Terms & conditions
            </Link>
            <Link href={'#'} className='uppercase sm:w-1/3 lg:w-auto text-center my-3'>
              Terms of use
            </Link>
            <Link href={'#'} className='uppercase sm:w-1/3 lg:w-auto text-center my-3'>
              Cookie settings
            </Link>
          </div>
        </div>

        <div>
          <div className='payment-icons w-full h-[60px] lg:w-[800px] relative mx-auto mt-6 mb-6'>
            <Image
              src={'/icons/payment-icons.png'}
              alt='payment icons'
              fill={true}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <p className='text-xs text-center w-full lg:w-[75%] mx-auto'>
            Cene na sajtu su iskazane u dinarima sa uračunatim porezom, a plaćanje se vrši
            isključivo u dinarima. Isporuka se vrši SAMO na teritoriji Republike Srbije. Nastojimo
            da budemo što precizniji u opisu proizvoda, prikazu slika i samih cena, ali ne možemo
            garantovatida su sve informacije kompletne i bez grešaka. Svi artikli prikazani na sajtu
            su deo naše ponude i ne podrazumeva da su dostupni u svakom trenutku. Raspoloživost robe
            možete proveriti pozivanjem Call Centra na +381 (0) 32 325 030 ili online prodaja +381
            (0) 62 489 294 (po ceni lokalnog poziva)
          </p>
          <p className='text-xs text-center mt-2'>
            2022 Ringz&Things DOO | Sva prava zadržana. Powered by Croonus Technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
