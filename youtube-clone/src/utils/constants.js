const API_KEY = "AIzaSyBC1b7_TXymYnE-vHq3XZgxpFWup4oXeUM";
export const YOUTUBE_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY;

export const SINGLEVIDEO_DETAIL= (videoId)=>`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`

export const WATCHLISTVIDEOS =(videoId)=> `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoId=${videoId}&key=${API_KEY}`
export const SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const PROXY_URL="https://thingproxy.freeboard.io/fetch/";