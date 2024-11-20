import '../../App.css'
import '../../css/queries/answer-page.css';
import { useNavigate } from "react-router-dom";

function AnswerPage() {
    const navigate = useNavigate();

  const selectQueries = () => {
    navigate("/add-list");
  };

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-3'>
                    <label className='queries mb-2'>Queries List</label>
                    <div className="card" style={{ backgroundColor: "#2F6870", color: "#ffffff" }}>
                        <div className="card-body queriesList p-2">
                            I have senior citizen parents with pre-existing conditions..
                        </div>
                    </div>
                    <div className="card my-1" style={{ borderColor: "#2F6870", color: "#2F6870" }}>
                        <div className="card-body queriesList p-2">
                            I have senior citizen parents with pre-existing conditions..
                        </div>
                    </div>
                    <div className="card" style={{ borderColor: "#2F6870", color: "#2F6870" }}>
                        <div className="card-body queriesList p-2">
                            I have senior citizen parents with pre-existing conditions..
                        </div>
                    </div>
                    <div className="card my-1" style={{ borderColor: "#2F6870", color: "#2F6870" }}>
                        <div className="card-body queriesList p-2">
                            I have senior citizen parents with pre-existing conditions..
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <label className="queriesList">Want to learn more ?</label><br></br>
                            <span className="cardSubtext">An investment is knowledge pays the best interest</span><br></br>
                            <span className="cardSubtext">-Benjamin Franklin</span>
                            <button className='w-100 addMore p-2' onClick={selectQueries}>Add More to List</button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <h6 className='ListHeading'>I have senior citizen parents with pre-existing conditions.
                        Is there any specific plan for them
                    </h6>
                    <button className='border-0 assistButton px-3 py-1'>134 Assisted</button>
                    <button className='border-0 ms-2 px-3 py-1 viewButton'>1.5k views</button>
                    <button className='border-0 shareButton float-end'>Share</button>
                    <p className='listDetails mt-2'>In a world where banking and financial services & processes can be overwhelming, FinRight is here to simplify things and offer end to end assistance to customers on several matters of personal finance. Founded in Mumbai in October 2023 by a team with experience at leading companies like CRED and Amazon & backed some of the renowned angel investors in the industry we help resolve the complex issues that come with managing personal finances—whether it’s withdrawing your Provident Fund (PF), optimising interest rate on home loan, settling insurance claims & tax planning.
                        <br></br>At FinRight, we understand how confusing financial options and rules can be. That’s why we focus on providing hassle-free, expert assistance. Our goal is simple: to help you navigate your personal finance related decisions and processes effectively, guided by smart technology and experts who are available through chat, audio, or video.
                        <br></br> Over 2,000 people have trusted us to resolve more than 3,500 financial queries. We’re committed to being the go-to platform for anyone in India with questions or issues about their finances, offering clear and personalized solutions to your banking and financial troubles.
                        We don’t sell. We don’t spam.. With FinRight, financial clarity is just a conversation away.

                        For any questions or feedback, feel free to reach out at support@finright.in.
                        In a world where banking and financial services & processes can be overwhelming, FinRight is here to simplify things and offer end to end assistance to customers on several matters of personal finance. Founded in Mumbai in October 2023 by a team with experience at leading companies like CRED and Amazon & backed some of the renowned angel investors in the industry we help resolve the complex issues that come with managing personal finances—whether it’s withdrawing your Provident Fund (PF), optimising interest rate on home loan, settling insurance claims & tax planning.
                        <br></br> At FinRight, we understand how confusing financial options and rules can be. That’s why we focus on providing hassle-free, expert assistance. Our goal is simple: to help you navigate your personal finance related decisions and processes effectively, guided by smart technology and experts who are available through chat, audio, or video.
                        Over 2,000 people have trusted us to resolve more than 3,500 financial queries. We’re committed to being the go-to platform for anyone in India with questions or issues about their finances, offering clear and personalized solutions to your banking and financial troubles.
                        We don’t sell. We don’t spam.. With FinRight, financial clarity is just a conversation away.
                        For any questions or feedback, feel free to reach out at support@finright.in.
                    </p>
                </div>
                <div className='col-lg-3'>
                    <div className='bg-column px-2 rounded'>
                        <label className='imageHeading' style={{ lineHeight: '1'}}>
                            Talk to an expert for <span style={{color: '#BBE6E6'}}>FREE!!</span></label>
                        <p className='imageText mt-1' style={{ lineHeight: '1'}}>Our Experts Assistance provides end-to-end financial issue
                            resolution,where expert take full ownership to ensure a stress free exprience
                        </p>
                        <div className='row d-flex justify-content-center mb-3'>
                            <div className='col-md-6 text-center'>
                                <button className='border-0 setMeetingBtn px-3 py-2'>Set a Meeting</button>
                            </div>
                            <div className='col-md-6 text-center'>
                                <button className='border-0 contactBtn px-2 py-2 mt-2 mt-sm-0'>Contact us now</button>
                            </div>
                        </div>
                    </div>
                    <label className='queries' style={{ color: '#7D7D7D' }}>Relevant Queries</label>
                    <div className="card my-2" style={{ borderColor: "#2F6870", color: "#2F6870" }}>
                        <div className="card-body queriesList p-2">
                            I have senior citizen parents with pre-existing conditions..
                        </div>
                    </div>
                    <div className="card" style={{ borderColor: "#2F6870", color: "#2F6870" }}>
                        <div className="card-body queriesList p-2">
                            I have senior citizen parents with pre-existing conditions..
                        </div>
                    </div>
                    <div className="card my-2" style={{ borderColor: "#2F6870", color: "#2F6870" }}>
                        <div className="card-body queriesList p-2">
                            I have senior citizen parents with pre-existing conditions..
                        </div>
                    </div>
                    <div className="card" style={{ borderColor: "#2F6870", color: "#2F6870" }}>
                        <div className="card-body queriesList p-2">
                            I have senior citizen parents with pre-existing conditions..
                        </div>
                    </div>
                    <div className="card my-2" style={{ borderColor: "#2F6870", color: "#2F6870" }}>
                        <div className="card-body queriesList p-2">
                            I have senior citizen parents with pre-existing conditions..
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnswerPage