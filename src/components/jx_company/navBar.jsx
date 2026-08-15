import { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {

    render() {
        return <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
                <Link className="navbar-brand" to="/">JX Company</Link>

                <div className="container">
                    <ul className="navbar-nav me-auto mb-2">
                        <li className="nav-item">
                            <Link to="/employees" className="nav-link">
                                Employees
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/offices" className="nav-link">
                                Offices
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    }
}

export default NavBar