import styles from "../signUp/registerPage.module.css"
import { withRouter } from 'next/router';
import Link from 'next/link'

const RegisterPage =(props)=>{
    return (
        <>
            <div className={styles.registerForm}></div>
            <div className={styles.registerFormInputs}>
                <h1>Patient Enrolment</h1>
                <form>
                    <input type='text' placeholder='name' required/>
                    <br/>
                    <input type='email' placeholder='email' required/>
                    <br/>
                    <input type='password' placeholder='password' required/>
                    <br/>
                    <input type='gender' placeholder='gender' required/>
                    <br/>
                    <input type='number' placeholder='age' required/>
                    <br/>
                    <input type='text' placeholder='city' required/>
                    <br/>
                    <input type='text' placeholder='state' required/>
                    <br/>
                    <input type='text' placeholder='country' required/>
                    <br/>
                    <input type="checkbox" id="covid" name="covid"/>
                    <label for="covid"> COVID Positive</label>
                    <br/>
                    <Link href='/signUp/login'><input type='submit'/></Link>
                </form>
                <button onClick={() => props.router.push('/signUp/login')}>Already have an Account - Sign In</button>
            </div>
        </>
    )
}

export default withRouter(RegisterPage)