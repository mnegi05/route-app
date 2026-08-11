import { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {

    render() {
        return <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">MyPortal</Link>

                <div className="container">
                    <ul className="navbar-nav me-auto mb-2">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/products" className="nav-link">
                                Products
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    }
}

export default NavBar