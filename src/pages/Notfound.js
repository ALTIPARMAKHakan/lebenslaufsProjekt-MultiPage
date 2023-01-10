import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="not-found">
            <h2>404: Seite nicht gefunden</h2>
            <p><Link to="/"> zur Über mich</Link></p>
        </div>
    )
}