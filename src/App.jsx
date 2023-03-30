import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import Header from './components/Header/Header';
import Main from './components/Main.jsx/Main';
import SideBar from './components/SideBar/SideBar';

const App = () => {
  const [bTitle, setBTitle] = useState([])
  const handleBlogTitle = (title) => {
    setBTitle([...bTitle, title]);
  }
  console.log(bTitle);

  return (
    <div className='container'>
      <Header></Header>
      <div className="body-container row mt-5">
        <div className="col-md-8">
          <Main handleBlogTitle={handleBlogTitle}></Main>
        </div>
        <div className="col-md-4">
          <SideBar className="position-sticky sticky-top" blogTitle={bTitle}></SideBar>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default App;