import React, { FC } from 'react';
import FormFild from '../Ui/FormFild/FormFild'
import ButtonForm from '../Ui/ButtonForm/ButtonForm'
import './Registration.css'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { toggleActive } from '../../store/registrationSlice';

const Registration: FC = () => {
    const dispatch = useDispatch()

    const CreateShemaForm = z.object({
        login: z.string().min(6, { message: 'Длина должна быть 6 или более символов' }),
        password: z.string().min(7, { message: 'Длина должна быть 7 или более символов' })
    })

    type shemaForm = z.infer<typeof CreateShemaForm>

    const { register, formState: { errors }, handleSubmit } = useForm<shemaForm>({
        resolver: zodResolver(CreateShemaForm)
    })



    const onSubmit = (data: shemaForm) => {

        const lsGetValue = localStorage.getItem('registerForm');
        console.log(lsGetValue)
        let dataArray = []

        if (lsGetValue) {
            dataArray = JSON.parse(lsGetValue)

        }
        dataArray.push(data)
        localStorage.setItem('registerForm', JSON.stringify(dataArray))

    };



    return (
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
            <button onClick={()=> dispatch(toggleActive)}>On click</button>
        </form>
    );
};

export default Registration;