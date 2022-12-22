import React from 'react';
import './styles.scss'

const Index = () => {
    return (
        <footer className='footer_wrap'>
            <div className='wrapper'>
                <div className='container'>
                    <div className='footer_containDesc'>
                        <p>Stay connected for more updated. Iconic Markets is constantly improving the existing products
                            and creating new applications. <span> Your opinion is very important to us.</span></p>
                        <p>Hxro services and HXRO Token are prohibited for use in the United
                            States or other restricted jurisdictions</p>
                    </div>
                    <div className='footer_containContent'>
                        <div className='footer_containContentButton'>
                            <div className='footer_containSocial'>
                                <a href="" className='iconic-social-items'><img src='./img/twitter-logo-24.png'/></a>
                                <a href="" className='iconic-social-items'><img src='./img/discord-alt-logo-24.png'/></a>
                            </div>
                            <div className='footer_logo'>
                                <a href="">
                                    <img src='./img/logo-darkmode.png' alt='' />
                                </a>
                            </div>
                        </div>
                        <div className='footer_containCopyRight'>
                            <span>© All rights reserved</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Index;
