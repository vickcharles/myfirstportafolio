import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Proyectos from './components/proyectos';
import Input from './components/input';
class App extends Component {



  render() {

    return (
    <div>
    <body>
  <header>
    <div class="container py-2">
      <h4 class="title"> www.Iamvick.com</h4>
    </div>
  </header>

  <div class="container">
    <div class="row py-5 alto justify-content-center  ">
  <div class="col-lg-6  ">
  <h1 class="my-name"> Vickler Charles Avila</h1>
  <h6> Web Developer</h6>
    </div>
  <Input/>
  </div>
  </div>

    <Proyectos/>



    </body>

</div>
    );
  }
}

export default App;
