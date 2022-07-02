import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Work from '../components/Work'

const Home: NextPage = (props) => {
  const work = props.work;

  return (
    <div>
      <Head>
        <title>OriginalSpecies by Christian Frias</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Carousel work={work}/>      

      {/* <div className="h-56 sm:h-128 xl:h-128 2xl:h-128">
        <Carousel indicators={false} slideInterval={10000} style={{ borderRadius: '0' }} leftControl=" " rightControl=" ">
          {work.map(proj =>
            <Banner {...proj} key={proj.id} className="rounded-none" style={{ borderRadius: '3' }}/>
          )}
        </Carousel>
      </div> */}

      <main>
        <section>

          <p className="text-2xl leading-10"><strong>Hello. I'm Christian.</strong> I'm a <a href="/about">visual designer and coder</a> who helps companies conceptualize, create and deliver data-driven products and meaningful digital experiences. I take an interdisciplinary approach, <a href="/work">blending design, code and video,</a> to craft digitally enhanced solutions designed to win conversations. For the last eight years, my work has focused on solving problems, moving people towards action, and helping businesses succeed. With heart and hustle, I move purpose-driven brands to clarity.</p>


          <Work work={work}/>
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

