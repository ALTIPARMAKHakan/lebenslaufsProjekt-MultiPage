import {Component} from "react"
import Beruf from "../pages/beruf";
import Studium from "../pages/Studium"
import FahigkeitundKentnisse from "../pages/Fahigkeit"
import Hobbys from "../pages/Hobbys"

class History extends Component {
    render(){
        return(
            <div className="blink">
                <Beruf title="Beruf Erfahrung" description={""} />
                <Studium title="Studium" description={""} />
                <FahigkeitundKentnisse title="Fahigkeit und Kentnisse" description="Meine Skills" />
                <Hobbys title="Hobbies" description="Meine Hobbies" />
            </div>
        )
    }
}
export default History;