import './App.css';
import React, { Component } from 'react'
import { Accordion } from 'react-bootstrap'
import expData from './data/TylerInfo.json'
import './Resume.css'



export default class TylerResume extends Component {

    render() {
        var expList = []
        for (const [index, value] of expData.Experience.entries()) {
            expList.push(

            <div className='Exp-item' key={index}>
                <h5 className='Exp-item-title'>{value.title}</h5>
                <p className='Exp-item-content'>{value.content}</p>
            </div>
            )
        }

        return (
            <div className="Resume">
                <h1>Tyler</h1>
                <p>Experience</p>
                <div className='Languages-container'>
                    {expList}
                </div>
            </div>
        )
    }
}
