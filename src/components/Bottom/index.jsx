import React from 'react'
import './index.css';
import imgLogo from '../../images/botomLogo.svg'

function Bottom() {
    return (
        <div className="bot-all">
            <div className='botom-top'>
                <div className="container botom_container">
                    <div className="bot-desc">Join us on email for</div>
                    <div className="bot-title">more trending topics</div>
                    <button className="bot-btn">Join now</button>
                </div>
            </div>
            <div className="botom-bot">
                <div className="container bot-container">
                    <div className="bot-same">
                        <img className='bot-img' src={imgLogo} width={40} height={40} alt="Logo" />
                        <div className="bot_logoName">GreenDev
                        </div>
                    </div>
                    <ul className="bot-links">
                        <li className="bot-items"><a href="#">privacy Plicy</a></li>
                        <li className="bot-items"><a href="#">Terms and Conditions</a></li>
                        <li className="bot-items"><a href="#">Contact Us</a></li>
                        <li className="bot-items"><a href="#">Careers</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Bottom
