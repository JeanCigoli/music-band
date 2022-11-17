import Head from 'next/head';
import Image from 'next/image';
import SeoConfig from '../src/config/seo';

import * as Layouts from '../src/layout';
import * as HomePage from '../src/sections';

export default function Home() {
  return (
    <Layouts.Home>
      <Head>
        <SeoConfig />
      </Head>

      <Layouts.Main>
        <HomePage.Header />
      </Layouts.Main>
    </Layouts.Home>
  );
}
