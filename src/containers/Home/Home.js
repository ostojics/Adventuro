
import React, { Component, Fragment } from 'react';
import { ReactComponent as Icon } from '../../icons/discovery.svg';
import CtaButton from '../../components/UI/CtaButton/CtaButton';
import Options from '../../components/Options/Options';
import Navbar from '../../components/Navbar/Navbar';
import './Home.scss';

class Home extends Component {
    state = {
        options: [
            {
                optionName: 'Camping',
                id: 1
            },
            {
                optionName: 'Climbing',
                id: 2
            },
            {
                optionName: 'Riding',
                id: 3
            },
            {
                optionName: 'Kayaking',
                id: 4
            },
        ]
    }

    categoriesSelectedHandler = () => {
        this.props.history.push('/camps');
    }

    render() {
        return(
            <Fragment>
                <section className='section-head'>
                    <div className='container'>
                    <Navbar />
                        <div className = { 'section-head--text flex flex-column mt-3' }>
                            <h1 className = { 'heading-head' }>
                                New way of living
                            </h1>
                            <p className = { 'lead-head' }>
                                Change the way you live, closer to nature
                            </p>
                        </div>
                        <a className = 'cta' href="#categories">
                                Explore
                                <Icon className = { 'icon' }/>
                        </a>
                    </div>
                </section>
                <section id='section-categories' className='section-categories mt-5'>
                    <div className='container text-center'>
                        <div className='line'></div>
                        <h1 className='heading-primary mt-2'>Tell us what you love</h1>
                        <p className='lead'>So we can show you what you’ll like</p>
                    </div>
                    <div id='categories'>
                        <Options options = { this.state.options }/>
                    </div>
                    <div className='buttons'>
                        <CtaButton type= { 'ghost' } click = { this.categoriesSelectedHandler }>Skip</CtaButton>
                        <CtaButton type= { 'primary' } click = { this.categoriesSelectedHandler }>Done</CtaButton>
                    </div>
                </section>
            </Fragment>
            
        )
    }
}

export default Home;