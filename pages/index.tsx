import { NextSeo } from 'next-seo';

import Layout from 'layouts/main';

const Home = () => {
  return (
    <>
      <NextSeo title="Página inicial" />

      <Layout>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </Layout>
    </>
  );
};

export default Home;
