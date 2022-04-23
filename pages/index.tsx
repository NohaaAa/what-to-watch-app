import type { NextPage } from 'next';
import Head from 'next/head';
import HomePage from '@pages/home';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>What To Watch</title>
        <meta name="description" content="What to watch app" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
        <div>
            <HomePage/>
        </div>
    </div>
  )
}

export default Home
