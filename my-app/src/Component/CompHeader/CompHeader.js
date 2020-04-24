import React from 'react';
//Style Import 
import HeaderStyle from './CompHeader.module.css';

function CompHeader() {
    return (
        <div className={HeaderStyle.Header}>
            <div className={HeaderStyle.container}>
                <div className={HeaderStyle.wrapper}>
                    <div className={HeaderStyle.logo}>KirinUndod<span className={HeaderStyle.version}>Unit V1.0</span></div>
                    <div className={HeaderStyle.search}>
                        <img className={HeaderStyle.img} src={require('../All_Icons/Vectorlup.png')}></img>
                        <form method="POST">
                            <input type="text" name="search" placeholder="Search"></input>
                        </form>
                    </div>
                    <div className={HeaderStyle.buttons}>
                        <button className={HeaderStyle.button}>
                            <img src={require('../All_Icons/Vectorbell.png')}></img>
                        </button>
                    </div>
                    <div className={HeaderStyle.users}>
                        <div className={HeaderStyle.users_name}>Name</div>
                        <div className={HeaderStyle.users_avatar}>
                            <img src={require('../All_Icons/Vectoravatar.png')}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompHeader;