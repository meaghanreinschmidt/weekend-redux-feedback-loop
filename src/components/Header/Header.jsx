import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();
    return (
        <>
            <header className="App-header">
                <h1 className="App-title">Feedback!</h1>
            </header>
            <ul>
                <li>
                    <Link to="/admin" className={location.pathname === '/admin' ? 'active' : undefined}>
                        Admin
                    </Link>
                </li>
                <li>
                    <Link to="/" className={location.pathname === '/' ? 'active' : undefined}>
                        Feedback Form
                    </Link>
                </li>
            </ul>

            <br />
        </>
    );
}

export default Header;