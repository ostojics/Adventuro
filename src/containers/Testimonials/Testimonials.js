import React, { Component, Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import TestimonialForm from '../../components/Forms/TestimonialForm/TestimonialForm';

class Testimonials extends Component {
    state = {
        firstName: '',
        lastName: '',
        testimonial: '',
        date: null
    }

    onChangeHandler = async (event) => {
        switch(event.target.id) {
            case 'firstName':
                const firstNameValue = event.target.value;
                await this.setState({firstName: firstNameValue});
                console.log(this.state.firstName);
                break;
            case 'lastName':
              /*  let stateValue = { ...this.state.firstName };
                stateValue = event.target.value; */
                const lastNameValue = event.target.value;
                await this.setState({lastName: lastNameValue});
                console.log(this.state.lastName);
                break;
            case 'review':
              /*  let stateValue = { ...this.state.firstName };
                stateValue = event.target.value; */
                const testimonialValue = event.target.value;
                await this.setState({testimonial: testimonialValue});
                console.log(this.state.testimonial);
                break;
            default:
                console.log('error');
                break;
        }
    }

    render() {
        return (
            <Fragment>
                <section className='section-testimonials'>
                    <div className='container'>
                        <Navbar />
                        <h1 className='heading-primary-md text-center mt-8'>See what others think</h1>
                        <div className='reviews'>
                            <ReviewCard />
                            <ReviewCard />
                            <ReviewCard />
                            <ReviewCard />
                        </div>
                    </div>
                    <p className='lead text-center mb-3'>Or share your own opinion</p>
                    <TestimonialForm changed = { this.onChangeHandler }/>
                </section>
            </Fragment>
        )
    }
}

export default Testimonials;