import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';

import Landing from './containers/Landing';
import Article from './containers/Article';
import Photographs from './containers/Photographs';
import { store } from './store/configureStore';

import './reset.css';
import './style.scss';

function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
    };
}

function bounce(val) {
    return spring(val, {
        stiffness: 330,
        damping: 22,
    });
}

const bounceTransition = {
    atEnter: {
        opacity: 0,
        scale: 1.2,
    },
    atLeave: {
        opacity: bounce(0),
        scale: bounce(0.8),
    },
    atActive: {
        opacity: bounce(1),
        scale: bounce(1),
    },
};

render(
    <Provider store={store}>
        <BrowserRouter>
            <AnimatedSwitch
                // atEnter={bounceTransition.atEnter}
                // atLeave={bounceTransition.atLeave}
                // atActive={bounceTransition.atActive}
                atEnter={{opacity: 0}}
                atLeave={{opacity: 0}}
                atActive={{opacity: 1}}
                // mapStyles={mapStyles}
                className='route-wrapper'
            >
                <Route exact path='/' component={Landing}/>
                <Route path='/news/:id' component={Article}/>
                <Route exact path='/photographs' component={Photographs}/>
            </AnimatedSwitch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);