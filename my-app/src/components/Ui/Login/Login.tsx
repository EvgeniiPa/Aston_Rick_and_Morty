import React, { useState } from 'react';
import FormFild from '../FormFild/FormFild';
import ButtonForm from '../ButtonForm/ButtonForm';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux'; 

import { toggleActive} from '../../../store/registrationSlice';
import './Login.css'; 

const Login = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<string>('');
    const [error, setError] = useState<string>('');
    const dispatch = useDispatch()
    
    const CreateShemaForm = z.object({
        login: z.string().min(6, { message: 'Длина должна быть 6 или более символов' }),
        password: z.string().min(7, { message: 'Длина должна быть 7 или более символов' })
    });
    
    type ShemaForm = z.infer<typeof CreateShemaForm>;

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ShemaForm>({
        resolver: zodResolver(CreateShemaForm)
    });

    const onSubmit = (data: ShemaForm) => {
        const lsGetValue = localStorage.getItem('registerForm');
        let usersArray = [];

        
        if (lsGetValue) {
            usersArray = JSON.parse(lsGetValue);
        }
        
        const userExists = usersArray.find((user:ShemaForm )=> user.login === data.login && user.password === data.password);

        if (userExists) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setSuccess('Успешный вход!');

                reset(); 
             
            }, 1000);
            dispatch(toggleActive())

        } else {
          
            setError('Пользователь не найден.');
            setTimeout(() => {
                setError('');
            }, 5000);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <FormFild label='Логин' errorMessage={errors.login?.message} colorErrorMes='form-error-color'>
                    <input
                        type="text"
                        placeholder='Введите логин'
                        {...register('login')} />
                </FormFild>
                <FormFild label='Пароль' errorMessage={errors.password?.message} colorErrorMes='form-error-color'>
                    <input
                        type="password"
                        placeholder='Введите пароль'
                        {...register('password')} />
                </FormFild>
                <ButtonForm type='submit' className='form-btn'>Войти на сайт</ButtonForm>

                {loading && <p>Загрузка.....</p>}
                {success && <p>{success}</p>}
                {error && <p className='error-message'>{error}</p>}
            </form>
        </>
    );
};

export default Login;