import Image from "next/image"

type PropTypes = {
    img:string;
    title:string;
    width?:number;
    height?:number;
}

function ImageFW(props:PropTypes) {
    return (
        <div className="block">
            <Image src={props.img} className='block w-full transition duration-1000' layout='responsive' objectFit='cover' alt={props.title} width={props.width || 1920} height={props.height || 1080}/>                   
        </div>
    )
}

export default ImageFW

