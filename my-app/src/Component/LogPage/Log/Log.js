import React from 'react';
//NavLink Import
import { NavLink } from 'react-router-dom';
//Style Import
import LogStyle from './Log.module.css';

const Log = () => {
    return (
        <div className={LogStyle.Log}>
            <div className={LogStyle.block}>
            <button className={LogStyle.button}>
                    <NavLink to='/lok/main' className={LogStyle.SingInLink}>
                        LogSkip
                    </NavLink>
                </button>
                <button className={LogStyle.button}>
                    <NavLink to='/sing/#log&singIn' className={LogStyle.SingInLink}>
                        Login
                    </NavLink>
                </button>
                <button className={LogStyle.button}>
                    <NavLink to='/create/#log&create' className={LogStyle.SingInLink}>
                        Create Account
                    </NavLink>
                </button>
            </div>
            <div className={LogStyle.RenderLogPage}>
            </div>
        </div>
    );
}

export default Log;