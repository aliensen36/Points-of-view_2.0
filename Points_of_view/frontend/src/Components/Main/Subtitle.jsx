import React from 'react';

function Subtitle(props) {
    const { text, classNameSecond } = props;

    return <h2 className={`subtitle ${classNameSecond}`}>{text}</h2>;
}

export default Subtitle;