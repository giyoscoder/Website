import Typed from 'react-typed';


const Hero = () => {
  return <div className='text-white container'>
    <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className='uppercase text-[#00df9a] font-bold p-2'>growing with data analytics</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data.</h1>
        <div className='flex items-center justify-center gap-3'>
            <p className="md:text-5xl sm:text-xl text-xl font-bold">Fast, flexible financing for</p>
            <Typed className='md:text-5xl md:pl-4 sm:text-xl text-xl font-bold text-slate-500' strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 mt-2'> Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md mx-auto font-medium my-6 py-3 text-black'>Get Start</button> 
    </div>
  </div>;
};

export default Hero;
