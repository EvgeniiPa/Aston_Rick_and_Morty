import React, { FC } from 'react';
import FormFild from '../FormFild/FormFild';
import ButtonForm from '../ButtonForm/ButtonForm';
import './Registration.css'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const Registration: FC = () => {

    const CreateShemaForm = z.object({
        login: z.string().min(6, { message: 'Длина должна быть 6 или более символов' }),
        password: z.string().min(7, { message: 'Длина должна быть 7 или более символов' })
    })

    type shemaForm = z.infer<typeof CreateShemaForm>

    const { register, formState: { errors }, handleSubmit } = useForm<shemaForm>({
        resolver: zodResolver(CreateShemaForm)
    })



    const onSubmit = (data: shemaForm) => {
        console.log('Форма отправлена', data);
    };



    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <FormFild label='Логин' errorMessage={errors.login?.message}   colorErrorMes='form-error-color'>
                <input type="text"
                    placeholder='Введите логин'
                    {...register('login')} />
            </FormFild>
            <FormFild label='Пароль' errorMessage={errors.password?.message}   colorErrorMes='form-error-color'>
                <input
                    type="password"
                    placeholder='Введите пароль'
                 
                    {...register('password')}
                />
            </FormFild>
            <ButtonForm type='submit' className='form-btn'>Зарегистироваться</ButtonForm>
        </form>
    );
};

export default Registration;