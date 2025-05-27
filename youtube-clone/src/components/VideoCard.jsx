export const VideoCard =({info})=>{
    console.log("info",info);
    

    const {snippet,statistics} = info;
    const {title,thumbnails,channelTitle}=snippet
return(
    <div className="w-72 shadow  m-2">
        <img className="rounded-lg" src={thumbnails.medium.url} alt="vdo" />
        <ul className="p-4">
            <li className="font-bold">{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>


        </ul>
    </div>
)
}
