import React from 'react'
import './about.scss'
function AboutSection() {
    return (
        <section className='aboutsection'>

            <div className='aboutgeneraldiv'>

                <div className='abouttext'>
                    <h2> About Us </h2>
                </div>

                <div className='cardstatic'>

                    <div className='cardour'>
                        <i class="fa-regular fa-heart"></i>
                        <h3> Made With Love </h3>
                        <p className='ptext'> Magna at erat pretium mattis id non odio quisque nec tempor sapien quis eget ligula ispsum sagittis.</p>
                    </div>
                    <div className='cardour'>
                        <i class="fa-regular fa-face-laugh"></i>
                        <h3> FOR YOUR HAPPINESS</h3>
                        <p className='ptext'> Magna at erat pretium mattis id non odio quisque nec tempor sapien quis eget ligula ispsum sagittis.</p>
                    </div>
                    <div className='cardour'>
                        <i class="fa-solid fa-sun"></i>
                        <h3> NATURAL CARE</h3>
                        <p className='ptext'> Magna at erat pretium mattis id non odio quisque nec tempor sapien quis eget ligula ispsum sagittis.</p>
                    </div>

                </div>



            </div>



        </section>
    )
}

export default AboutSection