import React from 'react';
import "./ClickyImage.css";

const ClickyImage = (props) => {
    return (
            <img width={128}
                 height={128}
                src={props.src}
                onClick={() => props.imageClick(props.id)}
            />
    )
};

export default ClickyImage;