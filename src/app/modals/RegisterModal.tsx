import { useState } from "react"
import Modal from "./Modal";
import { useAuth } from "@/context/auth/Auth.context";
import { useUI } from "@/context/ui.context";

const RegisterModal = () => {
    const {user,setUser} = useAuth();
    const {isOpenSignup,openSignupModal,closeSignupModal} = useUI();
    
    const onOpen = () =>{
        openSignupModal();
    }
    const onClose = () =>{
        closeSignupModal();
    }

    const handleSubmit=()=>{

    }

  return (
    <Modal
    disabled={isLoading}
    isOpen={isOpenSignup}
    title="Sign Up"
    actionLabel="Continue"
    onClose={onClose}
    onSubmit={handleSubmit}
    />
  )
}

export default RegisterModal