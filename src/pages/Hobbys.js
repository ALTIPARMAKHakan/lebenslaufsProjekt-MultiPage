import React, { Component } from "react"
import HistoryEntry from "../components/MuhtarFonksiyon"


export default class Hobbys extends Component{
    render(){
        // const hobbys = "Interessen";
    
        const entryMusic ={
            "name": "Musik",
            "keyPoints":["Gitarre spielen","Klarinette spielen"],
            "description":`Musik muss das Herz berühren ${""}`
        }    

        const entrySport ={
            "name": "Sport",
            "keyPoints":["Eishockey Spielen", "Laufen", "Fahrrad Fahren"],
            "description" :`Sport ist meine Lebensphilosophie ${""}`
        }
        
            return (
                <div className="hobbys">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.description}</p>
    
                    <div className='history'>
                        <HistoryEntry currentEntry ={entryMusic}/>
                        <HistoryEntry currentEntry ={entrySport}/>
                    </div>
                </div>
            ) 
        }
    }
