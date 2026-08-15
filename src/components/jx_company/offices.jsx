import { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Offices extends Component {

    render() {
        const { offices } = this.props;
        const { name } = this.props.match.params;
        let office = !name ? offices : offices.find((office) => office.city === name);
        return <>
            <div className="container mt-3">
                {
                    !name ? (
                        <>
                            <h2>List of Offices</h2>
                            <div className="row bg-light">
                                {offices.map((office) => (
                                    <>
                                        <div className="col-3 border p-1"><Link to={`/offices/${office.city}`}>{office.city}</Link></div>
                                        <div className="col-9 border p-1">{office.address}</div>
                                    </>
                                ))}
                            </div>
                        </>
                    )
                        :
                        (
                            <>
                                <h2>Welcome to the Office of JX Company in {office.city}</h2>
                                <h4>Address: {office.address}</h4>
                            </>
                        )
                }

            </div>
        </>
    }
}
export default Offices;