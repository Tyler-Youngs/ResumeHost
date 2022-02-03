import React, { Component } from 'react'
import notes from './data/PatchNotes.json'

export default class PatchNotes extends Component {
    render() {
        var patches = []
        for (const [index, value] of notes.notes.length ){
            patches.push(
                <li key={index}> {value.title} : {value.content}</li>
            )
        }
        return (
            <div className='Patch-notes'>
                <h1>Patch Notes</h1>
                <ul>
                    {patches}
                </ul>
            </div>
        )
    }
}
