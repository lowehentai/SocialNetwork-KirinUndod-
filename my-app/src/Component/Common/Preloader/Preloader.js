import React from 'react';
import PreloaderStyle from './Preloader.module.css';

let Preloader = () => {
    return (
        <div className={PreloaderStyle.Preloader}>
            <div className={PreloaderStyle.WaitingMessage}>
                <div className={PreloaderStyle.WarningIcon}>
                    <span className={`${PreloaderStyle.warningSpan} ${PreloaderStyle.t1}`}></span>
                    <span className={`${PreloaderStyle.warningSpan} ${PreloaderStyle.t2}`}></span>
                    <span className={`${PreloaderStyle.warningSpan} ${PreloaderStyle.t3}`}></span>
                    <div className={PreloaderStyle.Exclamation}>!</div>
                </div>
                loading
                <div className={PreloaderStyle.LoadingSpan}>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </div>
            </div>
        </div>
    )
}

export default Preloader;