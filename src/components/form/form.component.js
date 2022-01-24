import React from 'react';



import {Row, Col, Form, Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import './form.styles.css';

import { useState } from 'react';


 
const FormPayment = () => {
    const [plan, setPlan] = useState();
    const handleChange = (e) =>{
        setPlan(e.target.value);
        console.log(plan)
    }
    const handleSubmit = (e) =>{
        alert(`User selected ${plan} plan`)
        e.preventDefault()
    }
    return ( 
        <Row className="form-main-row">
            <Col lg={6} className="form-col-plan my-auto">
            <Form className="form-radio mx-auto" onChange={handleChange} onSubmit={handleSubmit} value={plan}>
                <Form.Label className='main-label'>Select Plan</Form.Label>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                            name="group1"
                            type={type} id={`check-api-${type}-1` } 
                             >
                               <Form.Check.Input type={type} value="Plus"/>
                                <Form.Check.Label>
                                <Row className="plan-type">
                                    <Col lg={6} >Standard </Col><Col lg={6} className="">$8.99 </Col>
                                </Row>
                                <Row className="plan-description">
                                    <Col lg={6}>For individuals </Col><Col lg={6}>User Month</Col>
                                </Row>
                                </Form.Check.Label>
                                {/* <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback> */}
                            </Form.Check>
                            <Form.Check
                            name="group1"
                            type={type} id={`check-api-${type}-2` } 
                             >
                               <Form.Check.Input type={type} value="Standard"/>
                                <Form.Check.Label>
                                <Row className="plan-type">
                                    <Col lg={6} >Plus </Col><Col lg={6} className="">$12.99 </Col>
                                </Row>
                                <Row className="plan-description">
                                    <Col lg={6}>For teams </Col><Col lg={6}>User Month</Col>
                                </Row>
                                </Form.Check.Label>
                                {/* <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback> */}
                            </Form.Check>
                            <Form.Check
                                name="group1"
                                type={type} id={`check-api-${type}-3` } 
                            >
                                <Form.Check.Input type={type} value="Advanced"/>
                                    <Form.Check.Label>
                                    <Row className="plan-type">
                                        <Col lg={6} >Advanced </Col><Col lg={6} className="">$19.99 </Col>
                                    </Row>
                                    <Row className="plan-description">
                                        <Col lg={6}>For teams </Col><Col lg={6}>User Month</Col>
                                    </Row>
                                    </Form.Check.Label>
                                    {/* <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback> */}
                            </Form.Check>
                        
                    
                        </div>
                    ))}
                    <Button variant="primary" type="submit">
    Proceed to payment
  </Button>
                </Form>
            </Col>
            <Col lg={6}></Col>
        </Row>)
}

export default FormPayment;