import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { QQGroupQuiz } from '@/components/qq-group-quiz';
import { APIPage } from '@/components/api-page';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...(defaultMdxComponents as MDXComponents),
    QQGroupQuiz,
    // APIPage 是异步服务端组件，需要类型断言绕过 MDX 类型检查
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    APIPage: APIPage as any,
    ...components,
  };
}
