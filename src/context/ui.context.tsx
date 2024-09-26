import { createContext, ReactNode, useContext, useMemo, useReducer } from "react";
import { AuthProvider } from "./auth/Auth.context";


export interface State{
    isAuthenticated:boolean;
    isOpenSignup:boolean;
    isOpenLogin:boolean;
}

const initialState:State={
    isAuthenticated:false,
    isOpenSignup:false,
    isOpenLogin:false,
}
type Action = 
| {type:"SET_AUTHENTICATED"} 
| {type:"SET_UNAUTHENTICATED"}
| {type:"OPEN_SIGNUP_MODAL"}
| {type:"CLOSE_SIGNUP_MODAL"}
| {type:"OPEN_LOGIN_MODAL"}
| {type:"CLOSE_LOGIN_MODAL"};

export const UIContext = createContext<State|any>(initialState);

const uiReducer = (state:State,action:Action) =>{
    switch(action.type){
        case "SET_AUTHENTICATED":{
            return{
                ...state,isAuthenticated:true
            };
        }
        case "SET_UNAUTHENTICATED":{
            return{
                ...state,isAuthenticated:false
            }
        }
        case "OPEN_SIGNUP_MODAL":{
            return{
                ...state,isOpenSignup:true
            };
        }
        case "CLOSE_SIGNUP_MODAL":{
            return{
                ...state,isOpenSignup:false
            }
        }
        case "OPEN_LOGIN_MODAL":{
            return{
                ...state,isOpenLogin:true
            };
        }
        case "CLOSE_LOGIN_MODAL":{
            return{
                ...state,isOpenLogin:false
            }
        }
    }
}

export const UIProvider:React.FC<{children:ReactNode}> = ({children}) =>{
 const [state,dispatch] = useReducer(uiReducer,initialState);

 const authorize = () => dispatch({type:"SET_AUTHENTICATED"});
 const unAuthorize = () => dispatch({type:"SET_UNAUTHENTICATED"});
 const openSignupModal = () => dispatch({type:"OPEN_SIGNUP_MODAL"});
 const closeSignupModal = () => dispatch({type:"CLOSE_SIGNUP_MODAL"});
 const openLoginModal = () => dispatch({type:"OPEN_LOGIN_MODAL"});
 const closeLoginModal = () => dispatch({type:"CLOSE_LOGIN_MODAL"});

 const value = useMemo(()=>({
    ...state,
    authorize,
    unAuthorize,
    openSignupModal,
    closeSignupModal,
    openLoginModal,
    closeLoginModal
 }),[state]);

 return(
    <UIContext.Provider value={value}>
        {children}
    </UIContext.Provider>
 )
}
export const useUI = () =>{
    const context = useContext(UIContext);
    if(context===undefined){
        throw new Error(`useUI must be used within a UIProvider`);
    }
    return context;
}

export const ManagedUIContext:React.FC<{children:ReactNode}> = ({children})=>{
    return (
        <AuthProvider>
          <UIProvider>{children}</UIProvider>
        </AuthProvider>
      );
}