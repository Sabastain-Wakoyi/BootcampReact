// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button'
// import axios from 'axios'

// function Login() {

//     const [user, setUser] = useState({
//         username: '',
//         password: ''
//     })

//     const handleForm = (name, value) => {
//         setUser({
//             ...user,
//             [name]: value
//         })
//     }

//     const handleSubmit = async e => {
//         e.preventDefault()

//         var data = JSON.stringify({
//             "username": user.username,
//             "password": user.password
//           });
          
//           var config = {
//             method: 'post',
//             url: 'https://dummyjson.com/auth/login',
//             headers: { 
//               'Content-Type': 'application/json'
//             },
//             data : data
//           };
          
//           axios(config)
//           .then(function (response) {
//             console.log(JSON.stringify(response.data));
//           })
//           .catch(function (error) {
//             console.log(error);
//           });
    
// }

// return (
//     <div>
//       <input type={text} value="username"></input>
//       <input type={text} value="password"></input>
//                 <Button  type="submit" onClick={handleSubmit}>
//                     Submit
//                 </Button>
//             </div>
       
// )
// }

// export default Login



import React from "react";
import axios from "axios";

// Write down a simple html page that contains a form and
// form should have 2 text fields to accept
// user name and password and a submit button
// and password should be 8 character atleast

export default function Abo  {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",

      usernameError: "",
      passwordError: ""
    };
  }

  handleOnChange = e => {
    this.setState({
      //[e.target.name]  computed property names es6 new feature
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let firstnameError = this.state.firstnameError;
    let lastnameError = this.state.lastnameError;
    let emailError = this.state.emailError;

    if (!this.state.username) {
      firstnameError = "first name can not be blank";
    } else {
      firstnameError = "";
    }

    if (!this.state.password) {
      lastnameError = "last name can not be blank";
    } else if (this.state.password.length < 8) {
      lastnameError = "password must be at least 8 characters";
    } else {
      lastnameError = "";
    }

    this.setState({
      usernameError: firstnameError,
      passwordError: lastnameError
    });

    if (firstnameError || lastnameError || emailError) {
      return false;
    }
    return true;
  };

  handleSubmit = e => {
    e.preventDefault(); // avoid page refresh
    let isValid = this.validate();
    //console.log(isValid);

    if (isValid) {
      //console.log(this.state)
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then(response => {
          console.log(response);
          alert("submitted");
        })
        .catch(error => {
          console.log(error);
        });

      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        firstnameError: "",
        lastnameError: "",
        emailError: ""
      });
    }
  };

  render() {
    return (
      <>
        {/* when form is submitted, handleSubmit will be executed */}
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              name="username"
              placeholder="username"
              value={this.state.firstName}
              onChange={this.handleOnChange}
            />
            <div>{this.state.usernameError}</div>
          </div>

          <div>
            <input
              name="password"
              placeholder="password"
              value={this.state.lastName}
              onChange={this.handleOnChange}
            />
            <div>{this.state.passwordError}</div>
          </div>
          <button type="submit">submit</button>
          {/* <input type = "submit"/> */}
        </form>
      </>
    );
  }
}

