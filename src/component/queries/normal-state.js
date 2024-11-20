import '../../App.css'
import '../../css/queries/normal-state.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function NormalState() {

    const [cardStates, setCardStates] = useState([
        { id: 1, isFirstButton: true },
        { id: 2, isFirstButton: true },
        { id: 3, isFirstButton: true },
        { id: 4, isFirstButton: true },
    ]);
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        setCount(count + 1);
      };
    
      const handleRemove = () => {
        if (count > 0) {
          setCount(count - 1);
        }
      };
      
    const handleButtonClick = (id) => {
        setCardStates((prevState) =>
            prevState.map((card) =>
                card.id === id ? { ...card, isFirstButton: !card.isFirstButton } : card
            )
        );
    };

    const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/select-answer");
  };


    return (

        <div className='container-fluid mt-4'>
            <div className='row'>
                <div className='col-lg-8 offset-lg-2 px-lg-0'>
                    <input type="text" className="form-control"
                        placeholder="Search Queries" aria-label="Search" />
                </div>
            </div>

            <div className='row mt-3' style={{marginBottom: '5rem'}}>
                <div className='col-lg-3 offset-lg-2 ps-lg-0 mb-3'>
                    <div style={{ border: '1px solid #DCDCDC', borderRadius: '0.50rem' }}>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <label className='cardHeading'>Unable to find the query you were looking for ?</label>
                                <p className='cardText'>Try retting your query preferences by clicking on the button below</p>
                                <button className='w-100 queriesButton py-2'>Find Queries</button>
                            </div>
                        </div>

                        <div className="accordion border-0 mx-3 mb-3" id="accordionExample">
                            {/* Accordion Item 1 */}
                            <div className="accordion-item border-0">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button bg-transparent border-0 shadow-none accordionHeading"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        Category
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse border-0 collapse show"
                                    aria-labelledby="headingOne"
                                >
                                    <div className="accordion-body">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label categoryCheckbox" htmlFor="flexCheckDefault">
                                                Insurance
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label categoryCheckbox" htmlFor="flexCheckDefault">
                                                Investments
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label categoryCheckbox" htmlFor="flexCheckDefault">
                                                Taxations
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label categoryCheckbox" htmlFor="flexCheckDefault">
                                                Provident Fund
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label categoryCheckbox" htmlFor="flexCheckDefault">
                                                Loans & EMI's
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Accordion Item 2 */}
                            <div className="accordion-item border-0">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button
                                        className="accordion-button collapsed accordionHeading bg-transparent border-0 shadow-none"
                                        type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo">
                                        Goal
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo">
                                    <div className="accordion-body">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label goalCheckbox" htmlFor="flexCheckDefault">
                                                Protection against mishap
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label goalCheckbox" htmlFor="flexCheckDefault">
                                                Having peace of mind
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label goalCheckbox" htmlFor="flexCheckDefault">
                                                Increase my networth
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label goalCheckbox" htmlFor="flexCheckDefault">
                                                Reduce debt burden
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Accordion Item 3 */}
                            <div className="accordion-item border-0">
                                <h2 className="accordion-header" id="headingThree">
                                    <button
                                        className="accordion-button collapsed accordionHeading
                                    bg-transparent border-0 shadow-none"
                                        type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        Profession
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingThree"
                                >
                                    <div className="accordion-body">
                                        This is the third item's accordion body.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='col-lg-5 pe-lg-0'>
                    {cardStates.map((card) => (
                        <div className="card mb-3"
                            style={{ overflow: "hidden" }}>
                            <div className="ribbon">
                                Recommended
                            </div>
                            <div className="card-body mt-5">
                                <h6 className='accordionHeading'>I have senior citizen parents with pre-existing conditions.
                                    Is there any specific plan for them
                                </h6>
                                <p className='goalCheckbox'>VS Code has an extensive marketplace with various extensions, including one
                                    specifically designed to generate Lorem Ipsum text. Here’s how to install
                                    and use it.Open the VS Code Marketplace by clicking on the Extensions icon
                                    on the sidebar
                                </p>
                                <button className='border-0 assistButton px-3 py-1'>134 Assisted</button>
                                <button className='border-0 ms-2 px-3 py-1 viewButton'>1.5k views</button><br></br>
                                {card.isFirstButton ? (
                                    <button onClick={() => {handleAdd();handleButtonClick(card.id)}}className='border-0 mt-3 addButton'>+ Add to list</button>
                                ) : (
                                    <button onClick={() => {handleRemove();handleButtonClick(card.id)}} className='border-0 mt-3 addButton'>Query Selected</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Footer */}
            {count > 0 && (
                <footer  className="footerColor text-white py-3 fixed-bottom">
                <div className='row'>
                    <div className='col-lg-8 offset-lg-2 d-flex flex-column 
                    flex-md-row align-items-center 
                    justify-content-lg-end justify-content-center text-center me-2'>
                        <span className='footerText'>{count} Queries selected </span>
                        <button className='border-0 text-center ms-md-3 mt-2 py-1 mt-md-0 py-md-2 myListButton' 
                            onClick={handleNavigate}>My List
                        </button>
                    </div>
                </div>
            </footer>
            )}
        </div>
    );
}

export default NormalState;
