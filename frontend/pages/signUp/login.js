import styles from "../signUp/registerPage.module.css"
//import { withRouter } from 'next/router';
import Link from 'next/link'
import React from "react"

const Login =(props)=>{
    const [email,setEmail] = React.useState("coderJam@gmail.com")
    const [pass,setPass] = React.useState("coderjam123")
 
    return (
        <>
            <div className={styles.registerForm}></div>
            <div className={styles.loginFormInputs}>
                <h1>Login</h1>
                <form>
                    <input type='email' placeholder='email' value={email}/>
                    <br/>
                    <input type='password' placeholder='password' value={pass}/>
                    <br/>
                    <br/>
                    <Link href='/healthDetails'><input type='submit'/></Link>
                </form>
            </div>
        </>
    )
}

export default Login