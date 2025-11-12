import { RootProvider } from 'fumadocs-ui/provider/next';
import { defineI18nUI } from 'fumadocs-ui/i18n';
import { i18n } from '@/lib/i18n';
import '../global.css';
import { Inter } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import { createMetadata, baseUrl } from '@/lib/metadata';

const inter = Inter({
  subsets: ['latin'],
});

const { provider } = defineI18nUI(i18n, {
  translations: {
    en: {
      displayName: 'English',
    },
    zh: {
      displayName: '简体中文',
      search: '搜索文档',
      searchNoResult: '没有结果',
      toc: '目录',
      lastUpdate: '最后更新于',
      chooseTheme: '选择主题',
      nextPage: '下一页',
      previousPage: '上一页',
    },
    ja: {
      displayName: '日本語',
      search: 'ドキュメントを検索',
      searchNoResult: '結果が見つかりません',
      toc: '目次',
      lastUpdate: '最終更新',
      chooseTheme: 'テーマを選択',
      nextPage: '次のページ',
      previousPage: '前のページ',
    },
  },
});

const titleMap: Record<
  string,
  { default: string; template: string; description: string }
> = {
  en: {
    default: 'New API',
    template: '%s | New API',
    description:
      'The foundational infrastructure for AI applications. An intelligent gateway connecting all AI ecosystems with enterprise-grade asset management and unified API orchestration.',
  },
  zh: {
    default: 'New API',
    template: '%s | New API',
    description:
      '新一代 AI 应用基础设施平台。连接全球 AI 生态，提供企业级智能网关与资产管理，赋能每一个 AI 应用场景。',
  },
  ja: {
    default: 'New API',
    template: '%s | New API',
    description:
      '次世代 AI アプリケーション基盤プラットフォーム。グローバル AI エコシステムを接続し、エンタープライズグレードのインテリジェントゲートウェイと資産管理を提供。',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = (await params).lang;
  const titles = titleMap[lang] || titleMap.en;

  return createMetadata({
    metadataBase: baseUrl,
    title: {
      default: titles.default,
      template: titles.template,
    },
    description: titles.description,
    keywords: [
      'AI Infrastructure',
      'AI Gateway',
      'AI Asset Management',
      'API Orchestration',
      'AI Application Platform',
      'Multi-Model Integration',
      'Enterprise AI',
      'AI Ecosystem',
      'Unified AI Interface',
      'Intelligent API Management',
    ],
    authors: [{ name: 'New API Team' }],
    alternates: {
      languages: {
        en: '/en',
        zh: '/zh',
        ja: '/ja',
      },
    },
  });
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
};

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const lang = (await params).lang;

  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider i18n={provider(lang)}>{children}</RootProvider>
      </body>
    </html>
  );
}
