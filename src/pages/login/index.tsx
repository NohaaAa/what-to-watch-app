import React from 'react';
import {NextComponentType} from 'next';
import signupStyles from '@pages/signup/signup.module.scss';
import formStyles from '@styles/components/forms.module.scss';
import buttonStyles from '@styles/components/Buttons.module.scss';
import styles from './login.module.scss';

const LoginPage: NextComponentType = () => {
    return (
        <div className={signupStyles.signupContainer}>
            <div className={`${signupStyles.signupWrapper} ${styles.loginWrapper}`}>
                <h1>Login</h1>
                <form>
                    <input type='email' className={formStyles.formControl} placeholder='Email address'/>
                    <input type='password' className={formStyles.formControl} placeholder='Password'/>
                    <button className={`${buttonStyles.btn} ${buttonStyles.btnLogin}`}>Login to your account</button>
                </form>
                <p className={signupStyles.haveAccount}>Don’t have an account? <a href={'/signup'}>Sign Up</a></p>
            </div>
        </div>
    )
}

export default LoginPage;
