import { MenuAlt1Icon } from "@heroicons/react/solid"
import Link from "next/link"
import {useState, useEffect} from "react"
import OffCanvas from "./OffCanvas"

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 650) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    },[])

    return (  
        <header className={`fixed top-0 z-50 w-full py-4 md:px-4 xl:px-0 transition duration-1000 ease-in-out ${isScrolled && 'bg-white/90'}`}>
            <section className="flex items-center justify-between transition-all">
                <div>
                    <Link href="/">
                        <img src={`${isScrolled ? '/images/logos/logo_bl.svg' : '/images/logos/logo_wh.svg'}`} className="cursor-pointer object-contain" width={52} height={40} alt="Original Species by Christian Frias" />
                    </Link>
                </div>
                <div className="flex space-x-4">
                    <a data-bs-toggle="offcanvas" href="#osMenu" role="button" aria-controls="osMenu"><MenuAlt1Icon className={`h-6 w-6  hover:fill-ribbon transition duration-500 ${isScrolled ? 'fill-black' : 'fill-white'}`} /></a>
                </div>
            </section>
            <OffCanvas/>
        </header>
    )
}

export default Header