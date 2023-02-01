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




   
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {   
    e.preventDefault();
    try {
      const response =  await axios.post('https://dummyjson.com/auth/login', {
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
  return (
    <form onSubmit={handleSubmit}> 

<div>
        <input
          type="text"
          placeholder="Fullname"
          value={fullname}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>


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
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
};     

export default Register;

