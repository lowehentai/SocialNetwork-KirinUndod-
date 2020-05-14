import React from 'react';
//NavLink Import
import { NavLink } from 'react-router-dom';
//Style Import 
import MediaPunctsStyle from './MediaPuncts.module.css';

class MediaPuncts extends React.Component {
    render() {
        return (
            <NavLink to={'/' + this.props.url} className={MediaPunctsStyle.puncts} activeClassName={MediaPunctsStyle.active_button}>
                {/* <img src={require(props.image)}></img> */}
                <div className={MediaPunctsStyle.punct}>{this.props.name}</div>
            </NavLink>
        );
    }
}

export default MediaPuncts;