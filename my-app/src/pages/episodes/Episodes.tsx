import IMG from './episodes.svg'
import './episodes.css'

export function Episodes(){
    return(
        <div>
            <div className='image-container'>
                <img src={IMG} alt="main img" />
            </div>
            Episodes Page!
        </div>
    )
}