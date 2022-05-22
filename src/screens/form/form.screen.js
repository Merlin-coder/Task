import React, { useState } from 'react';
import Button from '../../component/button/button.component';
import Inputs from '../../component/inputs/inputs.component';
import './form.screen.scss';
import Task from '../../assets/images/task.jpeg';
import CheckBox from '../../component/checkbox/checkbox.component';


const Form = () => {

    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState();
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [confirmpassword, setConfirmPassword] = useState();
    const [confirmpasswordErr, setConfirmPasswordErr] = useState();
    const [number, setNumber] = useState("");
    const [numberErr, setNumberErr] = useState("");
    const [check, setCheck] = useState(false);
    const [checkErr, setCheckErr] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault();
        setEmail(email);
        setPassword(password);
        setConfirmPassword(confirmpassword);
        setName(name);
        setNumber(number);
        setCheck(check);
       
        if (email == "") {
            setEmailErr("email is required")
        }
        else if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) {
            setEmailErr("email address is invalid")
        }
       
        if (name == "") {
            setNameErr("name is required")
        }
        else if (name.trim().length < 5) {
            setNameErr("name is to short");
        }

        if (password == "") {
            setPasswordErr("password is required")
        }
        else if (password.length < 6) {
            setPasswordErr("password needs more than 6 characters")
        }
        
        if (confirmpassword == "") {
            setConfirmPasswordErr("confirm password required")
        }
        else if (confirmpassword !== password) {
            setConfirmPasswordErr("password do not match")
        }

        if (number == '' ) {
            setNumberErr("number is required")
        }
        else if(number.length < 10){
            setNumberErr("number is invalid")
        }

        if (check==false) {
            setCheckErr("please read and accept the terms")
            
        }
        
       
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
        console.log(e.target.value)
        setNameErr('')
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
        setEmailErr('')
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
        console.log(e.target.value)
        setPasswordErr('')
    }
    const handleConfirmChange = (e) => {
        setConfirmPassword(e.target.value);
        console.log(e.target.value);
        setConfirmPasswordErr('')
    }
    const handleNumChange = (e) => {
        setNumber(e.target.value);
        console.log(e.target.value);
        setNumberErr('')
    }
    const handleCheck = (e) => {
        setCheck(e.target.value);
        console.log(e.target.value);
        setCheckErr();
    }

    return (
        <>

            <div className='container'>
                <div className='wrapper'>
                    <img className='image' src={Task} alt='task' />
                    <div className='input_wrapper'>
                        <div className='input_forms'>
                            <h1 className='header'>Create an account</h1>
                            <Inputs
                                label="Your email address "
                                type='text'
                                name='email'
                                onChange={handleEmailChange}
                                value={email}
                            />
                            {emailErr && <p className='error'>*{emailErr}</p>}
                        </div>
                        <div className='input_forms'>
                            <Inputs
                                label="Your password"
                                type='password'
                                name='password'
                                onChange={handlePasswordChange}
                                value={password}
                            />
                            {passwordErr && <p className='error'>*{passwordErr}</p>}
                        </div>
                        <div className='input_forms'>
                            <Inputs
                                label="Confirm your password"
                                type='password'
                                name='confirm password'
                                onChange={handleConfirmChange}
                                value={confirmpassword}
                            />
                            {confirmpasswordErr && <p className='error'>*{confirmpasswordErr}</p>}
                        </div>
                        <div className='input_forms'>
                            <Inputs
                                label="Your full name"
                                type='text'
                                name='name'
                                onChange={handleNameChange}
                                value={name}
                            />
                            {nameErr && <p className='error'>*{nameErr}</p>}
                        </div>
                        <div className='input_forms'>
                            <Inputs
                                label="Your phone number"
                                type='text'
                                name='number'
                                onChange={handleNumChange}
                                value={number}
                            />
                            {numberErr && <p className='error'>*{numberErr}</p>}
                        </div>
                        <div className='input_forms'>
                            <CheckBox
                                type='checkbox'
                                name='checkbox'
                                onChange={handleCheck}
                                value={check}
                                text='I read and agree Terms and Conditions'
                            />
                            {checkErr && <p className='error'>*{checkErr}</p>}
                        </div>
                       <div className='input_forms'>
                           <div className='btn_primary'>
                        <Button
                            className='secondary'
                            Buttontype='submit'
                            Name='Create Account'
                            onClick={handleSubmit}
                        />
                        </div>
                        </div>
                    </div>
                    <div>


                    </div>
                </div>
            </div>
        </>
    )
}
export default Form;