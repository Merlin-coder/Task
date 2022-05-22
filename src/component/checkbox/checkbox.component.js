import React from 'react';

const CheckBox=(props)=>{
    const {type,name,onChange,value,text}=props;
    return(
        <>
        <input type={type}  name={name} value={value} onChange={onChange} ></input>
        <span>{text}</span>
        </>
    )
}
export default CheckBox;