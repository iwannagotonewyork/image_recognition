import React from 'react';
import Tilt from 'react-tilt';
import brain from "./brain.png";
import  './Logo.css';

function Logo() {
    return (  
        <div  className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"><img style={{paddingTop: '7px', paddingLeft: '7px'}}src={brain} alt="brain.jpg" /> </div>
            </Tilt>
        </div>  
        
    )
}

export default Logo;
