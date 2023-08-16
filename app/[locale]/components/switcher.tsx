'use client';
import { usePathname, useRouter } from 'next/navigation';
import { startTransition } from 'react';
import { Locale } from '../../../i18n-config';

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
	const pathname = usePathname();
	const router = useRouter();

	const redirectedPathName = (language: string) => {
		if (!pathname) return '/';
		const segments = pathname.split('/');
		segments[1] = language;
		const newUrl = segments.join('/');
		startTransition(() => {
			router.push(newUrl);
		});
	};

	return (
		<div>
			<div className='flex items-center space-x-5'>
				<button
					className={`border border-white px-5 py-3 ${
						locale === 'en' && 'bg-white text-black'
					}`}
					onClick={() => redirectedPathName('en')}
				>
					EN
				</button>
				<button
					className={`border border-white px-5 py-3 ${
						locale === 'fr' && 'bg-white text-black'
					}`}
					onClick={() => redirectedPathName('fr')}
				>
					FR
				</button>
			</div>
		</div>
	);
}
