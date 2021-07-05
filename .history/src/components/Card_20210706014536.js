import React from 'react';
import cardStyles from '../styles/main.module.scss';
import data from '../data/data.json'

const Main = (props) => {
    return (
        <div className={cardStyles.container}>
            <div className={cardStyles.top}>
                <h1 className={cardStyles.header}>
                    Placy Color Preview
                </h1>
                {
                    data.map((place)=>
                        <Card key={place.id} place={place}/>
                    )
                }
            </div>
        </div>
    )
}

export default Main;