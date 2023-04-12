import React, { useContext } from 'react'
import '../Components/Styling/Navbar.css'
import {Link} from 'react-router-dom'
import { GlobalData } from './Context/DataProvider'

const Navbar = () => {
  const {addtocart} = useContext(GlobalData)
  return (
    <div className='NavbarContainer'>
        <h2>SK..!</h2>
        <ul>
            <Link to='/'>
            <li>Home</li>
            </Link>
            <Link to='/product'>
            <li>Product</li>
            </Link>
            <span>
            <Link to='/addtocart'>
            <li>Add to Cart</li>
            </Link>
            <p className='count'>{addtocart.length}</p>
            </span>
        </ul>
    </div>
  )
}

export default Navbar