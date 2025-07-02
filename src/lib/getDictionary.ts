// import "server-only";

// type Locale = "en" | "ru" | "uz";

// const dictionaries = {
//   en: () => import("../../public/locales/en.json").then((m) => m.default),
//   ru: () => import("../../public/locales/ru.json").then((m) => m.default),
//   uz: () => import("../../public/locales/uz.json").then((m) => m.default),
// };

// export const getDictionary = async (locale: Locale) => {
//   const dict = await dictionaries[locale]();
//   return dict;
// };
