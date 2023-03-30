import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Main from './components/Main.jsx/Main';
import SideBar from './components/SideBar/SideBar';

const App = () => {

  return (
    <div className='container'>
      <Header></Header>
      <div className="body-container row mt-5">
        <div className="col-md-9">
          <Main></Main>
        </div>
        <div className="col-md-3">
          <SideBar></SideBar>
        </div>
      </div>
    </div>
  );
};

export default App;