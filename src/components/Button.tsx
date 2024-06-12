import { ethers } from "ethers";
import { type AnimationProps, motion } from "framer-motion";
import { useEffect } from "react";
import useAuth from "../context/useAuth";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;

const ConnectWalletButton = () => {
  //  @ts-ignore
  const {connected, setConnected, walletAddress, setWalletAddress}= useAuth();


  useEffect(() => {
    isConnected();
  }, []);

  async function isConnected() {
    // @ts-ignore
    // const accounts = await ethereum.request({ method: 'eth_accounts' });
    // if (accounts.length) {
    //   setConnected(true);
    //   setWalletAddress(accounts[0]);
    //   console.log(`You're connected to: ${accounts[0]}`);
    // } else {
    //   console.log("Metamask is not connected");
    // }
    if(localStorage.getItem("wallet")){
      setConnected(true);
      const address = localStorage.getItem("wallet");
      setWalletAddress(address!);
    }else{
      setConnected(false)
      setWalletAddress('')
    }
  }

  async function connectWallet() {
    if (!connected) {
      // @ts-ignore
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const _walletAddress = await signer.getAddress();
      setConnected(true);
      setWalletAddress(_walletAddress);
      localStorage.setItem("wallet", _walletAddress);
      console.log(`Wallet connected: ${_walletAddress}`);
    } else {
      // Disconnect wallet logic
      setConnected(false);
      setWalletAddress("");
      localStorage.removeItem("wallet");
      console.log("Wallet disconnected");
    }
  }

  return (
    <motion.button
      onClick={connectWallet}
      {...animationProps}
      className="relative rounded-lg px-6 py-2 font-medium backdrop-blur-xl transition-[box-shadow] duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]"
    >
      <span
        className="relative block h-full w-full text-sm uppercase tracking-wide text-[rgb(0,0,0,65%)] dark:font-light dark:text-[rgb(255,255,255,90%)]"
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
        }}
      >
        {connected ? "Disconnect" : "Connect Wallet"}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"
      ></span>
    </motion.button>
  );
};

export default ConnectWalletButton;
