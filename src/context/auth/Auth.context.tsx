import React, { createContext, useState,useMemo,ReactNode, useContext } from "react";

interface AuthContextType{
    user: string | null;
    setUser: ()=>void;
    isLoggedIn:boolean;
    btnLoading:boolean;
    setIsLoggedIn: ()=>void;
    setbtnLoading: ()=>void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// create a provideer component
export const AuthProvider:React.FC<{children:ReactNode}> =({children})=>{
    const [user,setUser] = useState<string | null>(null);
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [btnLoading,setbtnLoading] = useState(false);

    const value = useMemo(() =>({
            user,setUser,
            isLoggedIn,setIsLoggedIn,
            btnLoading,setbtnLoading
        }),[user,isLoggedIn,btnLoading]);
    return(
        <AuthContext.Provider value={value}>    
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(context===undefined){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}