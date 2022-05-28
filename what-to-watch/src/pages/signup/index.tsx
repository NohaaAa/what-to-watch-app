import React, {ChangeEventHandler, useState, useEffect} from 'react';
import {NextComponentType} from 'next';
import styles from './signup.module.scss';
import formStyles from '@styles/components/forms.module.scss';
import buttonStyles from '@styles/components/Buttons.module.scss';
import Link from 'next/link'

const SignupPage: NextComponentType = () => {
    const [signupForm, setSignupForm] = useState({
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    });
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    const onChangeFormValues = (event: any) => {
         setSignupForm(values => {
            return ({...values, [event.target.name]: event.target.value})
        });
    }
    const validateFormValues = (event: any) => {
        const emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        const namePattern = /^[a-zA-Z\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF_.\'-]+(([ ][a-zA-Z\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF_.\'-])?[a-zA-Z\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF_.\'-]*)*$/;
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if(event.target.name === 'email') {
            setErrors(values =>
                ({...values,
                    email: !event.target.value ?
                        "This field is required!" :
                        !emailPattern.test(event.target.value) ? 'Email address is invalid!' : '',
                })
            );
        } else if(event.target.name === 'password') {
            setErrors(values =>
                ({...values,
                    password: !event.target.value  ?
                        'This field is required!' :
                        !passwordPattern.test(event.target.value ) ? "Password is invalid" : '',
                    repeatPassword: event.target.value  != signupForm.repeatPassword ? 'passwords are not match!' : '',
                })
            );
        } else if(event.target.name === 'repeatPassword') {
            setErrors(values =>
                ({...values,
                    repeatPassword: !event.target.value ?
                        "This field is required!" :
                        event.target.value  != signupForm.password ? 'passwords are not match!' : '',
                })
            );
        } else if(event.target.name === 'username') {
            setErrors(values =>
                ({...values,
                    username: !event.target.value  ?
                        'This field is required!' :
                        !namePattern.test(event.target.value ) ? 'username is invalid' : ''
                })
            );
        }
    }
    const onSignup = (event: any) => {
        event.preventDefault();
        if(!(errors.email && errors.password && errors.username && errors.repeatPassword)) {
            console.log(signupForm)
        }
    }
    return (
        <div className={styles.signupContainer}>
            <div className={styles.signupWrapper}>
                <h1>Sign Up</h1>
                <form onSubmit={onSignup}>
                    <div className={formStyles.inputGroup}>
                        <input type='email' className={`${formStyles.formControl} ${errors.email ? formStyles.formError : ''}`} placeholder='Email address'
                               name='email' value={signupForm.email} onChange={async (e) => {
                            await onChangeFormValues(e);
                            await validateFormValues(e);
                        }}/>
                        <p className={`${formStyles.errorMessage} ${errors.email ? formStyles.invalidMessage : ''}`}>{errors.email}</p>
                    </div>
                    <div className={formStyles.inputGroup}>
                        <input type='text' className={`${formStyles.formControl} ${errors.username ? formStyles.formError : ''}`} placeholder='Username'
                               name='username' value={signupForm.username}  onChange={async (e) => {
                            await onChangeFormValues(e);
                            await validateFormValues(e);
                        }}/>
                        <p className={`${formStyles.errorMessage} ${errors.username ? formStyles.invalidMessage : ''}`}>{errors.username}</p>
                    </div>
                   <div className={formStyles.inputGroup}>
                       <input type='password' className={`${formStyles.formControl} ${errors.password ? formStyles.formError : ''}`} placeholder='Password'
                              name='password' value={signupForm.password}  onChange={async (e) => {
                           await onChangeFormValues(e);
                           await validateFormValues(e);
                       }}/>
                       <p className={`${formStyles.errorMessage} ${errors.password ? formStyles.invalidMessage : ''}`}>{errors.password}</p>
                   </div>
                    <div className={formStyles.inputGroup}>
                        <input type='password' className={`${formStyles.formControl} ${errors.repeatPassword ? formStyles.formError : ''}`} placeholder='Repeat password'
                               name='repeatPassword' value={signupForm.repeatPassword}  onChange={async (e) => {
                            await onChangeFormValues(e);
                            await validateFormValues(e);
                        }}/>
                        <p className={`${formStyles.errorMessage} ${errors.repeatPassword ? formStyles.invalidMessage : ''}`}>{errors.repeatPassword}</p>
                    </div>

                    <button className={`${buttonStyles.btn} ${buttonStyles.btnLogin}`} type='submit' disabled={!!(errors.email || errors.password || errors.username || errors.repeatPassword)}>Create an account
                    </button>
                </form>
                <p className={styles.haveAccount}>Already have an account? <Link href={'/login'}>Login</Link></p>
            </div>
        </div>
    )
}

export default SignupPage;
