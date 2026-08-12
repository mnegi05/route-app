import { Component } from "react";
import { Link } from "react-router-dom";
const SIZE = 3;
class Laptops extends Component {

    render() {
        const { laptops = [] } = this.props;
        const { category, value, page = 1 } = this.props.match.params;
        let filterLaptops = !category ? laptops : laptops.filter(l1 => l1[category] === value);
        const startIndex = (+page - 1) * SIZE;
        const endIndex = filterLaptops.length > startIndex + SIZE - 1 ? startIndex + SIZE - 1 : filterLaptops.length - 1;
        const filterLaptopsPage = filterLaptops.slice(startIndex, endIndex + 1);
        return <>
            <div className="container">
                <h3>Showing {startIndex + 1} to {endIndex + 1} of {filterLaptops.length}</h3>
                <h3>Filter : {!category ? "None" : `${category}=${value}`}</h3>

                <div className="row">
                    {filterLaptopsPage.map((laptop, index) => (<>
                        <div className="col-4 border bg-light">
                            Model : <Link to={`/laptop/${laptop.model}`}> {laptop.model}</Link> <br />
                            Brand : <Link to={`/brand/${laptop.brand}/1`}> {laptop.brand}</Link> <br />
                            Ram : <Link to={`/ram/${laptop.ram}/1`}> {laptop.ram}</Link> <br />
                            Processor : <Link to={`/processor/${laptop.processor}/1`}> {laptop.processor}</Link> <br />
                            Hard Disk : <Link to={`/hardDisk/${laptop.hardDisk}/1`}> {laptop.hardDisk}</Link> <br />
                            Rating : <Link to={`/rating/${laptop.rating}/1`}> {laptop.rating}</Link> <br />
                        </div>
                    </>))}
                </div>
                <div className="row p-2 mt-4 ">
                    <div className="col-2">{startIndex > 0 ? <Link to={`/${category && value ? `${category}/${value}` : "all"}/${+page - 1}`}><button className="btn btn-warning">Previous</button></Link> : ''}</div>
                    <div className="col-8"></div>
                    <div className="col-2">{endIndex < filterLaptops.length - 1 ? <Link to={`/${category && value ? `${category}/${value}` : "all"}/${+page + 1}`}><button className="btn btn-warning">Next</button></Link> : ''}</div>
                </div>
            </div>
        </>
    }

}

export default Laptops;