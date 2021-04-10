import React, { Component } from 'react';
import './Auth.scss';

class Auth extends Component {
    state = {
        signUpForm: {
            email: {
                elementConfig: {
                    elementType: 'input',
                    label: 'First Name',
                    placeholder: 'test@test.com',
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
                    label: 'Password',
                    placeholder: 'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number',
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
                    label: 'Password',
                    placeholder: 'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number',
                    name: 'password',
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


    render() {

        let formElements = [];
        let currentForm = this.state.currentMethod;

        for(let key in currentForm) {
            formElements.push({
                id: key,
                config: { ...currentForm[key] }
            })
        }

        let form = (
            <form className='AuthForm'>
               
            </form>
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