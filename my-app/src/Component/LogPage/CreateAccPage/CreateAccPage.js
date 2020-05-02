import React from 'react';
//Style Import
import CreateAccPageStyle from './CreateAccPage.module.css';

const CreateAccPage = () => {
    return (
        <div className={CreateAccPageStyle.CreateAccPage}>
            <div className={CreateAccPageStyle.block}>
            <h2 className={CreateAccPageStyle.title}>Login</h2>
                <form className={CreateAccPageStyle.form}>
                    <div className={CreateAccPageStyle.inputBlock}>
                        <input name="" required maxLength="50" type="text" className={CreateAccPageStyle.inputEmail} />
                        <label>E-Mail</label>
                        <span></span>
                    </div>
                    <div className={CreateAccPageStyle.inputBlock}>
                        <input name="" required maxLength="50" type="password" className={CreateAccPageStyle.inputPassword} />
                        <label>Password</label>
                        <span></span>
                    </div>
                    <div className={CreateAccPageStyle.inputBlock}>
                        <input name="" required maxLength="50" type="password" className={CreateAccPageStyle.inputRePassword} />
                        <label>Password Again</label>
                        <span></span>
                    </div>
                    <input type="submit" value="Create" className={CreateAccPageStyle.InputButton}/>
                </form>
            </div>
        </div>
    );
}

export default CreateAccPage;