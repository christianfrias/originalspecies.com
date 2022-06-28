import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {Carousel} from 'flowbite-react'

const Home: NextPage = (props) => {
  const work = props.work;
  return (
    <div>
      <Head>
        <title>OriginalSpecies by Christian Frias</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="h-56 sm:h-128 xl:h-128 2xl:h-128">
        <Carousel indicators={false} slideInterval={10000} >
          {work.map(proj =>
            <Banner {...proj} key={proj.id} className="rounded-none"/>
          )}
        </Carousel>
      </div>



      <main>
        <section>
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home

import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/src/data/work.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}

