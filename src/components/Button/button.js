import React from 'react';
import './button.scss';

function button(props) {
    return (
        <button className={'button' + ' ' + props.class}>
            {props.children}
        </button>
    )
}

export default button
