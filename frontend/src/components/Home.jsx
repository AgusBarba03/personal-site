import React from 'react';
import { Link } from 'react-router-dom'
import GitHub from '../GitHub.svg';
import Instagram from '../Instagram.svg';
import Linkedin from '../Linkedin.svg';
import Twitter from '../Twitter.svg';



const Home = () => {
    return (
        <main className="home">
            <section className="presentation">
                <article className="presentation-article">
                    <h2 className="name">
                        Agustín Barbalase
                    </h2>
                    <p className="role">
                        Student and JS Developer
                    </p>
                    <div className="more-info-section">
                        <Link to="/aboutme" className="more-info-button">More Info</Link>
                    </div>
                </article>
            </section>            
            <section className="contact">
                <a href="https://github.com/AgusBarba03" target="_blanck" className="contact-link">
                    <img src={GitHub} alt="..." className="contact-img"/>
                </a>
                <a href="https://www.instagram.com/agus_barbalase/" target="_blanck" className="contact-link">
                    <img src={Instagram} alt="..." className="contact-img"/>
                </a>
                <a href="https://www.linkedin.com/in/agust%C3%ADn-barbalase-884a6b1b9/" target="_blanck" className="contact-link">
                    <img src={Linkedin} alt="..." className="contact-img"/>
                </a>
                <a href="https://twitter.com/agus_barbalase" target="_blanck" className="contact-link">
                    <img src={Twitter} alt="..." className="contact-img"/>
                </a>
            </section>
        </main>
    )
}

export default Home;