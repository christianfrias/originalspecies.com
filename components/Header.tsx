import { MenuAlt1Icon } from "@heroicons/react/solid"
import Link from "next/link"
import {useState, useEffect} from "react"

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
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
        <header className={`${isScrolled && 'bg-red-500'}`}>
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
                <MenuAlt1Icon className="h-6 w-6" />
            </div>
        </header>
    )
}

export default Header