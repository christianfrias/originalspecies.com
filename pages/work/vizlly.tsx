import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Carousel from '../../components/home/Carousel'
import FWImage from '../../components/work/FWImage'


import vz07 from '../../public/images/work/vizlly/os-vz07.jpg'
import vz08 from '../../public/images/work/vizlly/os-vz08.jpg'

const Vizlly: NextPage = (props) => {
  const work = props.work;


const titles = "titler";
  return (
    <div>
      <Head>
        <title>OriginalSpecies by Christian Frias</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Carousel work={work}/>      

      <main>
        <FWImage img={vz07} title={titles} />
        <FWImage img={vz08} title={titles} />
      </main>
      <Footer />
    </div>
  )
}

export default Vizlly

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
