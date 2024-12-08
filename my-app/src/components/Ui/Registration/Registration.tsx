import React, { FC } from 'react';
import FormFild from '../FormFild/FormFild';
import ButtonForm from '../ButtonForm/ButtonForm';


const Registration: FC = () => {

    console.log('Registration')


    const handleSumit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        console.log('предотваротили')
    }

    return (
        <form onSubmit={handleSumit}>
            <FormFild label='Логин' >
                <input type="text" placeholder='Введите логин' />
            </FormFild>
            <FormFild label='Пароль' >
                <input type="password" placeholder='Введите пароль' />
            </FormFild>
            <ButtonForm type='submit'>Зарегистироваться</ButtonForm>
        </form>
    );
};

export default Registration;