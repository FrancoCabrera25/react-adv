import '../styles/styles.css';
import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
export const RegisterPage = () => {
    const { onChange, formData, name, email, password, repeatPassword } =
        useForm({
            name: '',
            email: '',
            password: '',
            repeatPassword: '',
        });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('registerData', formData);
    };

    return (
        <div>
            <h2>Register Page</h2>
            <form noValidate onSubmit={onSubmit}>
                <input
                    type='text'
                    name='name'
                    placeholder='Nombre'
                    value={name}
                    onChange={onChange}
                />
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={email}
                    onChange={onChange}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='contraseña'
                    value={password}
                    onChange={onChange}
                />
                <input
                    type='password'
                    name='repeatPassword'
                    placeholder='ingresr contraseña'
                    value={repeatPassword}
                    onChange={onChange}
                />

                <button type='submit'>Crear</button>
            </form>
        </div>
    );
};
