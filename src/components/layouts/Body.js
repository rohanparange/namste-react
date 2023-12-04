import RestaurantCard from "../RestaurantCard";
import { RESTRO_DATA } from "../../utils/constants";
import { useState } from "react";

const Body = ()=>{

    const [restroData,setRestroData] = useState(RESTRO_DATA);

    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <button 
                className="filter_btn"
                onClick={()=>{
                    const filterData = restroData.filter(data=>{
                        return data.info.avgRating>4.5
                    })
                    setRestroData(filterData)
                }}>
                    Filter Data
            </button>
            <div className="res-container">

                {
                    restroData.map((data)=>(
                        <RestaurantCard key={data.info.id} data={data}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;