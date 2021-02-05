import React, { useEffect } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import '../../assets/css/style.css'
import Products from '../products/Products';
import BlogDetail from '../section/BlogDetail';
import Dashboard from './Dashboard'
import "./style.css"
import Axios from 'axios'
import Orders from "./Orders";
import Profile from './Profile';
import { useStateValue } from '../../StateProvider'
import Blog from './Blog'
import Active from './Active';
import Login from './Login'
import Register from './Register'
import PaidOrders from './PaidOrders';



function App() {


  const [{ alert1, alert2 }, dispatch] = useStateValue()
  const port = process.env.PORT || 5000;

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token")
      let userss = JSON.parse(localStorage.getItem('user-data')) || {};

      if (userss === null) {
        localStorage.setItem("id-data", "");
        userss = "";
      }

      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        `http://localhost:${port}/auth/tokenIsValid`,
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        dispatch({
          type: 'USERDATA',
          token1: token,
          user1: userss
        });
      }
    };
    checkLoggedIn();
  }, []);

  const alertDisappear1 = () => {
    dispatch({
      type: 'ALERT1',
      alert1: false
    });
  }
  const alertDisappear2 = () => {
    dispatch({
      type: 'ALERT2',
      alert2: false
    });
  }


  return (

    <Router>

      <div>
        {alert1 ? <div className='alertBlack1'>
          <div className="alertoff">
            You didn't select your Address or you are more than 30km far from Lieferando.
            <hr />
            <button className='alertoffBtn1' onClick={alertDisappear1}>OK</button>
          </div>
        </div>
          : ''}
        {alert2 ? <div className='alertBlack1'>
          <div className="alertoff">
            Please select your address
            <hr />
            <button className='alertoffBtn1' onClick={alertDisappear2}>OK</button>
          </div>
        </div>
          : ''}
        <Switch>
          <Route exact path="/" component={Dashboard} />
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} /> */}
          <Route exact path="/blog" component={Blog} />
          <Route exact path={`/register`} render={props => <Register {...props} />} />
          <Route exact path={`/login`} render={props => <Login {...props} />} />
          <Route exact path={`/auth/activate/:token`} render={props => <Active {...props} />} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/paidorders" component={PaidOrders} />
          <Route path="/blog/show/" component={BlogDetail} />
          <Route path="/menu" component={Products} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;



