import React, { Component } from "react";
import './add.css';
import axios from "axios";

class AddCustomers extends Component {
  
  state = {
    name: "",
    email: " ",
    phone: " "
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  addCustomers = async e => {
    try {
      const newCustomer = await axios.post("http://localhost:9002/customers", {
          name: this.refs.name.value,
          email: this.refs.email.value,
          phone: this.refs.phone.value,
        }
      );
      alert(newCustomer.data.message)
      
    } catch (err) {
      alert(err.message);
    }

  };

  render() {
    return (
      <div className="Customers-Wrapper">
        <h1>Add Customer:</h1>

        <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={this.onChangeHandler}
            ref="name"
            required
            id="name"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            placeholder="Enter email"
            name="email"
            onChange={this.onChangeHandler}
            ref="email"
            required
            id="email"
          />
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            placeholder="Enter phone"
            name="phone"
            onChange={this.onChangeHandler}
            ref="phone"
            required
            id="phone"
          />

          <button onClick={this.addCustomers} >submit</button>
      </div>
    );
  }
}

export default AddCustomers;
