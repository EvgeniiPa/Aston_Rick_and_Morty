import IMG from './favourites.svg'
import './favourites.css'

export function Favourites(){
    return(
        <div>
            <div className='image-container'>
                <img src={IMG} alt="main img" />
            </div>
            Favourites Page!
        </div>
    )
}