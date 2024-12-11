import IMG from './history.svg'
import './history.css'

export function History(){
    return(
        <div>
            <div className='image-container'>
                <img src={IMG} alt="main img" />
            </div>
            History Page!
        </div>
    )
}