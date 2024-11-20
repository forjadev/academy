import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { I18nProvider } from "fumadocs-ui/i18n";

const inter = Inter({
  subsets: ['latin'],
});

export default async function Layout(props: { params: Promise<{ lang: string }>, children: ReactNode }) {
  const params = await props.params;

  const {
    children
  } = props;

  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
              <I18nProvider locale={params.lang} locales={[
                  { locale: 'en', name: 'English' }
              ]}>
                <RootProvider>{children}</RootProvider>
              </I18nProvider>
          </body>
    </html>
  );
}
