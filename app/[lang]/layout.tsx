import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { I18nProvider, Translations } from "fumadocs-ui/i18n";

const inter = Inter({
  subsets: ["latin"],
});

export default async function Layout(props: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const params = await props.params;

  const { children } = props;

  const translations: Record<string, Partial<Translations>> = {
    'pt-br': {
      chooseTheme: "Escolha o tema",
      chooseLanguage: "Escolha o idioma",
      editOnGithub: "Editar no GitHub",
      lastUpdate: "Última atualização",
      nextPage: "Próximo",
      previousPage: "Anterior",
      search: "Pesquisar",
      searchNoResult: "Nenhum resultado encontrado",
      toc: "Nesta página",
      tocNoHeadings: "Nenhum cabeçalho encontrado",
    }
  }

  return (
    <html lang="pt-br" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <I18nProvider
          locale={params.lang}
          locales={[
            { locale: "pt-br", name: "Português (Brasil)" },
            { locale: "en", name: "English" },
          ]}
          translations={translations[params.lang]}
        >
          <RootProvider>{children}</RootProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
