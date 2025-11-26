import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { QQGroupQuiz } from '@/components/qq-group-quiz';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...(defaultMdxComponents as MDXComponents),
    QQGroupQuiz,
    ...components,
  };
}
