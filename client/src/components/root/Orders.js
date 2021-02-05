import React, { useState, useEffect } from 'react'
import './style.css'
import axios from 'axios'
import AuthOptions from '../auth/AuthOptions'
import StripeCheckout from 'react-stripe-checkout'
import { useStateValue } from '../../StateProvider'
import Paypal from './Paypal'
import './style.css'

const Orders = () => {

    const [{ userData }] = useStateValue()

    const [phone, setPhone] = useState()
    const [form, setForm] = useState(false)
    const [form2, setForm2] = useState(false)
    const [alert3, setAlert3] = useState(false)

    let address = localStorage.getItem('address')
    let email1 = JSON.parse(localStorage.getItem('user-data'))
    let email2 = email1.email


    const [box, setBox] = useState({ posts: [] })
    const [box2, setBox2] = useState()

    const [distPrice, setDistPrice] = useState()

    let userss = JSON.parse(localStorage.getItem('user-data')) || {}

    const qwe = async () => {
        let token = localStorage.getItem("auth-token")
        if (token === null) {
            localStorage.setItem("auth-token", "");
            token = "";
        }
        const response = await fetch('https://pacific-shelf-87157.herokuapp.com/orders', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "x-auth-token": token
            }
        });
        const data = await response.json();
        setBox({ posts: data })

        const DataPrice = data.filter((obj) => {
            return obj.owner === userss.id
        })
        const abc = DataPrice.map((as, index) => as.price)
        let sumPrice = abc.reduce(function (a, b) {
            return a + b;
        }, 0);
        setBox2(sumPrice)
    }
    useEffect(() => {
        qwe()
    }, [])


    let dis = JSON.parse(localStorage.getItem('distance'))

    useEffect(() => {
        if (5 > dis) { setDistPrice(10) }
        else if (dis < 10 && dis > 5) { setDistPrice(20) }
        else if (dis < 15 && dis > 10) { setDistPrice(30) }
        else if (dis < 20 && dis > 15) { setDistPrice(40) }
        else if (dis < 25 && dis > 20) { setDistPrice(50) }
        else if (dis < 30 && dis > 25) { setDistPrice(60) }
        else if (dis > 30) { setDistPrice('too far') }
    }, [])



    const displayBlogPost = box.posts.filter(function (obj) {
        return (obj.owner === userss.id)
    })


    let food1 = displayBlogPost.map(function (value) {
        return value.title;
    });

    const [paydata, setPaydata] = useState({ title: undefined, price: undefined, owner: undefined, phone1: undefined })

    const hanldePay = (e) => {
        e.preventDefault()
        setPaydata({
            title: food1,
            price: box2 + distPrice,
            owner: userData.user.email,
            address: address,
            phone1: phone
        })
        setForm2(true)
    }
    let price1 = box2 + distPrice


    // const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)

    const transactionSuccess = () => {

    }


    const transactionError = () => {
        console.log('Paypel Error')

    }


    const transactionCanceled = () => {
        console.log('Transaction canceled')
    }



    const clicktoSearch = () => {
        setAlert3(true)
    }


    const makePayment = token => {
        const body = {
            token,
            product: { name: JSON.stringify(food1), price: box2 + distPrice }
        }
        const headers = { "Content-Type": "application/json" }
        return fetch('http://localhost:8000/charge', {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        }).then(res => {
            console.log('response', res)
            const { status } = res
            console.log("status", status)
            axios.post('http://localhost:8000/paid', paydata)

        }).catch(err => {

        })
    }

    return (

        <>
            <AuthOptions />
            <div className='menu1'>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <thead className="thead">
                        {displayBlogPost.map((post, i) => (
                            <tr key={i}>
                                <th scope="col"> {post.title}</th>
                                <th scope="col">{post.price}€</th>
                                <th scope="col"><button onClick={() => {
                                    axios.delete('http://localhost:8000/orders/' + post._id)
                                        .then(() => {
                                            qwe()
                                        })
                                        .catch((err) => { })
                                }} ><span className="material-icons">
                                        delete_sweep
                                                </span></button></th>
                            </tr>
                        ))}
                    </thead>
                </table>

                <table className="table table-striped table-dark">
                    <tbody>
                        <tr>
                            <td>Products Price</td>
                            <td>{box2}€</td>
                        </tr>

                        <tr>
                            <td>Service fee</td>
                            <td>{distPrice}€</td>
                        </tr>
                        <tr>
                            <td>Total Price</td>
                            <td>{box2 + distPrice}€</td>

                        </tr>
                    </tbody>
                </table>

                {alert3 ? <div className='alertBlack1'>
                    <div className="alertoff">
                        To make orders you should buy foods more than 10€
            <hr />
                        <button className='alertoffBtn1' onClick={() => { setAlert3(false) }}>OK</button>
                    </div>
                </div>
                    : ''}
                {box2 > 10 ?
                    <button type="button" className="PayBtn2" onClick={() => setForm(true)} > Payment </button>
                    : <button onClick={clicktoSearch} className="PayBtn2" type="button">Payment</button>}
                {form ? <div className='alertBlack1 alertBlack2'>
                    <form className='alertoff3' onSubmit={hanldePay}>
                        <span className='close1' onClick={() => { setForm(false); setForm2(false) }}>x</span>
                        {form2 ?
                            <>
                                <h4>Lieferando</h4>
                                <p><span style={{ fontWeight: 800 }} >Address:</span> {paydata.address}</p>
                                <p><span style={{ fontWeight: 800 }} >Email:</span> {userData.user.email}</p>
                                <p><span style={{ fontWeight: 800 }} >Phone:</span> {paydata.phone1}</p>
                                <hr />
                                <StripeCheckout
                                    stripeKey='pk_test_51IBmoSFMbvzHsJfjEP0tn9W6qHCeu4PZbePxBtiARdddn8xPprJ8OAihMBGONgIhvDaBLCOgT96hyRM9Hg8jn0UO004wAj0Oep'
                                    description={address}
                                    token={makePayment}
                                    name='Payment'
                                    email={email2}
                                    amount={(box2 + distPrice) * 100}
                                    zipCode={false}
                                    allowRememberMe={false}
                                >
                                    <button type="button" className="PayBtn2" > Pay with Card </button>
                                </StripeCheckout>
                                <Paypal
                                    paydata={paydata}
                                    onSuccess={transactionSuccess}
                                    transactionError={transactionError}
                                    transactionCanceled={transactionCanceled}
                                    toPay={price1}
                                />
                            </>
                            :
                            <>
                                <h4>Lieferando</h4>
                                <h6>Thanks for Choosing our Restaurant. Please enter your phone number.</h6>
                                <hr />
                                <input className='phoneInput' placeholder='Phone Nubmer' type="number" onChange={((e) => setPhone(e.target.value))} required />
                                <button type='submit' className="next" >Next</button>
                            </>}
                    </form>
                </div> : ''}
            </div>
        </>
    )
}

export default Orders
