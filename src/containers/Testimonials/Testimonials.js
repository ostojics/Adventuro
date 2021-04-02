import React, { Component, Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import FormElement from '../../components/UI/FormElement/FormElement';
import Submit from '../../components/UI/Submit/Submit';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-testimonials';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

class Testimonials extends Component {
    state = {
        form: {
            firstName: {
                elementType: 'input',
                label: 'First Name',
                placeholder: 'John',
                name: 'firstname',
                value: ''
            },

            lastName: {
                elementType: 'input',
                label: 'Last Name',
                placeholder: 'Smith',
                name: 'lastname',
                value: ''
            },

            review: {
                elementType: 'textarea',
                label: 'Tell us about your experience',
                placeholder: '',
                name: 'review',
                value: ''
            }
        },
        testimonials: [],
        loading: false
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

    onChangeHandler = (elementId, event) => {
        let updatedForm = {
            ...this.state.form
        }

        let updatedFormElement = {
            ...updatedForm[elementId]
        }

        updatedFormElement.value = event.target.value;
        updatedForm[elementId] = updatedFormElement;
        this.setState({form: updatedForm })
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
                this.props.history.push( '/' );
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
                                elementType = { formElement.config.elementType }
                                label = { formElement.config.label }
                                key = { formElement.id }
                                id = { formElement.id }
                                name = { formElement.config.name }
                                value = { formElement.config.value }
                                placeholder = { formElement.config.placeholder }
                                changed = { (event) => this.onChangeHandler(formElement.id, event) } />
                            </div>
                        )
                    }) 
                }
                <Submit />
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
                   { this.state.loading ? <Spinner /> : form} 
                </section>
            </Fragment>
        )
    }
}

export default Testimonials;