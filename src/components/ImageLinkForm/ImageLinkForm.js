import React from 'react';
import './ImageLinkForm.css';

function ImageLinkForm() {
    return (
       <div>
            <p className="center f3">
               {'This Magic Brain will detect faces in your picture, Try it !'}
            </p>
            <div className="form_bg center pa4 w-50 shadow-5">
                <input type="text" className="f4 pa2 ma1 w-70"/>
                <button className="f4 grow ma1 pa2 w-30 bg-light-purple link shadow-5">Detect</button>
            </div>
       </div>
    )
}

export default ImageLinkForm;

