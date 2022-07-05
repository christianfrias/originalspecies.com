import Image from "next/image"

function Hero(props) {
    return (
        <div className="block">
            <Image src={props.img} className='w-full transition duration-1000' layout='responsive' objectFit='cover' alt={props.title} priority />                   
        </div>
    )
}

export default Hero

