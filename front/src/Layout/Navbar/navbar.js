import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
function NavbarSection() {
    return (
        <nav className='navsection'>

            <div className='generaldiv'>

                <div className='imgdiv'>
                    <Link to={"/"}> <img className='logo' src='https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/logo1-1-96x96.png' /> </Link>
                    <h2> Natural Cosmetic </h2>
                </div>

                <div className='ulandicon'>

                    <ul className='a'>
                        <Link className='linkclass' to={"/"}> <li className='liall'> <a> Home  </a> </li> </Link>
                        <Link className='linkclass' to={"/add"}> <li> <a> Add  </a> </li> </Link>
                        <li> <a> Shop  </a> </li>
                    </ul>
                    <div className='items'>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>

            </div>

        </nav>
    )
}

export default NavbarSection