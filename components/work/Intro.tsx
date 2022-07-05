import Image from "next/image"

function Intro(props) {
    return (
        <div className="block py-20">
            <section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
                    <div className="col-span-1 md:text-right">
                        <h1 className="text-4xl md:text-6xl leading-10 md:leading-12 font-semibold">{props.title}</h1>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <p className="text-xl leading-8">{props.desc}</p>
                        <p className="uppercase text-sm mt-4">Role: {props.role}</p>
                    </div>
                </div>  
            </section>
               
        </div>
    )
}

export default Intro

