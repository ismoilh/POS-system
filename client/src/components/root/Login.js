
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
                "https://pacific-shelf-87157.herokuapp.com/auth/login",
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
                window.location.href = 'https://pacific-shelf-87157.herokuapp.com/admin';
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
