import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { FiMenu } from 'react-icons/fi'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import '../root/style.css'

export default function AuthOptions() {

    const [{ userData }, dispatch] = useStateValue()
    const [on, setOn] = useState(false)

    let dis = localStorage.getItem('distance')

    const history = useHistory();
    const register = () => history.push("/register");
    const orders = () => {
        history.push("/orders")
        setOn(false)
    };;
    const paidOrders = () => {
        history.push("/paidorders")
        setOn(false)
    };;
    const profile = () => {
        history.push("/profile")
        setOn(false)
    };;
    const login = () => history.push("/login");
    const blog = () => {
        history.push("/blog")
        setOn(false)
    };
    const logout = () => {
        dispatch({
            type: 'USERDATA',
            token1: undefined,
            user1: undefined
        });
        setOn(false)
        localStorage.clear()
        history.push('/')
    };

    const alertonOrder = () => {
        dispatch({
            type: 'ALERT2',
            alert2: true
        });
        setOn(false)
    }

    return (
        <div className="header-top q1">
            <Link to='/' className="navbar-brand">Lieferando</Link>
            <nav className="auth-options">
                {userData.user ? (
                    <div>
                        <button className='signInbtn' onClick={() => { setOn(true) }}><FiMenu /></button>
                        <div className={`${on ? 'left-menu menuOn' : 'left-menu menuOff'}`}>
                            <div className='Navbtn2' onClick={() => { setOn(false) }}><AiOutlineArrowLeft /></div>
                            {dis ? <div className='Navbtn1' onClick={orders}>My Orders</div>
                                :
                                <div className='Navbtn1' onClick={alertonOrder}>My Orders</div>
                            }
                            <div className='Navbtn1' onClick={paidOrders}>Paid orders</div>
                            <div className='Navbtn1' onClick={blog}>Blog</div>
                            <div className='Navbtn1' onClick={profile}>{userData.user.username}</div>
                            <div className='Navbtn1' onClick={logout}>Log out</div>
                        </div>
                    </div>
                ) : (
                    <>
                        <button className='signInbtn' onClick={login}>Log in</button>
                        <button className='signInbtn' onClick={register}>Register</button>
                    </>
                )}
            </nav>
        </div>
    );
}