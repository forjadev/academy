import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

export default async function Layout(props: { children: ReactNode, params: Promise<{ lang: string }> }) {
  const params = await props.params;

  const {
    children
  } = props;

  return (
    <DocsLayout tree={source.pageTree[params.lang]} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
