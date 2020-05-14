import React from 'react';
//Style Import 
import MediaMenuStyle from './MediaMenu.module.css';
//Component Import
import MediaPuncts from './MediaPuncts/MediaPuncts.js';

class MediaMenu extends React.Component {
    Mediapuncts = this.props.Info.map(punct => <MediaPuncts key={punct.id} url={punct.url} name={punct.name} image={punct.image} />)
    render() {
        return (
            <div className={MediaMenuStyle.MediaMenu}>
                <div className={MediaMenuStyle.block}>
                    {this.Mediapuncts}
                </div>
            </div>
        );
    }
}

export default MediaMenu;