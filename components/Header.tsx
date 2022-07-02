import { MenuAlt1Icon } from "@heroicons/react/solid"
import Link from "next/link"
import {useState, useEffect} from "react"

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
         
            <header className={`fixed top-0 z-50 w-full py-4 ${isScrolled && 'bg-red-500'}`}>
                <section className="flex items-center justify-between transition-all">
                    <div>
                        <Link href="/">
                            <img src={`${isScrolled ? '/images/logos/logo_bl.svg' : '/images/logos/logo_wh.svg'}`} className="cursor-pointer object-contain" width={52} height={40} alt="Original Species by Christian Frias" />
                        </Link>
                    </div>
                    <div className="flex space-x-4">
                        <ul className="hidden sm:flex space-x-4">
                            <li className="headerLink">Home</li>
                            <li className="headerLink">Work</li>
                            <li className="headerLink">CV</li>
                            <li className="headerLink">About</li>
                            <li className="headerLink">Contact</li>
                        </ul>
                        <MenuAlt1Icon className="h-6 w-6" style={{ fill: 'white' }}/>
                    </div>
                </section>

            </header>
    )
}

export default Header