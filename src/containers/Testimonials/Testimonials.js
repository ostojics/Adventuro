import React, { Component, Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import FormElement from '../../components/UI/FormElement/FormElement';
import Submit from '../../components/UI/Submit/Submit';
import Loader from '../../components/UI/Loader/Loader';
import axios from '../../axios-testimonials';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

class Testimonials extends Component {
    state = {
        form: {
            firstName: {
                elementConfig: {
                    elementType: 'input',
                    label: 'First Name',
                    placeholder: 'John',
                    name: 'firstname',
                },
                validation: {
                    isRequired: true,
                    maxLength: 15,
                    minLength: 3
                },
                value: '',
                valid: false,
                touched: false
            },

            lastName: {
                elementConfig: {
                    elementType: 'input',
                    label: 'Last Name',
                    placeholder: 'Smith',
                    name: 'lastname',
                },
                validation: {
                    isRequired: true,
                    maxLength: 15,
                    minLength: 3
                },
                value: '',
                valid: false,
                touched: false
            },

            review: {
                elementConfig: {
                    elementType: 'textarea',
                    label: 'Tell us about your experience',
                    placeholder: '',
                    name: 'review',
                },
                validation: {
                    isRequired: true,
                    minLength: 10
                },
                value: '',
                valid: false,
                touched: false
            }
        },
        testimonials: [],
        loading: false,
        formIsValid: false
    }

    componentDidMount() {
        axios.get('/testimonials.json')
        .then(res => {
            let fetchedTestimonials = [];
            for(let key in res.data) {
                fetchedTestimonials.push({
                    ...res.data[key],
                    id: key
                })
            }
            this.setState({testimonials: fetchedTestimonials})
            console.log(this.state.testimonials)
        }).catch(error => {
            console.log(error);
        })
    }

    checkValidity = (value, rules) => {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        } 

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

      /*  if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        } */

        return isValid;
    }

    onChangeHandler = (elementId, event) => {
        let updatedForm = {
            ...this.state.form
        }

        let updatedFormElement = {
            ...updatedForm[elementId]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedForm[elementId] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedForm) {
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({form: updatedForm, formIsValid: formIsValid })
    }

    
    onSubmitHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const formData = {};

        const dateObject = new Date();
        const monthNumber = dateObject.getUTCMonth();
        const month = months[monthNumber - 1];
        const year = dateObject.getUTCFullYear();
        const date = `${month} ${year}`;

        for (let key in this.state.form) {
            formData[key] = this.state.form[key].value;
        }

        formData['date'] = date;

        const testimonial = {
            ...formData
        }

        axios.post( 'testimonials.json', testimonial )
            .then( response => {
                this.setState({ loading: false });
                window.location.reload();
            } )
            .catch( error => {
               // this.setState( { loading: false } );
               console.log(error);
            } );
    }

    render() {

        let formElements = [];
        for (let key in this.state.form) {
            formElements.push({
                id: key,
                config: { ...this.state.form[key] }
            })
        }

        let form = (
            <form className='TestimonialsForm' onSubmit = { this.onSubmitHandler }>
                { 
                    formElements.map(formElement => {
                        return (
                            <div className='TestimonialsForm-group'>
                                <FormElement 
                                elementType = { formElement.config.elementConfig.elementType }
                                label = { formElement.config.elementConfig.label }
                                key = { formElement.id }
                                id = { formElement.id }
                                name = { formElement.config.elementConfig.name }
                                value = { formElement.config.value }
                                placeholder = { formElement.config.elementConfig.placeholder }
                                changed = { (event) => this.onChangeHandler(formElement.id, event) }
                                valid = { formElement.config.valid }
                                touched = { formElement.config.touched } />
                            </div>
                        )
                    }) 
                }
                <Submit disabled = { !this.state.formIsValid }/>
            </form>
        )

        return (
            <Fragment>
                <section className='section-testimonials'>
                    <div className='container'>
                        <Navbar />
                        <h1 className='heading-primary-md text-center mt-8'>See what others think</h1>
                        <div className='reviews'>
                          {
                              this.state.testimonials.map(testimonial => {
                                  return (
                                    <ReviewCard 
                                    firstName = { testimonial.firstName }
                                    lastName = { testimonial.lastName }
                                    review = { testimonial.review }
                                    date = { testimonial.date }
                                    key = { testimonial.id } />
                                  )
                              })
                          }
                        </div>
                    </div>
                    <p className='lead text-center mb-3'>Or share your own opinion</p>
                   { this.state.loading ? <Loader /> : form } 
                </section>
            </Fragment>
        )
    }
}

export default Testimonials;