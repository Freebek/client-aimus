"use client";
import { useTranslation } from "react-i18next";
import React from "react";

const Content_Rules = () => {
  const [t, i18n] = useTranslation();
  return (
    <>
      <div className="mb-5">
        <h1 className="text-2xl font-bold">{t("general_rules.title")}</h1>
        <p className="text-xs text-[#f7f7f7]">
          {t("general_rules.description")}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-bold">1. {t("general_rules.section_1.title")}</h2>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">1.1</span>{" "}
            {t("general_rules.section_1.1.1")}
          </p>
          <span className="text-red-500 text-sm">
            {t("general_rules.section_1.1.1_punishment")}
          </span>
        </div>
        <p className="text-xs">{t("general_rules.section_1.1.1_addition")}</p>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">1.2</span>{" "}
            {t("general_rules.section_1.1.2")}
          </p>
          <span className="text-red-500 text-sm">
            {t("general_rules.section_1.1.2_punishment")}
          </span>
        </div>
        <p className="text-xs">{t("general_rules.section_1.1.2_text_1")}</p>
        <p className="text-xs">{t("general_rules.section_1.1.2_text_2")}</p>
        <p className="text-xs">{t("general_rules.section_1.1.2_text_3")}</p>
        <p className="text-xs">{t("general_rules.section_1.1.2_text_4")}</p>
        <p className="text-xs">{t("general_rules.section_1.1.2_text_5")}</p>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">1.3</span>{" "}
            {t("general_rules.section_1.1.3")}
          </p>
          <span className="text-red-500 text-sm">
            {t("general_rules.section_1.1.3_punishment")}
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">1.4</span>{" "}
            {t("general_rules.section_1.1.4")}
          </p>
          <span className="text-red-500 text-sm">
            {t("general_rules.section_1.1.4_punishment")}
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">1.5</span>{" "}
            {t("general_rules.section_1.1.5")}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-5">
        <h2 className="font-bold">2. {t("general_rules.section_2.title")}</h2>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.1</span>{" "}
            {t("general_rules.section_2.2.1")}
          </p>
          <span className="text-red-500 text-sm">
            {t("general_rules.section_2.2.1_punishment")}
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.2</span>{" "}
            {t("general_rules.section_2.2.2")}
          </p>
          <span className="text-red-500 text-sm">
            {t("general_rules.section_2.2.1_punishment")}
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.3</span>{" "}
            {t("general_rules.section_2.2.3")}
          </p>
          <span className="text-red-500 text-sm">
            {t("general_rules.section_2.2.1_punishment")}
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.4</span>{" "}
            {t("general_rules.section_2.2.4")}
          </p>
          <span className="text-red-500 text-sm">
            {t("general_rules.section_2.2.4_punishment")}
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.5</span>{" "}
            {t("general_rules.section_2.2.5")}
          </p>
          <span className="text-red-500 text-sm">
            {t("general_rules.section_2.2.5_punishment")}
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.6</span>{" "}
            {t("general_rules.section_2.2.6")}
          </p>
          <span className="text-red-500 text-sm">
            {t("general_rules.section_2.2.6_punishment")}
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.7</span>{" "}
            {t("general_rules.section_2.2.7")}
          </p>
          <span className="text-red-500 text-sm">
            {" "}
            {t("general_rules.section_2.2.7_punishment")}
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.8</span>{" "}
            {t("general_rules.section_2.2.8")}
          </p>
          <span className="text-red-500 text-sm">
            {t("general_rules.section_2.2.8_punishment")}
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.9</span>{" "}
            {t("general_rules.section_2.2.9")}
          </p>
          <span className="text-red-500 text-sm">
            {" "}
            {t("general_rules.section_2.2.9_punishment")}
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.10</span>{" "}
            {t("general_rules.section_2.2.10")}
          </p>
          <span className="text-red-500 text-sm">
            {" "}
            {t("general_rules.section_2.2.10_punishment")}
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.11</span>{" "}
            {t("general_rules.section_2.2.11")}
          </p>
          <span className="text-red-500 text-sm">
            {" "}
            {t("general_rules.section_2.2.11_punishment")}
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">2.12</span>{" "}
            {t("general_rules.section_2.2.12")}
          </p>
          <span className="text-red-500 text-sm">
            {" "}
            {t("general_rules.section_2.2.12_punishment")}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-5">
        <h2 className="font-bold">3. {t("general_rules.section_3.title")}</h2>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">3.1</span>{" "}
            {t("general_rules.section_3.3.1")}
          </p>
          <span className="text-red-500 text-sm">
            {" "}
            {t("general_rules.section_3.3.1_punishment")}
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">3.2</span>{" "}
            {t("general_rules.section_3.3.2")}
          </p>
          <span className="text-red-500 text-sm">
            {t("general_rules.section_3.3.2_punishment")}
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">3.3</span>{" "}
            {t("general_rules.section_3.3.3")}
          </p>
          <span className="text-red-500 text-sm">
            {" "}
            {t("general_rules.section_3.3.3_punishment")}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-5">
        <h2 className="font-bold">{t("general_rules.section_4.title")}</h2>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">4.1</span>{" "}
            {t("general_rules.section_4.4.1")}
          </p>
          <span className="text-red-500 text-sm">
            {t("general_rules.section_4.4.1_punishment")}
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">4.2</span>{" "}
            {t("general_rules.section_4.4.2")}
          </p>
          <span className="text-red-500 text-sm">
            {" "}
            {t("general_rules.section_4.4.2_punishment")}
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">4.3</span>{" "}
            {t("general_rules.section_4.4.3")}
          </p>
          <span className="text-red-500 text-sm">
            {" "}
            {t("general_rules.section_4.4.3_punishment")}
          </span>
        </div>
        <div>
          <p className="text-xs">
            <span className="p-1 bg-gray-600 rounded-[4px]">4.4</span>{" "}
            {t("general_rules.section_4.4.4")}
          </p>
          <span className="text-red-500 text-sm">
            {" "}
            {t("general_rules.section_4.4.4_punishment")}
          </span>
        </div>
      </div>
    </>
  );
};

export default Content_Rules;
