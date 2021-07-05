import React from 'react';
import mainStyles from '../styles/main.module.scss';

const Main = () => {
    return (
        <div className={mainStyles.container}>
            <div className={mainStyles.top}>
                <h1 className={mainStyles.header}>
                    Placy Color Preview
                </h1>
            </div>
        </div>
    )
}

export default Main;