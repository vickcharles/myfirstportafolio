import React, { Component } from 'react';

class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      result: ""

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEnviarClick = this.handleEnviarClick.bind(this);

  }

  handleChange(event) {
    if(event.target.id === "saludo"){
    this.setState({
      value: event.target.value
      }); }
  }

  handleEnviarClick(event) {
    if(this.state.value === ""){
this.setState({
result:""

  })
    } else{
this.setState({

value: "",
result: "Bienvenido " + this.state.value

  })

  }}





render(){
return(
<div class="col-lg-6 text-center align-self-center ">


<label class="text-fud" for="exampleInputEmail1"> Please type your name </label>
    <input type="text" value={this.state.value} class="form-control name-field"  onChange={this.handleEnviarClick} id="saludo" onChange={this.handleChange} placeholder="name"/>
    <button id="enviar" onClick={this.handleEnviarClick}> Enviar </button>

    <h1 className="title"> {this.state.result} <span>&#160;</span> </h1>


</div>


)

}


}
export default Input;
