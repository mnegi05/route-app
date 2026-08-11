import { Component } from "react";
import { Link } from "react-router-dom";
class ProductsPage extends Component {
    render() {
        const { products, display } = this.props;
        const { value } = this.props.match.params;
        let filteredProducts = display ? products.filter(p => p[display] === value) : products;
        return <>
            <div className="container">
                <h3>welcome to products page</h3>
                <div className="mt-2">
                    <div className="row bg-dark text-white text-center p-1">
                        <div className="col-2 border">ID</div>
                        <div className="col-2 border">Brand</div>
                        <div className="col-2 border">Category</div>
                        <div className="col-3 border">Product</div>
                        <div className="col-3 border">Price</div>
                    </div>
                    {filteredProducts.map(p => (
                        <div className="row text-center" key={p.id}>
                            <div className="col-2 border p-1"><Link to={`/product/${p.id}`}>{p.id}</Link></div>
                            <div className="col-2 border p-1"> <Link to={`/brand/${p.brand}`}>{p.brand}</Link></div>
                            <div className="col-2 border p-1"><Link to={`/category/${p.category}`}>{p.category}</Link></div>
                            <div className="col-3 border p-1">{p.product}</div>
                            <div className="col-3 border p-1">{p.price}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    }
}
export default ProductsPage