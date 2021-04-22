import React, { useState, Fragment, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import FormElement from '../../components/UI/FormElement/FormElement';
import Submit from '../../components/UI/Submit/Submit';
import Loader from '../../components/UI/Loader/Loader';
import axios from '../../axios-databaseApi';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const Testimonials = props => {
    const [form, setForm] = useState({
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
    })
    const [testimonials, setTestimonials] = useState([]);
    const [formLoading, setFormLoading] = useState(false);
    const [testimonialsLoading, setTestimonialsLoading] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        setTestimonialsLoading(true);
        axios.get('/testimonials.json')
        .then(res => {
            let fetchedTestimonials = [];
            for(let key in res.data) {
                fetchedTestimonials.push({
                    ...res.data[key],
                    id: key
                })
            }
            //this.setState({testimonialsLoading: false ,testimonials: fetchedTestimonials})
            setTestimonialsLoading(false);
            setTestimonials(fetchedTestimonials);
            console.log(testimonials)
        }).catch(error => {
            console.log(error);
        })
    }, [])

    const checkValidity = (value, rules) => {
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

      
        return isValid;
    }

    const onChangeHandler = (elementId, event) => {
        let updatedForm = {
            ...form
        }

        let updatedFormElement = {
            ...updatedForm[elementId]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedForm[elementId] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedForm) {
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
        }
        setFormIsValid(formIsValid);
        setForm(updatedForm);
        //this.setState({form: updatedForm, formIsValid: formIsValid })
    }

    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        //this.setState({ formLoading: true });
        setFormLoading(true);
        const formData = {};

        const dateObject = new Date();
        const monthNumber = dateObject.getMonth();
        const month = months[monthNumber];
        const year = dateObject.getUTCFullYear();
        const date = `${month} ${year}`;

        for (let key in form) {
            formData[key] = form[key].value;
        }

        formData['date'] = date;

        const testimonial = {
            ...formData
        }

        axios.post( 'testimonials.json', testimonial )
            .then( response => {
                //this.setState({ formLoading: false });
                setFormLoading(false);
                window.location.reload();
            } )
            .catch( error => {
               // this.setState( { loading: false } );
               console.log(error);
            } );
    }

    let formElements = [];
    for (let key in form) {
        formElements.push({
            id: key,
            config: { ...form[key] }
        })
    }

    let Form = (
        <form className='TestimonialsForm' onSubmit = { onSubmitHandler }>
            { 
                formElements.map(formElement => {
                    return (
                        <div className='TestimonialsForm-group'  key = { formElement.id }>
                            <FormElement 
                            elementType = { formElement.config.elementConfig.elementType }
                            label = { formElement.config.elementConfig.label }
                            id = { formElement.id }
                            name = { formElement.config.elementConfig.name }
                            value = { formElement.config.value }
                            placeholder = { formElement.config.elementConfig.placeholder }
                            changed = { (event) => onChangeHandler(formElement.id, event) }
                            valid = { formElement.config.valid }
                            touched = { formElement.config.touched } />
                        </div>
                    )
                }) 
            }
            <Submit disabled = { !formIsValid }/>
        </form>
    )

    let reviews = (
        <div className='reviews'>
            {
                testimonials.map(testimonial => {
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
    )

    return (
        <Fragment>
            <section className='section-testimonials'>
                <div className='container'>
                    <Navbar />
                    <h1 className='heading-primary-md text-center mt-8'>See what others think</h1>
                    { testimonialsLoading ? <Loader /> : reviews }
                </div>
                <p className='lead text-center mb-3'>Or share your own opinion</p>
                { formLoading ? <Loader /> : Form } 
            </section>
        </Fragment>
    )
}

export default Testimonials;