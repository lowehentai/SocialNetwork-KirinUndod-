import React from 'react';
//Navlink Import
import { NavLink } from 'react-router-dom';
//Style Import
import LogPageStyle from './LogPage.module.css';

class SingUpWindow extends React.Component {
    arrowLink = React.createRef();
    BlockPuncts = React.createRef();
    countClick = 0;
    SelectClick = () => {
        if (this.countClick === 0) {
            this.arrowLink.current.classList.add(LogPageStyle.active);
            this.BlockPuncts.current.classList.add(LogPageStyle.activeBlock);
            this.countClick = 1;
        } else {
            this.arrowLink.current.classList.remove(LogPageStyle.active);
            this.BlockPuncts.current.classList.remove(LogPageStyle.activeBlock);
            this.countClick = 0;
        }
    }
    render() {
        return (
            <div className={LogPageStyle.block}>
                <div className={LogPageStyle.SelectLog}>
                    <div onClick={this.SelectClick} className={LogPageStyle.SelectLog_wrapper}>
                        <div className={LogPageStyle.Selected}>
                            Sing Up
                        </div>
                        <button ref={this.arrowLink} className={LogPageStyle.SelectButton}>
                            <img className={LogPageStyle.ArrowLeft} src={require('../../All_Icons/ArrowsLeft.png')} />
                        </button>
                        <div ref={this.BlockPuncts} className={LogPageStyle.SelectPunctBlock}>
                            <NavLink to='/login'>
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
                    <NavLink to='/login' className={LogPageStyle.NavLink}>
                        <input type="submit" value="Sing Up" className={LogPageStyle.InputButton} />
                    </NavLink>
                </form>
            </div>
        );
    }
}

export default SingUpWindow;