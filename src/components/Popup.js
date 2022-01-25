import React from 'react';
import './Popup.css';

const Popup = ({closeBigImage, urlBigPicture}) => (
        <div onClick={closeBigImage} className="visible">
            <img src={urlBigPicture} className="bigPicture"/>
        </div>
    );

export default Popup