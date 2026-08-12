import { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {

    render() {
        const { courses } = this.props;
        return <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
                <Link className="navbar-brand" to="/">MyCoursesPortal</Link>

                <div className="container">
                    <ul className="navbar-nav me-auto mb-2">
                        {courses.map(c1 => {
                            return <li className="nav-item">
                                <Link to={`/course/${c1}`} className="nav-link">
                                    {c1}
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
            </nav>
        </>
    }
}

export default NavBar