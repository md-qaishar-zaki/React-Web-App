import React, { useState } from 'react';
import './Login.css';

export default function Login() {
    const [isSignup, setIsSignup] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') setUsername(value);
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setUsernameError('');
        setEmailError('');
        setPasswordError('');
        let hasError = false;
        if (!username) {
            setUsernameError('Username is required');
            hasError = true;
        }
        if (!email) {
            setEmailError('Email is required');
            hasError = true;
        }
        if (!password) {
            setPasswordError('Password is required');
            hasError = true;
        }
        if (!hasError) {
            // Your submit logic here
        }
    };

    const toggleForm = () => {
        setIsSignup(prevState => !prevState);
        setUsernameError('');
        setEmailError('');
        setPasswordError('');
    };

    return (
        <div className='LoginMain'>
            <div className="LoginPlat">
                <form onSubmit={handleSubmit} action='' method='POST'>
                    <div className={isSignup ? "rightshift login-container" : "login-container"}>
                        <h2>{isSignup ? "Create Account" : "Sign In"}</h2>
                        <div className='d-flex icon justify-content-center'>
                            <i className="fa fa-facebook-f"></i>
                            <i className='fa fa-google-plus'></i>
                            <i className="fa fa-linkedin"></i>
                        </div>
                        <p className='text-center mt-3'>or use your account</p>
                        {isSignup &&
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" name="username" id="floatingInput" placeholder="name@example.com" value={username} onChange={handleInputChange} />
                                <label htmlFor="floatingInput">Name</label>
                                <div className='error'>
                                    {usernameError && <span className="error">{usernameError}</span>}
                                </div>
                            </div>
                        }
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" value={email} onChange={handleInputChange} />
                            <label htmlFor="floatingInput">Email address</label>
                            <div className='error'>
                                {emailError && <span className="error">{emailError}</span>}
                            </div>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" value={password} onChange={handleInputChange} />
                            <label htmlFor="floatingPassword">Password</label>
                            <div className='error'>
                                {passwordError && <span className="error">{passwordError}</span>}
                            </div>
                        </div>
                        <div className='text-center mt-2'>
                            <p>Forgot your password?</p>
                            <button className='singIn' type="submit">{isSignup ? "SIGN UP" : "SIGN IN"}</button>
                        </div>
                    </div>
                </form>
                <div className={isSignup ? "leftshift singUp-container" : "singUp-container"}>
                    <h2>{isSignup ? "Welcome Back!" : "Hello, Friend!"}</h2>
                    {isSignup ?
                        <p>Enter your personal details and start journey with us</p> :
                        <p>To keep connected with us please login with your personal info</p>
                    }
                    <button className='singup' onClick={toggleForm}>{isSignup ? "SIGN IN" : "SIGN UP"}</button>
                </div>
            </div>
        </div>
    )
}
