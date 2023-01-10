import React, { Component } from 'react'
import HistoryEntry from '../components/MuhtarFonksiyon'

export default  class Studium extends Component{
    render(){
        // const educationHistory = "Studium";
        const entryAlfa = {
            "zeit": "2022(12 Wochen)",
            "name": "Alfa Training GmbH (Hamburg)",
            "keyPoints": ["Javascript", "React"],
            "description":"JavaScript Developer Kurs, React JavaScript-Bibliothek Kurs"
            
        }
        const entryItucu = {
            "zeit": "2018(12 Wochen)",
            "name": "Istanbul Ticaret Universität",
            "keyPoints": [],
            "description":"Entwicklung mobiler Anwendungen für Android- und iOS-Systeme"
        }
        const entryRwth ={
            "zeit": "2014-2015",
            "name" : "RWTH Aachen Universität",
            "keyPoints" : [],
            "description" : `M.Sc., BBK3-Bergbau Fakultät-Bergbau Ingenieur`
        } 
        const entryItu ={
            "zeit": "2012-2019",
            "name" : "Istanbul Technik Universität",
            "keyPoints" : [],
            "description" : `M.Sc., Bergbau Fakultät-Bergbau Ingenieur`
        } 
        const entryAnadolu ={
            "zeit": "2012-2013",
            "name" : "Anadolu Akademi",
            "keyPoints" : [],
            "description" : `Sicherheitsingenieur`
        }
        const entryIu ={
            "zeit": "2006-2011",
            "name" : "Istanbul Universität",
            "keyPoints" : [],
            "description" : `B.Sc., Bergbau Fakultät-Bergbau Ingenieur`
        }
        const entryGymnasium ={
            "zeit": "2002-2005",
            "name" : "Istek Bilge Kagan Naturwissenschaft Gymnasium",
            "keyPoints" : [],
            "description": ""
        }

        return(
            <div className='education-history'>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <div className='history'>
                    <HistoryEntry currentEntry={entryAlfa} />
                    <HistoryEntry currentEntry={entryItucu}/>
                    <HistoryEntry currentEntry={entryRwth}/>
                    <HistoryEntry currentEntry={entryItu}/>
                    <HistoryEntry currentEntry={entryAnadolu}/>
                    <HistoryEntry currentEntry={entryIu}/>
                    <HistoryEntry currentEntry={entryGymnasium}/>                  

                </div>
            </div>
        )
    }
}
