
// export default Login
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import { useStateValue } from "../../StateProvider";

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [username, setUsername] = useState();

    const [{ userData }, dispatch] = useStateValue()

    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const loginUser = { email, password, username };
            const loginRes = await Axios.post(
                "http://localhost:8000/auth/login",
                loginUser
            )
            dispatch({
                type: 'USERDATA',
                token1: loginRes.data.token,
                user1: loginRes.data.user
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            localStorage.setItem("user-data", JSON.stringify(loginRes.data.user));
            if (email == 'admin@example.com') {
                window.location.href = 'http://localhost:8000/admin';
            } else {
                history.push("/");
            }
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
    };
    return (

        <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
            <div className='max-w-10/12-xl m-2 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
                <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
                    <div className='mt-2 flex flex-col items-center'>
                        <h1 className='text-2xl xl:text-3xl font-extrabold'>
                            Sign In
                   </h1>
                        <div className='w-full flex-1 flex items-center justify-center text-indigo-500'>
                            <a
                                className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3
                    bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
                                href='/register'
                                target='_self'
                            >
                                <span className='ml-2'>Sign Up</span>
                            </a>
                        </div>
                        <div className='my-4 border-b text-center'>
                            <div className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
                                Welcome to Lieferando
                         </div>
                        </div>
                        <form
                            className='mx-auto max-w-xs relative '
                            onSubmit={submit}
                        >
                            <input
                                className='w-full px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                type='text'
                                placeholder='Username'
                                onChange={(e) => setUsername(e.target.value)}
                                name="username"
                            />
                            <input
                                className='w-full px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                                type='email'
                                placeholder='Email'
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                            />
                            <input
                                className='w-full px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                                type='password'
                                placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {error && (
                                <ErrorNotice message={error} clearError={() => setError(undefined)} />
                            )}
                            <button
                                type='submit'
                                className='mt-4 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                            >
                                <span className='ml-3'>Sign In</span>
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}



        // <>
        //     <div className="header-top q1">
        //         <Link to='/' className="navbar-brand">Lieferando</Link>
        //         <AuthOptions />
        //     </div>
        //     <div className="page">
        //         <div className="container d-flex justify-content-center align-items-center mt-5">
        //             <div className="row">
        //                 <div className="col-md-6 offset-md-3 col-xl-4 offset-xl-4">
        //                     <div className="card shadow">
        //                         <img src="https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
        //                             alt="" className="card-img-top" />
        //                         <div className="card-body">
        //                             <h5 className="card-title">Login</h5>
        //                             <form onSubmit={submit} className="validated-form">
        //                                 <div className="mb-3">
        //                                     <div className="mb-3">
        //                                         <label className="form-label" htmlFor="username">Username</label>
        //                                         <input className="form-control"
        //                                             id="register-username"
        //                                             type="text"
        //                                             onChange={(e) => setUsername(e.target.value)}
        //                                             name="username" required autoFocus />
        //                                         <div className="valid-feedback">
        //                                             Looks good!
        //                     </div>
        //                                     </div>
        //                                     <label className="form-label" htmlFor="email">Email</label>
        //                                     <input className="form-control" id="login-email"
        //                                         type="email"
        //                                         onChange={(e) => setEmail(e.target.value)}
        //                                         name="email" required />
        //                                     <div className="valid-feedback">
        //                                         Looks good!
        //                     </div>
        //                                 </div>
        //                                 <div className="mb-3">
        //                                     <label className="form-label" htmlFor="password">Password</label>
        //                                     <input className="form-control"
        //                                         id="login-password"
        //                                         type="password"
        //                                         onChange={(e) => setPassword(e.target.value)}
        //                                         required />
        //                                     <div className="valid-feedback">
        //                                         Looks good!
        //                     </div>

        //                                 </div>

        //                                 <div className="mb-3">
        //                                     {error && (
        //                                         <ErrorNotice message={error} clearError={() => setError(undefined)} />
        //                                     )}
        //                                 </div>
        //                                 <button type="submit" value="Login" className="btn btn-success btn-block">Login</button>
        //                             </form>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div >
        //     </div >
        // </>



















// import React, { useState } from 'react';
// // import authSvg from '../assests/login.svg';
// import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';
// import { authenticate, isAuth } from './auth';
// import { Link, Redirect } from 'react-router-dom';
// // import { GoogleLogin } from 'react-google-login';
// // import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

// const Login = ({ history }) => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//         textChange: 'Sign In'
//     });
//     const { email, password, textChange } = formData;
//     const handleChange = text => e => {
//         setFormData({ ...formData, [text]: e.target.value });
//     };


//     // const informParent = response => {
//     //     authenticate(response, () => {
//     //         isAuth() && isAuth().role === 'admin'
//     //             ? history.push('/admin')
//     //             : history.push('/private');
//     //     });
//     // };
//     const handleSubmit = e => {

//         e.preventDefault();
//         if (email && password) {
//             setFormData({ ...formData, textChange: 'Submitting' });
//             axios
//                 .post('http://localhost:8000/auth/login', {
//                     email,
//                     password: password
//                 })
//                 .then(res => {
//                     authenticate(res, () => {
//                         setFormData({
//                             ...formData,
//                             email: '',
//                             password: '',
//                             textChange: 'Submitted'
//                         });
//                         isAuth() && isAuth().role === 'admin'
//                             ? history.push('/admin')
//                             : history.push('/');
//                         toast.success(`Hey ${res.data.user.name}, Welcome back!`);
//                     });
//                 })
//                 .catch(err => {
//                     setFormData({
//                         ...formData,
//                         email: '',
//                         password: '',
//                         textChange: 'Sign In'
//                     });
//                     console.log(err.response);
//                     toast.error(err.response.data.errors);
//                 });
//         } else {
//             toast.error('Please fill all fields');
//         }
//     };
//     return (
//         <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
//             {isAuth() ? <Redirect to='/' /> : null}
//             <ToastContainer />
//             <div className='max-w-10/12-xl m-2 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
//                 <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
//                     <div className='mt-2 flex flex-col items-center'>
//                         <h1 className='text-2xl xl:text-3xl font-extrabold'>
//                             Sign In
//             </h1>
//                         <div className='w-full flex-1 text-indigo-500'>
//                             <div className='flex flex-col items-center'>

//                                 <a
//                                     className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3
//            bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
//                                     href='/register'
//                                     target='_self'
//                                 >
//                                     <span className='ml-4'>Sign Up</span>
//                                 </a>
//                             </div>
//                             <div className='my-5 border-b text-center'>
//                                 <div className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
//                                     Or sign In with e-mail
//                 </div>
//                             </div>
//                             <form
//                                 className='mx-auto max-w-xs relative '
//                                 onSubmit={handleSubmit}
//                             >
//                                 <input
//                                     className='w-full px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
//                                     type='email'
//                                     placeholder='Email'
//                                     onChange={handleChange('email')}
//                                     value={email}
//                                 />
//                                 <input
//                                     className='w-full px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
//                                     type='password'
//                                     placeholder='Password'
//                                     onChange={handleChange('password')}
//                                     value={password}
//                                 />
//                                 <button
//                                     type='submit'
//                                     className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
//                                 >
//                                     <i className='fas fa-sign-in-alt  w-6  -ml-2' />
//                                     <span className='ml-3'>Sign In</span>
//                                 </button>
//                                 <Link
//                                     to='/users/password/forget'
//                                     className='no-underline hover:underline text-indigo-500 text-md text-right absolute right-0  mt-2'
//                                 >
//                                     Forget password?
//                 </Link>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;