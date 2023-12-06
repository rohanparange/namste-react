import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import {RestroDataLink} from "../../utils/constants"
import Shimmer2 from "../layouts/Shimmer2";

const RestroMenu = ()=>{

    const {resId} = useParams()
    const [restroDetail, setRestroDetail] = useState(null)

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData= async()=>{
        const rawData = await fetch(RestroDataLink+resId) 
        const data = await rawData.json();
        setRestroDetail(data)
    }

    if(restroDetail === null){
        return (
            <Shimmer2/>
        )
    }

    const { name, avgRating, cuisines, cloudinaryImageId,costForTwoMessage,locality,areaName} = restroDetail?.data?.cards[0]?.card?.card?.info;
    const {itemCards} = restroDetail?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(restroDetail?.data?.cards[0]?.card?.card?.info)

    return (
        <div className="menu">
            <div className="menu-header">
                <h2>{name}</h2>
                <div>{locality +", "+ areaName}</div>
                <div>{cuisines.join(", ")}</div>
                <div>{costForTwoMessage}</div>
                <h3>Recommended Menu ({itemCards.length ?? 0})</h3>

            </div>
            

            <div className="menu-cards">
                <ul className="menu-column">
                    {
                        itemCards.map((data)=>{
                            return (
                                <li className="menu-row" key={data?.card?.info?.id} >
                                    <div className="menu-detail">
                                        <div><h3>{data?.card?.info?.name}</h3> Rs {data?.card?.info?.price/100 ?? data?.card?.info?.defaultPrice/100}</div>
                                        <div>{data?.card?.info?.description}</div>
                                    </div>
                                    <hr/>
                                    <div className="menu-img">
                                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+data?.card?.info?.imageId}/>
                                    </div>

                                </li>
                                )
                        })
                    }
                </ul>
            </div>
            
        </div>
    )
}

export default RestroMenu;