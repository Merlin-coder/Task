import React from 'react';
import './button.component.scss'
const Button = (props) => {
    const { onClick,Buttontype, Name,className,btn_className}=props;
    return(
        <>
        <button onClick={onClick} type={Buttontype} className={`button ${className}` }>{Name}</button>
       
        </>
    )
}
export default Button;