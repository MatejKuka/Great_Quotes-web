import React from 'react';
import "../../styles/Card.css"

const Card = (props) => {
        return (
            <div className="cardClass">{props.children}</div>
        )
}

export default Card;