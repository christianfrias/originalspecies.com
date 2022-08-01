import { MenuAlt1Icon } from "@heroicons/react/solid"
import Link from "next/link"
import {useState, useEffect} from "react"
import OffCanvas from "./OffCanvas"

function Header() {


    return (  
        <header className={`absolute top-0 z-50 w-full py-4 transition duration-500`}>
            <section className="flex items-center justify-between transition-all">
                <div>
                    <Link href="/">
                        <img src='/images/logos/logo_bl.svg' className="cursor-pointer object-contain" width={52} height={40} alt="Original Species by Christian Frias" />
                    </Link>
                </div>
                <div className="flex space-x-4">
                    <a data-bs-toggle="offcanvas" href="#osMenu" role="button" aria-controls="osMenu"><MenuAlt1Icon className={`h-6 w-6  hover:fill-ribbon transition duration-500 fill-black`} /></a>
                </div>
            </section>
            <OffCanvas/>
        </header>
    )
}

export default Header