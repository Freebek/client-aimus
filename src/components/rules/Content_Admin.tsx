import React from "react";
import { useTranslation } from "react-i18next";

const Content_Admin = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3">
      <div>
        <h1 className="text-2xl font-bold">{t("adminRules.title")}</h1>
        <p className="text-xs font-medium">{t("adminRules.note")}</p>
      </div>

      <h2 className="font-bold mt-4">{t("adminRules.section1")}</h2>
      {[...Array(10)].map((_, i) => (
        <p key={i} className="text-xs">
          <span className="p-1 bg-gray-600 rounded-[4px]">{`1.${i + 1}`}</span>{" "}
          {t(`adminRules.1.${i + 1}`)}
        </p>
      ))}

      <h2 className="font-bold mt-4">{t("adminRules.section2")}</h2>
      {[...Array(11)].map((_, i) => (
        <p key={i} className="text-xs">
          <span className="p-1 bg-gray-600 rounded-[4px]">{`2.${i + 1}`}</span>{" "}
          {t(`adminRules.2.${i + 1}`)}
        </p>
      ))}

      <h2 className="font-bold mt-4">{t("adminRules.section3")}</h2>
      <p className="text-xs">
        <span className="p-1 bg-gray-600 rounded-[4px]">3.1</span>{" "}
        {t("adminRules.3.1")}
      </p>
      <p className="text-xs">
        <span className="p-1 bg-gray-600 rounded-[4px]">3.2</span>{" "}
        {t("adminRules.3.2")}
      </p>
      <p className="text-xs">
        <span className="font-semibold">{t("adminRules.3.3_prefix")}</span>{" "}
        {t("adminRules.3.3_suffix")}
      </p>
    </div>
  );
};

export default Content_Admin;
