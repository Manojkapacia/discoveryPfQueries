import React from 'react';
import loaderSuccess from '../../assets/loader-success.png';

function LoaderSuccess() {
    return (
        <div className='container-fluid'>
            <div className='row'>
            <div className="col-9 progress ps-0" style={{ height: '0.2rem' }}>
            {/* <hr className='hr-two-color'></hr> */}
                        <div
                            className="progress-bar "
                            role="progressbar"
                            style={{ width: '90%', backgroundColor: '#006BFF'}}
                            aria-valuemax="100">
                        </div>
                    </div>
            </div>
            <div className='row  d-flex justify-content-center align-items-center setBackground'>
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                     <img src={loaderSuccess} alt="Personalising Loader"
                         className="personalisingLoader" style={{ height: "15rem", width: "15rem" }} />
                 </div>
                 <div className='col-lg-4 offset-lg-4'>
                     <div className="progress" style={{ height: '0.5rem' }}>
                         <div
                             className="progress-bar "
                             role="progressbar"
                             style={{ width: '70%', backgroundColor: '#2D565D'}}
                             aria-valuenow="70"
                             aria-valuemin="0"
                             aria-valuemax="100">
                         </div>
                     </div>
                 </div>

                 <div className='col-lg-12 text-center mt-3'>
                     <label className='loaderHeading'>Personalising Queries For You!</label>
                     <p className='loaderSubheading mb-0'>The art and science of asking questions 
                         the source of all knowledge
                     </p>
                     <span className='loaderSubheading'>-Thomas Berger</span>
                 </div>
                </div>
            </div>
        </div>
    );
}

export default LoaderSuccess;