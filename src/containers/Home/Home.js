
import React, { Component } from 'react';
import { ReactComponent as Icon } from '../../icons/discovery.svg';
import Button from '../../components/UI/Button/Button';
import Options from '../../components/Options/Options';
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
            
                <section className = { 'section-home' }>
                    <section className = { 'section-head' }>
                        <div className = { 'container' }>
                            <nav>
                                navbar
                            </nav>
                            <div className = { 'section-head--text flex flex-column mt-3' }>
                                <h1 className = { 'heading-head' }>
                                    New way of living
                                </h1>
                                <p className = { 'lead-head' }>
                                    Change the way you live, closer to nature
                                </p>
                            </div>
                            <a href="#categories">
                                    Explore
                                    <Icon className = { 'icon' }/>
                            </a>
                        </div>
                    </section>
                    <section id='section-categories' className = { 'section-categories' }>
                        <div className = { 'container text-center' }>
                           <div className = { 'line' }></div>
                           <h1 className = { 'heading-primary mt-2' }>Tell us what you love</h1>
                           <p className = { 'lead' }>So we can show you what you’ll like</p>
                        </div>
                        <div id='categories'>
                            <Options options = { this.state.options }/>
                        </div>
                        <div className = { 'buttons' }>
                            <Button type= { 'ghost' } click = { this.categoriesSelectedHandler }>Skip</Button>
                            <Button type= { 'primary' } click = { this.categoriesSelectedHandler }>Done</Button>
                        </div>
                    </section>
                </section>
            
        )
    }
}

export default Home;