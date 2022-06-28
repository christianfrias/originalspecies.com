import Image from "next/image"

const Banner = ({ title, hero }) => (
    <div className="flex h-full items-center justify-center">
        <Image src={hero} layout='fill' alt={title} className="object-cover"/>
    </div>
)

export default Banner
