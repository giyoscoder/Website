import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useTranslation, Trans } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [nav, setNav] = useState(false);
  const [multiLanguage, setMultiLanguage] = useState("en");

  useEffect(() => {
    if (localStorage.getItem("language") == "en") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("uz");
    }
  }, []);

  const multiLanguageHandler = (language) => {
    // const data = localStorage.setItem("language", 'uz');
    if (localStorage.getItem("language") == "en") {
      localStorage.setItem("language", "uz");
      i18n.changeLanguage("uz");
    } else {
      localStorage.setItem("language", "en");
      i18n.changeLanguage("en");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-black z-10">
      <div className="container">
        <div className="flex w-full justify-between items-center h-24 text-white">
          <h1 className="text-3xl font-bold text-[#00df9a]">REACT.</h1>
          <ul className="gap-4  mr-0 hidden md:flex cursor-pointer capitalize">
            <li>
              <Trans i18nKey="home">home</Trans>
            </li>
            <li>{t("company")}</li>
            <li>{t("resource")}</li>
            <li>{t("about")}</li>
            <li>{t("contact")}</li>
            <li
              onClick={() => multiLanguageHandler(multiLanguage)}
              className="h-8 w-8 grid place-items-center rounded-full border hover:text-black hover:bg-white"
            >
              {t('tansBtn')}
            </li>
          </ul>
          <div
            className="cursor-pointer md:hidden"
            onClick={() => setNav((prev) => !prev)}
          >
            {!nav && <AiOutlineMenu size={20} />}
            {nav && <AiOutlineClose size={20} />}
          </div>
          <div
            className={`fixed ${
              nav ? "left-0" : "-left-full"
            } z-50 md:-left-full transition-all duration-500 ease-in-out top-0 h-full w-[60%] border-r border-r-gray-900  bg-[#000300]`}
          >
            <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
              REACT.
            </h1>
            <ul className="p-4 uppercase divide-y divide-gray-600">
              <li className="p-4">{t("home")}</li>
              <li className="p-4">{t("company")}</li>
              <li className="p-4">{t("resource")}</li>
              <li className="p-4">{t("about")}</li>
              <li className="p-4">{t("contact")}</li>
            </ul>
          </div>
        </div>
        {/* <div className={`${nav && 'bg-black/75'} md:bg-tranparent h-full w-full fixed top-0 left-0`} onClick={()=> setNav(prev => !prev)}/> */}
      </div>
    </div>
  );
};

export default Navbar;
