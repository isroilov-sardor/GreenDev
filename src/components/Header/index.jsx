import React from 'react';
import './index.css';
import image2 from '../../images/head-logo.svg';
import image3 from '../../images/headbottomImage.svg';

function Header() {
    return (
        <div className='header'>
            <div className="container head-container">
                <div className="head-top">
                    <a className='head-top-same1' href="#">
                        <img src={image2} width={40} height={40} alt="image" />
                        <div className="head-site-name">GreenDev</div>
                    </a>
                    <ul className="head-links">
                        <li className="head-items"><a href="#">About</a></li>
                        <li className="head-items"><a href="#">How it work</a></li>
                        <li className="head-items"><a href="#">Pricing</a></li>
                        <li className="head-items"><a href="#">Solution</a></li>
                        <li className="head-items"><a href="#">Features</a></li>
                    </ul>
                    <div className="head-top-buttons">
                        <button className='btn1'>Login</button>
                        <button className="btn2">Register</button>
                    </div>
                </div>
                <div className="head-bottom">
                    <div className="head-desc1">Minimize your tabs.</div>
                    <div className="head-desc2">Find the trends!</div>
                    <p className="head-title">
                        Don’t let your computer memories consumes all of those browser tabs. <br />
                        Findtrend  let you gathers all of your favorite website into one place.
                    </p>
                    <button className='btn3'>Get Started 🔥</button>
                    <img src={image3} width={1076} height={178} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header;
