import { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {

    render() {
        const { brands = [] } = this.props;
        return <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-2">
                <Link className="navbar-brand" to="/">LAPTOPS</Link>

                <div className="container">
                    <ul className="navbar-nav me-auto mb-2">
                        {brands.map((b1, index) => {
                            return (
                                <li key={index} className="nav-item">
                                    <Link to={`/brand/${b1}/1`} className="nav-link">
                                        {b1}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </>
    }
}

export default NavBar