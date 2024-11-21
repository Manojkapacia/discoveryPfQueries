import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './component/common/header';
import PersonalisingLoder from './component/loader/personalising-loader';
// import LoaderSuccess from './component/loader/loader-success';
import NormalState from './component/queries/normal-state';
import AnswerPage from './component/queries/answer-page';

function App() {
  return (

    <div className="App">
      <Router>
        <Header></Header>
        <div className='main-content mt-4'>
          <Routes>
            <Route path="/" element={<PersonalisingLoder />} />
            <Route path="/add-list" element={<NormalState />} />
            <Route path="/select-answer" element={<AnswerPage />} />
            <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
