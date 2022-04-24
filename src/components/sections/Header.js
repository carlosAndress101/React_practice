import { Link } from "react-router-dom";

const Header = () => (
    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
            <div className="s-cols-4 lg-cols-1 s-cross-center">
                <a href="/">
                    <img className="main-logo" src="https://i.ibb.co/nDv4kF9/Dise-o-sin-t-tulo.png" alt="imagenLogoCarlos" />
                </a></div>
            <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
                <nav className="main-menu" id="main-menu">
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/Cupcake">Cupcake</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
                <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
            </div>
        </div>
    </header>
);

export default Header;
