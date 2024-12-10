import IMG from './locations.svg'
import './locations.css'

export function Locations(){
    return(
        <div>
            <div className='image-container'>
                <img src={IMG} alt="main img" />
            </div>
            Location Page!
        </div>
    )
}