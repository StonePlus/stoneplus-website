'use client';

import { useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/routing';
import Image from 'next/image';
import EnFlag from '@img/icons/flags/en.png';
import PtBrFlag from '@img/icons/flags/pt-br.png';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { useLocale } from 'next-intl';

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  function handleLocaleChange(newLocale: any) {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  }

  return (
    <div className="dropdown dropdown-end dropdown-hover">
      <label
        tabIndex={0}
        className="btn btn-ghost gap-1 px-0 font-bold hover:text-primary sm:gap-2"
      >
        <GlobeAltIcon className="size-6 hover:text-inherit" />
        {locale.toUpperCase()}
      </label>

      <nav tabIndex={0} className="menu dropdown-content z-[1] w-52">
        <ul className="mt-2 w-full rounded-box bg-neutral bg-opacity-70 p-2 shadow">
          <li>
            <button
              onClick={() => handleLocaleChange('pt-br')}
              disabled={isPending}
              className="flex items-center gap-2 hover:bg-neutral hover:text-primary"
            >
              <Image alt="Brazilian flag." src={PtBrFlag} className="size-5" />
              Português &#40;Brasil&#41;
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLocaleChange('en-us')}
              disabled={isPending}
              className="flex items-center gap-2 hover:bg-neutral hover:text-primary"
            >
              <Image alt="American flag." src={EnFlag} className="size-5" />
              English &#40;USA&#41;
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
