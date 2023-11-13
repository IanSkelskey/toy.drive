import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="sticky border-2 border-red-900 border-opacity-20 top-0 z-30 w-full h-14 mb-2 rounded-full bg-candy-cane-pattern">
            <div class="bg-brand-red border-2 border-red-900 border-opacity-20 absolute top-2 bottom-2 left-2 right-2 rounded-full"></div>
            <ul className="flex justify-around h-full items-center font-bold text-white text-lg">
                <li className="h-full flex items-center px-4 z-50 hover:text-brand-yellow"><Link to="/toy.drive/">Home</Link></li>
                <li className="h-full flex items-center px-4 z-50 hover:text-brand-yellow"><Link to="/toy.drive/wishlist">Wishlist</Link></li>
                <li className="h-full flex items-center px-4 z-50 hover:text-brand-yellow"><Link to="/toy.drive/drop-off">Drop-off Locations</Link></li>
                <li className="h-full flex items-center px-4 z-50 hover:text-brand-yellow"><Link to="/toy.drive/about">About Us</Link></li>
            </ul>
        </nav>
    )
}