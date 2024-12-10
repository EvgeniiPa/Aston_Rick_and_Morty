import { useState } from "react";
import IMG from './characters.svg'
import "./characters.css"

export function Characters(){
    const [item, setItem] = useState()

    return(
        <div>
            <div className="image-container">
                <img src={IMG} alt="" />
            </div>
            Characters Page!
        </div>
    )
}