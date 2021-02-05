import React, { useState } from 'react';
// import authSvg from '../assests/auth.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { isAuth } from './auth';
import { Redirect } from 'react-router-dom';
import './style.css'

const Register = () => {

  const [alert, setAlert] = useState(false)
  const [notFilled, setNotFilled] = useState(false)
  const [WrongPasswordConfirm, setWrongPasswordConfirm] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordCheck: '',
    textChange: 'Sign Up'
  });

  const { username, email, password, passwordCheck, textChange } = formData;
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (username && email && password) {
      if (password === passwordCheck) {
        setFormData({ ...formData, textChange: 'Submitting' });
        axios
          .post('http://localhost:8000/auth/register', {
            username,
            email,
            password: password
          })
          .then(res => {
            setFormData({
              ...formData,
              username: '',
              email: '',
              password: '',
              passwordCheck: '',
              textChange: 'Verify from your Email'
            });
            setAlert(true)
            toast.success(res.data.message);
          })
          .catch(err => {
            setFormData({
              ...formData,
              username: '',
              email: '',
              password: '',
              passwordCheck: '',
              textChange: 'Sign Up'
            });
            console.log(err.response);
            toast.error(err.response.data.errors);
          });
      } else {
        setWrongPasswordConfirm(true)
      }
    } else {
      setNotFilled(true)
    }
  };


  return (
    <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
      {isAuth() ? <Redirect to='/' /> : null}
      <div style={{ position: 'absolute', top: '40px', left: '40px' }} ><ToastContainer /></div>
      {alert ? <div className=' alertBlack1  alertBlack2'>
        <div className="alertoff">
          Go to your Email and Verify your account.
            <hr />
        </div>
      </div>
        : ''}
      <div className='max-w-10/12-xl m-2  bg-white shadow sm:rounded-lg flex justify-center flex-1'>
        <div className='lg:w-1/2 xl:w-5/18 p-2 sm:p-12'>
          <div className='mt-5 flex flex-col items-center'>
            <h1 className='text-2xl xl:text-3xl font-extrabold'>
              Sign Up
            </h1>

            <form
              className='w-full flex-1 mt-3 text-indigo-500'
              onSubmit={handleSubmit}
            >
              <div className='mx-auto max-w-xs relative '>
                <input
                  className='w-full px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                  type='text'
                  placeholder='Name'
                  onChange={handleChange('username')}
                  value={username}
                />
                <input
                  className='w-full px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                  type='email'
                  placeholder='Email'
                  onChange={handleChange('email')}
                  value={email}
                />
                <input
                  className='w-full px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                  type='password'
                  placeholder='Password'
                  onChange={handleChange('password')}
                  value={password}
                />
                <input
                  className='w-full px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3'
                  type='password'
                  placeholder='Confirm Password'
                  onChange={handleChange('passwordCheck')}
                  value={passwordCheck}
                />
                {WrongPasswordConfirm ? <p style={{ color: 'red' }} >Passwords don't match</p> : ''}
                {notFilled ? <p style={{ color: 'red' }} >Please fill all fields</p> : ''}
                <button
                  type='submit'
                  className='mt-3 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
                  <span className='ml-3'>{textChange}</span>
                </button>
              </div>
              <div className='my-4 border-b text-center'>
                <div className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
                  Or sign with email or social login
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <a
                  className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3
           bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-2'
                  href='/login'
                  target='_self'
                >
                  <span className='ml-4'>Sign In</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
