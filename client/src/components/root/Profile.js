import React from "react";
import Axios from 'axios'
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import AuthOptions from "../auth/AuthOptions";







const Profile = () => {


    const [{ userData }, dispatch] = useStateValue()

    const remove = () => {
        const url = "https://pacific-shelf-87157.herokuapp.com/auth/delete/" + userData.user.id;
        Axios.delete(url).then(() => {
            localStorage.clear()
            dispatch({
                type: 'USERDATA',
                token1: undefined,
                user1: undefined
            });
        });
    }

    const cosn = JSON.parse(localStorage.getItem('user-data')) || {};
    return (
        <>
            <AuthOptions />
            <div className="page">
                <div className="container d-flex justify-content-center align-items-center mt-5">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 col-xl-4 offset-xl-4">
                            <div className="card shadow">
                                <img src="https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
                                    alt="" className="card-image" />
                                <div className="card-body">
                                    <h5 className="card-title">Profile</h5>
                                    <form className="validated-form">
                                        <div className="mb-3 qww1">
                                            <span>Username:</span>{cosn.username}
                                        </div>
                                        <div className="mb-3 qww1">
                                            <span>Email:</span>{cosn.email}
                                        </div>
                                        <Link to='/'> <button type='submit' onClick={remove} value="Delete" className="btn btn-danger btn-block ok"><span>Delete Account</span></button></Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Profile
