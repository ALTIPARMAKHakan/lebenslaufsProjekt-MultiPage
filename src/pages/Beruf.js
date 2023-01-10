import React, { Component } from 'react'
import HistoryEntry from "../components/MuhtarFonksiyon"

export default class Beruf  extends Component{
    render(){
        // const jobHistory = "Beruf Erfahrung";
        const entryFreelancer ={
            "zeit": "2019-Heute",
            "name" : "Freelancer, 3D Designer, Programmier-Enthusiast",
            "keyPoints": ["3Dsmax Rendering > Modellierung von Innenarchitekturzeichnungen.",
                "Codierung der Kleinmaschinenautomatisierung mit Arduino > Kodierung von industriellen Automatisierungsgeräten mit Timer, Motorantriebssteuerung, Benutzerschnittstelle und Sensorempfindlichkeit.",
                "Ich entwickle mich selbst über künstliche Intelligenz und Deep Learning mit Tensorflow- und Pythonprogrammen.",
                "CMS > Reseller-Management(Unix), SEO-Optimierung, WordPress, Joomla, Drupal, PrestaShop, Magento -Site-Einrichtung und Modulschreiben",
                "JavaScript (Kurs bei Alfa Training) > Responsive Website-Design mit JavaScript-Grundlagen und aktueller CSS-Terminologie",
                "React (Kurs bei Alfa Training) > Mit React ist es so konzipiert, dass es drei verschiedene Themenoptionen und einen wechselnden Videohintergrund mit dieser Auswahl sowie eine kategorische Anzeige von alkoholischen und alkoholfreien Cocktails und Rezepten mit den Daten aus der OnlineDatenbank anzeigt.",
                "React (Kurs bei AlfaTraining) > Erstellen einer Lebenslauf-Website mit React.",
            "React (Kurs bei AlfaTraining) > Notizblock und ToDo-Liste."],
            "description" : `Html, Css, Php, CMS, Javascript, React`
        }

        const entryAlpaEndustri = {
            "zeit": "2015-2019",
            "name" : "Entwicklungs- & Fertigungsingenieur / Firma Alpa Endüstri (Istanbul)",
            "keyPoints" : ["Einrichtung von Produktionsprozessen von Elastomeren zur Herstellung von Wärmeleitpasten, leitfähigen Lacken, ölabweisenden Oberflächenbeschichtungen, Siliconkautschuk welche bei Raumtemperatur vulkanisieren (RTV1, Alkoxy, Acetoxy), Zweikomponenten-Siliconkautschuk (RTV-2) und Siliconschaumprofile", "Tribologie; Einrichtung von Produktionsprozessen zur Herstellung von vollsynthetischen Fetten mit PAO, PTFE und Silikon-Fett", "Einrichtung von Produktionsprozessen zur Herstellung von leitfähigen Lacken auf Kohlenstoffbasis und Silberbasis, Metallpulvererzeugung mit 25-30-35 kHz im Hochfrequenzsystem und Lötpaste", "Chemie; Einrichtung von Produktionsprozessen zur Herstellung von wasserund ölabweisenden Oberflächenbeschichtungen, UV-härtenden Lacken, Aerosol-Inhaltsstoffen und Flugzeugreinigungs- und Enteisungsflüssigkeiten"],
            "description" : `Chemie, Elektronik, Elastomer, Tribologie ${""}`
        }
        const entrySST ={
        "zeit": "2014-2015",
        "name" : "Praktikant & Ingenieur / SST Prof. Dr.-Ing Stoll & Partner Ingenieurgesellschaft GmbH (Aachen)",
        "keyPoints" : ["Surpac", "Whittle", "Micromine", "Matlab", "Surfer", "Excel","Microsoft Projekt"],
        "description" : `Datenaufbereitung zur Volumen- oder Entfernungsberechnung,Erstellung von Wirtschaftsprognosen basierend auf statistischen Bohrdaten`
    }
        const entryAnadolu ={
        "zeit": "2012-2014",
        "name" : "Ingenieur für Informationstechnologien / Anadolu Akademi İş sağlığı ve Güvenliği Eğitim Danışmanlık Eğitim Mühendislik Hizmetleri(Istanbul)",
        "keyPoints" : ["Moddle", "Joomla", "Drupal"],
        "description" : `Einrichtung des Fernunterrichtssystems mit Moodle, Produktion von Online-Inhalten`
    }
    return(
        <div className='job-history'>
            <h1>{this.props.title}</h1> 
            <p>{this.props.description}</p>
            <div className='history'>
                <HistoryEntry currentEntry={entryFreelancer}/>
                <HistoryEntry currentEntry={entryAlpaEndustri}/>
                <HistoryEntry currentEntry={entrySST}/>
                <HistoryEntry currentEntry={entryAnadolu}/>
            </div>
        </div>
    )
    }
}
