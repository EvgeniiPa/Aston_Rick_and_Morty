import React, { useState } from 'react';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';

const AuthForm = () => {

    const [login, setLogin] = useState(false)
    const [registration, setRegistration] = useState(false)

    const handleLogin = () => {
        setLogin(true)
        setRegistration(false)

    }

    const handleRegistration = () => {
        setRegistration(true)
        setLogin(false)
    }

    return (
        <div>
            <button onClick={handleLogin}>Вход</button>
            <button onClick={handleRegistration}>Зарегистироваться</button>
            {login ? <Login /> : ''}
            {registration ? <Registration /> : ''}
        </div>
    );
};

export default AuthForm;