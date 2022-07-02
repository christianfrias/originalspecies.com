import Image from "next/image"
import Link from "next/link"

const Banner = ({ title, hero, url, className }) => (
    <div className="flex h-full items-center justify-center">
        <Link href={url}>
            <div>
            <Image src={hero} layout='fill' alt={title} objectFit='cover'/>

            </div>

        </Link>
    </div>
)

export default Banner
