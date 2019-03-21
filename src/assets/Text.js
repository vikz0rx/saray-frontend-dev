import React from 'react';
import styled, { css } from 'styled-components';

import Theme from '../utils/style';

const base = css`
    ${props => props.mb ? 'margin-bottom: ' + props.mb + ';' : ''}
    ${props => props.mt ? 'margin-top: ' + props.mt + ';' : ''}
    
    ${props => props.pl ? 'padding-left: ' + props.pl + ';' : ''}
    ${props => props.pr ? 'padding-right: ' + props.pr + ';' : ''}
    
    ${
        props =>
        props.thin          ?   'font-weight: 100;' :
        props.light         ?   'font-weight: 300;' :
        props.regular       ?   'font-weight: 400;' :
        props.medium        ?   'font-weight: 500;' :
        props.bold          ?   'font-weight: 700;' :
        props.extrabold     ?   'font-weight: 900;' :
        ''
    }
    
    ${
        props =>
        props.black         ?   'color: ' + Theme.black + ';' :
        props.white         ?   'color: ' + Theme.white + ';' :
        props.primary       ?   'color: ' + Theme.primary + ';' :
        props.secondary     ?   'color: ' + Theme.secondary + ';' :
        ''
    }
    
    ${
        props =>
        props.uppercase     ?   'text-transform: uppercase;' :
        props.lowercase     ?   'text-transform: lowercase;' :
        props.capitalize    ?   'text-transform: capitalize;' :
        ''
    }
    
    ${
        props =>
        props.center        ?   'text-align: center;' :
        props.left          ?   'text-align: left;' :
        props.right         ?   'text-align: right;' :
        ''
    }
`;

const H1 = styled.h1`
    font-size: 4rem;
    ${base}
`;

const H2 = styled.h2`
    font-size: 2.5rem;
    ${base}
`;

const H3 = styled.h3`
    font-size: 1.5rem;
    ${base}
`;

const H6 = styled.h6`
    font-size: 1rem;
    ${base}
`;

const P = styled.p`
    font-size: 1rem;
    ${base}
`;

function Text(props) {
    return (
        props.selector == 'H1' ? <H1 {...props}>{props.children}</H1> :
        props.selector == 'H2' ? <H2 {...props}>{props.children}</H2> :
        props.selector == 'H3' ? <H3 {...props}>{props.children}</H3> :
        props.selector == 'H6' ? <H6 {...props}>{props.children}</H6> :
        props.selector == 'P'  ? <P {...props}>{props.children}</P> :
        null
    )
}

export default Text;