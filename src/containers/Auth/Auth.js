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
                },
                validation: {
                    isRequired: true,
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
                },
                validation: {
                    isRequired: true,
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
                },
                validation: {
                    isRequired: true,
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
                },
                validation: {
                    isRequired: true,
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
                },
                validation: {
                    isRequired: true,
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

        updatedFormElement.value = event.target.value;
        //updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        //updatedFormElement.touched = true;
        updatedForm[elementId] = updatedFormElement;

      /*  let formIsValid = true;
        for (let inputIdentifier in updatedForm) {
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
        } */
        if(this.state.currentMethod === 'signUp') {
            this.setState({signUpForm: updatedForm, /*formIsValid: formIsValid*/ })
        } else {
            this.setState({signInForm: updatedForm, /*formIsValid: formIsValid*/ })
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
                            changed = { (event) => this.onChangeHandler(event, formElement.id) }/>
                        </div>
                    )
                    }) }
                        { this.state.currentMethod === 'signUp' ? (
                            <p className='AuthForm-switcher'>Already have an account? <span onClick={ this.methodChangeHandler }>Sign in</span></p>
                        ) : (
                            <p className='AuthForm-switcher'>Don't have an account? <span onClick={ this.methodChangeHandler }>Sign up</span></p>
                        ) }

                        { this.state.currentMethod === 'signUp' ? (
                            <AuthButton>SIGN UP</AuthButton>
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