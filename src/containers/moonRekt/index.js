import React from 'react';
import './styles.scss';

const Index = () => {
    return (
        <div className='imageMoon_rektWrapper'>
            <div className='wrapper'>
                <div className='imageMoon_rektBg'>
                    <picture>
                        <source media="(min-width:650px)" setsrc="https://iconicmarkets.io/assets/bg-color.dd3f7ade.webp" />
                        <source media="(max-width:568px)" setsrc="https://iconicmarkets.io/assets/bg-color-mb.a75579be.webp" />
                        <img src="https://iconicmarkets.io/assets/bg-color.dd3f7ade.webp" alt="hxro-iconic-img" width="100%" height="1610" />
                    </picture>
                </div>

                <div className='imageMoon_rektContainer container'>
                    <div className='imageMoon_rektInner'>
                        <picture>
                            <source media="(min-width:650px)" setsrc="https://iconicmarkets.io/assets/device_render_full_centered.cc6e93e2.png" />
                            <source media="(max-width:568px)" setsrc="https://iconicmarkets.io/assets/device_render_full_centered-mb.aeab5dc4.png" />
                            <img src="https://iconicmarkets.io/assets/device_render_full_centered.cc6e93e2.png" alt="hxro-iconic-img" width="100%" height="925" />
                        </picture>
                        <div className="imageMoon_rektContent">
                            <div className="imageMoon_rektContentItem">
                                <p>Markets never sleep.&nbsp;Games run continuously 24/7/365,
                                    allowing you to take advantage of every opportunity, wherever and whenever you want.
                                </p>
                            </div>
                            <div className="imageMoon_rektContentItem">
                                <p>Check the chain. Iconic is powered by the Hxro Network. This means all transactions are settled trustlessly,
                                    and are verifiable on chain.
                                </p>
                            </div>
                            <div className="imageMoon_rektContentItem">
                                <p>It’s a simple decision. Up (Moon), or Down (Rekt)? Take a position, and if you’re right, you’ll
                                    split the pool pro-rata at expiration.
                                </p>
                            </div>
                            <div className="imageMoon_rektContentItem">
                                <p>Take your money and run. Payouts are credited immediately at settlement, so there’s
                                    no waiting to secure the bag.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='imageMoon_rektIcon'>
                        <div className='imageMoon_rektIconInner'>
                            <span>Supported indices</span>
                            <div className='imageMoon_rektIcon_item'>
                                <img src="./img/Coin Ethereum (3).svg" /><br/>
                                <span>BTC</span>
                            </div>
                        </div>
                        <div className='imageMoon_rektIconInner'>
                            <span>Coming soon</span>
                            <div className='imageMoon_double'>

                                <div className='imageMoon_rektIcon_item'>
                                    <img src="./img/Coin Ethereum (1).svg" /><br/>
                                    <span>ETH</span>
                                </div>
                                <div className='imageMoon_rektIcon_item'>
                                    <img src="./img/Coin Ethereum (2).svg" /><br/>
                                    <span>SOL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
