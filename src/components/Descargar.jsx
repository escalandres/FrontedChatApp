import React, {useState} from 'react';
import { Carousel, ProgressBar, Button, DropdownButton, Dropdown, Alert, ToastContainer, Toast, Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
import $ from 'jquery';
import Navbar from './Navbar';
import Example from './Example';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Purec from './Purec';
import Dropzone from './Dropzone';
import axios from 'axios';

import 'bulma/css/bulma.min.css'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/home.css';
import '../css/descargar.css';

import ImgSec1 from '../assets/ImgSec1.PNG';
import ImgSec2 from '../assets/ImgSec2.PNG';
import ImgSec3 from '../assets/ImgSec3.PNG';
import chat from '../assets/chitchat.png';
import laptop from '../assets/laptop.PNG';
import Moda from './Moda';

let abierto = false;
function settings(){
    return <Moda />
}


$(document).ready(function(){
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});

function Toastt(){
    const toa = document.getElementById('toast-container');
    toa.classList.remove('hidden');
    setTimeout(() => {  toa.classList.add('hidden'); }, 3000);
}

function Alertt(){
    const ale = document.getElementById('alert-container');
    ale.classList.remove('hidden');
    setTimeout(() => {  ale.classList.add('hidden'); }, 3000);
}

// const Descargar = () => {
class Descargar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = e => {
            this.setState({ target: e.target, show: !this.state.show });
          };
      
          this.state = {
            show: false,
            progress: 0,
            abierto: false,
          };
        
    }
    abrirModal=()=>{
        this.setState((state, props) => ({
            abierto: !this.state.abierto
        }));
    }
    
    render() {
        return (
            <div>
                <Navbar />
                <section id="section4" className="section-area section-white">
                    <Carousel>
                        <Carousel.Item>
                            <img className="carousel-img" src={ImgSec1} alt="First slide"/>
                            {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-img" src={ImgSec2} alt="Second slide"/>
                            {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel-img" src={ImgSec3} alt="Third slide" />
                        </Carousel.Item>
                        
                    </Carousel>
                </section>
                
                <section id="popover-section" className="section-area section-grey">
                    <div className='popover-container'>
                        <Example />
                    </div>
                    
                </section>
                <section id="section2" className="section-area section-white">
                    <div className='laptop__container'>
                        <img src={laptop} alt="laptop"/>
                    </div>
                    <div className="zoom-container">
                            <h2 className="h2-descargar">Descarga Chat App</h2>
                        <img src={chat} className="zoom" alt="zoom"/>
                    </div>
                    
                </section>
                <section id="section3" className="section-area section-grey">
                    <br></br>
                    <Button id="float-btn" variant="primary" style={{position: 'fixed', top: '80%', right: 10}}>
                        <a className="a-btn" href="login"><FontAwesomeIcon className="fa-solid chat-btn__icon" icon="fa-comment-dots" /></a>
                    </Button>
                    
                    <div className='sect3'>
                        <Purec/>
                        <div className="dropdown__menu">
                            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                                <Dropdown.Item href="#" onClick={Alertt}>Alert action</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={Toastt}>Toast action</Dropdown.Item>
                            </DropdownButton>
                            <br></br>                
                            <ToastContainer id="toast-container" className="hidden">
                                <Toast>
                                    <Toast.Header>
                                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                    <strong className="me-auto">Bootstrap</strong>
                                    <small className="text-muted">just now</small>
                                    </Toast.Header>
                                    <Toast.Body>Llene el captcha</Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <Alert key='warning' variant="warning" id="alert-container" className="hidden">
                                Debe llenar el captcha
                            </Alert>
                        </div>
                    </div>
                    
                </section>
                
                <section id="section4" className="section-area section-white">
                <Dropzone />
                {/* <Button variant="primary" onClick={this.abrirModal}>Abrir</Button>

                    <Modal isOpen={this.state.abierto}>
                        <ModalHeader>
                            Actualice su foto
                        </ModalHeader>
                        <ModalBody>
                            <input type="file"/>
                        </ModalBody>
                        <ModalFooter>

                        </ModalFooter>

                    </Modal> */}
                </section>

            </div>    
        )
    }
} 

export default Descargar