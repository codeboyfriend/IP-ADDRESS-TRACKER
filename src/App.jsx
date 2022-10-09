import Header from "./components/Header";
import Board from "./components/Board";
import Map from "./components/Map";
import { useEffect, useState } from "react";

function App() {
  const [address, setAddress] = useState(null);
  const [ipAddress, setIpAddress] = useState();
  const checkIpAddress = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi
  // const checkDomain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[-zA-Z]{2,})+/

  const fetchData = () => {
    try {
      const getData = async () => {
        const getInitialData = await fetch(`https:geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_APP_API_KEY}&${checkIpAddress.test(ipAddress) ? `ipAddress=${ipAddress}` : ""
      }`)
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
