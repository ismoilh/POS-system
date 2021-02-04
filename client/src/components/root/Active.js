// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import jwt from 'jsonwebtoken';

// const Activate = ({ match }) => {
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         _id: '',
//         password: '',
//         token: '',
//         show: true
//     });

//     useEffect(() => {
//         let token = match.params.token;
//         let { username, email, password, _id } = jwt.decode(token);

//         if (token) {
//             setFormData({ ...formData, username, email, _id, token });
//         }

//         console.log(token, username, _id);
//     }, [match.params]);
//     const { username, email, token, show } = formData;

//     const handleSubmit = e => {
//         e.preventDefault();
//         const newUser = { username, email }
//         const request = axios
//             .post(`http://localhost:8000/auth/activation`, {
//                 token
//             }, newUser)
//             .then(res => {
//                 setFormData({
//                     ...formData,
//                     show: false
//                 });
//                 localStorage.setItem('auth-token', formData.token)
//                 localStorage.setItem('user-data', JSON.stringify(formData))
//             })
//     };

//     return (
//         <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
//             <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
//                 <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
//                     <div className='mt-12 flex flex-col items-center'>
//                         <h1 className='text-2xl xl:text-3xl font-extrabold'>
//                             Welcome {formData.username}
//                         </h1>

//                         <form
//                             className='w-full flex-1 mt-8 text-indigo-500'
//                             onSubmit={handleSubmit}
//                         >
//                             <div className='mx-auto max-w-xs relative '>
//                                 <button
//                                     type='submit'
//                                     className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
//                                 >
//                                     <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
//                                     <span className='ml-3'>Activate your Account</span>
//                                 </button>
//                             </div>
//                             <div className='my-12 border-b text-center'>
//                                 <div className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
//                                     Or sign up again
//                 </div>
//                             </div>
//                             <div className='flex flex-col items-center'>
//                                 <a
//                                     className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3
//            bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
//                                     href='/register'
//                                     target='_self'
//                                 >
//                                     <i className='fas fa-sign-in-alt fa 1x w-6  -ml-2 text-indigo-500' />
//                                     <span className='ml-4'>Sign Up</span>
//                                 </a>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//                 <div className='flex-1 bg-indigo-100 text-center hidden lg:flex'>
//                     <div
//                         className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
//                     ></div>
//                 </div>
//             </div>
//       ;
//         </div>
//     );
// };

// export default Activate;
import React, { useState, useEffect } from 'react';
// import authSvg from '../assests/welcome.svg';
import { toast } from 'react-toastify';  //ToastContainer,
import axios from 'axios';
import jwt from 'jsonwebtoken';
// import { authenticate, isAuth } from './auth';
import { Redirect } from 'react-router-dom';

const Activate = ({ match }) => {

    const [redirect, setRedirect] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        token: '',
        show: true
    });

    // const history = useHistory() 

    useEffect(() => {
        let token = match.params.token;
        let { name } = jwt.decode(token);

        if (token) {
            setFormData({ ...formData, name, token });
        }
    }, [match.params]);

    const { token } = formData; // name, show 

    const handleSubmit = e => {
        e.preventDefault();

        axios
            .post('http://localhost:8000/auth/activation', {
                token
            })
            .then(res => {
                setFormData({
                    ...formData,
                    show: false
                });

                toast.success(res.data.message);
                setRedirect(true)
            })
            .catch(err => {

                toast.error(err.response.data.errors);
            });
    };

    return (
        <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
            {redirect ? <Redirect to='/login' /> : null}
            <div className='max-w-10/12-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
                <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
                    <div className='mt-12 flex flex-col items-center'>
                        <h1 className='text-2xl xl:text-3xl font-extrabold'>
                            Welcome {formData.name}
                        </h1>

                        <form
                            className='w-full flex-1 mt-8 text-indigo-500'
                            onSubmit={handleSubmit}
                        >
                            <div className='mx-auto max-w-xs relative '>
                                <button
                                    type='submit'
                                    className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                                >

                                    <span className='ml-3'>Activate</span>
                                </button>
                            </div>
                            <div className='my-12 border-b text-center'>
                                <div className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
                                    Or sign up again
                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <a
                                    className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3
           bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
                                    href='/register'
                                    target='_self'
                                >

                                    <span className='ml-4'>Sign Up</span>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activate;