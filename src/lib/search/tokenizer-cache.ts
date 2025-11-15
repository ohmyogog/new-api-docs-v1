import { createTokenizer as createMandarinTokenizer } from '@orama/tokenizers/mandarin';
import { createTokenizer as createJapaneseTokenizer } from '@orama/tokenizers/japanese';

type Tokenizer = ReturnType<typeof createMandarinTokenizer>;
type SupportedLocale = 'zh' | 'ja';

class TokenizerCache {
  private cache = new Map<SupportedLocale, Tokenizer>();

  getTokenizer(locale: string | undefined): Tokenizer | undefined {
    if (!locale || !this.isSupportedLocale(locale)) {
      return undefined;
    }

    if (!this.cache.has(locale)) {
      this.cache.set(locale, this.createTokenizer(locale));
    }

    return this.cache.get(locale);
  }

  private isSupportedLocale(locale: string): locale is SupportedLocale {
    return locale === 'zh' || locale === 'ja';
  }

  private createTokenizer(locale: SupportedLocale): Tokenizer {
    switch (locale) {
      case 'zh':
        return createMandarinTokenizer();
      case 'ja':
        return createJapaneseTokenizer();
      default:
        throw new Error(`Unsupported locale: ${locale}`);
    }
  }
}

// Export singleton instance
export const tokenizerCache = new TokenizerCache();
