import React, { FC, useState } from 'react';

import ButtonForm from '../Ui/ButtonForm/ButtonForm';
import FormFild from '../Ui/FormFild/FormFild';
import './Registration.css'
import { unknown, z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const Registration: FC = () => {
    const [loading, setLodang] = useState<string | boolean>('')
    const [succes, setSucces] = useState('')
    const CreateShemaForm = z.object({
        login: z.string().min(6, { message: 'Длина должна быть 6 или более символов' }),
        password: z.string().min(7, { message: 'Длина должна быть 7 или более символов' })
    })

    type shemaForm = z.infer<typeof CreateShemaForm>

    const { register, formState: { errors }, handleSubmit, reset } = useForm<shemaForm>({
        resolver: zodResolver(CreateShemaForm)
    })



    const onSubmit = (data: shemaForm) => {

        const lsGetValue = localStorage.getItem('registerForm');

        let dataArray = []

        if (lsGetValue) {
            dataArray = JSON.parse(lsGetValue)

        }

        dataArray.push(data)
        localStorage.setItem('registerForm', JSON.stringify(dataArray))


        console.log(localStorage.getItem('registerForm'))

        const user = dataArray.find((user: shemaForm) => user.login === user.login)
        if (user) {
            alert('Вы успешно вошли в систему!');

        } else {
            alert('Неправильный логин или пароль!');
        }
        setLodang('Загрузка.......')
        
        reset()
        setTimeout(() => {

            setLodang(false)
            setSucces('Ура, данные отправились')
            reset()
        }, 2500)


    };


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <FormFild label='Логин' errorMessage={errors.login?.message} colorErrorMes='form-error-color'>
                    <input type="text"
                        placeholder='Введите логин'
                        {...register('login')} />
                </FormFild>
                <FormFild label='Пароль' errorMessage={errors.password?.message} colorErrorMes='form-error-color'>
                    <input
                        type="password"
                        placeholder='Введите пароль'

                        {...register('password')}
                    />
                </FormFild>
                <ButtonForm type='submit' className='form-btn'>Зарегистироваться</ButtonForm>
            </form>
            {loading}
            {succes}
        </>

    );
};

export default Registration;