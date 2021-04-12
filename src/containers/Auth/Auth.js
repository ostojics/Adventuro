import React, { Component } from 'react';
import './Auth.scss';

import AuthInput from '../../components/UI/AuthInput/AuthInput';
import AuthButton from '../../components/UI/AuthButton/AuthButton';

class Auth extends Component {
    state = {
        signUpForm: {
            email: {
                elementConfig: {
                    elementType: 'input',
                    label: null,
                    placeholder: 'Email',
                    name: 'email',
                    errorMessage: 'Email is not valid',
                    rule: 'Example: test@test.com',
                    validMsg: 'Email is valid'
                },
                validation: {
                    isRequired: true,
                    isEmail: true
                },
                value: '',
                valid: false,
                touched: false
            },
           password: {
                elementConfig: {
                    elementType: 'password',
                    label: null,
                    placeholder: 'Password',
                    name: 'password',
                    errorMessage: 'Minimum eight characters, at least one letter and one number',
                    rule: 'Minimum eight characters, at least one letter and one number',
                    validMsg: 'Password is valid'
                },
                validation: {
                    isRequired: true,
                    isPassword: true
                },
                value: '',
                valid: false,
                touched: false
            },
            confirmPassword: {
                elementConfig: {
                    elementType: 'password',
                    label: null,
                    placeholder: 'Confirm Password',
                    name: 'confirmPassword',
                    errorMessage: `Passwords don't match`,
                    rule: 'Passwords must match',
                    validMsg: 'Passwords match',
                },
                validation: {
                    isRequired: true,
                    isConfirmPassword: true
                },
                value: '',
                valid: false,
                touched: false
            }
        },
        signInForm: {
            email: {
                elementConfig: {
                    elementType: 'input',
                    label: null,
                    placeholder: 'Email',
                    name: 'email',
                    errorMessage: null
                },
                validation: {
                    isRequired: true,
                    isEmail: true
                },
                value: '',
                valid: false,
                touched: false
            },
           password: {
                elementConfig: {
                    elementType: 'password',
                    label: null,
                    placeholder: 'Password',
                    name: 'password',
                    errorMessage: null
                },
                validation: {
                    isRequired: true,
                    isPassword: true
                },
                value: '',
                valid: false,
                touched: false
            },
        },
        signUpValid: false,
        signInValid: false,
        currentMethod: 'signUp'
    }

    methodChangeHandler = () => {
        let currentMethod = this.state.currentMethod;
        let updatedMethod;
        if(currentMethod === 'signUp') {
            updatedMethod = 'signIn';
        } else {
            updatedMethod = 'signUp';
        }

        this.setState({currentMethod: updatedMethod})
    }

    checkValidity = (value, rules, passwordValue) => {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.isEmail) {
            const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = regex.test(value) && isValid
        }

        if(rules.isPassword) {
            const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            isValid = regex.test(value) && isValid
        }

        if(rules.isConfirmPassword) {
            isValid = value === passwordValue && isValid
        }


        return isValid;
    }

    onChangeHandler = (event, elementId) => {
        let updatedForm = {};

        if(this.state.currentMethod === 'signUp') {
            updatedForm = {
                ...this.state.signUpForm
            }

        } else {
            updatedForm = {
                ...this.state.signInForm
            }
        }

        let updatedFormElement = {
            ...updatedForm[elementId]
        }

        let passwordField = {
            ...updatedForm['password']
        } 

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation, passwordField.value);
        updatedFormElement.touched = true;
        updatedForm[elementId] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedForm) {
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
        } 
        if(this.state.currentMethod === 'signUp') {
            this.setState({signUpForm: updatedForm, signUpValid: formIsValid })
        } else {
            this.setState({signInForm: updatedForm, signInValid: formIsValid })
        }
    }


    render() {

        let formElements = [];
        let currentMethod = this.state.currentMethod;
        let currentForm = null;

        if(currentMethod === 'signUp') {
            currentForm = this.state.signUpForm;
        } else {
            currentForm = this.state.signInForm;
        }

        for(let key in currentForm) {
            formElements.push({
                id: key,
                config: { ...currentForm[key] }
            })
        }

        let form = (
            <div className='form-wrapper'>
                 <form className='AuthForm text-center'>
                        <h2 className='AuthForm-title text-center'>Adventuro</h2>
                    { formElements.map(formElement => {
                    return (
                        <div className='AuthForm-group' key = { formElement.id }>
                            <AuthInput 
                            label = { formElement.config.elementConfig.label }
                            type = { formElement.config.elementConfig.elementType }
                            placeholder = { formElement.config.elementConfig.placeholder }
                            name = { formElement.config.elementConfig.name }
                            value = { formElement.config.value }
                            changed = { (event) => this.onChangeHandler(event, formElement.id) }
                            errorMsg = { formElement.config.elementConfig.errorMessage }
                            touched = { formElement.config.touched }
                            valid = { formElement.config.valid }
                            rule = { formElement.config.elementConfig.rule }
                            validMsg = { formElement.config.elementConfig.validMsg } />
                        </div>
                    )
                    }) }
                        { this.state.currentMethod === 'signUp' ? (
                            <p className='AuthForm-switcher'>Already have an account? <span onClick={ this.methodChangeHandler }>Sign in</span></p>
                        ) : (
                            <p className='AuthForm-switcher'>Don't have an account? <span onClick={ this.methodChangeHandler }>Sign up</span></p>
                        ) }

                        { this.state.currentMethod === 'signUp' ? (
                            <AuthButton disabled = { !this.state.signUpValid }>SIGN UP</AuthButton>
                        ) : (
                            <AuthButton>SIGN IN</AuthButton>
                        ) }
                </form>
            </div>
        )

        return (
            <section className='section-auth'>
                <div className='wrapper'>
                    <div className='text'>
                        <div className='text-container'>
                            <h2>Nature awaits</h2>
                            <p>Holidays full of adventures are waiting for you</p>
                        </div>
                    </div>
                    { form }
                </div>
            </section>
        )
    }
}

export default Auth;