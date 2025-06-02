import { useEffect, useState } from "react"
import { WATCHLISTVIDEOS } from "../utils/constants";
import { SuggestedCard } from "./suggestedCard";
export const SuggestedList = ({videoId})=>{
const [suggestedVideos, setSuggestedVideos] = useState([]);
    useEffect(()=>{
        fetchSuggestedVideos();
    },[])

    const fetchSuggestedVideos =async()=>{
        const request = await fetch(WATCHLISTVIDEOS(videoId));
        const response = await request.json();
        setSuggestedVideos(response.items);
        
    }
    console.log("response for list",suggestedVideos);

if(!suggestedVideos.length) return   <div>loading</div>;

    return(
        <div>
            {
                suggestedVideos.map((item)=>(
                    <SuggestedCard key={item.id} items={item}/>
                ))
            }
            
        </div>
    )
}