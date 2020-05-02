import React from 'react';
//Style Import
import SingInPageStyle from './SingInPage.module.css';

const SingInPage = () => {
    return (
        <div className={SingInPageStyle.SingInPage}>
            <div className={SingInPageStyle.block}>
                <h2 className={SingInPageStyle.title}>Login</h2>
                <form className={SingInPageStyle.form}>
                    <div className={SingInPageStyle.inputBlock}>
                        <input name="" required maxLength="50" type="text" className={SingInPageStyle.inputEmail} />
                        <label>E-Mail</label>
                        <span></span>
                    </div>
                    <div className={SingInPageStyle.inputBlock}>
                        <input name="" required maxLength="50" type="password" className={SingInPageStyle.inputPassword} />
                        <label>Password</label>
                        <span></span>
                    </div>
                    {/* <div className={SingInPageStyle.inputBlock}>
                        <input name="" required maxLength="50" type="password" className={SingInPageStyle.inputRePassword} />
                        <label>Password Again</label>
                        <span></span>
                    </div> */}
                    <input type="submit" value="Sing In" className={SingInPageStyle.InputButton}/>
                </form>
            </div>
        </div>
    );
}

export default SingInPage;