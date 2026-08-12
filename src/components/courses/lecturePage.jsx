import { Component } from "react";

class LecturePage extends Component {
    render() {
        const { courseName, lecId } = this.props.match.params;
        const lecture = this.props.lectures.filter((l1) => l1.course === courseName && l1.id === parseInt(lecId))[0];
        return <>
            <div className="container">
                <h3>Welcome to Lecture</h3>
                <h4>Id : {lecture.id}</h4>
                <h4>Course : {lecture.course}</h4>
                <h4>Topic : {lecture.topic}</h4>
            </div>
        </>
    }
}
export default LecturePage;