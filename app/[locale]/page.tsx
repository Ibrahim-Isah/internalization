import { getLanguage } from '@/get-locales';
import { Locale } from '@/i18n-config';
import LocaleSwitcher from './components/switcher';

export default async function Home({
	params: { locale },
}: {
	params: { locale: Locale };
}) {
	const language = await getLanguage(locale);

	return (
		<main className='flex flex-col justify-center items-center h-screen space-y-10 my-auto'>
			<LocaleSwitcher locale={locale} />
			<div>{language['Index'].title}</div>
		</main>
	);
}
