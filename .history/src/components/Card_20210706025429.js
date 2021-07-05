import React from 'react';
import cardStyles from '../styles/card.module.css';

const Card = (props) => {

    return (
        <div className={cardStyles.container}>
            <div className={cardStyles.top}>
                <h2 className={cardStyles.header}>
                    Place ID: {props.place.place_id}
                </h2>
                <div className={cardStyles.imageContainer}>
                    {
                        props.place.images.map((image, index) =>
                            <img src={image}
                                alt={index}
                                key={index}
                                className={cardStyles.image} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Card;