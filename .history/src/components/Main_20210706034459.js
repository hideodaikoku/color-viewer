import React, { useState } from 'react';
import Card from './Card';
import mainStyles from '../styles/main.module.css';
import data from '../data/data.json'

const Main = () => {

    const [interval, setPageInterval] = useState(10);
    const pages = [10, 20, 30, 40, 50, 60, 70, 80, 85]

    return (
        <div className={mainStyles.container}>
            <div className={mainStyles.top}>
                <h1 className={mainStyles.header}>
                    Placy Color Preview
                </h1>
                <ul>
                    {pages.map((page) =>
                        <li style={{ textDecoration: "underline", cursor:"pointer", listStyleType: "None"}} key={page} onClick={() => setPageInterval(page)}>{page}</li>
                    )}
                </ul>
                {
                    data.slice(0, 10).map((place) =>
                        <Card key={place.id} place={place} />
                    )
                }
            </div>
        </div>
    )
}

export default Main;