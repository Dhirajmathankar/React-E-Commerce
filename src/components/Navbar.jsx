import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <>
        
        <div>
        <div>
        <NavLink style={{    width: '100%' , 
    'text-align':' center ' , paddingTop:'5px' }} className="navbar-brand fw-bold fs-2 px-2" to="/"> E - Commerce</NavLink>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
             
            <div className="container">
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product/tops"  >Tops</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product/shirts"  >Shirts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product/shoes"  >Shoes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product/bags"  >Bags</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product/watches"  >Watches</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product/jewellery"  >Jewellery</NavLink>
                        </li>

                       
                    </ul>
                    
                </div>

                <div className="buttons text-center">
                        <NavLink to="/login" className="btn btn-outline-dark m-2">
                            <i className="fa fa-sign-in-alt mr-1"></i> 
                            {/* Login */}
                            </NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark m-2">
                            <i className="fa fa-user-plus mr-1"></i> 
                            {/* Register */}
                            </NavLink>
                        <NavLink to="/cart" className="btn btn-outline-dark m-2">
                            <i className="fa fa-cart-shopping mr-1"></i> 
                            {/* Cart */}
                            ({state.length}) </NavLink>
                    </div>
            </div>
        </nav>
        </div>
        </>
    )
}

export default Navbar