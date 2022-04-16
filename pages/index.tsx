import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>What To Watch</title>
        <meta name="description" content="What to watch app" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
        <div>Hellos</div>
    </div>
  )
}

export default Home
