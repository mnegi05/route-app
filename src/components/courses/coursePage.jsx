import { Component } from "react";
import { Link } from "react-router-dom";
class CoursePage extends Component {
    render() {
        const { lectures } = this.props;
        const { courseName } = this.props.match.params;
        const filterLectures = lectures.filter((l1) => l1.course === courseName).sort((a1, b1) => a1.id - b1.id);
        return <>
            <div className="container">
                <h3>Welcome to {courseName} page</h3>
                <div className="d-flex flex-column">
                    <h4>List of Lectures : </h4>
                    {filterLectures.map((l1, index) => <p key={index}><Link to={`/lecture/${courseName}/${l1.id}`}> {l1.id} {l1.topic}</Link></p>)}
                </div>
            </div>
        </>
    }
}
export default CoursePage;