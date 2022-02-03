import './App.css';
import React, { Component } from 'react'
import { Accordion } from 'react-bootstrap'
import expData from './data/FrankInfo.json'

export default class TylerResume extends Component {
    render() {
        var expList = []
        for (const [index, value] of expData.Experience.entries()) {
            expList.push(
            <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>{value.title}</Accordion.Header>
                <Accordion.Body className='Languages'>
                    {value.content}
                </Accordion.Body>
            </Accordion.Item>
            )
        }

        return (
            <div className="Resume">
                <h1>{expData.Name}</h1>
                <p>Experience</p>
                <div className='Languages-container'>
                    <Accordion>
                        {expList}
                    </Accordion>
                </div>
            </div>
        )
    }
}
