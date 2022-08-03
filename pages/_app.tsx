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
            url: "/images/work/vizlly/os-vz13.jpg",
            width: 1920,
            height: 1080,
            alt: 'Original Species by Christian Frias - Front End Web Developer',
            type: 'image/jpeg',
          },
        ],
      }}
    />
    <Component {...pageProps} />
  </>
}

export default MyApp
