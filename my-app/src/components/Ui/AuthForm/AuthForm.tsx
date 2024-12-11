import { useState } from "react"


import Login from "../Login/Login"
import Registration from "../../Registration/Registration"

export function AuthForm() {
    const [auth, authType] = useState('register')


    const handleClick = () => {
        authType(prevState => prevState === 'register' ? 'auth' : 'register')
    }
    return (

            <div className="">
                <p>{auth === 'register' ? 'Регистрация' : 'Авторизация'}</p>

                {auth === 'register' ? <Registration /> : <Login />}

                {auth === 'register' ? 'Уже есть аккаунт?' : 'Еще нет аккаунта'}

                <button onClick={handleClick}>
                    {auth === 'register' ? 'Войти' : 'Создать аккаунт'}
                </button>
            </div>
     
    )
}