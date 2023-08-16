'use client';
import { startTransition } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';

export default function Home({
	params: { locale },
}: {
	params: { locale: string };
}) {
	const t: any = useTranslations('Index');
	const currentLocale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	const changeLanguage = (language: string) => {
		if (!pathname) return '/';
		const segments = pathname.split('/');
		segments[1] = language;
		const newUrl = segments.join('/');
		startTransition(() => {
			router.push(newUrl);
		});
	};
	return (
		<main className='flex flex-col justify-center items-center h-screen space-y-10 my-auto'>
			<div className='flex items-center space-x-5'>
				<button
					className={`border border-white px-5 py-3 ${
						currentLocale === 'en' && 'bg-white text-black'
					}`}
					onClick={() => changeLanguage('en')}
				>
					EN
				</button>
				<button
					className={`border border-white px-5 py-3 ${
						currentLocale === 'fr' && 'bg-white text-black'
					}`}
					onClick={() => changeLanguage('fr')}
				>
					FR
				</button>
			</div>
			<div>{t('title')}</div>
		</main>
	);
}
