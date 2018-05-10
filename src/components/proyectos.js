import React, { Component } from 'react';


const img = ["https://s.w.org/style/images/about/WordPress-logotype-wmark.png",
 "http://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg",
  "http://minutodedios.fm/wp-content/uploads/2017/05/perro-gato.jpg"];
  const styles = {
    dot: {
      backgroundColor: 'red'
    },
    dotf: {
      backgroundColor: 'red'
    },


    center: {
      textAlign: 'center'
    },
    rightNav: {
    },
    verticalLine: {
    },
    Proyectos: {
      backgroundColor: 'yellow'
    },
  };

class Proyectos extends Component {

constructor(){

super();

this.state = {

  img, styles:styles
}
}

wordpress = () => {

const styles = {
  dot: {
    backgroundColor: 'white'
  },
  center: {
    textAlign: 'center'
  },
  rightNav: {
  },
  verticalLine: {
  },
  Proyectos: {
    backgroundColor: 'red'
  },
};

  this.setState({

  img,
   styles: styles,

    })
}

normal = (e) => {
  e.preventDefault();
  const img = ["https://png.icons8.com/color/1600/css3.png", "", ""];
  const styles = {
    dot: {
      backgroundColor: 'green'
    },
    dotf: {
      backgroundColor: 'red'
    },
    center: {
      textAlign: 'center'
    },
    rightNav: {
    },
    verticalLine: {
    },
    Proyectos: {
      backgroundColor: 'red'
    },
  };
  e.preventDefault();
  this.setState({

  img,
   styles:styles,

    })

}

render() {

return(

<div>

<div class="container-fluid salmon py-5 ">
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1">Previous</a>
      </li>

      <li class="page-item">
        <a class="page-link" onClick={this.normal} href="#" >Next</a>
      </li>
    </ul>
  </nav>

  <div class="container">
    <div class="row justify-content-center salmon align-items-end ">
      <div class="col-lg-3 col-sm-4 col-md-4 ">
<div class="card">
  <a class="lighbox" href="#">

    <img src={this.state.img[0]} alt="Park" class="card-img-top"/>
  </a>

</div>

</div>
      <div class="col-lg-3 col-sm-4 col-md-4 ">
        <div class="card">
          <a class="lighbox" href="img/perro.jpg" data-lightbox="roadtrip">

            <img src={this.state.img[0]} alt="Park" data-lightbox="galeria" class="card-img-top"/>
          </a>

        </div>
      </div>
      <div class="col-lg-3 col-sm-4 col-md-4 ">
        <div class="card">
          <a class="lighbox" href="#">

            <img src={this.state.img[0]} alt="Park" class="card-img-top"/>
          </a>

        </div>
      </div>

    </div>
  </div>


</div>
  </div>

  )
}



}
export default Proyectos;
