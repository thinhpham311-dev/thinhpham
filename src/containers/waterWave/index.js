import React from 'react';
import "./styles.scss";

const Index = () => {
    return (
        <div class="waterWave_wrapper">
            <div class="wrapper">
                <div class="waterWave_bg">
                    <img src="https://iconicmarkets.io/assets/bg-color-2.bfb55872.webp" loading="lazy" alt="" width="100%" height="1610" />
                </div>
                <div class="waterWave_container container">
                    <div class="waterWave_inner">
                        <div class="waterWave_content">
                            <h2 class="HeadingPrimary">Powered by Hxro Network</h2>
                            <div class="waterWave_descriptions">
                                <p>Hxro Network is the on-chain “back end” that powers Iconic Markets’ games, data, and risk engine.</p>
                                <p>There are countless benefits to using Hxro Network to power trading games and other on-chain applications.</p>
                                <p>By using DeFi, Iconic Markets games are more transparent, have trustless payouts,
                                    and deeper liquidity than traditional gaming sites. For more information, visit the link below.</p>
                            </div>
                            <div class="waterWave_btn">
                                <a href="http://hxro.com" target="_blank" rel="nofollow" class="ButtonSecondary">Learn More</a>
                            </div>
                        </div>
                        <div class="waterWave_image">
                            <img src="https://iconicmarkets.io/assets/Group%201789.f259de69.png" alt="image-hxro" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
