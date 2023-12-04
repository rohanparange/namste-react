import { CDN_URL } from "../utils/constants";
const RestaurantCard =({data})=>{
    const cuisines = data.info.cuisines.join(", ");
    return (
        <div className="resCard">
            <img
                className="res-logo"
                alt ="res-logo"
                src={CDN_URL+data.info.cloudinaryImageId}
            />
            <div className="restroName">{data.info.name}</div>
            <div className="cuisines">{cuisines.length > 25 ? cuisines.substring(0,25)+'...':cuisines}</div>
            <div>{data.info.avgRating} Stars</div>
            <div>{data.info.sla.deliveryTime} Mins</div>
        </div>
    )
}

export default RestaurantCard;