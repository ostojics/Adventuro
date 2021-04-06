import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CampDescription.scss';

import camp1 from '../../images/camp1.jpg';
import camp2 from '../../images/camp2.jpg';
import kayak1 from '../../images/kayak1.jpg';
import kayak2 from '../../images/kayak2.jpg';
import climb1 from '../../images/climb1.jpg';
import climb2 from '../../images/climb2.jpg';
import ride1 from '../../images/ride1.jpg';
import ride2 from '../../images/ride2.jpg';
import { ReactComponent as ArrowIcon} from '../../icons/arrow.svg';

class CampDescription extends Component {


    iconClickHandler = () => {
        this.props.history.goBack();
    }

    render() {

        let imageName = null;

        switch(this.props.details.image) {
            case 'camp1':
                imageName = camp1;
                break;
            case 'camp2':
                imageName = camp2;
                break;
            case 'climb1':
                imageName = climb1;
                break;
            case 'climb2':
                imageName = climb2;
                break;
            case 'kayak1':
                imageName = kayak1;
                break;
            case 'kayak2':
                imageName = kayak2;
                break;
            case 'ride1':
                imageName = ride1;
                break;
            case 'ride2':
                imageName = ride2;
                break;
            default: 
                imageName = camp1;
                break;
        }

        return (
            <section className='camp-desc'>
                <div className='container'>
                    <div className='camp-desc--image'>
                        <ArrowIcon className='camp-desc--image__icon' onClick = { this.iconClickHandler }/>
                        <img src= { imageName } width='100%' height='100%' />
                    </div>
                    <div className='line'></div>
                    <h2 className='camp-desc--title text-center'>{ this.props.details.name }</h2>
                    <div className='camp-desc--content'>
                        <p>{ this.props.details.description }</p>
                        <div className='camp-desc--content__details'>
                            <p>Location: { this.props.details.location }</p>
                            <p>Duration: { this.props.details.duration }</p>
                            <p>Price: ${ this.props.details.price } </p>
                            <button>Book now</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        details: state.campDetails
    }
}

export default connect(mapStateToProps)(CampDescription);