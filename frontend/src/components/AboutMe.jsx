import React from 'react';
import Certificates from './Certificates';
import PersonalInfo from './PersonalInfo';
import Skills from './Skills';
import Jobs from './Jobs';
import 'bootstrap/dist/css/bootstrap.css';

const AboutMe = () => {
    return (
        <div className="about-me">
            <PersonalInfo />
            <Certificates />
            <Skills />
            <Jobs />
        </div>
    )
}

export default AboutMe;
