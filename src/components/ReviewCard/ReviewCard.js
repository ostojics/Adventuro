import React from 'react';
import './ReviewCard.scss';

const reviewCard = props => {

    const { review, firstName, lastName, date } = props;

    return (
        <div className='review-card text-center'>
            <p className='review-card--text my-6'>
                “{ review }” 
            </p>
            <div className='review-card--person'>
                <div className='line-2'></div>
                <h3 className = 'review-card--person__name'>{ firstName } { lastName }</h3>
                <span className='review-card--person__date'>{ date }</span>
            </div>
        </div>
    )
}

export default reviewCard;