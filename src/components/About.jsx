import React from  'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './Navbar';
import '../css/descargar.css';

import react1 from '../assets/react-galaxia.png';
import react2 from '../assets/reactluminoso.png';
class About extends React.Component{
    
    render() {
        return (
            <div className="about__container section-white">
                <Navbar />
                <div className="accordion__container">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Noticia #1</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Noticia #2</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="video__container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/lWQ69WX7-hA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="cards__container">
                    <Card style={{ width: '18rem' }} className="cards">
                        <Card.Img id="card-img1" variant="top" src={react1} />
                        <Card.Body>
                            <Card.Title>Ventajas</Card.Title>
                            <Card.Text>
                            React provee de una metodologia y unos lineamientos para el desarrollo
                            de proyectos web a gran escala.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="cards">
                        <Card.Img id="card-img2" variant="top" src={react2} />
                        <Card.Body>
                            <Card.Title>Inteligencia</Card.Title>
                            <Card.Text>
                            React es la manera inteligente de crear el Frontend de una pagina web.
                            Es la mejor herramienta para desarrolladores.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
                <Button id="float-btn" variant="primary" style={{position: 'fixed', top: '80%', right: 10}}>
                    <a className="a-btn" href="login"><FontAwesomeIcon className="fa-solid chat-btn__icon" icon="fa-comment-dots" /></a>
                </Button> 
            </div>
            
        );
    }
}
export default About;