import { useSelector } from 'react-redux/es/hooks/useSelector'
import './favourites.css'



export function Favourites(){
    const favouritesList = useSelector(state => state.favourites.favouritesList)


    return(
        <div>
            Favourites Page!
            {favouritesList.map(item=>{
                // Тут должен быть UI компонент карточки из Character для отрисовки.
            })}
        </div>
    )
}