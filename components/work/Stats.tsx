import Image from "next/image"

function Stats(statsIn) {
    const projStats = statsIn.statsIn
    
    return (
        <div className="block pb-20">
            <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 ">
                <div className="col-span-1">
                </div>
                <div className="col-span-2 grid grid-cols-3 gap-4 md:gap-12">
                    {projStats.map((stat, i:number) => {
                        return <div className="col-span-1" key={i}>
                            <h3 className="text-4xl md:text-5xl leading-10 md:leading-12 font-semibold">{stat.intro}</h3>
                            <p>{stat.outro}</p>
                        </div>
                    })}
                </div>

               
            </div>  
            </section>

        </div>
    )
}

export default Stats
