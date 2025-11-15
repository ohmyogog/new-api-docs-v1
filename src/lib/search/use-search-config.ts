import { useMemo } from 'react';
import { create, type AnyOrama } from '@orama/orama';
import { tokenizerCache } from './tokenizer-cache';

interface UseSearchConfigOptions {
  locale?: string;
  from?: string;
}

export function useSearchConfig(options: UseSearchConfigOptions) {
  const { locale, from = '/api/search' } = options;

  return useMemo(
    () => ({
      type: 'static' as const,
      initOrama: (): AnyOrama =>
        create({
          schema: { _: 'string' },
          components: {
            tokenizer: tokenizerCache.getTokenizer(locale),
          },
        }),
      locale,
      from,
    }),
    [locale, from]
  );
}
