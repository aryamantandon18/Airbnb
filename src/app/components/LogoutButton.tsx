'use client'

import { useRouter } from "next/router"
import MenuLink from './Navbar/MenuLink'

const LogoutButton = () =>{
    // const router = useRouter();
    const submitLogout = async()=>{
        // router.push('/');
    }
    return(
        <MenuLink 
        label="Log out"
        onClick={submitLogout}
        />
    )
}

export default LogoutButton