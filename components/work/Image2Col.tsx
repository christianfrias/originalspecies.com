import Image from "next/image"

type PropTypes = {
    imgL:string;
    imgR:string;
    title:string;
    width?:number;
    height?:number;
}

function Image2Col(props:PropTypes) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1">
                <Image src={props.imgL} className='block w-full transition duration-1000' layout='responsive' objectFit='cover' alt={props.title} width={props.width || 1920} height={props.height || 1080}/>   
            </div>
            <div className="col-span-1">
                <Image src={props.imgR} className='block w-full transition duration-1000' layout='responsive' objectFit='cover' alt={props.title} width={props.width || 1920} height={props.height || 1080}/>   
            </div>
                
        </div>
    )
}

export default Image2Col

