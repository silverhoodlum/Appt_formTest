import React from 'react';

import Header from '../header/header.component';
import FormPayment from '../form/form.component';

import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';

import './homepage.styles.css'

const Homepage = () => {
    return (<Container className="homepage-container my-auto">
        <div className='h-100'>
        <Header />
        <FormPayment />
        </div>
        </Container>)
}

export default Homepage;