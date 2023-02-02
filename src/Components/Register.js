   
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavBar } from './Functional/Nav';
import LoadingSpinner from './Spinner';


import Container from "react-bootstrap/Container"
const Register = () => {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
const [        menuItems,    setMenuItems]= useState()
  const [error, setError] = useState('');

  useEffect(() => {
    async function getMenus() {

        try {
            const response = await fetch("http://localhost:8080/uisettings/menus")
            let json = response.json()
            json
                .then(data => {
                    setMenuItems(data)
                    console.log("All Data ", menuItems)
                })

        } catch (error) {

            setMenuItems([
                
                { text: "Home", href: "/" },
                { text: "Contact", href: "/contact" },
                { text: "Abou Us", href: "/about" },
                { text: "Bootcamps", href: "/bootcamps" },
                { text: "Register", href: "/register" },
            ])

        }

    }
    getMenus() // IIF
}, [])


  const handleSubmit = async (e) => {   
    e.preventDefault();
    try {
      const response =  await axios.post('http://localhost:8080/api/v1/user/signup', { 
      "fullname" : fullname, 
      "username" : username,
       "password": password,
       "phone" : phone,

      });
      console.log(response.data);
    } catch (error) {
      setError(error.message);
    }
  };     
  if (!menuItems) return <div> <LoadingSpinner></LoadingSpinner> </div>
  return (

    <>
    
    <NavBar items={menuItems}></NavBar>
    

<Container style={{"margin":"200px"}}>                                                                    
        <input
          type="text"
          placeholder="Fullname"
          value={fullname}
          onChange={(e) => setUsername(e.target.value)}
        />



      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <input
          type="number"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
      {error && <p>{error}</p>}
</Container>
    </>
  );
};     

export default Register;

