import type { NextPage } from 'next'
import fsPromises from 'fs/promises';
import path from 'path'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import ImageFW from '../../components/work/ImageFW'
import Hero from '../../components/work/Hero'
import Image2Col from '../../components/work/Image2Col'
import Intro from '../../components/work/Intro'
import Stats from '../../components/work/Stats'
import Markdown from '../../components/work/Markdown'
import VideoEmbed from '../../components/work/Video'
import Code from '../../components/work/Code'

import anne04 from '../../public/images/work/anne/os-anne04.jpg'
import anne06 from '../../public/images/work/anne/os-anne06.jpg'
import anne07 from '../../public/images/work/anne/os-anne07.jpg'
import anne08 from '../../public/images/work/anne/os-anne08.jpg'
import anne09 from '../../public/images/work/anne/os-anne09.jpg'
import anne10 from '../../public/images/work/anne/os-anne10.jpg'
import anne11 from '../../public/images/work/anne/os-anne11.jpg'
import anne12 from '../../public/images/work/anne/os-anne12.jpg'
import anne13 from '../../public/images/work/anne/os-anne13.jpg'
import anne14 from '../../public/images/work/anne/os-anne14.jpg'
import anne15 from '../../public/images/work/anne/os-anne15.jpg'
import anne16 from '../../public/images/work/anne/os-anne16.jpg'
import anne17 from '../../public/images/work/anne/os-anne17.jpg'
import anne18 from '../../public/images/work/anne/os-anne18.jpg'
import anne19 from '../../public/images/work/anne/os-anne19.jpg'

const anne20 = '/images/work/anne/os-anne20.jpg'

type PropTypes = {
    work:WorkTypes;
}

type WorkTypes = {
    title:string;
    desc:string;
    statistics:string;
    details:string;
}

const Anne = (props:PropTypes) => {
    const work:string = props.work[1];
    const title = work.title;
    const desc = work.desc;
    const role = work.categories.join(', ');
    const stats = work.statistics;
    const details = work.details;

    return (
        <div>
            <Header />

            <main>
                <Hero img={anne04.src} title={title} />
                <Intro title={title} desc={desc} role={role} />
                <Stats statsIn={stats} />
                <ImageFW img={anne06.src} title={title} />
                <Markdown details={details[0]} />
                <ImageFW img={anne07.src} title={title} />
                <ImageFW img={anne08.src} title={title} />
                <Image2Col imgL={anne09.src} imgR={anne10.src} title={title} />
                <ImageFW img={anne11.src} title={title} />
                <ImageFW img={anne12.src} title={title} />
                <Markdown details={details[1]} />
                <ImageFW img={anne13.src} title={title} />
                <ImageFW img={anne14.src} title={title} />
                <ImageFW img={anne15.src} title={title} />
                <ImageFW img={anne16.src} title={title} />
                <ImageFW img={anne17.src} title={title} />
                <ImageFW img={anne18.src} title={title} />
                <ImageFW img={anne19.src} title={title} />                
                <VideoEmbed embedId="UG3IizNSovs" thumbnail={anne20} title={title} />
                <Code details={details[2]}/>
            </main>
            <Footer />
        </div>
    )
}

export default Anne

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), '/src/data/work.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);

    return {
        props: objectData
    }
}
