import Typed from 'react-typed';
import { useTranslation } from 'react-i18next';

const Hero = () => {

  const {t} = useTranslation()

  return <div className='text-white container'>
    <div className=" mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className='uppercase text-[#00df9a] font-bold p-2'>{t('build')}</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">{t('heroTitle')}</h1>
        <div className='flex  w-full items-center justify-center gap-3'>
            <p className="md:text-5xl sm:text-xl text-xl font-bold">{t('heroTextSlider')}</p>
            <Typed className='md:text-5xl md:pl-4 sm:text-xl text-xl font-bold text-slate-500' strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 mt-2'> {t('manitorin')}</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md mx-auto font-medium my-6 py-3 text-black'>{t('getStart')}</button> 
    </div>
  </div>;
};

export default Hero;
