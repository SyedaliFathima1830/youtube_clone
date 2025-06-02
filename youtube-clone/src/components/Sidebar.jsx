import { AiFillHome, AiOutlineLike } from "react-icons/ai";
import {
  MdOutlineSubscriptions,
  MdOutlineWatchLater,
  MdOutlineExplore,
  MdVideoLibrary,
} from "react-icons/md";
import { FaHistory, FaGamepad } from "react-icons/fa";
import { RiFolderMusicFill, RiPauseFill } from "react-icons/ri";
import { SiYoutubegaming } from "react-icons/si";
import { BiSolidMoviePlay } from "react-icons/bi";
import { CiYoutube, CiSettings, CiFlag1 } from "react-icons/ci";
import { VscFeedback } from "react-icons/vsc";
import { FiHelpCircle } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = () => {
let isMenuOpen = useSelector((store)=>store.appSlice.isMenuOpen)
  if(!isMenuOpen) return null;
  return (
    <div className="w-45 p-3 shadow-lg  ">
      <div className="border-b border-gray-400 my-2 pb-2">
        <div className="flex items-center gap-2 text-black py-2">
        
          <div>
            <AiFillHome />
          </div>
          <div> <Link to= '/'>Home</Link></div>
        </div>
     
        <div className="flex items-center gap-2 text-black py-2">
          <div>
            <MdOutlineExplore />
          </div>
          <div>Explore</div>
        </div>
        <div className="flex items-center gap-2 text-black py-2">
          <div>
            <MdOutlineSubscriptions />
          </div>
          <div>Subscription</div>
        </div>
      </div>

      <div className="border-b border-gray-400 my-2 pb-2">
        <div className="flex items-center gap-2 text-black py-2">
          <div>
            <MdVideoLibrary />
          </div>
          <div>Library</div>
        </div>
        <div className="flex items-center gap-2 text-black py-2">
          <div>
            <FaHistory />
          </div>
          <div>History</div>
        </div>
        <div className="flex items-center gap-2 text-black py-2">
          <div>
            <MdOutlineWatchLater />
          </div>
          <div>Watch Later</div>
        </div>
        <div className="flex items-center gap-2 text-black py-2">
          <div>
            <AiOutlineLike />
          </div>
          <div>Liked Videos</div>
        </div>
      </div>

      <div className="border-b border-gray-400 my-2 pb-2">
        <h1 className="text-black font-bold py-2 ">SUBSCRIPTIONS</h1>
        <div className="flex items-center gap-2 text-black py-2">
          <div>
            <RiFolderMusicFill />
          </div>
          <div>Music</div>
        </div>
        <div className="flex items-center gap-2 text-black py-2">
          <div>
            <MdOutlineWatchLater />
          </div>
          <div>Sports</div>
        </div>
        <div className="flex items-center gap-2 text-black py-2">
          <div>
            <SiYoutubegaming />
          </div>
          <div>Gaming</div>
        </div>
        <div className="flex items-center gap-2 text-black py-2">
          <div>
            <BiSolidMoviePlay />
          </div>
          <div>Movies</div>
        </div>
        <div className="flex items-center gap-2 text-black py-2">
          <div>
            <MdOutlineWatchLater />
          </div>
          <div>Shows</div>
        </div>
      </div>
      <div className="border-b border-gray-400 my-2 pb-2">
        <h1 className="font-bold text-black py-2">More</h1>
        <div className="flex items-center gap-2 text-black py-2">
          <div>
            <CiYoutube />
          </div>
          <div>Youtube Premium</div>
        </div>
        <div className="flex items-center gap-2 text-black py-2">
          <div>
            <RiPauseFill />
          </div>
          <div>Movies & Shows</div>
        </div>
        <div className="flex items-center gap-2 text-black py-2">
          <div>
            <FaGamepad />
          </div>
          <div>Gaming</div>
        </div>
      </div>
      <div className="">
        <div className="flex items-center gap-2 text-black py-2 ">
          <div>
            <CiSettings />
          </div>
          <div>Settings</div>
        </div>
        <div className="flex items-center gap-2 text-black py-2">
          <div>
            <CiFlag1 />
          </div>
          <div>Report History</div>
        </div>{" "}
        <div className="flex items-center gap-2 text-black py-2">
          <div>
            <FiHelpCircle />
          </div>
          <div>Help</div>
        </div>{" "}
        <div className="flex items-center gap-2 text-black py-2">
          <div>
            <VscFeedback />
          </div>
          <div>Send feedback</div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
