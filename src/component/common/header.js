import React from 'react';
import logo from '../../assets/finight.png';

function Header() {
    return (
        <div className='row align-items-center headerHeight'>
            <div className='col-lg-6'>
                <img src={logo} alt="Logo" className="logo ms-3" />
            </div>
            <div className='col-lg-4 offset-lg-1'>
                <div className="d-flex justify-content-between align-items-center mr-2">

                    <div className="text-center flex-vertical">
                        <div className="circle completed">✓</div>
                        <span className="step-label active-label">Select Your Queries</span>
                    </div>

                    <div className="line"></div>

                    <div className="text-center flex-vertical">
                        <div className="circle">02</div>
                        <span className="step-label">Get Answers</span>
                    </div>

                    <div className="line"></div>

                    <div className="text-center flex-vertical">
                        <div className="circle">03</div>
                        <span className="step-label">Take Expert Assistance</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;