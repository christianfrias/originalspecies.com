import ReactMarkdown from 'react-markdown'

type PropTypes = {
    details:WorkTypes;
}

type WorkTypes = {
    title:string;
    desc:string;
}

function Markdown(props:PropTypes) {
    const copy = props.details
    return (
        <div className="block py-20">
            <section>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-12">
                    <div className="col-span-1 lg:col-span-2 md:text-right">
                        <h2 className="text-2xl md:text-2xl leading-10 md:leading-8 font-semibold text-ribbon">{copy.title}</h2>
                    </div>
                    <div className="col-span-1 md:col-span-4 lg:col-span-2">
                        <ReactMarkdown className="leading-8 text-lg">{copy.desc}</ReactMarkdown>
                    </div>
                </div>  
            </section>
               
        </div>
    )
}

export default Markdown