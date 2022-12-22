import React from 'react';
import './styles.scss';

const Index = () => {
    return (
        <div className='mast_headWrapper'>
            <div className='warpper'>
                <div className='mast_headMarqueeWrapper'>
                    <div className='mast_headMarqueeOverlay'>
                        <div className='mast_headMarquee' id='MainTitleMarquee'>
                            <div className='marquee_container'>
                                <div className='marquee_area'>
                                    <div className='marquee_item'>
                                        <p>E Pluribus Trade’em</p>
                                    </div>
                                    <div className='marquee_item'>
                                        <p>E Pluribus Trade’em</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="SmallTitleMarquee" className="mast_headMarqueeSmall text-stroke-style">
                            <div className="marquee_container">
                                <div className="marquee_area">
                                    <div className="marquee_item">
                                        <p>E Pluribus Trade’em</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="mast_headContainer">
                        <div className='container'>
                            <div className="mast_headContent">
                                <p className="title">Simple. Secure.</p>
                                <p className="title">On-chain trading games.</p>
                                <p className="sub-title-1">Powered by Hxro Network.</p>
                            </div>
                            <div className="mast_headContentBtn">
                                <a href="https://live.iconicmarkets.io/register" className="ButtonSecondary">Get Started</a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Index;
