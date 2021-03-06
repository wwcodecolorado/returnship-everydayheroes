import React from 'react'
import { Link } from 'gatsby'
import aboutStyles from './about.module.scss'
import Layout from '../components/layout'
import Meet from '../components/meet'

const AboutPage = () => {
    return (
        <div>

            <Layout>

                <h1 className={aboutStyles.full_width_header_h1}>About Us</h1>

                <div className={aboutStyles.full_width_image_container}>
      
                </div>

                <p>The purpose of this project is to collect and share stories of everyday
                heroes during the COVID-19 pandemic. Click <Link to="/"> here</Link> if you have a story you would like to share.
                <br /><br />
                Living through a pandemic exacts an emotional toll, which is different for each of us.
                While it's necessary to understand the facts and statistics during this strange time, it's not sufficient.
                We want to understand what people are actually experiencing. While it's important to learn how to protect yourself and your loved ones,
                it's also helpful to know that we're not going through this alone.
                <br /><br />
                We believe in the value of sharing human stories. Our hope is that these podcast episodes can help bring us together.
                They can paint a picture to reflect our own thoughts and feelings. They can show the actions we took to care for each other along the way.
                <br /><br />
                In Season One, we're going to meet an actor who donates blood, a director of a memory care unit, a mask-maker,
                 a magician who does construction work, a nurse who interacts daily with people who may have been infected,
                 a teacher who lost her job, and several other everyday heroes. Their stories are going to be remembered.
                 <br /><br />
                We're making this podcast available for free in streaming video and as an audio download. Enjoy!</p>

                <Meet />
            </Layout>

        </div>
    )
}

export default AboutPage
