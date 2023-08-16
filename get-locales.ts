import 'server-only';
import type { Locale } from './i18n-config';

const languages: any = {
	en: () => import('./languages/en.json').then((module) => module.default),
	fr: () => import('./languages/fr.json').then((module) => module.default),
};

export const getLanguage = async (locale: Locale) =>
	languages[locale]?.() ?? languages.en();
