import React from 'react'
import { Helmet } from 'react-helmet'
import LoginSection from '../../Components/AddComponents/LogIn/login'
import FooterSection from '../../Layout/Footer/footer'
import NavbarSection from '../../Layout/Navbar/navbar'
function AddPage() {
    return (
        <>


            <Helmet>
                <title> Add  </title>
            </Helmet>


            <NavbarSection />

            <LoginSection />

            <FooterSection />

        </>
    )
}

export default AddPage