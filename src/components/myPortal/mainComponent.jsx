import { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./navBar";
import HomePage from "./homePage";
import ProductsPage from "./productsPage";
import ContactPage from "./contactPage";
import Product from "./product";
import AddProduct from "./addProduct";

class MainComponent extends Component {
    state = {
        products: [
            {
                id: 1, brand: "Pepsi", category: "Bevarages", product: "Pepsi 300ml", price: "20"
            },
            {
                id: 2, brand: "Pepsi", category: "Bevarages", product: "Pepsi 500ml", price: "30", inStock: true
            },
            {
                id: 3, brand: "Pepsi", category: "Bevarages", product: "Pepsi 1l", price: "50"
            },
            {
                id: 4, brand: "Kurkure", category: "Snacks", product: "Kurkure 20g", price: "10"
            },
            {
                id: 5, brand: "Kurkure", category: "Snacks", product: "Kurkure 50g", price: "20", inStock: true
            },
            {
                id: 6, brand: "Kurkure", category: "Snacks", product: "Kurkure 100g", price: "30"
            },
            {
                id: 7, brand: "Kurkure", category: "Snacks", product: "Kurkure 200g", price: "50"
            },
            {
                id: 8, brand: "Kurkure", category: "Snacks", product: "Kurkure 500g", price: "100", inStock: true
            },
            {
                id: 9, brand: "Lays", category: "Snacks", product: "Lays 20g", price: "10"
            },
            {
                id: 10, brand: "Lays", category: "Snacks", product: "Lays 50g", price: "20"
            },
            {
                id: 11, brand: "Lays", category: "Snacks", product: "Lays 100g", price: "30"
            },
            {
                id: 12, brand: "Lays", category: "Snacks", product: "Lays 200g", price: "50"
            },
            {
                id: 13, brand: "Lays", category: "Snacks", product: "Lays 500g", price: "100"
            }
        ],
        contact: {
            email: "dev@myportal.com",
            phone: "9876543210",
            address: "123, Main Street, New Delhi - 110001"
        }
    }
    handleNewProduct = (prod) => {
        let { products } = this.state;
        let maxId = products.length > 0 ? products.reduce((acc, curr) => (acc.id > curr.id ? acc : curr), {}) : { id: 0 };
        prod.id = maxId.id + 1;
        this.setState({ products: [...products, prod] });
    }
    render() {
        const { products, contact } = this.state;
        return <>
            <div className="container">
                <NavBar />
                <Switch>
                    <Route path="/product/:productID" render={(props) => (<Product {...props} products={products} />)} />
                    <Route path="/brand/:value" render={(props) => (<ProductsPage {...props} products={products} display="brand" />)} />
                    <Route path="/category/:value" render={(props) => (<ProductsPage {...props} products={products} display="category" />)} />
                    <Route path="/home" component={HomePage} />
                    <Route path="/products" render={(props) => <ProductsPage {...props} products={products} />} />
                    <Route path="/newProduct" render={(props) => <AddProduct {...props} productInfo={{}} onSubmit={this.handleNewProduct} />} />
                    <Route path="/contact" render={(props) => <ContactPage {...props} contact={contact} />} />
                    <Redirect from='/' to='/home' />
                </Switch>
            </div>
        </>
    }
}
export default MainComponent