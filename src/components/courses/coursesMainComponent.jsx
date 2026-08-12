import { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./navBar";
import CoursePage from "./coursePage";
import HomePage from "./homePage";
import LecturePage from "./lecturePage";

class CoursesMainComponent extends Component {
    state = {
        courses: [
            'React', 'Angular', 'Javascript'
        ],
        lectures: [
            { course: 'React', id: 1, topic: 'React Basics' },
            { course: 'Angular', id: 2, topic: 'Angular Basics' },
            { course: 'Javascript', id: 3, topic: 'Javascript Basics' },
            { course: 'React', id: 2, topic: 'React Hooks' },
            { course: 'Angular', id: 1, topic: 'Angular Routing' },
            { course: 'Javascript', id: 2, topic: 'JS DOM' },
            { course: 'React', id: 3, topic: 'React Router' },
            { course: 'Angular', id: 3, topic: 'Angular Forms' },
            { course: 'Javascript', id: 1, topic: 'JS ES6' },
            { course: 'React', id: 4, topic: 'React Props' },
            { course: 'Angular', id: 4, topic: 'Angular Components' },
            { course: 'Javascript', id: 4, topic: 'JS Events' },
            { course: 'React', id: 5, topic: 'React State' },
            { course: 'Angular', id: 5, topic: 'Angular Services' },
            { course: 'Javascript', id: 5, topic: 'JS Async' },
            { course: 'React', id: 6, topic: 'React Context' },
            { course: 'Angular', id: 6, topic: 'Angular Directives' },
            { course: 'Javascript', id: 6, topic: 'JS Promises' },
            { course: 'React', id: 7, topic: 'React Refs' },
            { course: 'Angular', id: 7, topic: 'Angular Modules' },
            { course: 'Javascript', id: 7, topic: 'JS Fetch' },
            { course: 'React', id: 8, topic: 'React Lazy' },
            { course: 'Angular', id: 8, topic: 'Angular Guards' },
            { course: 'Javascript', id: 8, topic: 'JS Async Await' },
            { course: 'React', id: 9, topic: 'React Memo' },
            { course: 'Angular', id: 9, topic: 'Angular Pipes' },
            { course: 'Javascript', id: 9, topic: 'JS WebSockets' },
            { course: 'React', id: 10, topic: 'React Callback' },
            { course: 'Angular', id: 10, topic: 'Angular Interceptors' },
            { course: 'Javascript', id: 10, topic: 'JS Web Workers' },
            { course: 'React', id: 11, topic: 'React Context API' },
            { course: 'Angular', id: 11, topic: 'Angular Forms' },
            { course: 'Javascript', id: 11, topic: 'JS Regular Expressions' },
            { course: 'React', id: 12, topic: 'React Portals' },
            { course: 'Angular', id: 12, topic: 'Angular Routing' },
            { course: 'Javascript', id: 12, topic: 'JS Storage' },
        ]
    }
    render() {
        const { courses, lectures } = this.state;
        return <>
            <div className="p-2">
                <NavBar courses={courses} />
                <Switch>
                    <Route path="/welcome" render={(props) => (<HomePage {...props} courses={courses} />)} />
                    <Route path="/course/:courseName" render={(props) => (<CoursePage {...props} lectures={lectures} />)} />
                    <Route path="/lecture/:courseName/:lecId" render={(props) => (<LecturePage {...props} lectures={lectures} />)} />
                    <Redirect from="/" to="/welcome" />
                </Switch>

            </div>
        </>
    }
}

export default CoursesMainComponent;