import './navbar.css';
import glogo from '../svgs/logo.jpg';
export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" >
                <img src={glogo} className="App-logo" alt="logo" style={{ height: '150px', padding: "10px", }} />
            </a>
            <a href="/" className="site-title">
                My-Ai
            </a>
            <ul>
                <li>
                   
                </li>
                <li>
                    <a href="/Login">Chat With Maiya</a>
                </li>
                <li>
                    <a href="/Home">More Information</a>
                </li>
                <li>

                </li>
            </ul>
        </nav>
    )
}