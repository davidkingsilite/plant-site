import React, { createContext, useState } from "react";

const AuthContent = createContext({});

export  const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContent.Provider value={{ auth, setAuth}}>
            {children}
        </AuthContent.Provider>
        
    )
}

export default AuthContent;
