import React from 'react';
import './Landing.css';
import Maiya from '../../svgs/maiya.jpg';

const Landing = () => {
    return (
        <div className="wrapper">
            <img src={Maiya} alt="Maiya logo" />
            <a href="/Login">
                <button>Let's Chat!</button>
            </a>
        </div>
    )
}

export default Landing;
