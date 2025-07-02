import { Link } from "react-router"
export const Navbar = () => {
    return (
        <>
            <div className="flex w-screen border-1 justify-center gap-[10vw] font-bold text-4xl p-2">
                <div><Link to="/">Home</Link></div>
                <div><Link to="/contact-us">Contact Us</Link></div>
            </div>
        </>
    )
}