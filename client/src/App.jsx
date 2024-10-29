import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./components/Form";

function App() {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setArray(response.data.currencies);
    console.log(response.data.currencies);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <div className="text-white">
        {array.map((currency, i) => (
          <div key={i}>
            <p>{currency}</p>
            <br />
          </div>
        ))}
      </div>
      <Form />
    </>
  );
}

export default App;
