import RestaurantCard from "../RestaurantCard";
import { RESTRO_DATA } from "../../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = ()=>{

    const [restroData,setRestroData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredData,setFilteredData] = useState([]);
    
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        try {
            const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0177989&lng=72.84781199999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const jsonData = await data.json();
            const restroData = jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            // console.log(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            // console.log(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restruants)
            setRestroData(RESTRO_DATA) ;
            setFilteredData(RESTRO_DATA)
            // setRestroData(restroData) ;
        } catch (error) {
            console.log(error)
        }
    }

    return filteredData.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="sub-header">
            <div className="search">
                <input type="text" className="" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                }}/>
            </div>
            <button className="filter_btn"
            onClick={()=>{
                const searchedRestro =  restroData.filter(data=>{
                    return data.info.name.toLowerCase().includes(searchText.toLowerCase())
                })

                setFilteredData(searchedRestro)
            }}>Search</button>
            <button 
                className="filter_btn"
                onClick={()=>{
                    const filterData = restroData.filter(data=>{
                        return data.info.avgRating>4.5
                    })
                    setFilteredData(filterData)
                }}>
                    Filter Data
            </button>
            </div>
            
            <div className="res-container">

                {
                    filteredData.map((data)=>(
                        <RestaurantCard key={data.info.id} data={data}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;