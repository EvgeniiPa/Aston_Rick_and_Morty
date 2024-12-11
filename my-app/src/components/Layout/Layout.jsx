import { NavLink, Outlet } from "react-router-dom"
import Favicon from "./Favicon.svg"
import "./Layout.css"


export function Layout(){
    return(
        <>
            <header className='header'>
                <div>
                    <NavLink to="/"><img src={Favicon} alt="Favicon" /></NavLink>
                </div>
                <div className="header-container">
                    <NavLink to="/" className={'link'}>Characters</NavLink>
                    <NavLink to="/favourites" className={'link'}>Favourites</NavLink>
                    <NavLink to="/history" className={'link'}>History</NavLink>
                    <NavLink to="/registration">Registration</NavLink>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}