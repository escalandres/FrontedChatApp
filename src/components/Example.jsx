import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import cellphone from '../assets/bart.jpg';
import '../css/descargar.css';
import ImgSec1 from '../assets/ImgSec1.PNG';
import ImgSec2 from '../assets/ImgSec2.PNG';
import ImgSec3 from '../assets/ImgSec3.PNG';

export default function Example() {
  const popover = (
      <Popover id="popover-basic" className='popo'>
        <Popover.Header as="h3">Popover right</Popover.Header>
        <Popover.Body>
          And here's some <strong>amazing</strong> content. It's very engaging.
          right?
        </Popover.Body>
      </Popover>
  );
  const popover2 = (
    <Popover id="popover-basic" className='popo'>
      <Popover.Header as="h3">Popover 2</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  );
  const popover3 = (
    <Popover id="popover-basic" className='popo'>
      <Popover.Header as="h3">Popover 3</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  );
  return (
    <div>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      {/* <Button variant="success">Click me to see</Button> */}
        <div className="pop">
          <Button variant="" className="popover-btn">
            <img className="popover-img" src={ImgSec1} alt="First slide"/>
          </Button>
        </div>
      </OverlayTrigger>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover2}>
        {/* <Button variant="success">Click me to see</Button> */}
        <div className="pop">
          <Button variant="" className="popover-btn">
            <img className="popover-img" src={ImgSec2} alt="First slide"/>
          </Button>
        </div>
    </OverlayTrigger>
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover3}>
      {/* <Button variant="success">Click me to see</Button> */}
      <div className="pop">
        <Button variant="" className="popover-btn">
          <img className="popover-img" src={ImgSec3} alt="First slide"/>
        </Button>
      </div>
    </OverlayTrigger>
    </div>
    
  );
}