import Image from "next/image"

function ImageFW(props) {
    return (
        <div className="block">
            <Image src={props.img} className='block w-full transition duration-1000' layout='responsive' objectFit='cover' alt={props.title} />                   
        </div>
    )
}

export default ImageFW

