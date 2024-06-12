
import { useState } from "react";
import "./App.css";
import { AuthProvider } from "./context/authContext";
// @ts-ignore
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const [connected, setConnected] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string>("");


  return (
    <div className="relative  w-full">
      <AuthProvider value={{ connected, setConnected, walletAddress, setWalletAddress }}>
        <BrowserRouter>
          <Header />
          {/* <RemainingTime/> */}
          <Home/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;



