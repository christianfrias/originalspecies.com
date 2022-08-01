import type { NextPage } from 'next'
import Head from 'next/head'
import Form from '../components/contact/Form'
import Footer from '../components/footer/Footer'
import HeaderAlt from '../components/header/HeaderAlt'

const Contact: NextPage = (props) => {
  const work = props.work;

  return (
    <div>
      <Head>
        <title>OriginalSpecies by Christian Frias</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderAlt/>

      <main className="py-28 bg-slate-50">
        <section className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 w-full md:w-9/12">
                <h1 className="text-6xl font-semibold">Let's talk.</h1>
                <p className="text-2xl leading-10 mb-4 md:mb-0">I love getting inspired, so if there's a project you'd like to collaborate on, drop a quick note.</p>
            </div>
            <div className="col-span-1">
                <Form/>
            </div>
          
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default Contact

