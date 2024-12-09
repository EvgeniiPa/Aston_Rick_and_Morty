import React, { FC } from 'react';
import FormFild from '../FormFild/FormFild';
import ButtonForm from '../ButtonForm/ButtonForm';
import { string, z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


const Registration: FC = () => {

    const CreateShemaForm = z.object({
        login: string().min(6, { message: 'Длина должна быть 6 или более символов' }),
        password: string().min(7, { message: 'Длина должна быть 7 или более символов' })
    })

    type shemaForm = z.infer<typeof CreateShemaForm>

    const { register, formState: { errors },handleSubmit } = useForm<shemaForm>({
        resolver: zodResolver(CreateShemaForm)
    })

    const handleSumit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        console.log('предотваротили')
    }

    const onSubmit = (data: shemaForm) => {
        console.log('Форма отправлена', data);
    };



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormFild label='Логин' errorMessage={errors.login?.message}>
                <input type="text"
                    placeholder='Введите логин'
                    {...register('login')} />
            </FormFild>
            <FormFild label='Пароль' errorMessage={errors.password?.message}>
                <input
                    type="password"
                    placeholder='Введите пароль'
                    {...register('password')}
                />
            </FormFild>
            <ButtonForm type='submit'>Зарегистироваться</ButtonForm>
        </form>
    );
};

export default Registration;