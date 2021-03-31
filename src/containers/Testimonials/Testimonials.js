import React, { Component, Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ReviewCard from '../../components/ReviewCard/ReviewCard';

class Testimonials extends Component {

    render() {
        return (
            <Fragment>
                <section className='section-testimonials'>
                    <div className='container'>
                        <Navbar />
                        <h1 className='heading-primary-md text-center mt-8'>See what others think</h1>
                        <p className='lead text-center'>Or share your own opinion</p>
                        <div className='reviews'>
                            <ReviewCard />
                            <ReviewCard />
                            <ReviewCard />
                            <ReviewCard />
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Testimonials;