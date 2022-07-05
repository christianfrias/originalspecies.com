import Image from "next/image"

function Image2Col(props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1">
                <Image src={props.imgL} className='block w-full transition duration-1000' layout='responsive' objectFit='cover' alt={props.title} />   
            </div>
            <div className="col-span-1">
                <Image src={props.imgR} className='block w-full transition duration-1000' layout='responsive' objectFit='cover' alt={props.title} />   
            </div>
                
        </div>
    )
}

export default Image2Col

