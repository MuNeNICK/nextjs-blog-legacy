import Layout from '../../components/Layout';
import '../styles/globals.css';
// import 'prismjs/themes/prism-okaidia.css';
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'highlight.js/styles/default.css';
import SEO from '../../next-seo.config';
import { DefaultSeo } from 'next-seo';
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
