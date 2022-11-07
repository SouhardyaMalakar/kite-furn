// pages/_app.tsx
import { DefaultSeo } from 'next-seo';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import '../styles/Process.css';
import '../styles/Residence.css';
import '../styles/Halls.css';
import '../styles/Office.css';
import '../styles/Retails.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Kite Furniture - Customised Furniture and Interiors - best quality and European engineering"
        description="Kite Furniture is the best furniture store in Coimbatore, Tamil Nadu, India.
        We sell and design modular kitchens, customized interiors and furniture for homes, restaurants,
        eateries, bakeries with the best of quality. Made in India."
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'http://www.kitefurn.in/',
          site_name: 'Kite Furn Home'
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
