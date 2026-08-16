import { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import ShowOptions from "./showOptions";
class ProductsPage extends Component {
    handleBrandClick = (b1) => {
        this.props.history.push(`/brand/${b1}`)
    }
    handleOptionChange = (options) => {
        console.log("queryString", queryString.stringify(options))
        this.props.history.push(`/products?${queryString.stringify(options)}`)
    }
    render() {
        const { products, display } = this.props;
        const { value } = this.props.match.params;
        let queryParams = queryString.parse(this.props.location.search);
        const { minPrice, maxPrice, inStock } = queryParams;

        let brands = products.reduce((acc, curr) => (acc.includes(curr.brand) ? acc : [...acc, curr.brand]), []);
        let filteredProducts = display ? products.filter(p => p[display] === value) : products;

        filteredProducts = minPrice ? filteredProducts.filter(p => p.price >= +minPrice) : filteredProducts;
        filteredProducts = maxPrice ? filteredProducts.filter(p => p.price <= +maxPrice) : filteredProducts;
        filteredProducts = inStock ? filteredProducts.filter(p => (inStock === 'yes' ? p.inStock : (inStock === 'no' ? !p.inStock : false))) : filteredProducts;

        return <>
            <div className="container">
                <h3>Welcome to Products Page</h3>
                {brands.map(b1 => <>
                    <button className="btn btn-primary me-2" onClick={() => this.handleBrandClick(b1)}>{b1}</button>
                </>)}

                <ShowOptions options={queryParams} onOptionChange={this.handleOptionChange} />
                <div className="mt-2">
                    <div className="row bg-dark text-white text-center p-1">
                        <div className="col-2 border">ID</div>
                        <div className="col-2 border">Brand</div>
                        <div className="col-2 border">Category</div>
                        <div className="col-2 border">Product</div>
                        <div className="col-2 border">Price</div>
                        <div className="col-2 border">InStock</div>
                    </div>
                    {filteredProducts.map(p => (
                        <div className="row text-center" key={p.id}>
                            <div className="col-2 border p-1"><Link style={{ textDecoration: "none" }} to={`/product/${p.id}`}>{p.id}</Link></div>
                            <div className="col-2 border p-1"> <Link style={{ textDecoration: "none" }} to={`/brand/${p.brand}`}>{p.brand}</Link></div>
                            <div className="col-2 border p-1"><Link style={{ textDecoration: "none" }} to={`/category/${p.category}`}>{p.category}</Link></div>
                            <div className="col-2 border p-1">{p.product}</div>
                            <div className="col-2 border p-1">{p.price}</div>
                            <div className="col-2 border p-1">{p.inStock ? "Yes" : "No"}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    }
}
export default ProductsPage