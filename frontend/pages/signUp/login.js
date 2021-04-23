import styles from "../signUp/registerPage.module.css"
//import { withRouter } from 'next/router';
import Link from 'next/link'

const Login =(props)=>{
    return (
        <>
            <div className={styles.registerForm}></div>
            <div className={styles.loginFormInputs}>
                <h1>Login</h1>
                <form>
                    <input type='email' placeholder='email' required/>
                    <br/>
                    <input type='password' placeholder='password' required/>
                    <br/>
                    <br/>
                    <Link href='/signUp/dash'><input type='submit'/></Link>
                </form>
            </div>
        </>
    )
}

export default Login