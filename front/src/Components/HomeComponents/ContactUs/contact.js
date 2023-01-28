import React from 'react'
import './contact.scss'
function ContactSection() {
    return (
        <section className='contactsect'>


            <div className='generalcontactdiv'>



                <div className='contacttext'>

                    <h3> Contact Us </h3>
                    <p> To get special offers to your email </p>

                    <h5> <p> Amsterdam CA 90291 </p>
                        <p>  email@site.com </p>
                        <p>  +1 (234) 56-78 </p>
                        <p> @natural.cosmetic </p></h5>

                </div>


                <div className='generalinp'>
                    <div>
                        <input className='inpcnt' type={"text"} placeholder="Name" />
                        <input className='inpcnt' type={"text"} placeholder="Name" />
                    </div>
                    <textarea placeholder='messsage' className='inpct' cols={80} rows={5} />
                    <button className='btnsend'> SEND MESSAGE </button>
                </div>


            </div>


        </section>
    )
}

export default ContactSection