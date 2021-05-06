import React, { useState } from 'react';
import './Auth.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Arrow } from '../../icons/arrow.svg';

import AuthInput from '../../components/UI/AuthInput/AuthInput';
import AuthButton from '../../components/UI/AuthButton/AuthButton';
import * as actions from '../../store/actions/index';
import Loader from '../../components/UI/Loader/Loader';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';

const Auth = props =>{
    const [signUpForm, setSignUpForm] = useState({
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
    })
    const [signInForm, setSignInForm] = useState({
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
    })
    const [signUpValid, setSignUpValid] = useState(false);
    const [signInValid, setSignInValid] = useState(false);
    const [currentMethod, setCurrentMethod] = useState('signIn');

    const dispatch = useDispatch();

    const loading = useSelector(state => {
        return state.auth.loading;
    })

    const error = useSelector(state => {
        return state.auth.error;
    })

    const isAuthenticated = useSelector(state => {
        return state.auth.token !== null;
    })

    const redirectedFrom = useSelector(state => {
        return state.auth.redirectedFrom;
    })

    const onAuth = (email, password, method) => dispatch(actions.auth(email, password, method));
   
    const methodChangeHandler = () => {
        let currentAuthMethod = currentMethod;
        let updatedMethod;
        if(currentAuthMethod === 'signUp') {
            updatedMethod = 'signIn';
        } else {
            updatedMethod = 'signUp';
        }

        setCurrentMethod(updatedMethod);
    }

    const checkValidity = (value, rules, passwordValue) => {
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

    const onChangeHandler = (event, elementId) => {
        let updatedForm = {};

        if(currentMethod === 'signUp') {
            updatedForm = {
                ...signUpForm
            }

        } else {
            updatedForm = {
                ...signInForm
            }
        }

        let updatedFormElement = {
            ...updatedForm[elementId]
        }

        let passwordField = {
            ...updatedForm['password']
        } 

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation, passwordField.value);
        updatedFormElement.touched = true;
        updatedForm[elementId] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedForm) {
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
        } 
        if(currentMethod === 'signUp') {
            setSignUpForm(updatedForm);
            setSignUpValid(formIsValid);
        } else {
            setSignInForm(updatedForm);
            setSignInValid(formIsValid);
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        let currentForm = null;
        currentMethod === 'signIn' ? currentForm = signInForm : currentForm = signUpForm;
        onAuth(currentForm['email'].value, currentForm['password'].value, currentMethod);
        if(currentMethod === 'signUp') {
            methodChangeHandler();
        }
    }

    let formElements = [];
    let currentAuthMethod = currentMethod;
    let currentForm = null;

    if(currentAuthMethod === 'signUp') {
        currentForm = signUpForm;
    } else {
        currentForm = signInForm;
    }

    for(let key in currentForm) {
        formElements.push({
            id: key,
            config: { ...currentForm[key] }
        })
    }

    let errorMessage = <p></p>;
    if(error) {
        errorMessage = (
            <div>
                <ErrorMessage error = { error.message }/>
            </div>
        )
    }

    if(isAuthenticated) {
        props.history.push(`${redirectedFrom}`);
    }

    let form = (
        <form className='AuthForm text-center' onSubmit={ submitHandler }>
                { currentMethod === 'signIn' && <h2 className='AuthForm-title text-center'>Adventuro</h2> }
                { formElements.map(formElement => {
                return (
                    <div className='AuthForm-group' key = { formElement.id }>
                        <AuthInput 
                        label = { formElement.config.elementConfig.label }
                        type = { formElement.config.elementConfig.elementType }
                        placeholder = { formElement.config.elementConfig.placeholder }
                        name = { formElement.config.elementConfig.name }
                        value = { formElement.config.value }
                        changed = { (event) => onChangeHandler(event, formElement.id) }
                        errorMsg = { formElement.config.elementConfig.errorMessage }
                        touched = { formElement.config.touched }
                        valid = { formElement.config.valid }
                        rule = { formElement.config.elementConfig.rule }
                        validMsg = { formElement.config.elementConfig.validMsg } />
                    </div>
                )
                }) }
                { currentMethod === 'signUp' ? (
                    <p className='AuthForm-switcher'>Already have an account? <span onClick={ methodChangeHandler }>Sign in</span></p>
                ) : (
                    <p className='AuthForm-switcher'>Don't have an account? <span onClick={ methodChangeHandler }>Sign up</span></p>
                ) }

                { currentMethod === 'signUp' ? (
                    <AuthButton disabled = { !signUpValid }>SIGN UP</AuthButton>
                ) : (
                    <AuthButton>SIGN IN</AuthButton>
                ) }
                { errorMessage }
            </form>
    )

    if(loading) {
        form = <Loader/>
    }


    return (
        <section className='section-auth'>
            <div className='wrapper'>
                <Arrow className = 'arrow' onClick = { () => props.history.goBack() }/>
                <div className='text'>
                    <div className='text-container'>
                        <h2>Nature awaits</h2>
                        <p>Holidays full of adventures are waiting for you</p>
                    </div>
                </div>
                <div className='form-wrapper'>
                    { form }
                </div>
            </div>
        </section>
    )
}


export default Auth;