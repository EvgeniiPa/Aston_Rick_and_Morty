import { NavLink, Outlet } from "react-router-dom"
import { useSelector} from "react-redux"
import Favicon from "./Favicon.svg"
import Avatar from './User.svg'
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
                        <NavLink to='/user' className={'link'}>
                            <div className={'user_container'}>
                                <img src={Avatar} alt="" className={'user_avatar'}/>
                                User
                            </div>
                        </NavLink>
                    </> : 
                         <NavLink to="/registration" className={'link'}>Registration</NavLink>
                    }
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}