import { useEffect, useState } from "react";
import axios from "axios";
import Child from "../Child/Child";

export default function Master() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios("https://jsonplaceholder.typicode.com/users");
        const data = res.data;
        setUser(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  function handleClick(){

    console.log("Added")
  }
  return (
    <div>
     <Child info={user}  handleClick={handleClick}/>
    </div>
  );
}
