// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// class ProductMenu extends Component {
//     state = {
//         fixed: false,
//     }
//     handleScroll = () => {
//         if (window.scrollY > 550) {
//             this.setState({ fixed: true })
//         }
//         else {
//             this.setState({ fixed: false })
//         }
//     }
//     componentDidMount() {
//         window.addEventListener('scroll', this.handleScroll)
//     }
//     render() {
//         return (
//             <div className={this.state.fixed ? "product-menu " + " fixed-menu " : " product-menu"}>
//                 <ul>
//                     <li>
//                         <Link className="menu-link" to={"/products"}>
//                             <img src="https://i.ibb.co/hY1vvdp/1.png" alt="Pizza" />
//                             <span>PIZZA</span>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link className="menu-link" to={"/products/pasta"}>
//                             <img src="https://i.ibb.co/NxQmh6X/5.png" alt="" />
//                             <span>PASTA</span>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link className="menu-link" to={"/products/panini"}>
//                             <img src="https://i.ibb.co/Sm42QSb/4.png" alt="" />
//                             <span>PANINI</span>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link className="menu-link" to={"/products/salat"}>
//                             <img src="https://i.ibb.co/Zz08YrY/6.png" alt="" />
//                             <span>SALAT</span>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link className="menu-link" to={"/products/dessert"}>
//                             <img src="https://i.ibb.co/x1dHCgF/2.png" alt="" />
//                             <span>DESSERT</span>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link className="menu-link" to={"/products/water"}>
//                             <img src="https://i.ibb.co/PDzRNSV/3.png" alt="" />
//                             <span>GETRÄNKE</span>
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         );
//     }
// }

// export default ProductMenu;
