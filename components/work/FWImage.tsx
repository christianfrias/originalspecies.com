import Image from "next/image"

function FWImage(props) {
    console.log(props)
    return (
        <div className="block">
            <Image src={props.img} className='block w-full transition duration-1000' layout='responsive' objectFit='cover' alt={props.title} placeholder="blur" blurDataURL={props.img} />                   
        </div>
    )
}

export default FWImage

