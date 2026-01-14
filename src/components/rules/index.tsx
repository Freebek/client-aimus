"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "../Container";
import GavelIcon from "@mui/icons-material/Gavel";
import Content_Admin from "./Content_Admin";
import Content_Rules from "./Content_Rules";

type Section = "general" | "admin";

const Rules = () => {
  const [t] = useTranslation();
  const [section, setSection] = useState<Section>("general");

  const renderContent = () => {
    switch (section) {
      case "general":
        return <Content_Rules />;
      case "admin":
        return <Content_Admin />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full mb-[30px]">
      <Container style="">
        <div className="text-center rounded-[16px] bg-backgr pb-3 pt-6 text-white">
          <h1 className="text-[32px] md:text-[38px] font-bold">
            {t("rules.Title")}
          </h1>
          <p className="text-primary font-bold">{t("rules.Description")}</p>
        </div>

        <div className="flex flex-col lg:flex-row items-start mt-[25px] text-white gap-5">
          <aside className="w-full lg:basis-1/4">
            <div className="w-full bg-backgr rounded-[16px] p-5">
              <div className="flex items-center text-lg font-bold mb-5">
                <GavelIcon />
                <h3 className="ml-[10px]"> {t("rules.Rule_Sections")}</h3>
              </div>
              <ul className="flex flex-col gap-3">
                <li
                  onClick={() => setSection("general")}
                  className={`${
                    section === "general" ? "bg-gray-700" : "bg-gray-800"
                  } px-5 py-3 rounded-[12px] cursor-pointer`}
                >
                  {t("rules.General_rules")}
                </li>
                <li
                  onClick={() => setSection("admin")}
                  className={`${
                    section === "admin" ? "bg-gray-700" : "bg-gray-800"
                  } px-5 py-3 rounded-[12px] cursor-pointer`}
                >
                  {t("rules.Admin_rules")}
                </li>
              </ul>
            </div>
          </aside>

          <aside className="w-full lg:basis-3/4 lg:pl-5">
            <div className="w-full bg-backgr p-5 rounded-[16px]">
              {renderContent()}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
};

export default Rules;
