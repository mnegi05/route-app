import { Component } from "react";

class AddProduct extends Component {
    state = {
        productInfo: this.props.productInfo,
    }

    handleChange = (e) => {
        const { currentTarget: input } = e;
        let s1 = { ...this.state };
        input.name === 'inStock' ? s1.productInfo[input.name] = input.checked : s1.productInfo[input.name] = input.value;
        this.setState(s1);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.productInfo);
        this.props.history.push('/products');
    }
    render() {
        const { productInfo } = this.state;
        let { id, brand, category, product, price, inStock } = productInfo;
        return <>
            <div className="container">
                <h3>Add Product</h3>
                <form onSubmit={this.handleSubmit}>
                    {/* <div className="form-group">
                        <label>Product Id</label>
                        <input type="text" className="form-control" name="id" value={id} onChange={this.handleChange} />
                    </div> */}
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" className="form-control" name="product" value={product} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Brand</label>
                        <input type="text" className="form-control" name="brand" value={brand} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <input type="text" className="form-control" name="category" value={category} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="text" className="form-control" name="price" value={price} onChange={this.handleChange} />
                    </div>
                    <div className="form-group my-2">
                        <label className="me-2">In Stock</label>
                        <input type="checkbox" name="inStock" value={inStock} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Product</button>
                </form>
            </div>
        </>
    }
}
export default AddProduct;