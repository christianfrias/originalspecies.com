import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { DefaultSeo } from 'next-seo';
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const { } = dynamic(import('tw-elements'), { ssr: false });
  const router = useRouter();
  const canonical = (`https://www.originalspecies.com` + router.asPath).split("?")[0];

  return <>
    <DefaultSeo
      title="Original Species by Christian Frias - Front End Web Developer"
      description="Work of Christian Frias. Features projects incorporating front-end mobile and web development, design, video and digital marketing."
      canonical={canonical}
      openGraph={{
        type: 'website',
        locale: 'en_CA',
        url: 'https://www.originalspecies.com/',
        site_name: 'Original Species by Christian Frias - Front End Web Developer',
        images: [
          {
            url: 'https://www.example.ie/og-image-01.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          },
          {
            url: 'https://www.example.ie/og-image-02.jpg',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
            type: 'image/jpeg',
          },
          { url: 'https://www.example.ie/og-image-03.jpg' },
          { url: 'https://www.example.ie/og-image-04.jpg' },
        ],
      }}
    />
    <Component {...pageProps} />
  </>
}

export default MyApp
