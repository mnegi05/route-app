import { Component } from "react";
import NavBar from "./navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import LaptopsPage from "./laptops";
import LaptopPage from "./laptop";
import laptopData from "./laptopsData.json";
class MainComponent extends Component {

    state = {
        // brands: ['Apple', 'Acer', 'HP', 'Lenova', 'Dell'],
        // categories: ['brand', 'processor', 'ram', 'hardDisk', 'rating'],
        laptops: [
            {
                "model": "AX4581",
                "brand": "Acer",
                "ram": "4GB",
                "hardDisk": "500GB",
                "processor": "i3",
                "rating": "3",
                "images": [
                    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=360&h=240"
                ]
            },
            {
                "model": "HP2501",
                "brand": "HP",
                "ram": "8GB",
                "hardDisk": "512GB SSD",
                "processor": "i5",
                "rating": "4",
                "images": [
                    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=360&h=240"
                ]
            },
            {
                "model": "DL3502",
                "brand": "Dell",
                "ram": "8GB",
                "hardDisk": "512GB SSD",
                "processor": "i5",
                "rating": "4",
                "images": [
                    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=360&h=240"
                ]
            },
            {
                "model": "LN4603",
                "brand": "Lenovo",
                "ram": "16GB",
                "hardDisk": "1TB SSD",
                "processor": "i7",
                "rating": "5",
                "images": [
                    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=360&h=240"
                ]
            },
            {
                "model": "AS5704",
                "brand": "Asus",
                "ram": "16GB",
                "hardDisk": "512GB SSD",
                "processor": "Ryzen 7",
                "rating": "5",
                "images": [
                    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=360&h=240"
                ]
            },
            {
                "model": "AC6805",
                "brand": "Apple",
                "ram": "8GB",
                "hardDisk": "256GB SSD",
                "processor": "M2",
                "rating": "5",
                "images": [
                    "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=360&h=240"
                ]
            },
            {
                "model": "MS7906",
                "brand": "MSI",
                "ram": "16GB",
                "hardDisk": "1TB SSD",
                "processor": "i7",
                "rating": "5",
                "images": [
                    "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=360&h=240"
                ]
            },
            {
                "model": "AC8107",
                "brand": "Acer",
                "ram": "8GB",
                "hardDisk": "512GB SSD",
                "processor": "i5",
                "rating": "4",
                "images": [
                    "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1593642702909-dec73df255d7?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=360&h=240"
                ]
            },
            {
                "model": "HP9208",
                "brand": "HP",
                "ram": "4GB",
                "hardDisk": "500GB",
                "processor": "i3",
                "rating": "3",
                "images": [
                    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=360&h=240"
                ]
            },
            {
                "model": "DL1010",
                "brand": "Dell",
                "ram": "16GB",
                "hardDisk": "1TB SSD",
                "processor": "i7",
                "rating": "5",
                "images": [
                    "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?auto=format&fit=crop&w=360&h=240",
                    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=360&h=240"
                ]
            }
        ],
        laptopsData: laptopData
    }

    render() {
        const { laptopsData } = this.state;
        console.time("start");
        const uniqueBrands = [...new Set(laptopsData.map(lt => lt.brand))];
        console.timeEnd("start");
        return <>
            <div>
                <NavBar brands={uniqueBrands} />
                <Switch>
                    <Route path='/:category/:value/:page' render={(props) => <LaptopsPage {...props} laptops={laptopsData} />} />
                    <Route path='/all/:page' render={(props) => <LaptopsPage {...props} laptops={laptopsData} />} />
                    <Route path='/laptop/:model' render={(props) => <LaptopPage {...props} laptops={laptopsData} />} />
                    <Redirect from="/" to="/all/1" />
                </Switch>
            </div>
        </>
    }

}

export default MainComponent;