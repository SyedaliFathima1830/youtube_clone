import { useEffect, useState } from "react"
import { YOUTUBE_URL } from "../utils/constants";
import { VideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = ()=>{
const [videos,setVideos]=useState([])
    useEffect(()=>{
        getVideos();
    },[])

    const getVideos = async ()=>{
        const data = await fetch(YOUTUBE_URL);
        const json = await data.json();
        setVideos(json.items)

    }
    return (
        <div className="flex flex-wrap m-3">
            {

                videos.map((video,index)=>(
                
       <Link to ={"/watch?v="+video.id}>    
<VideoCard key={video.id || index} info ={video}/> </Link>    
                ))
              
            }
         
        </div>
    )
}
export default VideoContainer