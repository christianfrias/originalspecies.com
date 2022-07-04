import Image from "next/image"
import Link from "next/link"

function OffCanvas() {
    return (
        <div>
            <div className="">
                <div className="offcanvas offcanvas-end fixed bottom-0 flex flex-col justify-between max-w-full bg-slate-200 invisible bg-clip-padding shadow-sm outline-none transition duration-500 ease-in-out text-gray-700 top-0 right-0 border-none w-4/6 md:w-3/6" tabIndex="-1" id="osMenu" aria-labelledby="osMenuLabel">
                    <div className="offcanvas-header flex justify-between p-6 md:p-10">
                        <ul>
                            <li className="headerLink"><Link href="/">Home</Link></li>
                            <li className="headerLink"><Link href="/work">Work</Link></li>
                            <li className="headerLink"><a href="https://www.linkedin.com/in/originalspecies" target="_blank">CV</a></li>
                            <li className="headerLink"><Link href="/about">About</Link></li>
                            <li className="headerLink"><Link href="/contact">Contact</Link></li>
                        </ul>
                        <div>
                            <button type="button" className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>                    
                    </div>
                    <div className="offcanvas-body p-6 md:p-10">
                        <div className="grid grid-cols-2 md:grid-cols-8 mb-6">
                            <div className="md:col-span-3 lg:col-span-2 text-xl"><a href="https://github.com/christianfrias" target="_blank">GitHub</a></div>
                            <div className="md:col-span-4 lg:col-span-6 text-xl"><a href="https://www.linkedin.com/in/originalspecies" target="_blank">LinkedIn</a></div>
                            <div className="md:col-span-3 lg:col-span-2 text-xl"><a href="https://www.youtube.com/c/originalspeciesfilms" target="_blank">YouTube</a></div>
                            <div className="md:col-span-4 lg:col-span-6 text-xl"><a href="https://www.instagram.com/chr.frias" target="_blank">Instagram</a></div>
                        </div>
                        <p>© {new Date().getFullYear()} Christian Frias.<br/>Built with NextJS and Typescript.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OffCanvas
