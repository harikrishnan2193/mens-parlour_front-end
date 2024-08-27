import React, { useEffect } from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';

function Auth({ register }) {

    const registerPage = register ? true : false;

    //useffect to restart the animation when the path change
    useEffect(() => {
        const loginBox = document.querySelector('.login-box');
        if (loginBox) {
            loginBox.classList.remove('animate');
            void loginBox.offsetWidth;
            loginBox.classList.add('animate');
        }
    }, [registerPage]);

    return (
        <>
            <div className="container login-container">
                <div className="row login-section d-flex pt-5">
                    <div className={`col-lg-6 col-md-12 col-sm-12 ${registerPage ? 'bg-image-large' : 'bg-image'} d-flex justify-content-center align-items-center flex-column text-white`}>
                        <h4 className="text-center mb-3">
                            {registerPage ? "Already have an account?" : "Don't have an account?"}
                        </h4>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque illum quos, id dicta dolore iure consequuntur accusantium quibusdam optio deserunt, corporis sapiente qui. Amet dignissimos tempore dolor adipisci, natus id.</p>
                        {registerPage ?
                            <Link to={'/login'}><button className='btn btn-outline-light mt-2 rounded-pill '>LOGIN</button></Link>
                            :
                            <Link to={'/register'}><button className='btn btn-outline-light mt-2 rounded-pill '>SIGN UP</button></Link>
                        }
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 login-box animate">
                        <h2>
                            {registerPage ? "Sign Up" : "Login"}
                        </h2>
                        {registerPage &&
                            <div className="input-group">
                                <input type="text" required />
                                <label>Name</label>
                            </div>
                        }
                        <div className="input-group">
                            <input type="email" required />
                            <label>Email</label>
                        </div>
                        <div className="input-group">
                            <input type="password" required />
                            <label>Password</label>
                        </div>
                        {
                            registerPage ?
                                <button type="submit" className="login-btn">Sign Up</button>
                                :
                                <button type="submit" className="login-btn">Login</button>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Auth;
