import './App.css';
import React, { Component } from 'react'
import { Accordion } from 'react-bootstrap'
import tylerData from './data/TylerInfo.json'



export default class TylerResume extends Component {

    render() {

        return (
            <div className="Resume">
                <h1>Tyler</h1>
                <p>Experience</p>
                <div className='Languages-container'>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>C++</Accordion.Header>
                            <Accordion.Body className='Languages'>
                                I took all my undergrad classes in C++
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Python</Accordion.Header>
                            <Accordion.Body className='Languages'>
                                The majority of my work post graduation has been in python
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Google Cloud Platform</Accordion.Header>
                            <Accordion.Body className='Languages'>
                                Bigquery, cloud functions, Pub/Sub, Monitoring
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Azure</Accordion.Header>
                            <Accordion.Body className='Languages'>
                                Azure Data Factory, Azure Functions, Kubernetes, Networking
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Databricks</Accordion.Header>
                            <Accordion.Body className='Languages'>
                                FHIR Processing
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Other</Accordion.Header>
                            <Accordion.Body className='Languages'>
                                ?
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        )
    }
}
