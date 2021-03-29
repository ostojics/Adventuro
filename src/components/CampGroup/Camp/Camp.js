import React, { Component } from 'react';
import { ReactComponent as StarIcon } from '../../../icons/star.svg';
import camp1 from '../../../images/camp1.jpg';
import camp2 from '../../../images/camp2.jpg';
import climb1 from '../../../images/climb1.jpg';
import climb2 from '../../../images/climb2.jpg';
import kayak1 from '../../../images/kayak1.jpg';
import kayak2 from '../../../images/kayak2.jpg';
import ride1 from '../../../images/ride1.jpg';
import ride2 from '../../../images/ride2.jpg';
import './Camp.scss';

class Camp extends Component {
    state = {
        liked: false
    }

    likeClickHandler = () => {
        const oldState = this.state.liked;
        this.setState({liked: !oldState})
    }

    render() {

        return (
            <div className = 'camp'>
                <div className = 'camp-utils' >
                    <div className = 'camp-utils--review' >
                        <StarIcon className = { 'star' }/> 
                        <span className = 'review'>{ this.props.avgReview === 0 ? 'No Reviews' : this.props.avgReview }</span>
                    </div>
                    <i onClick = { this.likeClickHandler } className={ this.state.liked ? "fas fa-heart" : "far fa-heart" }></i>
                </div>
                <div className = 'camp-description'>
                    <div className = { 'camp-description--text' }>
                        <h3>{ this.props.name }</h3>
                        <p>{ this.props.shortDescription }</p>
                    </div>
                    <div className = { 'camp-description--image' }>
                       <img src = { ride1 } width='100%' height='100%' />
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Camp;