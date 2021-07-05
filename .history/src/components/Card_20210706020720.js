import React from 'react';
import cardStyles from '../styles/card.module.css';

const Card = (props) => {
    return (
        <div className={cardStyles.container}>
            <div className={cardStyles.top}>
                <h2 className={cardStyles.header}>
                    {props.place_id}
                </h2>
            </div>
        </div>
    )
}

export default Card;