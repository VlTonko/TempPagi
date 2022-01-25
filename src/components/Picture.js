import React from 'react';

const Picture = ({paintBigImage, pictureUrlMax, pictureUrlMin}) => {
    const handleBigImage = () => paintBigImage(pictureUrlMax)

    return (
        <div className="picture">
            <img src={pictureUrlMin} onClick={handleBigImage}/>
        </div>
    );
}

export default Picture