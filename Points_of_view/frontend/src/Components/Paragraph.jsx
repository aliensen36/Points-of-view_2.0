import React from 'react';

function Paragraph(props) {
    const { text, classNameSecond } = props;

    return <h2 className={`paragraph ${classNameSecond}`}>{text}</h2>;
}

export default Paragraph;