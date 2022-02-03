import React, { Component } from 'react'
import notes from './data/PatchNotes.json'

export default class PatchNotes extends Component {
    render() {
        var patches = []
        for (var i = notes.notes.length - 1; i >= 0; i--){
            patches.push(
                <li key={i}> {notes.notes[i].title} : {notes.notes[i].content}</li>
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
