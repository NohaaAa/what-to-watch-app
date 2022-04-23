import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import MovieCard from '@components/movie-card';
import TrendingCard from '@components/trending-card';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>What To Watch</title>
        <meta name="description" content="What to watch app" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
        <div>
            <MovieCard/>
            <TrendingCard/>
        </div>
    </div>
  )
}

export default Home
