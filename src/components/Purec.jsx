import React from 'react';
import axios from 'axios'
import fileDownload from 'js-file-download'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/fontawesome-free-solid';
import { ProgressBar, Button} from 'react-bootstrap';

import 'purecss/build/pure.css';
import '../css/descargar.css';

function Show(){
    const progressbar = document.getElementById('progressbar');
    progressbar.classList.remove('hidden');
}

function Hide(){
    const progressbar = document.getElementById('progressbar');
    setTimeout(() => { progressbar.classList.add('hidden'); }, 3000);
}

function Download(){
    const url = 'http://localhost:5000/icon';
    const filename = 'Tour.png';
    axios.get(url, {
        responseType: 'blob',
    })
    .then((res) => {
        fileDownload(res.data, filename)
    })
}

class Purec extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = e => {
            this.setState({ target: e.target, show: !this.state.show });
        };
      
        this.state = {
            show: false,
            progress: 0,
        };
        
    }
    progressInstance = () =>{
        Show();
        this.setState((state, props) => ({
            progress: 0
        }));
        for(let i=0;i<=100;i+=0.1){
            // this.setState({now: i});
            this.setState((state, props) => ({
                progress: i
            }));
        }
        Download();
        Hide();
    };

    render(){
        return(
            <div className='pure__container'>
                <div className="home__message__btn">
                    {/* <button id="btn__download" className="pure-button"  onClick={handleClick}><FontAwesomeIcon icon={faDownload} className="icons"/>Descargar para Windows</button> */}
                    {/* <button id="btn__download" className="pure-button"  onClick={() => {Download(); this.progressInstance;}}><FontAwesomeIcon icon={faDownload} className="icons"/>Descargar para Windows</button> */}
                    <button id="btn__download" className="pure-button"  onClick={this.progressInstance}><FontAwesomeIcon icon={faDownload} className="icons"/>Descargar para Windows</button>

                </div>
                <div className="progressbar__container">
                    <ProgressBar id="progressbar" className='hidden' animated now={this.state.progress} label={`${this.state.progress}%`}  visuallyHidden/>
                </div>
                <table class="pure-table">
                    <thead>
                        <tr>
                            <th>Chat App</th>
                            <th>Other Chats Apps</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="pure-table-odd">
                            <td>Prioriza la privacidad de los usuarios</td>
                            <td>Tienen acceso a tus datos personales</td>
                        </tr>
                        <tr>
                            <td>Mas simple y ligero</td>
                            <td>Son pesadas</td>
                        </tr>
                        <tr class="pure-table-odd">
                            <td>Mejor conexion con tus amigos</td>
                            <td>Aleja a tus amigos</td>
                        </tr>
                        <tr>
                            <td>Sin publicidad ni bots</td>
                            <td>Tienen bots</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        );
    }
}

export default Purec;