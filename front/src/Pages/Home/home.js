import React from 'react'
import { Helmet } from 'react-helmet'
import AboutSection from '../../Components/HomeComponents/About/about'
import ContactSection from '../../Components/HomeComponents/ContactUs/contact'
import CoruselSection from '../../Components/HomeComponents/CoruselHeader/corusel'
import DevetodSection from '../../Components/HomeComponents/Devoted/devetod'
import ProductSection from '../../Components/HomeComponents/Products/products'
import FooterSection from '../../Layout/Footer/footer'
import NavbarSection from '../../Layout/Navbar/navbar'
function HomePage() {
    return (
        <>

            <Helmet>
                <title> Home  </title>
            </Helmet>

            <NavbarSection />

            <CoruselSection />

            <AboutSection />

            <DevetodSection />

            <ProductSection />


            <ContactSection />


            <FooterSection />


        </>
    )
}

export default HomePage