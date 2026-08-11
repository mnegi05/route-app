#
Create  an application which display links to Home, Contact and Products and renders details depending on given URL 
 - /home -> renders Home
 - /contact -> renders Contact
 - /products -> renders Products
 - / -> Redirect it to /home

##
In the earlier app, in the state have information for Contact and Products and pass it as customer prop in the route.

###
Create a component Product to show details of a product.
Define Route to show the route to the product using route parameter in the URL   /products/:productID
Also, in the product page make the ID of each product clickable and navigate it to / product/:productID

###
A product has the fields category and brand. Make the brand and category clickable in the Products and Product component which navigates to URLs /brand/:brandName and /category/:categoryName
use the Products page to display the details
