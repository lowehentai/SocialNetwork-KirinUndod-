import React from 'react';
//NavLink Import
import { NavLink } from 'react-router-dom';
//Style Import 
import MediaPunctsStyle from './MediaPuncts.module.css';


const MediaPuncts = (props) => {
    return (
        <NavLink to={'/' + props.url} className={MediaPunctsStyle.puncts} activeClassName={MediaPunctsStyle.active_button}>
            {/* <img src={require(props.image)}></img> */}
            <div className={MediaPunctsStyle.punct}>{props.name}</div>
        </NavLink>
    );
}

export default MediaPuncts;