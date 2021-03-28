import VueI18n, { LocaleMessages } from 'vue-i18n';
import messagesEn from '@/lang/en';
import messagesPl from '@/lang/pl';

const messages = {
  en: messagesEn.en,
  pl: messagesPl.pl,
} as LocaleMessages;

let localI18n!: VueI18n;

export const i18n = (): VueI18n => {
  localI18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en',
    messages: messages, // set locale messages
  });
  return localI18n;
};
document.querySelector('html')?.setAttribute('lang', 'en');

function setI18nLanguage(lang: string) {
  localI18n.locale = lang;
  document.querySelector('html')?.setAttribute('lang', lang);
  return lang;
}

export function loadLanguageAsync(lang: string): Promise<string> {
  // If the same language
  if (['pl', 'en'].includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang));
  }
  return Promise.resolve('');
}
