import React, {Component} from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import '../style.css'
import PortfolioItem from './portfoliocomps/portitem.component.js'
import Project from './portfoliocomps/projs.component.js'

var activeH = "nav"
var activeS = "nav"
var activeA = "active"


export default class Portfolios extends Component {



  constructor(props) {
  super(props);
  this.state = {isToggleH: false,
                isToggleS: false,
                isToggleA: true,
                project: 'null',
                desc: ''
              };
  this.handleClickH = this.handleClickH.bind(this);
  this.handleClickS = this.handleClickS.bind(this);
  this.handleClickA = this.handleClickA.bind(this);

  }


  handleClickH() {
    this.setState({
      isToggleH: true,
      isToggleS: false,
      isToggleA: false
    });
    activeH = "active";
    activeS = "nav";
    activeA = "nav";
  }

  handleClickS() {
    this.setState({
      isToggleH: false,
      isToggleS: true,
      isToggleA: false
    })
    activeS = "active";
    activeH = "nav";
    activeA = "nav";
  }

  handleClickA() {
    this.setState({
      isToggleH: false,
      isToggleS: false,
      isToggleA: true
    })
    activeS = "nav";
    activeH = "nav";
    activeA = "active";
  }



  render(){

  var currProj = this.state.project;
  var desc = this.state.desc;
  return (
    <div>
      <section className="site-section bg-green" id="section-portfolio">
      <div className="container">
        <div className="row">
          <div className="section-heading text-center col-md-12">
            <h2 className="mx-auto text-light">Some Projects</h2>
          </div>
        </div>
        <div className="filters">
          <ul>
            <li className={activeA}  onClick = {this.handleClickA}>All</li>
            <li className = {activeH}  onClick = {this.handleClickH}>Hardware</li>
            <li className = {activeS} onClick = {this.handleClickS}>Software</li>
          </ul>
        </div>

        </div>
        <div className = "row" style = {{marginLeft: '25%'}}>
        <div className = "col">
          {(this.state.isToggleH || this.state.isToggleA) &&
            <div>
            <div className= "button" onClick = {() => this.setState({project : "Embedded Systems", desc: "C and Microcontroller"})} style = {{cursor:'pointer'}}>
             <PortfolioItem title="Embedded Project"/>
             </div>

             <div className= "button" onClick = {() => this.setState({project : "Brainwave Detection", desc: "Analog board design"})} style = {{cursor:'pointer'}}>
             <PortfolioItem title="Brainwave Detection "/>
             </div>
             <div className= "button" onClick = {() => this.setState({project : "Hardware Acceleration", desc: "FPGA with ARM Processor"})} style = {{cursor:'pointer'}}>
             <PortfolioItem title="Hardware Acceleration"/>
             </div>

             </div>
             }
          </div>
          <div className = "col">

          {(this.state.isToggleS || this.state.isToggleA) &&
            <div>
               <div className= "button" onClick = {() => this.setState({project : "NBA Data Analysis", desc: 'Python data analysis'})} style = {{cursor:'pointer'}}>
                <PortfolioItem title="NBA Data Analysis" >
                </PortfolioItem>
                </div>
                <div className= "button" onClick = {() => this.setState({project : "Machine Learning Object Detection", desc:"Neural Nets in Python"})} style = {{cursor:'pointer'}}>
                <PortfolioItem title="ML for Object Detection"/>
                </div>

              </div>
                }
             </div>

             </div>

      </section>
      <section className = "site-section bg-green rounded">
        <Project project= {currProj} desc={desc}> </Project>
      </section>
      </div>
    );
    }
    }
