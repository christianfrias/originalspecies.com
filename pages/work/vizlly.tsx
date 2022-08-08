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
import { NextSeo } from 'next-seo';

import vz04 from '../../public/images/work/vizlly/os-vz04.jpg'
import vz07 from '../../public/images/work/vizlly/os-vz07.jpg'
import vz08 from '../../public/images/work/vizlly/os-vz08.jpg'
import vz09 from '../../public/images/work/vizlly/os-vz09.jpg'
import vz10 from '../../public/images/work/vizlly/os-vz10.jpg'
import vz11 from '../../public/images/work/vizlly/os-vz11.jpg'
import vz12 from '../../public/images/work/vizlly/os-vz12.jpg'
import vz13 from '../../public/images/work/vizlly/os-vz13.jpg'
import vz14 from '../../public/images/work/vizlly/os-vz14.jpg'
import vz15 from '../../public/images/work/vizlly/os-vz15.jpg'
import vz16 from '../../public/images/work/vizlly/os-vz16.jpg'
import vz17 from '../../public/images/work/vizlly/os-vz17.jpg'

const vz18 = '/images/work/vizlly/os-vz18.jpg'
const vz19 = '/images/work/vizlly/os-vz19.jpg'

type WorkTypes = {
    title:string;
    desc:string;
    categories:string;
    statistics:string;
    details:string;
    meta:string;
    work:any;
}

const Vizlly = (props:WorkTypes) => {
    const work = props.work[0];
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
                <Hero img={vz04.src} title={title} />
                <Intro title={title} desc={desc} role={role} />
                <Stats stats={stats} />
                <ImageFW img={vz07.src} title={title}/>
                <Markdown details={details[0]} />
                <ImageFW img={vz08.src} title={title} width={1920} height={2120}/>
                <ImageFW img={vz09.src} title={title} width={1920} height={2120}/>
                <Image2Col imgL={vz10.src} imgR={vz11.src} title={title} />
                <ImageFW img={vz12.src} title={title}/>
                <ImageFW img={vz13.src} title={title}/>
                <Image2Col imgL={vz14.src} imgR={vz15.src} title={title} width={1396} height={2500}/>
                <ImageFW img={vz16.src} title={title} width={1920} height={2120}/>
                <ImageFW img={vz17.src} title={title} width={1920} height={2805}/>
                <VideoEmbed embedId="h5QzjA3OUuM" thumbnail={vz18} title={title} />
                <Markdown details={details[1]} />
                <VideoEmbed embedId="axnD891akQc" thumbnail={vz19} title={title} />
                <Code details={details[2]}/>
            </main>
            <Footer />
        </div>
    )
}

export default Vizlly

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), '/src/data/work.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData.toString());

    return {
        props: objectData
    }
}
