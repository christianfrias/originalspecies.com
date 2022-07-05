import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import ImageFW from '../../components/work/ImageFW'
import Hero from '../../components/work/Hero'
import Image2Col from '../../components/work/Image2Col'
import Intro from '../../components/work/Intro'

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

const Vizlly: NextPage = (props) => {
    const work = props.work[0];
    const title = work.title;
    const desc = work.desc;
    const role = work.categories.join(', ');

    return (
        <div>
            <Head>
                <title>OriginalSpecies by Christian Frias</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            <main>
                <Hero img={vz04} title={title} />
                <Intro title={title} desc={desc} role={role} />
                <ImageFW img={vz07} title={title} />
                <ImageFW img={vz08} title={title} />
                <ImageFW img={vz09} title={title} />
                <Image2Col imgL={vz10} imgR={vz11} title={title} />
                <ImageFW img={vz12} title={title} />
                <ImageFW img={vz13} title={title} />
                <Image2Col imgL={vz14} imgR={vz15} title={title} />
                <ImageFW img={vz16} title={title} />
                <ImageFW img={vz17} title={title} />
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
