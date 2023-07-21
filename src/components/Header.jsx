import bcd from "../assets/icons/amplify_4379015 (2).png"
import def from "../assets/icons/shopping-cart_1170576.png" 
import { Link } from "react-router-dom"

export const Header = () => {
    return ( 
        <nav id="header" className="bg-black text-white h-16" >
            <div className="w-full container mx-auto flex flex-wrap items-center justify-content-between mt-0 py-2 align content-center pt-6"> 
                <div className="logo-wrapper pl-4 flex items-center">
                    <img src={bcd} alt="logo" />
                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                    <Link to="/" className="text-xl">Home</Link>
                    <Link to="#About" className="text-xl">About</Link>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <Link to="{/Cart}">
                        <img src={def} alt='carticon'/>
                    </Link>
                    <Link to="/Login">Log In</Link>
                    <Link to="/Register">Sign Up</Link>

                </div>

            </div>

        </nav>
    )
} 