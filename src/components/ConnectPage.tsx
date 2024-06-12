import { useEffect, useState } from "react";
import ConnectWalletButton from "./Button";
import useAuth from "../context/useAuth";

const ConnectPage = () => {
    const {connected, setConnected, walletAddress, setWalletAddress}= useAuth();
    const [addDiv, setAddDiv] = useState<boolean>(false)

    console.log(connected);
    
    useEffect(()=>{
      
    //  @ts-ignore
     if (window.ethereum) {
      // @ts-ignore
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      console.log("changed");
      
    }
  
    return() => {
      // @ts-ignore
      if (window.ethereum) {
        // @ts-ignore
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    }
    })
    function handleAccountsChanged(accounts: string | any[]) {
      if (accounts.length > 0 && walletAddress !== accounts[0]) {
        setWalletAddress(accounts[0]);
      } else {
        setConnected(false);
        setWalletAddress("");
      }
    }
  return (
    <div className="flex justify-center items-center">
     {
     connected && 
        <div>
        <div className="h-10 w-10 rounded-full cursor-pointer" onMouseOver={() => setAddDiv(true)}  onMouseOut={() => setAddDiv(false)}>
        <img src="https://github.com/shadcn.png" alt="img" className="rounded-full"/>
        </div>
        {
            addDiv && <span className="absolute px-2 py-4 right-4 bg-slate-800 text-white  rounded-xl">Wallet Address {walletAddress}</span>
        }
        </div>
    }  <ConnectWalletButton/>
    </div>
  )
}

export default ConnectPage
