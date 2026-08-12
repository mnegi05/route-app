import { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
    render() {
        const { courses } = this.props;
        return <>
            <div className="mx-5 my-3">
                <h2>Welcome to Course portal</h2>
                <p>Please select a course</p>
                {courses.map((c1, index) => <p key={index}><Link to={`/course/${c1}`}>{c1}</Link></p>)}
            </div>
        </>
    }
}
export default HomePage;