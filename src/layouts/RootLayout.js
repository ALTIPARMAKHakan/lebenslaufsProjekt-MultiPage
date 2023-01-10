
import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                
                <nav>
                    <NavLink to="/">Über mich</NavLink>
                    <NavLink to="Beruf">Beruf Erfahrung</NavLink>
                    <NavLink to="Studium">Studium</NavLink>
                    <NavLink to="Fahigkeit">Fahigkeit und Kentnisse</NavLink>
                    <NavLink to="Hobbys">Hobbies</NavLink>
                    <NavLink to="Kontakt">Kontakt</NavLink>
                </nav>
            </header>
            <main>
                {/* Stellt sicher das alle Route-Element-Inhalte hier angezeigt werden */}
                <Outlet />
                
            </main>
            <footer>
                <NavLink to="datenschutz">Datenschutz</NavLink>
                <NavLink to="impressum">Impressum</NavLink>
                <p className='copyright'>@Copyright React-Kurs</p>
            </footer>
        </div>
    )
}