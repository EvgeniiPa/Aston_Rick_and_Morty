
import React, { useState } from 'react';
import Login from "../Login/Login"
import Registration from "../../Registration/Registration"
import ButtonForm from "../ButtonForm/ButtonForm"
import './AuthForm.css'


export function AuthForm() {
    const [auth, authType] = useState('register')


    const handleClick = () => {
        authType(prevState => prevState === 'register' ? 'auth' : 'register')
    }
    return (

        <div className="auth-form">
            <p className="auth-form__title">
                {auth === 'register' ? 'Регистрация' : 'Авторизация'}</p>
            {auth === 'register' ? <Registration /> : <Login />}
            <div className="auth-form__info">
                {auth === 'register' ? 'Уже есть аккаунт?' : 'Еще нет аккаунта'}
                <ButtonForm handleClick={handleClick} type="button" className='form-btn'>
                    {auth === 'register' ? 'Войти' : 'Создать аккаунт'}
                </ButtonForm >
            </div>
        </div>

    )
}