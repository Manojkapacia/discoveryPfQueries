import React, { useEffect, useState }  from 'react';
import logo from '../../assets/finight.png';
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const [isAnswerPage, setIsAnswerPage] = useState(false);

    useEffect(() => {
        // Check if the URL contains 'select-answer' whenever it changes
        setIsAnswerPage(location.pathname.includes('select-answer'));
    }, [location]);

    return (
        <div className='container-fluid'>
            <div className='row align-items-center headerHeight mt-3'>
            <div className='col-lg-6'>
                <img src={logo} alt="Logo" className="logo ms-3" />
            </div>
            <div className='col-lg-4 offset-lg-1'>
                <div className="d-flex justify-content-between align-items-center mr-2">

                    <div className="text-center flex-vertical">
                        {!isAnswerPage && <div className='circle completed'>✓</div>}
                        {isAnswerPage && <div className='circle'>01</div>}
                        <span className={`step-label ${!isAnswerPage ? 'active-label' : ''}`}>Select Your Queries</span>
                    </div>

                    <div className="line"></div>

                    <div className="text-center flex-vertical">
                        {isAnswerPage && <div className='circle completed'>✓</div>}
                        {!isAnswerPage && <div className='circle'>02</div>}
                        <span className={`step-label ${isAnswerPage ? 'active-label' : ''}`}>Get Answers</span>
                    </div>

                    <div className="line"></div>

                    <div className="text-center flex-vertical">
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