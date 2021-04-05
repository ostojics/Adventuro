import React, { Component } from 'react';
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
        return (
            <section className='camp-desc'>
                <div className='container'>
                    <div className='camp-desc--image'>
                        <ArrowIcon className='camp-desc--image__icon' onClick = { this.iconClickHandler }/>
                        <img src= { camp1 } width='100%' height='100%' />
                    </div>
                    <div className='line'></div>
                    <h2 className='camp-desc--title text-center'>Haast River Motels & Holiday Park</h2>
                    <div className='camp-desc--content'>
                        <p>
                        Lorem ipsum dolor sit amet,
                         consectetuer adipiscing elit. 
                         Aenean commodo ligula eget dolor. 
                         Aenean massa. 
                         Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                         Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
                         Nulla consequat massa quis enim. 
                         Donec pede justo, fringilla vel, aliquet nec, vulputate
                        </p>
                        <div className='camp-desc--content__details'>
                            <p>Location: Norway</p>
                            <p>Duration: 15.4.2021./20.4.2021.</p>
                            <p>Price: $250 </p>
                            <button>Book now</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CampDescription;