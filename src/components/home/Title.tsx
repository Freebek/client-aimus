"use client";

import Container from "../Container";
import { useTranslation } from "react-i18next";
const Title = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="w-full my-[30px]">
      <Container style="text-center">
        <h2 className="text-left text-xl">{t("Our_Servers")}</h2>
      </Container>
    </section>
  );
};
export default Title;
