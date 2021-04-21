
import React, { useState, Fragment } from 'react';
import { ReactComponent as Icon } from '../../icons/discovery.svg';
import { connect } from 'react-redux';
import CtaButton from '../../components/UI/CtaButton/CtaButton';
import Options from '../../components/Options/Options';
import Navbar from '../../components/Navbar/Navbar';
import './Home.scss';

const Home = props => {
   const [options] = useState([
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
])

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
                    <Options 
                    options = { options } 
                    optionSelected = { props.onOptionSelect }
                    optionDeselected = { props.onOptionDeselect }/>
                </div>
                <div className='buttons'>
                    <div onClick = { props.onSkipClick }>
                        <CtaButton type= { 'ghost' } click = { () =>  props.history.push('/camps') }>Skip</CtaButton>
                    </div>
                    <div onClick = { props.onDoneClick }>
                        <CtaButton 
                        type= { 'primary' } 
                        click = { () =>  props.history.push('/camps') }
                        disabled = { props.optionsSelectedNum > 0 ? false : true }>Done</CtaButton>
                    </div>
                </div>
            </section>
        </Fragment>
        
    )
}

const mapStateToProps = state => {
    return {
        optionsSelectedNum: state.campSlc.optionsSelectedNum
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOptionSelect: (optionName) => dispatch({ type: 'OPTION_SELECTED', optName: optionName }),
        onOptionDeselect: (optionName) => dispatch({type: 'OPTION_DESELECTED', optName: optionName}),
        onDoneClick: () => dispatch({ type: 'DONE_CLICK' }),
        onSkipClick: () => dispatch({ type: 'SKIP_CLICK' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);