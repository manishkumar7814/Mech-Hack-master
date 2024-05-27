import React from 'react'
import {Link} from "react-router-dom";
import {RiFindReplaceLine} from "react-icons/ri"
import img from "../../assets/me.jpg"

const About = () => {
  return (
    <section className='about'>
        <main>
            <h1>
                About US
            </h1>

            <article>
                <h4>Mech-Hack</h4>
                <p>Order your Bike parts, Now...</p>
                <p>Explore the different parts and other accessories of motorBikes. Click below to explore</p>
                <Link to="/">
                    <RiFindReplaceLine/>
                </Link>
            </article>

            <div>
                <h2>Founder</h2>
                <article>
                    <div>
                        <img src={img} alt = "Founder"/>
                        <h3>Manish Kumar</h3>
                    </div>

                    <p>I am Manish Kumar. Web Developer at Mech-Hack.</p>
                </article>
            </div>
        </main>
    </section>
  )
}

export default About
