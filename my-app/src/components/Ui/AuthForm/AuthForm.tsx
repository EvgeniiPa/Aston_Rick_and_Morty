
import React, { useState } from 'react';
import Login from "../Login/Login"
import Registration from "../../Registration/Registration"
import ButtonForm from "../ButtonForm/ButtonForm"
import './AuthForm.css'


export function AuthForm() {
    const [auth, authType] = useState('auth')


    const handleClick = () => {
        authType(prevState => prevState === 'auth' ? 'register' : 'auth')
    }
    return (

        <div className="auth-form">
            <p className="auth-form__title">
                {auth === 'auth'?'Авторизация' : 'Регистрация'}</p>
            {auth === 'auth' ?  <Login /> :<Registration />}
            <div className="auth-form__info">
                {auth === 'auth' ? 'Если нет аккаунта,то регистрируйся' : 'Если есть аккаунт,входи быстрее'}
                <ButtonForm handleClick={handleClick} type="button" className='form-btn'>
                    {auth === 'auth' ? 'Создать аккаунт' : 'Войти'}
                </ButtonForm >
            </div>
        </div>

    )
}