import React from 'react';
import './ReviewCard.scss';

const reviewCard = props => {

    return (
        <div className='review-card text-center'>
            <p className='review-card--text my-6'>
            “Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Donec quam felis,” 
            </p>
            <div className='review-card--person'>
                <div className='line-2'></div>
                <h3 className = 'review-card--person__name'>Jay Smith</h3>
                <span className='review-card--person__date'>February 2021</span>
            </div>

        </div>
    )
}

export default reviewCard;