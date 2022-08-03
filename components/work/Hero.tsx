import Image from "next/image"

type PropTypes = {
    img:string;
    title:string;
}

function Hero(props:PropTypes) {
    return (
        <div className="block">
            <Image src={props.img} className='block w-full transition duration-1000' layout='responsive' objectFit='cover' alt={props.title} priority width={1920} height={1080} />                   
        </div>
    )
}

export default Hero

