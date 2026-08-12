import { Component } from "react";
import { Link } from "react-router-dom";

class Laptop extends Component {

    render() {
        const { laptops = [] } = this.props;
        const { model } = this.props.match.params;
        let laptop = laptops.find((lt) => lt.model === model);

        return <>
            <div className="container text-center">
                <h4>Model : {laptop.model}</h4>
                <img src={laptop.images[0]} alt={`${laptop.model} image`} />
                <h6>Brand : {laptop.brand}</h6>
                <h6>RAM : {laptop.ram}</h6>
                <h6>Processor : {laptop.processor}</h6>
                <h6>Hark Disk : {laptop.hardDisk}</h6>
                <h6>Rating : {laptop.rating}</h6>
            </div>
        </>
    }

}

export default Laptop;