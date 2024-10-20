import React, { useEffect, useState } from "react";
import axios from "axios";
import MallList from "../components//MallList";

const Home = () => {
  const [malls, setMalls] = useState([]);

  useEffect(() => {
    fetchMalls();
  }, []);
  const fetchMalls = async () => {
    const response = await axios.get("http://127.0.0.1:5000/api/malls");
    const data = response.data.malls;
    setMalls(data);
  };
  console.log(malls)
  return (
    <div className="d-flex justify-content-center">
      <MallList malls={malls} />
    </div>
  );
};

export default Home;
