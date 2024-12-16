import { NavLink, Outlet } from "react-router-dom"
import { useSelector} from "react-redux"
import Favicon from "./Favicon.svg"
import "./Layout.css"


export function Layout(){
    const userActive = useSelector(state => state.registration.active);

    return(
        <>
            <header className='header'>
                <div>
                    <NavLink to="/"><img src={Favicon} alt="Favicon" /></NavLink>
                </div>
                <div className="header-container">
                    { userActive ? 
                    <>
                        <NavLink to="/" className={'link'}>Characters</NavLink>
                        <NavLink to="/favourites" className={'link'}>Favourites</NavLink>
                        <NavLink to="/history" className={'link'}>History</NavLink>
                    </> : 
                         <NavLink to="/registration">Registration</NavLink>
                    }
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}