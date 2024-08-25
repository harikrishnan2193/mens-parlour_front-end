import React from 'react'
import './Auth.css'
import { Link } from 'react-router-dom'

function Login({ register }) {

    const registerPage = register ? true : false

    return (
        <>
            <div className="container login-container">
                <div className="row login-section d-flex">
                    <div className={`col-lg-6 col-md-12 col-sm-12 ${registerPage ? 'bg-image-large' : 'bg-image'} d-flex justify-content-center align-items-center flex-column text-white`}>
                        <h4 className="text-center mb-3">
                            {registerPage ? "Alredy have an account?" : "Don't have an account?"}
                        </h4>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque illum quos, id dicta dolore iure consequuntur accusantium quibusdam optio deserunt, corporis sapiente qui. Amet dignissimos tempore dolor adipisci, natus id.</p>
                        {registerPage ?
                            <Link to={'/login'}><button className='btn btn-outline-light mt-2 rounded-pill '>SIGN UP</button></Link>
                            :
                            <Link to={'/register'}><button className='btn btn-outline-light mt-2 rounded-pill '>LOGIN</button></Link>
                        }
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 login-box">
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
                            <button type="submit" className="login-btn">SignUp</button>
                            :
                            <button type="submit" className="login-btn">Login</button>
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login