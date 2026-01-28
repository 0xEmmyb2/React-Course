import React, { Children } from 'react'

interface Props{
    children: string;
    color: string;
    onClick:() => void;
}

const Button = ({ children,color, onClick }: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
  )
}

export default Button