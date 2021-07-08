import React from 'react';
import cardStyles from '../styles/card.module.css';

const Card = (props) => {

    return (
        <div className={cardStyles.container}>
            <h2 className={cardStyles.header}>
                Name: {props.place.name}
            </h2>
            <small> Place ID: {props.place.place_id}</small>
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
            <h2 className={cardStyles.header}>
                Google Images Palette
            </h2>
            <div className={cardStyles.paletteContainer}>
                {props.place.google_images_palette.map((color, index) =>
                    <div key={index}
                        style={{ backgroundColor: color }}
                        className={cardStyles.colorSquare}>
                    </div>
                )}
            </div>

            <h2 className={cardStyles.header}>
                Album Artwork Palette
            </h2>
            <img src={props.place.album_art}
                alt={props.place.title}
                className={cardStyles.image} />
            <br/>
            <a 
                href={"http://open.spotify.com/track/"+props.place.spotify_music_id} 
                target="_blank" 
                rel="noopener noreferrer"
                className={cardStyles.songlink}
            >
                    {props.place.title}{" - "}{props.place.song_by}
            </a>
            <div className={cardStyles.paletteContainer}>
                {props.place.album_artwork_palette.map((color, index) =>
                    <div key={index}
                        style={{ backgroundColor: color }}
                        className={cardStyles.colorSquare}>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Card;

// https://open.spotify.com/track/3TU8zJ81VLDQF6tz2Jkvyd?si=e3fa6719cb784cfa