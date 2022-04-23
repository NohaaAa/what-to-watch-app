import React from 'react';
import {NextComponentType} from 'next';
import styles from './signup.module.scss';
import formStyles from '@styles/components/forms.module.scss';
import buttonStyles from '@styles/components/Buttons.module.scss';

const SignupPage: NextComponentType = () => {
    return (
        <div className={styles.signupContainer}>
            <div className={styles.signupWrapper}>
                <h1>Sign Up</h1>
                <form>
                    <input type='email' className={formStyles.formControl} placeholder='Email address'/>
                    <input type='password' className={formStyles.formControl} placeholder='Password'/>
                    <input type='password' className={formStyles.formControl} placeholder='Repeat password'/>
                    <button className={`${buttonStyles.btn} ${buttonStyles.btnLogin}`}>Create an account</button>
                </form>
                <p className={styles.haveAccount}>Already have an account? <a href={'/login'}>Login</a></p>
            </div>
        </div>
    )
}

export default SignupPage;
