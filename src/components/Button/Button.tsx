import React, {ReactChild} from 'react'; 
import './Button.scss'; 

interface ButtonProps {
  children: JSX.Element | JSX.Element[] | string; 
  type: 'secondary' | 'primary'
}

const Button = ({children, type}: ButtonProps) => {
  return (
    <button className={`btn btn-${type ? type : 'primary'}`}>{children}</button>
  )
}


export default Button; 
