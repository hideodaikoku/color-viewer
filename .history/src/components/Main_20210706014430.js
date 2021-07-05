import React from 'react';
import Card from './Card';
import mainStyles from '../styles/main.module.scss';
import data from '../data/data.json'

const Main = () => {
    return (
        <div className={mainStyles.container}>
            <div className={mainStyles.top}>
                <h1 className={mainStyles.header}>
                    Placy Color Preview
                </h1>
                {
                    data.map((place, index)=>
                        <Card key={index} place={place}/>
                    )
                }
            </div>
        </div>
    )
}

export default Main;