import english from '@public/translations/en.json';

export enum Lang {
  EN = 'en',
}
let currentLanguage = Lang.EN;

const translationMap: Record<Lang, typeof english> = {
  [Lang.EN]: english,
}

export const t = (key: keyof typeof english): string => {

  const value = translationMap[currentLanguage]?.[key] || english[key] || key;
  return value;
}

export const init = (options: { lang: Lang }) => {
  currentLanguage = options.lang;
};