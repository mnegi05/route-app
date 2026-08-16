import { Component } from "react";

class ShowOptions extends Component {
    handleChange = (e) => {
        const { currentTarget: input } = e;
        let options = { ...this.props.options };
        if (!input.value) delete options[input.name];
        else options[input.name] = input.value;
        this.props.onOptionChange(options);
    }
    render() {

        let { minPrice = "", maxPrice = "", inStock = "" } = this.props.options;
        console.log("")
        const price = [0, 10, 20, 30, 40, 50, 60, 80, 100];
        const stocks = [
            { display: 'In Stock', value: 'yes' },
            { display: 'Out of Stock', value: 'no' },
        ]
        return <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="form-group">
                            <label>Min Price</label>
                            <select className="form-control" name="minPrice" value={minPrice} onChange={this.handleChange}>
                                <option value="">Select Min Price</option>
                                {price.map(p => <option key={p} value={p}>{p}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label>Max Price</label>
                            <select className="form-control" name="maxPrice" value={maxPrice} onChange={this.handleChange}>
                                <option value="">Select Max Price</option>
                                {price.map(p => <option key={p} value={p}>{p}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label>In Stock</label>
                            <select className="form-control" name="inStock" value={inStock} onChange={this.handleChange}>
                                <option value="">Select In Stock</option>
                                {stocks.map(s => <option key={s.value} value={s.value}>{s.display}</option>)}
                            </select>
                        </div>
                    </div>

                </div>
            </div>

        </>
    }
}
export default ShowOptions;