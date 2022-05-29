import React, {useCallback, useEffect, useState} from 'react';
import {NextComponentType} from 'next';
import signupStyles from '@pages/signup/signup.module.scss';
import formStyles from '@styles/components/forms.module.scss';
import buttonStyles from '@styles/components/Buttons.module.scss';
import styles from './login.module.scss';
import Link from 'next/link';
import {login} from '@store/actions/authorization';
import {useDispatch, useSelector} from 'react-redux';
import {IInitialState} from '@interfaces/common.interface';
import {useRouter} from 'next/router';


const LoginPage: NextComponentType = () => {
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });
    const dispatch = useDispatch();
    const router = useRouter();
    const userInfo: ReturnType<any> = useSelector<IInitialState>((state) => state.userInfo);
    const onChangeFormValues = (event: any) => {
        setLoginForm(values => {
            return ({...values, [event.target.name]: event.target.value})
        });
    }
    const validateFormValues = (event: any) => {
        const emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        if (event.target.name === 'email') {
            setErrors(values =>
                ({
                    ...values,
                    email: !event.target.value ?
                        "This field is required!" :
                        !emailPattern.test(event.target.value) ? 'Email address is invalid!' : '',
                })
            );
        } else if (event.target.name === 'password') {
            setErrors(values =>
                ({
                    ...values,
                    password: !event.target.value ?
                        'This field is required!' : '',
                })
            );
        }
    }
    const onLogin = async (event: any) => {
        event.preventDefault();
        if (!(errors.email && errors.password)) {
           await dispatch(login(loginForm));
        }
    }
    useEffect(() => {
       if(userInfo.userInfo) {
           router.push('/')
       }
    },[userInfo])
    return (
        <div className={signupStyles.signupContainer}>
            <div className={`${signupStyles.signupWrapper} ${styles.loginWrapper}`}>
                <h1>Login</h1>
                <form onSubmit={async (e) => {
                    await onLogin(e);
                }}>
                    <div className={formStyles.inputGroup}>
                        <input type='email' className={formStyles.formControl}
                               placeholder='Email address' name='email' value={loginForm.email}
                               onChange={async (e) => {
                                   await onChangeFormValues(e);
                                   await validateFormValues(e);
                               }}/>
                        <p className={`${formStyles.errorMessage} ${errors.email ? formStyles.invalidMessage : ''}`}>{errors.email}</p>
                    </div>
                    <div className={formStyles.inputGroup}>
                        <input type='password' className={formStyles.formControl}
                               placeholder='Password' name='password' value={loginForm.password}
                               onChange={async (e) => {
                                   await onChangeFormValues(e);
                                   await validateFormValues(e);
                               }}/>
                        <p className={`${formStyles.errorMessage} ${errors.password ? formStyles.invalidMessage : ''}`}>{errors.password}</p>
                    </div>
                    <button className={`${buttonStyles.btn} ${buttonStyles.btnLogin}`}
                            type='submit' disabled={!!(errors.email || errors.password)}>Login to your account
                    </button>
                </form>
                <p className={signupStyles.haveAccount}>Don’t have an account? <Link href={'/signup'}>Sign Up</Link></p>
            </div>
        </div>
    )
}

export default LoginPage;
