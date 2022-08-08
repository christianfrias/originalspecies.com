import type { NextPage } from 'next'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Carousel from '../components/home/Carousel'
import Work from '../components/home/Work'

type PropTypes = {
  work:WorkTypes;
}

type WorkTypes = {
  title:string;
  desc:string;
  categories:string;
  statistics:string;
  details:string;
  meta:string;
  hero:string;
  url:string;
  work:any;
}

const Home = (props:PropTypes) => {
  const work = props.work;

  return (
    <div>
      <Header />
      <Carousel work={work}/>      
      <main className="py-16">
        <section>
          <h1 className="text-2xl leading-10 font-semibold inline pr-2">Hello. I'm Christian.</h1><p className="text-2xl leading-10 inline">I'm a visual designer and coder who helps companies conceptualize, create and deliver data-driven products and meaningful digital experiences. I take an interdisciplinary approach, blending design, code and video, to craft digitally enhanced solutions designed to win conversations. For the last eight years, my work has focused on solving problems, moving people towards action, and helping businesses succeed. With heart and hustle, I move purpose-driven brands to clarity.</p>
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
  const objectData = JSON.parse(jsonData.toString());

  return {
    props: objectData
  }
}

