import React from 'react';
import './styles.scss';
import Tabs from './../../components/tabs'

const Index = ({children}) => {
    return (

        <div className="faq_WrapperPerm">
            <div className="Wrapper">
                <div className="faq_containerPerm container">
                    <h2 className="HeadingPrimary">faq</h2>
                    <h2 className='faq_content'>
                     <Tabs/>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Index;
