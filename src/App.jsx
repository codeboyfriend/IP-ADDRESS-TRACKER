import Header from "./components/Header";
import Board from "./components/Board";
import Map from "./components/Map";
import { useEffect, useState } from "react";

function App() {
  const [address, setAddress] = useState(null);
  const [ipAddress, setIpAddress] = useState("");

  const fetchData = () => {
    try {
      const getData = async () => {
        const getInitialData = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_ns6JztMHXCUkpwqabV9lyXmVVuRFm&ipAddress=${ipAddress}`)
        const data = await getInitialData.json()
        setAddress(data)
      }

      getData();
    } catch (error) {
      console.trace(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return address ? (
    <div className="App">
      <Header 
        ipAddress = {ipAddress}
        setIpAddress = {setIpAddress}
        fetchData={fetchData}
      />
      <Board
        address={address}
      />
      <Map
        address={address}
      />
    </div>
  ) : (
    <div className="loading h-[100vh] flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-2">IP ADDRESS TRACKER</h2>
      <p>Please wait 
        <span className="loadOne">.</span>
        <span className="loadTwo">.</span>
        <span className="loadThree">.</span>
      </p>
    </div>
  )
}

export default App
