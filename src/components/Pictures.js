import React from 'react';
import Picture from "./Picture"

const Pictures  = (props) => (
        <div className="picturesItems">
            {props.pictures.map(picture => (<Picture pictureUrlMax={picture.url} key={picture.id} pictureUrlMin={picture.thumbnailUrl} paintBigImage={props.paintBigImage}/>
            ))}
        </div>
    );

export default Pictures