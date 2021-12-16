import React, { Component } from "react";

import './sign-in.styles.scss';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

class SignIn extends Component {
    constructor(){
        super()

        this.state = {
            email:'',
            password:''
        }
    }
    
handleSubmit = async (event) => {
    event.preventDefault();

    const {email, password} = this.state;
   
    try{
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({email:'', password:''});

    } catch (error) {
        console.error(error)
    }
}

handleChange = (event) => {
    // destructure the name and the value from the target element where the function will be called
    const {value, name} = event.target;
/* use the name attribute to match the state name and update the state using the value of
     the target element (input where the function is called)*/
    this.setState({[name]: value})
}

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span> 
                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                        type="email" name="email"
                        value = {this.state.email} 
                        required 
                        handleChange={this.handleChange}
                        label='Email'
                         />
                
                    <FormInput 
                    type="password" 
                    name="password" 
                    value={ this.state.password} 
                    required 
                    handleChange={this.handleChange}
                    label='Password'
                    />
            
                    <div className="buttons">
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignIn;