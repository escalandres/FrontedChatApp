import React, {useState} from "react";
// Import the useDropzone hooks from react-dropzone
import { useDropzone } from "react-dropzone";
import '../css/descargar.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/fontawesome-free-solid';
import { Alert} from 'react-bootstrap';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function Alert1(){
    const ale = document.getElementById('fileSelected');
    ale.classList.remove('hidden');
    setTimeout(() => {  ale.classList.add('hidden'); }, 3000);
}

function Alert2(){
    const ale = document.getElementById('fileUpload');
    ale.classList.remove('hidden');
    setTimeout(() => {  ale.classList.add('hidden'); }, 3000);
}

function Alert3(){
    const ale = document.getElementById('fileError');
    ale.classList.remove('hidden');
    setTimeout(() => {  ale.classList.add('hidden'); }, 3000);
}

function UploadFile(){
    Alert1();
    var bodyFormData = new FormData();
    const input = document.getElementById('input-file-upload');
    if(input.files && input.files[0]){
        bodyFormData.append('file', input.files[0]);
        console.log("File Seleccionado : ", input.files[0]);
    }
    // bodyFormData.append('id', cookies.get('userId'));
    
    axios.post("http://localhost:5000/upload", bodyFormData, {
        headers: {
        "Content-Type": "multipart/form-data",
        },
    })
    .then((res) => {
        console.log(res);
        setTimeout(() => {  Alert2();}, 5000);
    })
    .catch((err) => {
        console.log(err);
        setTimeout(() => {  Alert3();}, 5000);
        
    });
}

function Dropzone(){
    // drag state
  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);
  
  // handle drag events
  const handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  // triggers when file is dropped
  const handleDrop = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
      console.log("drop");
      setTimeout(() => {  UploadFile(); }, 3000);

    }
  };
  
  // triggers when file is selected with click
  const handleChange = function(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
      setTimeout(() => {  UploadFile(); }, 3000);
    }
  };
  
// triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
    setTimeout(() => {  UploadFile(); }, 3000);
  };
  
  return (
    <div>
        <h2>Cambie su photo de perfil</h2>
        <Alert key='warning' variant="warning" id="fileSelected" className="hidden">
            Archivo seleccionado!
        </Alert>
        <Alert key='success' variant="success" id="fileUpload" className="hidden">
            Archivo subido Exitosamente!
        </Alert>
        <Alert key='danger' variant="danger" id="fileError" className="hidden">
            Error al subir el archivo!
        </Alert>

        <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
        <input ref={inputRef} type="file" id="input-file-upload" accept=".jpeg,.png" multiple={false} onChange={handleChange} />
        <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
            <div>
            <FontAwesomeIcon icon={faImage} className="dropzone-icon" />
            <p>Drag and drop your file here or</p>
            <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
            </div> 
        </label>
        { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
        </form>
    </div>
    
  );
}

export default Dropzone;