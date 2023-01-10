import React, {Component} from 'react'
import hakanaltiparmakFoto from '../img/hakan.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 
// import { icon } from '@fortawesome/free-solid-svg-icons'

export default function Summe() {  
        
class Header extends Component{
    render() {
        // const headerCv2 = "CV "
        const headerCv1 = "Hakan Altiparmak"
        const github = <FontAwesomeIcon icon={faGithub} />
        const linkedin = <FontAwesomeIcon icon={faLinkedin} />
        class HalloBild extends Component {
        render() {
            const halloMessage = "Wilkommen"
            return (
                <div className='hallo, blink'>
                    <h2>{halloMessage}</h2>
                    <img src={hakanaltiparmakFoto} className="foto" alt="nochmal Hallo" />
                    <div>
                        <p>Im Jahre 2002 begann ich Frontpage sowie Dreamweaver zum Programmieren der Website-Design zu nutzen.
Danach als ich auf dem Gymnasium war, habe ich durch Nutzung von HTML und CSS, Websites erstellt. Bereits als
Student habe ich Websites gestaltet und freiberuflich Projekte mit Jommla, Drupal und Wordpress durchgeführt.
Als nächstes habe ich E-Commerz-Websites mit Virtuemart und Prestashop erstellt. Sodann habe ich SEO Optimierungen und Reseller (Unix)-Management durchgeführt. Aufgrund der Verbreitung von Sozialmedien und
meinem Wunsch, in der Industrie zu arbeiten, habe ich eine Pause eingelegt.</p>
                        <p>Nach der Pandemie habe ich mir vorgenommen, mich im Bereich Software weiterzuentwickeln. Derzeit besuche ich
den JavaScript-React-Kurs im Alfa-Training. Ich möchte erfolgreiche Projekte durchführen, meine İdeen integrieren
und durch die Zusammenarbeit mit kompetenten Kollegen in einem professionellen Unternehmen mein Wissen erweitern.</p>
                        <p>Nach Abschluss meines Studiums war ich, bis zu meinem Umzug nach Deutschland, als Entwicklungs-
/Fertigungsingenieur bei „Alpa Endüstri“ (Istanbul/Türkei) eingestellt. Hier war ich für die Projektbetreuung, das
Fertigungsverfahren, die Optimierung und Weiterentwicklung bestehender Prozesse zur Produktivitätssteigerung,
die Sicherung der Qualitäts-, Termin- und Kostenziele sowie die Überwachung und Planung von externem
Lieferanten zuständig. Ebenfalls zu meinem Aufgabenbereich gehörte die gründliche Evaluierung neuer Konzepte
und Technologien in der Produktion. Durch diese Position konnte ich ein großes Know-how in der Betreuung und
                            Steuerung von Forschungen und Entwicklungen von neuen Verfahren generieren.</p>
                        <p>
Während meines Studiums an der RWTH Aachen mit dem Erasmus-Programm habe ich bei SST Prof. Dr.-Ing Stoll &
Partner Ingenieurgesellschaft mbH sowohl als Praktikant als auch in Teilzeit gearbeitet. Dort habe ich die
Feldkoordinaten der Bio-Mülldeponien von AVEA mit GPS erzielt und als 3D-Modell mit dem Programm Surpac
erstellt. Das Methan, welches aus der Bio-Mülldeponie produziert wurde, habe ich mit den berechneten Volumen
verglichen und somit die Dichtheit der Bio-Mülldeponie getestet und geprüft, ob das Grundwasser ausgetreten ist.
                        </p>
                        
                        <p>
                            Ich zeichne mich durch mein umfangreiches technisches Verständnis aus und überzeuge mit einem hohen Maß an
Eigeninitiative. Selbstverständlich verfüge ich ergänzend über umfangreiche Kenntnisse in MS-Office und bin mit
                            den Grundlagen in SAP vertraut. Eine zuverlässige und selbstständige Arbeitsweise sowie Teamfähigkeit runden mein Profil ab.
                        </p>
                    </div>
                </div>
            )
        }

}  
        return(
            <header className='header, blink'>
                <h1>{headerCv1}</h1>
                {/* <h2>{headerCv2}</h2> */}
                <div id="link-wrapper">
                    <div style={{right:"10px"}}><a href="https://www.linkedin.com/in/altiparmakhakan/" target="_blank" rel="noreferrer">{linkedin}</a></div>
                    <div id="github-div"><a href="https://github.com/ALTIPARMAKHakan" target="_blank" rel="noreferrer">{github}</a></div>
                </div>
                <HalloBild/>
            </header>
        )
    }
}
   
    return (
        <> 
            <Header />
        </>
        
)
}