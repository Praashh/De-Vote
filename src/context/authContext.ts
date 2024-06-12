import { createContext } from "react";

interface AuthContextType{
    connected:boolean;
    walletAddress: string
    setConnected: (status : boolean) => void;
    setWalletAddress: (status: string) => void;
}


export const AuthContext = createContext<AuthContextType>({
    connected: false,
    walletAddress:"",
    setConnected: () => {},
    setWalletAddress: () => {}
})


export const AuthProvider = AuthContext.Provider;



