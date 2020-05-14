import React from 'react';
import { NavLink } from 'react-router-dom';
//Style Import 
import QuickPunctsStyle from './QuickPuncts.module.css';

class QuickPuncts extends React.Component {
    render() {
        return (
            <NavLink to={'/' + this.props.url} className={QuickPunctsStyle.puncts} activeClassName={QuickPunctsStyle.active_button}>
                {/* <img src={require(props.image)}></img> */}
                <div className={QuickPunctsStyle.punct}>{this.props.name}</div>
            </NavLink>
        );
    }
}

export default QuickPuncts;