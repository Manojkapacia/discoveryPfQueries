import './App.css';
import Header from './component/common/header';
import PersonalisingLoder from './component/loader/personalising-loader';
// import LoaderSuccess from './component/loader/loader-success';
// import NormalState from './component/queries/normal-state';
// import AnswerPage from './component/queries/answer-page';

function App() {
  return (
    
    <div className="App">
      <Header></Header>
      <PersonalisingLoder></PersonalisingLoder>
      {/* <LoaderSuccess></LoaderSuccess> */}
      {/* <NormalState></NormalState> */}
      {/* <AnswerPage></AnswerPage> */}
    </div>
  );
}

export default App;
