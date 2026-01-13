import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { QQGroupQuiz } from '@/components/qq-group-quiz';
import { APIPage } from '@/components/api-page';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import type { ComponentPropsWithoutRef, ComponentType } from 'react';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  const ZoomableImage = (props: ComponentPropsWithoutRef<'img'>) => (
    <ImageZoom {...props} />
  );

  return {
    ...(defaultMdxComponents as MDXComponents),
    img: ZoomableImage,
    QQGroupQuiz,
    // APIPage is an async server component, need type assertion to bypass MDX type check
    APIPage: APIPage as unknown as ComponentType<Record<string, unknown>>,
    ...components,
  };
}
