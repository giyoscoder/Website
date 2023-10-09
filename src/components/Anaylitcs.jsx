import React from "react";
import { laptop } from "../assets";
import { useTranslation } from "react-i18next";
const Anaylitcs = () => {
  const {t} = useTranslation()
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="container">
        <div className="grid md:grid-cols-2">
          <img src={laptop} alt="imgLaptop" className="w-[500px] mx-auto my-4" />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold" >{t("dataDashboard")}</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>{t('dashboardTitle')}</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione,
              mollitia. Iure incidunt quo, voluptatibus ipsam exercitationem rem
              nesciunt beatae sed!
            </p>
            <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black">{t('getStart')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anaylitcs;
