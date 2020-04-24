import React from 'react';
import { NavLink } from 'react-router-dom';
//Style Import 
import QuickPunctsStyle from './QuickPuncts.module.css';


const QuickPuncts = (props) => {
    return (
        <NavLink to={'/' + props.url} className={QuickPunctsStyle.puncts} activeClassName={QuickPunctsStyle.active_button}>
            {/* <img src={require(props.image)}></img> */}
            <div className={QuickPunctsStyle.punct}>{props.name}</div>
        </NavLink>
    );
}

export default QuickPuncts;