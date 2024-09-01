import React, { useEffect, useState } from 'react';
import './Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI, registerAPI } from '../Services/allAPI';
import Swal from 'sweetalert2';

function Auth({ register }) {

    const registerPage = register ? true : false;

    const navigate = useNavigate()

    //state for take user input
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    })


    //function to register
    const handleRegister = async (e) => {
        const { username, email, password } = userData

        if (!username || !email || !password) {

            Swal.fire({
                icon: "error",
                confirmButtonColor: "rgb(192, 112, 167)",
                title: "Oops...",
                text: "Please fill the form completily.",
                hideClass: {
                    popup: 'animate__animated animate__fadeOutDown animate__faster'
                }
            });
        }
        else {
            const result = await registerAPI(userData)
            console.log(result);

            if (result.status === 200) {

                Swal.fire({
                    icon: "success",
                    confirmButtonColor: "rgb(192, 112, 167)",
                    title: "Success...",
                    text: `${result.data.username} registered succesfully. Plese login`,
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutDown animate__faster'
                    }
                });

                setUserData({ username: "", email: "", password: "" })
                navigate('/login')


            }
            else {

                Swal.fire({
                    icon: "info",
                    confirmButtonColor: "rgb(192, 112, 167)",
                    title: "Oops...",
                    text: result.response.data,
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutDown animate__faster'
                    }
                });

            }
        }
    }
    //function to login
    const handleLogin = async (e) => {
        e.preventDefault()

        const { email, password } = userData

        if (!email || !password) {
            Swal.fire({
                icon: "error",
                confirmButtonColor: "rgb(192, 112, 167)",
                title: "Oops...",
                text: "Please fill the form completily.",
                hideClass: {
                    popup: 'animate__animated animate__fadeOutDown animate__faster'
                }
            });
        }
        else {
            const result = await loginAPI(userData)
            /*console.log(result);*/

            if (result.status === 200) {

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login successfull",
                    showConfirmButton: false,
                    timer: 1500
                });

                setUserData({ username: "", email: "", password: "" })
                setTimeout(() => {
                    navigate('/booking')
                }, 2000)
            }
            else {
                Swal.fire({
                    icon: "error",
                    confirmButtonColor: "rgb(192, 112, 167)",
                    title: "Oops...",
                    text: result.response.data,
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutDown animate__faster'
                    }
                });
            }

        }
    }


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
                <div className="row login-section mb-5">
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
                                <input type="text" required value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
                                <label>Name</label>
                            </div>
                        }
                        <div className="input-group">
                            <input type="email" required value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                            <label>Email</label>
                        </div>
                        <div className="input-group">
                            <input type="password" required value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                            <label>Password</label>
                        </div>
                        {
                            registerPage ?
                                <button type="submit" className="login-btn" onClick={handleRegister} >Sign Up</button>
                                :
                                <button type="submit" className="login-btn" onClick={handleLogin} >Login</button>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Auth;
