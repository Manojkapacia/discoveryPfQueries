import React from 'react';
import logo from '../../assets/finight.png';

function Header() {
    return (
        <div className='container-fluid headerHeight'>
            <div className='row'>
                <div className='col-lg-6'>
                    <img src={logo} alt="Logo" className="logo ms-3" />
                </div>
                <div className='col-lg-4 offset-lg-2'>
                <div className="d-flex justify-content-between align-items-center">
                        {/* Step 1 */}
                        <div className="text-center">
                            <div className="circle completed">✓</div>
                            <span className="step-label active-label">Select Your Queries</span>
                        </div>

                        {/* Horizontal Line */}
                        <div className="line"></div>

                        {/* Step 2 */}
                        <div className="text-center">
                            <div className="circle">02</div>
                            <span className="step-label">Get Answers</span>
                        </div>

                        {/* Horizontal Line */}
                        <div className="line"></div>

                        {/* Step 3 */}
                        <div className="text-center">
                            <div className="circle">03</div>
                            <span className="step-label">Take Expert Assistance</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Header;