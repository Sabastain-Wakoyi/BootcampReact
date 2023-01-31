import axios from 'axios'
import React from 'react'

// const baseUrl = "https://jsonplaceholder.typicode.com/users"
const baseUrl = "https://dummyjson.com/users"

export default function Api() {
    const [get, setGet] = React.useState(null);
  
    React.useEffect(() => {
      axios.get(baseUrl).then((response) => {
        setGet(response.data);
      });
    }, []);
  
    if (!get) return null;
  
    return (
      <div>
        {/* <h1>{get[0].email}</h1>
        <p>{get[0].name}</p>
        <h3>{[0].password}</h3> */}

        <h1>{get.users[0].email}</h1>
        <p>{get.users[0].name}</p>
        <h3>{get.users[0].password}</h3>
      </div>
    );
  }

