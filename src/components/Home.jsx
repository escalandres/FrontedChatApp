import React from 'react';
import 'bulma/css/bulma.min.css'
import '../css/home.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './Navbar';

import robot from '../assets/robot.png';
import chat from '../assets/chat.png';
import chatUser from '../assets/chatUser.png';
import ImgSec1 from '../assets/ImgSec1.PNG';
import ImgSec2 from '../assets/ImgSec2.PNG';
import ImgSec3 from '../assets/ImgSec3.PNG';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faDownload } from '@fortawesome/fontawesome-free-solid';


const Home = () => {
    return (
        <div className="all">
            <Navbar />
            <section id='homepage'>
                <div className="home__container">
                    <div className="image__left__container">
                        <img className="image__left animation" src={chatUser} alt="Chat Users"/>
                    </div>
                    <div className="home__container__message">
                        <h1 className="home__main-message">
                            Crea un lugar...
                        </h1>
                        <div className="home__message__div">
                            <p className="home__message">
                                ... en el que puedas formar clubes escolares, grupos de juegos
                                o una comunidad mundial. En el que puedas pasar tiempo con tus amigos. 
                                Un lugar que haga que hablar a diario y divertirte sea más fácil.
                            </p>
                        </div>
                        <div className="home__message__btn">
                            <a href="#" className="btn__download home__btn"><FontAwesomeIcon icon={faDownload} className="icons" />Descargar para Windows</a>
                            <a id="browser" href="#" className="btn__browser home__btn">Abrir Chat en tu navegador</a>
                        </div>
                    </div>
                    <div className="image__right__container">
                        <div className="image__right__div">
                            <img id="messageIcon" className="image__right  animation" src={chat} alt="Chat Image"/>
                        </div>
                        <div className="image__right__div robot-hide">
                            <img className="image__right" src={robot} alt="Robot"/>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section1" className="section-area section-white">
                <div className="section__left-container" >
                    <div className="section__img__container">
                        <img className="section__img" src={ImgSec1} alt="Imagen 1"/>
                    </div>
                </div>
                <div className="section__right-container" >
                    <div className="section__text__container">
                        <h1 className="section__h1">Crea un lugar especial con tus amigos</h1>
                        <p className="section__p">
                            Chat App es un lugar donde se pueden organizan canales ordenados por temas, 
                            en los que puedes colaborar, compartir o simplemente hablar de tu día sin 
                            monopolizar un chat de grupo.
                        </p>
                    </div>
                </div>
            </section>
            <section id="section2" className="section-area section-grey">
                <div id="section2__left-container" className="section__left-container" >
                    <div className="section__text__container left">
                        <h1 className="section__h1">Donde es fácil pasar el rato</h1>
                        <p className="section__p">
                            Entra en un canal de informativo cuando estés libre. Tambien puedes hablar con
                            tus amigos gracias a los mensajes directos. 
                        </p>
                    </div>
                </div>
                <div id="section2__right-container" className="section__right-container" >
                    <div className="section__img__container">
                        <img className="section__img  img__right" src={ImgSec2} alt="Imagen 2"/>
                    </div>
                </div>
            </section>
            <section id="section3" className="section-area section-white">
                <div className="section__left-container" >
                    <div className="section__img__container">
                        <img className="section__img" src={ImgSec3} alt="Imagen 3"/>
                    </div>
                </div>
                <div className="section__right-container" >
                    <div className="section__text__container">
                        <h1 className="section__h1">De unos pocos fans a un montón</h1>
                        <p className="section__p">
                            Establece cualquier comunidad con las herramientas de moderación y el acceso 
                            personalizado de miembros. Concédeles poderes especiales, crea canales privados 
                            y mucho más.
                        </p>
                    </div>
                </div>
            </section>
            <footer>
                <div className="footer__container">
                    <div className="footer__left-container">
                        
                        <h2 className="footer__h2">CREA TU LUGAR</h2>
                        <h3 className="footer__h3">Siguenos en:</h3>
                        <div className="icons__container">
                            <FontAwesomeIcon icon={faFacebook} className="fa-brands social-icons" />
                            <FontAwesomeIcon icon={faTwitter} className="fa-brands social-icons"/>
                            <FontAwesomeIcon icon={faInstagram} className="fa-brands social-icons"/>
                            <FontAwesomeIcon icon={faYoutube} className="fa-brands social-icons"/>
                        </div>
                    </div>
                    <div className="footer__right-container">
                        <div className="footer__info product">
                            <span className="footer__span">Producto</span>
                            <a href="" className="footer__a">Chat App</a>
                            <a href="" className="footer__a">Canales</a>
                            <a href="" className="footer__a">Mensajes directos</a>
                        </div>
                        <div className="footer__info company">
                            <span className="footer__span">Compañía</span>
                            <a href="" className="footer__a">Sobre nosotros</a>
                            <a href="" className="footer__a">Trabajos</a>
                            <a href="" className="footer__a">Marca</a>
                            <a href="" className="footer__a">Noticias</a>
                        </div>
                        <div className="footer__info resources">
                            <span className="footer__span">Recursos</span>
                            <a href="" className="footer__a">Soporte tecnico</a>
                            <a href="" className="footer__a">Seguridad</a>
                            <a href="" className="footer__a">Blog</a>
                            <a href="" className="footer__a">Opiniones</a>
                            <a href="" className="footer__a">Licencias</a>
                        </div>
                        <div className="footer__info politics">
                            <span className="footer__span">Politicas</span>
                            <a href="" className="footer__a">Condiciones</a>
                            <a href="" className="footer__a">Privacidad</a>
                            <a href="" className="footer__a">Ajuste de cookies</a>
                            <a href="" className="footer__a">Directivas</a>
                            <a href="" className="footer__a">Licencias</a>
                        </div>
                    </div>
                </div>
            </footer>
    </div>
    );
}

export default Home