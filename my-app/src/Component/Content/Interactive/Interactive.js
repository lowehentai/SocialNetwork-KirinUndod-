import React from 'react';
//Style Module Import
import InteractiveStyle from './Interactive.module.css';

const Interactive = (props) => {
    // let LikeButton = React.createRef(),
    //     LikeCount = React.createRef(),
    //     myLike = () => {
    //         let x = LikeCount.current.value;
    //         alert('You Click Button ! Like Count : ' + x);ref={LikeButton}onClick={myLike}  ref={LikeCount}
    //     }
    return (
        <div className={InteractiveStyle.Interactive}>
            <div className={InteractiveStyle.block}>
                <div className={InteractiveStyle.wrapper}>
                    <button className={InteractiveStyle.button}>
                        <img className={InteractiveStyle.img} src={require('../../All_Icons/Vectorheart.png')} />
                    </button>
                    <span className={InteractiveStyle.CountLike}>{props.Like}</span>
                </div>
                <div className={InteractiveStyle.wrapper}>
                    <button className={InteractiveStyle.button}>
                        <img className={InteractiveStyle.img} src={require('../../All_Icons/messageBox.png')} />
                    </button>
                    <span className={InteractiveStyle.CountLike}>{props.Message}</span>
                </div>
            </div>
        </div>
    );
}

export default Interactive;