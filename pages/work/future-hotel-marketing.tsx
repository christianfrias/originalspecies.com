import fsPromises from 'fs/promises';
import path from 'path'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import ImageFW from '../../components/work/ImageFW'
import Hero from '../../components/work/Hero'
import Intro from '../../components/work/Intro'
import Stats from '../../components/work/Stats'
import Markdown from '../../components/work/Markdown'
import Code from '../../components/work/Code'
import { NextSeo } from 'next-seo';

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

type WorkTypes = {
    title:string;
    desc:string;
    categories:string;
    statistics:string;
    details:string;
    meta:string;
    work:any;
}

const Future = (props:WorkTypes) => {
    const work = props.work[2];
    const title = work.title;
    const desc = work.desc;
    const meta = work.meta;
    const role = work.categories.join(', ');
    const stats = work.statistics;
    const details = work.details;

    return (
        <div>
             <NextSeo
                title={`${title} - Project Highlights by Christian Frias`}
                description={meta}
                />
            <Header />

            <main>
                <Hero img={future04.src} title={title} />
                <Intro title={title} desc={desc} role={role} />
                <Stats statsIn={stats} />
                <ImageFW img={future05.src} title={title} />
                <Markdown details={details[0]} />
                <ImageFW img={future06.src} title={title} height={1753}/>
                <ImageFW img={future07.src} title={title} />
                <ImageFW img={future08.src} title={title} />
                <ImageFW img={future09.src} title={title} />
                <ImageFW img={future10.src} title={title} height={1749}/>
                <ImageFW img={future11.src} title={title} />
                <ImageFW img={future12.src} title={title} />
                <ImageFW img={future13.src} title={title} height={1772}/>
                <ImageFW img={future14.src} title={title} />
                <ImageFW img={future15.src} title={title} />
                <ImageFW img={future16.src} title={title} />
                <ImageFW img={future17.src} title={title} />
                <ImageFW img={future18.src} title={title} height={2805}/>
                <Markdown details={details[1]} />
                <ImageFW img={future19.src} title={title} height={2985}/>
                <ImageFW img={future20.src} title={title} height={2120}/>
                <ImageFW img={future21.src} title={title} />
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
    const objectData = JSON.parse(jsonData.toString());

    return {
        props: objectData
    }
}
