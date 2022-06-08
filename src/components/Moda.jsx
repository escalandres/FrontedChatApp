import React from 'react';
import { Button, ButtonToolbar, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
import Dropzone from './Dropzone';

class Moda extends React.Component{
    state = {
        abierto: false,
    }
    abrirModal=()=>{
        this.setState({abierto: !this.state.abierto})
    }
    render(){
        return(
            <>
                <Button variant="primary" onClick={this.abrirModal}>Abrir</Button>
                <Modal isOpen={this.state.abierto}>
                <ModalHeader>
                    Actualice su foto
                </ModalHeader>
                <ModalBody>
                    <Dropzone />
                </ModalBody>
                <ModalFooter>

                </ModalFooter>

                </Modal>
            </>
            
        )
    }
}

export default Moda;