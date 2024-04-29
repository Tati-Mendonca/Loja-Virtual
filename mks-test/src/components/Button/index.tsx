import React from 'react';

type Props = {
    type?: 'button' | 'submit' | 'reset';
    onClick?: VoidFunction;
    children: React.ReactNode;
};

const Button = ({ type = 'button', onClick, children }: Props) => {
    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
