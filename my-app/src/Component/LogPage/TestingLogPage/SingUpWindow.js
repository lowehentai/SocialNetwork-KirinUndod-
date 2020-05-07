import React from 'react';
import { NavLink } from 'react-router-dom';
import LogPageStyle from './LogPage.module.css';

const SingUpWindow = (props) => {
    let arrowLink = React.createRef(),
        BlockPuncts = React.createRef(),
        countClick = 0;
    let SelectClick = () => {
        if (countClick == 0) {
            arrowLink.current.classList.add(LogPageStyle.active);
            BlockPuncts.current.classList.add(LogPageStyle.activeBlock);
            countClick = 1;
        } else {
            arrowLink.current.classList.remove(LogPageStyle.active);
            BlockPuncts.current.classList.remove(LogPageStyle.activeBlock);
            countClick = 0;
        }
    }

    return (
        <div className={LogPageStyle.block}>
            <div className={LogPageStyle.SelectLog}>
                <div onClick={SelectClick} className={LogPageStyle.SelectLog_wrapper}>
                    <div className={LogPageStyle.Selected}>
                        Sing Up
                    </div>
                    <button ref={arrowLink} className={LogPageStyle.SelectButton}>
                        <img className={LogPageStyle.ArrowLeft} src={require('../../All_Icons/ArrowsLeft.png')} />
                    </button>
                    <div ref={BlockPuncts} className={LogPageStyle.SelectPunctBlock}>
                        <NavLink to='/log/singIn#i'>
                            Sing In
                        </NavLink>
                    </div>
                </div>
            </div>
            <form className={LogPageStyle.form}>
                <div className={LogPageStyle.inputBlock}>
                    <input name="" required maxLength="50" type="text" className={LogPageStyle.inputEmail} />
                    <label>E-Mail</label>
                    <span></span>
                </div>
                <div className={LogPageStyle.inputBlock}>
                    <input name="" required maxLength="50" type="password" className={LogPageStyle.inputPassword} />
                    <label>Password</label>
                    <span></span>
                </div>
                <div className={LogPageStyle.inputBlock}>
                    <input name="" required maxLength="50" type="password" className={LogPageStyle.inputRePassword} />
                    <label>Password Again</label>
                    <span></span>
                </div>
                <a href='/lok' className={LogPageStyle.NavLink}>
                    <input type="submit" value="Sing Up" className={LogPageStyle.InputButton} />
                </a>
            </form>
        </div>
    );
}

export default SingUpWindow;