import React from 'react';

function Multiple({ component, count, ...props }) {
    const elements = [];

    for (let i = 0; i < count; i++) {
        elements.push(React.createElement(component, { key: i, ...props }))
    }

    return elements;
}

export { Multiple };