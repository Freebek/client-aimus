import i18next, { i18n as I18nInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";

export async function getServerTranslation(locale: string) {
  const i18nInstance: I18nInstance = i18next.createInstance();

  await i18nInstance
    .use(
      resourcesToBackend(
        (lng: any, _ns: any) => import(`../../public/locales/${lng}.json`)
      )
    )
    .init({
      lng: locale,
      fallbackLng: "en",
      supportedLngs: ["en", "ru", "uz"],
      defaultNS: "translation",
      ns: ["translation"],
      interpolation: {
        escapeValue: false,
      },
    });

  return {
    t: i18nInstance.t,
  };
}
