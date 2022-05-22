import React from 'react';
import './inputs.component.scss';

const Inputs = (props) => {
     const {type,text,name,placeholder,value,label,onChange} = props;
    return(
        <>
            <div >
            <label className='labels' >{label}</label>
            <input className='inputs'
            text={text}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            label={label}
            onChange={onChange}
            autoComplete='off'
            >
        
            </input>
       <span className='labels'>{text}</span>
       </div>
        </>
    )
}
export default Inputs;