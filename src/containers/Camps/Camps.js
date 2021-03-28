import React, { Component, Fragment } from 'react';
import './Camps.scss';

class Camp extends Component {

    render() {
        return (
            <Fragment>
                <section className = { 'section-camps' }>
                    <div className = { 'container' }>
                        <nav>navbar</nav>
                        <h1 className = { 'heading-primary-md text-center mt-8' }>All of our camps</h1>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Camp;