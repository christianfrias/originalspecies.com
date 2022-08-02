import Image from "next/image"
import Link from "next/link"

type WorkTypes = {
	work?: string;
}

function Carousel({ work }:WorkTypes) {
    return (
        <div>
            <div id="osWork" className="carousel slide carousel-fade relative bg-white" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    {work.slice(0, 5).map((proj, i) => 
                        <button type="button" data-bs-target="#osWork" data-bs-slide-to={i}
                        aria-label={`Slide ${i}`} className={`${i == 0 ? "active" : ""}`} aria-current={`${i == 0 ? "true" : ""}`} key={i}></button>
                    )}
                </div>

                <div className="carousel-inner relative w-full overflow-hidden " >
                    {work.slice(0, 5).map((proj, i) =>         
                        <div className={`carousel-item relative float-left w-full h-[500px] md:h-[650px] ${i == 0 ? "active" : ""}`} key={i}>
                            <Image src={proj.hero} className='block w-full' layout='fill' objectFit='cover' alt={proj.title} priority />
                            <div className="carousel-caption hidden md:block absolute text-center drop-shadow-2xl">
                                <Link href={proj.url}>
                                    <h5 className="text-sm uppercase tracking-widest cursor-pointer animate-pulse mb-7 hover:animate-none hover:text-ribbon transition duration-500">{proj.title}: View Project</h5>
                                </Link>
                            </div>
                        </div>           
                    )}
                </div>
            </div>            
        </div>
    )
}

export default Carousel

