import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {

    const [currency, setCurrency] = useState("TRY");
    const [symbol, setSymbol] = useState("₺");

    useEffect(() => {
      
    
      return () => {
        if (currency==="USD") setSymbol("₺");
        else if (currency==="TRY") setSymbol("$")
      }
    }, [currency])
    

  return <Crypto.Provider value={{currency,symbol, setCurrency}}>{children}</Crypto.Provider>;
};

export default CryptoContext;

export const CryptoState=() =>{
   return useContext(Crypto)
}