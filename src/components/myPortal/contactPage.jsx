import { Component } from "react";

class ContactPage extends Component {
    render() {
        const { contact } = this.props;
        return <>
            <h3>welcome to contact page</h3>
            <div className="m-2">
                <h5>Email</h5>
                <p>{contact.email}</p>
                <h5>Phone</h5>
                <p>{contact.phone}</p>
                <h5>Address</h5>
                <p>{contact.address}</p>
            </div>
        </>
    }
}
export default ContactPage