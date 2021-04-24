
import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

    const dispatch = useDispatch();
    const onOptionSelect = (optionName) => dispatch({ type: 'OPTION_SELECTED', optName: optionName });
    const onOptionDeselect = (optionName) => dispatch({type: 'OPTION_DESELECTED', optName: optionName});
    const onDoneClick = () => dispatch({ type: 'DONE_CLICK' });
    const onSkipClick = () => dispatch({ type: 'SKIP_CLICK' });

    const optionsSelectedNum = useSelector(state => {
        return state.campSlc.optionsSelectedNum;
    })

    const ctaClickHandler = () => {
        document.getElementById("categories").scrollIntoView({ behavior: "smooth" });
    }

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
                    <a className = 'cta' onClick = { ctaClickHandler }>Explore</a>
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
                    optionSelected = { onOptionSelect }
                    optionDeselected = { onOptionDeselect }/>
                </div>
                <div className='buttons'>
                    <div onClick = { onSkipClick }>
                        <CtaButton type= { 'ghost' } click = { () =>  props.history.push('/camps') }>Skip</CtaButton>
                    </div>
                    <div onClick = { onDoneClick }>
                        <CtaButton 
                        type= { 'primary' } 
                        click = { () =>  props.history.push('/camps') }
                        disabled = { optionsSelectedNum > 0 ? false : true }>Done</CtaButton>
                    </div>
                </div>
            </section>
        </Fragment>
        
    )
}


export default Home;