import type { NextPage } from 'next'
import fsPromises from 'fs/promises';
import path from 'path'
import Head from 'next/head'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import ImageFW from '../../components/work/ImageFW'
import Hero from '../../components/work/Hero'
import Image2Col from '../../components/work/Image2Col'
import Intro from '../../components/work/Intro'
import Stats from '../../components/work/Stats'
import Markdown from '../../components/work/Markdown'
import VideoEmbed from '../../components/work/video'
import Code from '../../components/work/Code'

import future04 from '../../public/images/work/future/os-future04.jpg'
import future05 from '../../public/images/work/future/os-future05.jpg'
import future06 from '../../public/images/work/future/os-future06.jpg'
import future07 from '../../public/images/work/future/os-future07.jpg'
import future08 from '../../public/images/work/future/os-future08.jpg'
import future09 from '../../public/images/work/future/os-future09.jpg'
import future10 from '../../public/images/work/future/os-future10.jpg'
import future11 from '../../public/images/work/future/os-future11.jpg'
import future12 from '../../public/images/work/future/os-future12.jpg'
import future13 from '../../public/images/work/future/os-future13.jpg'
import future14 from '../../public/images/work/future/os-future14.jpg'
import future15 from '../../public/images/work/future/os-future15.jpg'
import future16 from '../../public/images/work/future/os-future16.jpg'
import future17 from '../../public/images/work/future/os-future17.jpg'
import future18 from '../../public/images/work/future/os-future18.jpg'
import future19 from '../../public/images/work/future/os-future19.jpg'
import future20 from '../../public/images/work/future/os-future20.jpg'
import future21 from '../../public/images/work/future/os-future21.jpg'

const Future: NextPage = (props) => {
    const work = props.work[2];
    const title = work.title;
    const desc = work.desc;
    const role = work.categories.join(', ');
    const stats = work.statistics;
    const details = work.details;

    return (
        <div>
            <Header />

            <main>
                <Hero img={future04} title={title} />
                <Intro title={title} desc={desc} role={role} />
                <Stats statsIn={stats} />
                <ImageFW img={future05} title={title} />
                <Markdown details={details[0]} />
                <ImageFW img={future06} title={title} />
                <ImageFW img={future07} title={title} />
                <ImageFW img={future08} title={title} />
                <ImageFW img={future09} title={title} />
                <ImageFW img={future10} title={title} />
                <ImageFW img={future11} title={title} />
                <ImageFW img={future12} title={title} />
                <ImageFW img={future13} title={title} />
                <ImageFW img={future14} title={title} />
                <ImageFW img={future15} title={title} />
                <ImageFW img={future16} title={title} />
                <ImageFW img={future17} title={title} />
                <ImageFW img={future18} title={title} />
                <Markdown details={details[1]} />
                <ImageFW img={future19} title={title} />
                <ImageFW img={future20} title={title} />
                <ImageFW img={future21} title={title} />
                <Code details={details[2]}/>
            </main>
            <Footer />
        </div>
    )
}

export default Future



export async function getStaticProps() {
    const filePath = path.join(process.cwd(), '/src/data/work.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);

    return {
        props: objectData
    }
}
