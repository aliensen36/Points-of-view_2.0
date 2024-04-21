import React from 'react';

function Paragraph(props) {
    const { text, classNameSecond } = props;

    return <p className={`paragraph ${classNameSecond}`}>{text}</p>;
}

export default Paragraph;