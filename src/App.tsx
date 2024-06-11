
import { useEffect, useState } from "react";
import "./App.css";
import ConnectWalletButton from "./components/Button";

function App() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("")
  useEffect(()=>{
    async function isConnected() {
      // @ts-ignore
      const accounts = await ethereum.request({method: 'eth_accounts'});       
      if (accounts.length) {
        setConnected(true)
        setAddress(accounts[0])
         console.log(`You're connected to: ${accounts[0]}`);
      } else {
         console.log("Metamask is not connected");
      }
   }
   isConnected();
  }, [])
  return (
    <>
     {connected? <span>connected {address}</span> : <ConnectWalletButton/>
}
   </>
  );
}

export default App;