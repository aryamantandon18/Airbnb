import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";

const PropertiesList = () =>{
    const [properties,setProperties] = useState();

    useEffect(()=>{
        
    })
    return (
        <div>
            <PropertyCard/>
        </div>
    )
}

export default PropertiesList;