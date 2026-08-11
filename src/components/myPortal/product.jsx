import { Component } from "react";
import { Link } from "react-router-dom";
class Product extends Component {

    render() {
        const { products } = this.props;
        const { productID } = this.props.match.params;
        const product = products.find(p => p.id === parseInt(productID));
        return <>
            <div className="container">
                <h3>Welcome to product details</h3>
                <p>Product ID: {product.id}</p>
                <p>Brand: <Link to={`/brand/${product.brand}`}>{product.brand}</Link></p>
                <p>Category: <Link to={`/category/${product.category}`}>{product.category}</Link></p>
                <p>Product: {product.product}</p>
                <p>Price: {product.price}</p>
            </div>
        </>

    }
}
export default Product;