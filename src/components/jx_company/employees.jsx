import { Component } from "react";

class Employees extends Component {

    render() {
        const { employees } = this.props;
        return <>
            <div className="container mt-3">
                <h2>List of Employees</h2>
                <div className="row bg-light">
                    {employees.map((employee) => (
                        <>
                            <div className="col-3 border p-1">{employee.id}</div>
                            <div className="col-3 border p-1">{employee.name}</div>
                            <div className="col-3 border p-1">{employee.dept}</div>
                            <div className="col-3 border p-1">{employee.designation}</div>
                        </>
                    ))}
                </div>
            </div>
        </>
    }
}
export default Employees;