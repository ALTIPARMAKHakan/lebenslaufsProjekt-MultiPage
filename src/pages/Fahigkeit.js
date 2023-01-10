import React, { Component } from 'react'
import HistoryEntry from '../components/MuhtarFonksiyon'

export default class FahigkeitundKentnisse extends Component{
    render(){
        // const skills = "Fahigkeit und Kentnisse";
        const entrySoftware ={
            "name":"Software",
            "keyPoints":["Microsoft Excel","Word","Powerpoint","Project","Adobe Photoshop","Illustrator","Corel Draw","3DsMax","Autocad","Micromine","Surpac","Whittle","Surfer"],
            "description": ""
        }
        const entrySprachen ={
            "name":"Sprachen",
            "keyPoints":["Turkisch-MutterSprache","Englisch-C1", "Deutsch-B2"],
            "description":""
        }
        const entryFührerschein ={
            "name": "Führerschein",
            "keyPoints":["A2", "B"],
        }
        return(
            <div className='fahigkeit-haupt'>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>

                <div className='fahigkeit'>
                   <HistoryEntry currentEntry = {entrySoftware}/>
                   <HistoryEntry currentEntry = {entrySprachen}/>
                    <HistoryEntry currentEntry = {entryFührerschein}/>
                </div>
            </div>
        )
    }
}
