import './style.css'

export default function Navbar(){
    return (
        <header>
            <nav className="navbar">
                <h1>Logo</h1>
                <ul>
                    <li className='code'><a href="/">sobre mim</a></li>
                    <li className='code'><a href="/">habilidades</a></li>
                    <li className='code'><a href="/">experiência</a></li>
                    <li className='code'><a href="/">projetos</a></li>
                </ul>
            </nav>
        </header>
    )
}