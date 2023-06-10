import { NextSeo, NextSeoProps } from 'next-seo';

type SEOProps = {
  title?: string;
  description?: string;
} & NextSeoProps;

export default function SEO({ title, description, ...rest }: SEOProps) {
  return (
    <NextSeo
      title={title}
      description={
        description ??
        'Next.Js standard project setup for personal or public usage with Prettier, ESLint, husky, SEO, and github workflows'
      }
      {...rest}
      openGraph={{
        type: 'website',
        url: 'https://nextjs-project-setup.vercel.app',
        title: 'Next.Js Project Setup',
        locale: 'in_ID',
        siteName: 'Next.Js Project Setup',
        description:
          'Next.Js standard project setup for personal or public usage with Prettier, ESLint, husky, SEO, and github workflows',
        images: [
          {
            url: ``,
            width: 1200,
            height: 627,
            alt: 'Next.Js Project Setup',
          },
        ],
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/images/icon.jpeg',
        },
      ]}
      defaultTitle='Next.Js Project Setup'
    />
  );
}
