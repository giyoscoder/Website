import React from "react";
import { useTranslation } from "react-i18next";

const Newsletter = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-black py-16">
      <div className="container space-y-20 md:flex items-center justify-between">
        <div className="text-white">
          <p className="font-bold md:text-4xl sm:text-3xl text-2xl mb-3">
            {t("contactTitle")}
          </p>
          <p>{t("contactAbout")}</p>
        </div>

        <div>
          <div className=" flex items-center gap-3 ">
            <input
              className="rounded-md outline-none border-none bg-white p-2 w-[250px]"
              type="text"
              placeholder="Enter your email"
            />
            <button className="bg-[#00df9a] font-bold text-black py-2 px-5 rounded-md ">
              {t("contactInput")}
            </button>
          </div>
          <p className="text-white font-bold my-4">{t("labelInput")}</p>
          <a href="#" className="underline text-[#00df9a] ">
            Privacy Policy.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
