import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from '@/lib/i18n';
import Image from 'next/image';

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title: (
        <>
          <Image
            alt="New API"
            src="/assets/logo.png"
            width={32}
            height={32}
            className="size-8"
            priority
            unoptimized
          />
          <span className="font-medium [.uwu_&]:hidden">New API</span>
        </>
      ),
    },
  };
}
