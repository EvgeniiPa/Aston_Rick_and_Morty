import React from 'react';
import FormFild from '../FormFild/FormFild';
import ButtonForm from '../ButtonForm/ButtonForm';

const Login = () => {
    const handleSumit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        console.log('предотваротили')
    }
    return (
        <form onSubmit={handleSumit}>
            <FormFild label='Логин'>
                <input type="text" placeholder='Введите Логин' />
            </FormFild>
            <FormFild label='Пароль'>
                <input type="password" placeholder='Введите пароль' />
            </FormFild>
            <ButtonForm type='submit'> Войти</ButtonForm>
        </form>
    );
};

export default Login;