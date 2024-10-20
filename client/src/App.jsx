import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setArray(response.data.fruits);
    console.log(response.data.fruits);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <div className="text-white">
        {array.map((fruit, i) => (
          <div key={i}>
            <p>{fruit}</p>
            <br />
          </div>
        ))}
      </div>
      
    </>
  );
}

export default App;
