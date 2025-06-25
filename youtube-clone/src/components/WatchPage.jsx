import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { SINGLEVIDEO_DETAIL } from "../utils/constants";
import { SuggestedList } from "./SuggestedList";
import { formatDistanceToNow, parseISO } from 'date-fns';
import CommentContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [showLess, setShowLess] = useState(false);
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

  const timeAgo = formatDistanceToNow(parseISO(publishedAt), { addSuffix: true });

  return (
    <div className="px-5 grid grid-cols-12 w-full">
      <div className="col-span-9 pr-4">
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div className="font-bold text-2xl mt-2">{title}</div>

        <div className="flex w-full justify-between mt-3">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full mx-2"
              src={thumbnails.medium.url}
              alt=""
            />
            <div>
              <div className="font-bold text-lg">{channelTitle}</div>
              <div className="text-gray-500">{likeCount} subscribers</div>
            </div>
            <button className="border border-black bg-black text-white rounded-3xl h-10 px-3 mx-3">
              Subscribe
            </button>
          </div>

          <div className="p-4 flex">
            <div className="bg-gray-300 p-2 rounded-2xl mx-2">👍 {likeCount}</div>
            <div className="bg-gray-300 px-6 py-2 rounded-2xl mx-2">👎</div>
            <div className="bg-gray-300 px-4 py-2 rounded-2xl mx-2">⌲ Share</div>
            <div className="bg-gray-300 px-3 py-1 rounded-2xl mx-2">...</div>
          </div>
        </div>

        <div className="font-bold mt-3">
          {commentCount} views • {timeAgo}
        </div>

        <div className="mt-2">
          <div className={`font-light ${!showLess ? "truncate" : ""}`}>{description}</div>
          <div
            className="text-blue-500 cursor-pointer"
            onClick={() => setShowLess(!showLess)}
          >
            {showLess ? "show less" : "more"}
          </div>
        </div>

        <CommentContainer />
      </div>

      <div className="col-span-3">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
