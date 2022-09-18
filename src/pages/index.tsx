import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/lading.module.scss'
import {FirstSection} from "../components/firstSection";
import React from "react";
import {SecondSection} from "../components/secondSection";
import {ThirdSection} from "../components/thirdSection";

import {Footer} from "../components/footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eliane Nogueira Deputada Estadual</title>
          <meta name="description" content="Página Oficial Da Deputada Eliane Nogueira" />
      </Head>


      <main className={styles.main}>

          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <Footer />
      </main>
    </div>
  )
}

export default Home
