import React, { Component } from "react";

import userAPI from "../utils/userAPI";
import {  Redirect, Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

const formstyle= {
  margin: "auto",
  width: "50%",
  boxShadow: "0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02)",
  }

class Signup extends Component {
  state = {
    email: "1@1",
    username: "one",
    password: "1",
    passwordConf: "1"
  };

  componentDidMount() {
  }
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    console.log("handleformsubmit");
    event.preventDefault();
    if (this.state.email && this.state.password) {
      console.log(this.state)
      userAPI.signup({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        passwordConf: this.state.passwordConf,

      })
        .then(res => {
          console.log("handlesubmit.then");
          if(res.status === 200 ){
            this.props.authenticate();
            return <Redirect to="/explore" />
          }
        })
        .catch(err => {
          console.log(".catch");
          console.log(err.response.data)}
          );
        
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="12">
 
            <form style={formstyle}>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="username (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="email (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="(required)"
                type="password"
              />
              <Input
                value={this.state.passwordConf}
                onChange={this.handleInputChange}
                name="passwordConf"
                placeholder="(required)"
                type="password"
              />
              
              <FormBtn
                // disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                signup
              </FormBtn>
              <Link to="/">
               <FormBtn> Login </FormBtn>
             </Link>
            </form>
          </Col>
          
        </Row>
        {/* redirect on authenticated */}
        {this.props.authenticated ? <Redirect to='/explore'/>: <div></div>}


      </Container>
    );
  }
}

export default Signup;