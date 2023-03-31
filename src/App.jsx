import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import Main from './components/Main.jsx/Main';
import SideBar from './components/SideBar/SideBar';
import Question from './components/Question/Question';

const App = () => {
  const [bTitle, setBTitle] = useState([])
  const handleBlogTitle = (title) => {
    const isMatchFound = bTitle.filter((bTitle) => bTitle === title).length > 0;
    if (isMatchFound) {
      toast('Already Bookmarked')
    } else {
      setBTitle([...bTitle, title]);
    }
  }
  const [totalTime, setTotalTime] = useState(0);
  const handleReadTime = (readtime) => {
    setTotalTime(totalTime + readtime);
  }

  return (
    <div className='container'>
      <Header></Header>
      <hr />
      <div className="body-container row mt-5">
        <div className="col-md-8">
          <Main handleBlogTitle={handleBlogTitle} handleReadTime={handleReadTime}></Main>
        </div>
        <div className="col-md-4">
          <SideBar totalTime={totalTime} blogTitle={bTitle}></SideBar>
          <ToastContainer />
        </div>
      </div>
      <Question></Question>
    </div>
  );
};

export default App;