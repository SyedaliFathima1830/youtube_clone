import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { SINGLEVIDEO_DETAIL } from "../utils/constants";
import { SuggestedList } from "./SuggestedList";
import { formatDistanceToNow, parseISO } from 'date-fns';
import CommentContainer from "./CommentsContainer";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [showLess,setShowLess] = useState(false)
  const videoId = searchParams.get("v");

  useEffect(() => {
    fetchVideoDetail();
    dispatch(closeMenu());
  }, []);

  const fetchVideoDetail = async () => {
    const request = await fetch(SINGLEVIDEO_DETAIL(videoId));
    const response = await request.json();
    setVideoDetail(response.items[0]);
  };
  if (!videoDetail) return <div>Loading...</div>;
  const { snippet, statistics } = videoDetail;
  const { channelTitle, description, publishedAt, thumbnails, title } = snippet;
  const { commentCount, likeCount } = statistics;
   const isoDate = publishedAt;
   const timeAgo = formatDistanceToNow(parseISO(isoDate), { addSuffix: true })

  return (
    <div className="px-5 grid grid-flow-col">
      <div className="col-span-11">
        <div></div>
        <iframe
          width="800"
          height="600"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="font-bold text-2xl w-200">{title}</div>
        <div className="flex w-full justify-between">
          <div className="flex">
            <img
              className="h-15 w-15 rounded-full mx-2"
              src={thumbnails.medium.url}
              alt=""
            />
            <div>
              <div className="font-bold text-lg">{channelTitle}</div>
              <div className="text-gray-500">{likeCount} subscribers</div>
            </div>
            <button className="border border-l-black bg-black text-white rounded-3xl h-10 px-3 mx-3">
              Subscribe
            </button>
          </div>

          <div className="p-4 flex ">
            <div className="bg-gray-300 p-2 rounded-2xl mx-2 ">
              👍 {likeCount}
            </div>
            <div className="bg-gray-300 px-6 py-2 rounded-2xl mx-2">👎</div>
            <div className="bg-gray-300 px-4 py-2 rounded-2xl mx-2">
              {" "}
              ⌲ Share
            </div>
            <div className="bg-gray-300 px-3 py-1 rounded-2xl mx-2"> ...</div>
          </div>
        </div>
        <div className="font-bold ">
          {commentCount}  views - {timeAgo}
          <div className={`font-light  w-200 ${!showLess ? "truncate w-200" : ''}`}>{description}</div>
          { !showLess &&
           <div onClick={()=>setShowLess(true)}> more </div>
          }
          { showLess &&
           <div onClick={()=>setShowLess(false)}> show less </div>
          }
        </div>
        <CommentContainer/>
      </div>

      <div className="col-span-1">
        <SuggestedList videoId={videoId} />
      </div>
    </div>
  );
};
export default WatchPage;
