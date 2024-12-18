import { useDispatch } from "react-redux"
import { toggleActive } from "../../store/registrationSlice"

export function User(){
   const dispatch = useDispatch()

    return(
       <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"10px"}}>
           <span style={{textTransform:"uppercase", margin:"10px"}}>Тут будет личный кабинет</span>
          <button onClick={()=>{dispatch(toggleActive())}}>ВЫХОД</button>
       </div>
    )
}