'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { i18n } from '@/lib/i18n';

type Locale = (typeof i18n.languages)[number];

const supportedLanguages = new Set<Locale>(i18n.languages);

function resolveCandidate(value?: string): Locale | undefined {
  if (!value) return undefined;

  const normalized = value.toLowerCase() as Locale;
  if (supportedLanguages.has(normalized)) {
    return normalized;
  }

  const short = value.split('-')[0]?.toLowerCase() as Locale;
  if (short && supportedLanguages.has(short)) {
    return short;
  }

  return undefined;
}

function detectLocale(): string {
  if (typeof navigator === 'undefined') {
    return i18n.defaultLanguage;
  }

  const candidates: string[] = [];

  if (Array.isArray(navigator.languages) && navigator.languages.length > 0) {
    candidates.push(...navigator.languages);
  } else if (navigator.language) {
    candidates.push(navigator.language);
  }

  for (const raw of candidates) {
    const locale = resolveCandidate(raw);
    if (locale) {
      return locale;
    }
  }

  return i18n.defaultLanguage;
}

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const locale = detectLocale();
    const target = `/${locale}`;

    if (window.location.pathname !== target) {
      router.replace(target);
    }
  }, [router]);

  return null;
}
