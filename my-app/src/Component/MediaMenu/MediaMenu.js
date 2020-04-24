import React from 'react';
//Style Import 
import MediaMenuStyle from './MediaMenu.module.css';
//Component Import
import MediaPuncts from './MediaPuncts/MediaPuncts.js';

const MediaMenu = (props) => {
    let Mediapuncts = props.Info.map(punct => <MediaPuncts url={punct.url} name={punct.name} image={punct.image} />)
    return (
        <div className={MediaMenuStyle.MediaMenu}>
            <div className={MediaMenuStyle.block}>
                {Mediapuncts}
            </div>
        </div>
    );
}

export default MediaMenu;